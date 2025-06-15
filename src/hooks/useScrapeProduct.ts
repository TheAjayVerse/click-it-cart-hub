
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface ScrapedProduct {
  name: string;
  price: string;
  image: string;
  store: string;
  product_url: string;
  raw?: any;
}

export function useScrapeProduct() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ScrapedProduct | null>(null);
  const [error, setError] = useState<string | null>(null);

  const scrape = async (url: string) => {
    setLoading(true);
    setData(null);
    setError(null);

    const { data: result, error } = await supabase.functions.invoke("scrape-product", {
      body: { url },
    });
    if (error) setError(error.message);
    else if (result?.error) setError(result?.error);
    else setData(result as ScrapedProduct);

    setLoading(false);
  };

  return { data, error, loading, scrape };
}
