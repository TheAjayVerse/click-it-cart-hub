
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { url } = await req.json();
    if (!url || typeof url !== "string" || !url.startsWith("http")) {
      return new Response(JSON.stringify({ error: "Invalid URL" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const apiKey = Deno.env.get("FIRECRAWL_API_KEY");
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "API key missing" }), { status: 500, headers: corsHeaders });
    }

    // Call Firecrawl API
    const response = await fetch("https://api.firecrawl.dev/v1/scrape", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url,
        includeHtml: false,
        includeScreenshot: false,
        extractStructuredData: true,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      return new Response(JSON.stringify({ error: err }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await response.json();

    // Try extracting product info (simple heuristics)
    const title = data?.structuredData?.name || data?.meta?.title || '';
    const price = data?.structuredData?.offers?.price || '';
    const image = (Array.isArray(data?.structuredData?.image) ? data?.structuredData?.image[0] : data?.structuredData?.image) 
      || data?.meta?.image
      || '';
    const store = data?.meta?.site_name || (new URL(url)).hostname.replace(/^www\./, '');
  
    return new Response(
      JSON.stringify({
        name: title,
        price: price ? (typeof price === "number" ? `$${price}` : price) : "",
        image,
        store,
        product_url: url,
        raw: data,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error('Scraping error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
