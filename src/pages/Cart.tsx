import React, { useState, useMemo, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';
import { Product } from '@/components/ProductCard';
import { ShoppingCart, Store } from 'lucide-react';
import { useScrapeProduct } from "@/hooks/useScrapeProduct";
import { supabase } from "@/integrations/supabase/client";

// Color-coding per store for demonstration
const storeStyles: { [store: string]: { color: string, shadow: string } } = {
  Nike: {
    color: "bg-blue-200 border-blue-300",
    shadow: "shadow-[0_3px_16px_0_#69A7F677]"
  },
  Zara: {
    color: "bg-green-100 border-green-300",
    shadow: "shadow-[0_3px_16px_0_#87E59977]"
  }
  // Add more stores/colors here as needed
};

const getStoreDetails = (store: string) =>
  storeStyles[store] || {
    color: "bg-gray-100 border-gray-200",
    shadow: "shadow-md"
  };

const Cart = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [userId, setUserId] = useState<string | null>(null);

  // Load cart from Supabase for logged-in user
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUserId(data?.user?.id ?? null));
  }, []);

  useEffect(() => {
    if (!userId) return;
    supabase
      .from("cart_items")
      .select("*")
      .eq("user_id", userId)
      .then(({ data }) => {
        if (!data) return;
        setCartItems(
          data.map((item) => ({
            id: item.id,
            name: item.name || "",
            price: item.price || "",
            image: item.image || "",
            store: item.store || "",
            link: item.product_url,
          }))
        );
      });
  }, [userId]);

  // Scrape product info for new link
  const { scrape, data: scraped, error: scrapeError, loading: isScraping } = useScrapeProduct();
  const [linkInput, setLinkInput] = useState("");
  const [importPreview, setImportPreview] = useState<any | null>(null);

  const handleAddProductByUrl = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!linkInput.trim() || !userId) return;
    await scrape(linkInput.trim());
  };

  useEffect(() => {
    if (scrapeError) {
      toast({
        title: "Could not import that link",
        description: scrapeError,
        variant: "destructive",
      });
    }
    if (scraped) setImportPreview(scraped);
  }, [scrapeError, scraped]);

  // Save imported product to user's cart
  const handleSaveImported = async () => {
    if (!importPreview || !userId) return;
    const { error } = await supabase.from("cart_items").insert([
      {
        user_id: userId,
        product_url: importPreview.product_url,
        name: importPreview.name,
        price: importPreview.price,
        image: importPreview.image,
        store: importPreview.store,
      },
    ]);
    if (error) {
      toast({
        title: "Could not add to cart",
        description: error.message,
        variant: "destructive",
      });
      return;
    }
    setCartItems((items) => [
      ...items,
      {
        id: crypto.randomUUID(),
        name: importPreview.name,
        price: importPreview.price,
        image: importPreview.image,
        store: importPreview.store,
        link: importPreview.product_url,
      },
    ]);
    setImportPreview(null);
    setLinkInput("");
    toast({
      title: "Added!",
      description: "Product saved to cart.",
    });
  };

  // Group products by store
  const productsByStore = useMemo(() => {
    const group: { [store: string]: Product[] } = {};
    cartItems.forEach(item => {
      if (!group[item.store]) group[item.store] = [];
      group[item.store].push(item);
    });
    return group;
  }, [cartItems]);

  const removeFromCart = (productId: string) => {
    setCartItems((items) => items.filter(item => item.id !== productId));
    toast({
      title: 'Item removed',
      description: 'The item has been removed from your cart.',
    });
  };

  const checkoutAll = () => {
    cartItems.forEach(item => window.open(item.link, "_blank"));
  };

  // Floating total bar (mobile/desktop sticky)
  const totalItems = cartItems.length;
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + Number(item.price.replace(/[^0-9.]/g, '')), 0);

  return (
    <div className="container mx-auto px-2 pt-20 pb-32 min-h-screen relative bg-cartoon-cream">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 flex items-center text-navy">
          <ShoppingCart className="mr-2 h-8 w-8" />
          Your Click It Cart
        </h1>
        {/* Paste product link */}
        <form onSubmit={handleAddProductByUrl} className="mb-8 flex gap-3">
          <input
            type="text"
            value={linkInput}
            onChange={(e) => setLinkInput(e.target.value)}
            placeholder="Paste any product link to import (e.g., Zara, Nike, Amazon...)"
            className="flex-1 px-3 py-2 border-2 border-cartoon-blue rounded-xl font-cartoon shadow-cartoon"
            disabled={isScraping}
          />
          <Button type="submit" className="btn-primary" disabled={isScraping || !linkInput.trim()}>
            Import
          </Button>
        </form>
        {/* Preview scraped product */}
        {importPreview && (
          <div className="mb-7 p-4 rounded-2xl bg-white border-2 border-cartoon-yellow shadow-cartoon flex gap-5 items-center animate-fade-in">
            <img src={importPreview.image} alt={importPreview.name} className="h-24 w-24 rounded-xl object-cover border-2 border-cartoon-blue/30" />
            <div className="flex-1">
              <h3 className="font-cartoon font-bold text-cartoon-blue text-lg">{importPreview.name}</h3>
              <div className="text-cartoon-orange font-extrabold">{importPreview.price}</div>
              <div className="text-sm text-gray-500">{importPreview.store}</div>
            </div>
            <Button className="btn-primary" onClick={handleSaveImported}>
              Add to Cart
            </Button>
          </div>
        )}
        {totalItems === 0 ? (
          <Card className="w-full py-12">
            <CardContent className="flex flex-col items-center justify-center gap-4">
              <div className="h-16 w-16 rounded-full bg-sky-blue/20 flex items-center justify-center">
                <ShoppingCart className="h-8 w-8 text-sky-blue" />
              </div>
              <h2 className="text-xl font-medium text-center">Your cart is empty</h2>
              <p className="text-center text-gray-500 max-w-md">
                Start by uploading a product image or pasting a link on the homepage to find products.
              </p>
              <Button className="btn-primary mt-2" onClick={() => window.location.href = "/"}>
                Find Products
              </Button>
            </CardContent>
          </Card>
        ) : (
          <>
          <div className="space-y-10 relative pb-36">
            {/* Store Groups */}
            {Object.keys(productsByStore).map((store) => {
              const storeItems = productsByStore[store];
              const storeColor = getStoreDetails(store).color;
              const storeShadow = getStoreDetails(store).shadow;
              // Fake delivery/subtotal for demo
              const storeSubtotal = storeItems.reduce((sum, item) =>
                sum + Number(item.price.replace(/[^0-9.]/g, '')), 0);
              return (
                <div
                  key={store}
                  className={`rounded-3xl mb-6 border-2 px-0 pb-0 ${storeColor} group transition-all ${storeShadow} hover:scale-[1.015]`}
                  style={{ transition: '.15s cubic-bezier(.34,1.56,.64,1)', position: 'relative' }}
                >
                  {/* Store header */}
                  <div className="flex items-center gap-3 px-6 py-4 border-b-2 border-cartoon-blue/20 bg-white/60 rounded-t-3xl sticky top-0 z-10">
                    <Store className="h-7 w-7 text-cartoon-blue -ml-1" />
                    <h2 className="font-cartoon text-xl font-bold text-cartoon-blue">{store}</h2>
                  </div>
                  {/* Store items */}
                  <div className="flex flex-col gap-6 py-5 px-4">
                    {storeItems.map(item => (
                      <div
                        key={item.id}
                        className="relative bg-white rounded-2xl p-4 flex flex-col md:flex-row gap-4 border border-cartoon-blue/10 shadow-cartoon hover:shadow-lg transition-all duration-200 animate-fade-in hover:scale-105"
                      >
                        <div className="w-full md:w-44 h-40 rounded-xl overflow-hidden border-2 border-cartoon-blue/20 flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex items-start justify-between mb-1">
                              <div>
                                <h3 className="font-cartoon text-lg font-extrabold text-cartoon-blue mb-0.5">{item.name}</h3>
                                <span className="text-cartoon-orange font-medium text-sm">{store}</span>
                              </div>
                              <p className="text-lg font-bold">{item.price}</p>
                            </div>
                            {/* --- Placeholder for options like variant/size in future --- */}
                            <div className="flex gap-2 mt-2">
                              <Button size="sm" variant="outline" className="bg-cartoon-yellow/30 border-cartoon-yellow/40 text-cartoon-blue font-bold px-3" disabled>
                                Size: M
                              </Button>
                              <Button size="sm" variant="outline" className="bg-cartoon-blue/10 border-cartoon-blue/50 text-cartoon-blue px-3" disabled>
                                Color: White
                              </Button>
                            </div>
                          </div>
                          <div className="flex justify-between items-center mt-4">
                            <Button
                              variant="outline"
                              size="sm"
                              className="hover:bg-cartoon-red/90 hover:text-cartoon-cream transition-all"
                              onClick={() => removeFromCart(item.id)}
                              aria-label="Remove from cart"
                            >
                              Remove
                            </Button>
                            <Button 
                              onClick={() => window.open(item.link, '_blank')}
                              className="btn-primary"
                            >
                              Go to Store
                            </Button>
                          </div>
                        </div>
                        {/* Animated border effect */}
                        <div className="absolute -inset-1.5 pointer-events-none rounded-2xl border-2 border-cartoon-blue/20 opacity-70 animate-pulse-glow z-0"></div>
                      </div>
                    ))}
                  </div>
                  {/* Store subtotal + delivery (demo only) */}
                  <div className="flex justify-between items-center px-6 py-3 border-t-2 border-cartoon-blue/20 bg-cartoon-yellow/40 rounded-b-3xl font-bold text-cartoon-blue/80">
                    <span>Subtotal ({storeItems.length} item{storeItems.length > 1 ? "s" : ""}):</span>
                    <span>${storeSubtotal.toFixed(2)} <span className="ml-3 text-xs font-semibold text-cartoon-orange/70">(delivers in 2-5 days)</span></span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Floating Total Bar */}
          <div className="fixed bottom-0 left-0 right-0 z-40 flex flex-col items-center pb-4 pointer-events-none">
            <div className="mx-auto bg-cartoon-yellow/95 border-4 border-cartoon-orange rounded-3xl shadow-cartoon px-7 py-3 flex flex-col sm:flex-row items-center gap-2 pointer-events-auto"
              style={{
                maxWidth: 430,
                transition: 'box-shadow 0.2s'
              }}
            >
              <div className="flex-1 flex flex-col sm:flex-row items-center gap-2">
                <span className="font-cartoon text-xl font-bold text-cartoon-blue drop-shadow">Total ({totalItems} items):</span>
                <span className="text-xl font-extrabold text-cartoon-orange ml-2">${totalAmount.toFixed(2)}</span>
              </div>
              <Button 
                className="btn-primary font-cartoon text-lg !px-7 !py-3 shadow-cartoon pointer-events-auto"
                onClick={checkoutAll}
                style={{ minWidth: 160 }}
              >
                Checkout All
              </Button>
            </div>
          </div>

          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
