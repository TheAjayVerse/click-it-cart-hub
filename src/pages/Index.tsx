import React, { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart, Search, Plus, Upload, Image as ImageIcon } from "lucide-react";
import FileUploader from "@/components/FileUploader";
import LinkInput from "@/components/LinkInput";
import ProductCard, { Product } from "@/components/ProductCard";
import BenefitsRow from "@/components/BenefitsRow";
import LinkImportMagic from "@/components/LinkImportMagic";
import { useScrapeProduct } from "@/hooks/useScrapeProduct";
import ScrapedProductPreview from "@/components/ScrapedProductPreview";
import { supabase } from "@/integrations/supabase/client";
import HeroSection from "@/components/landing/HeroSection";
import AppExplainer from "@/components/landing/AppExplainer";
import UniversalCartSearch from "@/components/landing/UniversalCartSearch";
import LoadingSection from "@/components/landing/LoadingSection";
import ResultsSection from "@/components/landing/ResultsSection";
import HowItWorks from "@/components/landing/HowItWorks";
import FooterCta from "@/components/landing/FooterCta";

const Index = () => {
  // In a real app, this would come from an API call
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  
  // Demo products for when user uploads an image or submits a link
  const demoProducts: Product[] = [
    {
      id: '1',
      name: 'Modern Leather Sneakers',
      price: '$89.99',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      store: 'Nike',
      link: 'https://www.nike.com'
    },
    {
      id: '2',
      name: 'Casual Cotton T-Shirt',
      price: '$29.99',
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      store: 'Zara',
      link: 'https://www.zara.com'
    },
    {
      id: '3',
      name: 'Wireless Bluetooth Headphones',
      price: '$129.99',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      store: 'Amazon',
      link: 'https://www.amazon.com'
    },
  ];

  const [scrapedProduct, setScrapedProduct] = React.useState<any | null>(null);
  const [scrapeLoading, setScrapeLoading] = React.useState(false);
  const [scrapeError, setScrapeError] = React.useState<string | null>(null);
  const { scrape, data: scraped, error: scrapingError, loading: isScraping } = useScrapeProduct();
  const [cartItems, setCartItems] = React.useState<{ product_url: string }[]>([]);

  // Add state for which search tab is active and preview image matches
  const [tab, setTab] = React.useState<"link" | "image">("link");
  const [imageMatches, setImageMatches] = React.useState<Product[]>([]);

  // Load user cart URLs (to block double-add from main page)
  React.useEffect(() => {
    supabase.auth.getUser().then(async ({ data: { user } }) => {
      if (!user) {
        setCartItems([]);
        return;
      }
      const { data } = await supabase.from("cart_items").select("product_url").eq("user_id", user.id);
      setCartItems(data || []);
    });
  }, []);

  // Sync with backend on add
  const refreshCartItems = React.useCallback(async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      setCartItems([]);
      return;
    }
    const { data } = await supabase.from("cart_items").select("product_url").eq("user_id", user.id);
    setCartItems(data || []);
  }, []);

  // When scraping finishes, update state
  React.useEffect(() => {
    if (scrapingError) setScrapeError(scrapingError);
    if (scraped) setScrapedProduct(scraped);
    if (!scrapingError && !scraped) setScrapeError(null);
  }, [scraped, scrapingError]);

  // Modified handleImageUpload to simulate "live" search by image processing for now
  const handleImageUpload = (file: File) => {
    setTab("image");
    setLoading(true);
    setScrapedProduct(null);
    setScrapeError(null);

    // In a real app: send to a "search by image" backend here!
    // For now, simulate results (user can upgrade this when backend is ready)
    setTimeout(() => {
      setImageMatches([
        {
          id: '1img',
          name: 'Simulated Leather Sneakers',
          price: '$98.99',
          image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
          store: 'Nike',
          link: 'https://www.nike.com'
        },
        {
          id: '2img',
          name: 'Simulated T-Shirt',
          price: '$27.99',
          image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
          store: 'Zara',
          link: 'https://www.zara.com'
        }
      ]);
      setLoading(false);
      toast({
        title: "🎯 Image processed!",
        description: "Found your shopping matches.",
      });
    }, 1600);
  };

  // Handler for LinkImportMagic-like bar
  const handleLiveLinkSubmit = async (link: string) => {
    setScrapeLoading(true);
    setScrapedProduct(null);
    setScrapeError(null);
    await scrape(link);
    setScrapeLoading(false);
  };

  const handleLinkSubmit = (link: string) => {
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setProducts(demoProducts.slice(0, 2)); // Show fewer products for link submission
      setLoading(false);
      
      toast({
        title: "⚡ Link processed successfully!",
        description: "We found some related products for you.",
      });
    }, 1500);
  };

  const handleAddToCart = (product: Product) => {
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your basket.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-cartoon-cream">
      <HeroSection onTryItNow={() => document.getElementById('search-section')?.scrollIntoView({ behavior: 'smooth' })} />
      <AppExplainer />
      <UniversalCartSearch
        tab={tab}
        setTab={setTab}
        scrapeLoading={scrapeLoading}
        isScraping={isScraping}
        scrapeError={scrapeError}
        scrapedProduct={scrapedProduct}
        handleLiveLinkSubmit={handleLiveLinkSubmit}
        setScrapedProduct={setScrapedProduct}
        setScrapeError={setScrapeError}
        cartItems={cartItems}
        refreshCartItems={refreshCartItems}
        loading={loading}
        handleImageUpload={handleImageUpload}
        imageMatches={imageMatches}
        handleAddToCart={handleAddToCart}
      />
      {loading && <LoadingSection />}
      {!loading && products.length > 0 && (
        <ResultsSection products={products} handleAddToCart={handleAddToCart} />
      )}
      <HowItWorks />
      <BenefitsRow />
      <FooterCta onTryClick={() => document.getElementById('search-section')?.scrollIntoView({ behavior: 'smooth' })} />
    </div>
  );
};

export default Index;
