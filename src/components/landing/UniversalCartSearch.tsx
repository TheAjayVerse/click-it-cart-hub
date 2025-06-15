
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Search, Image as ImageIcon } from "lucide-react";
import FileUploader from "@/components/FileUploader";
import ProductCard, { Product } from "@/components/ProductCard";
import ScrapedProductPreview from "@/components/ScrapedProductPreview";

interface UniversalCartSearchProps {
  tab: "link" | "image";
  setTab: (tab: "link" | "image") => void;
  scrapeLoading: boolean;
  isScraping: boolean;
  scrapeError: string | null;
  scrapedProduct: any | null;
  handleLiveLinkSubmit: (link: string) => void;
  setScrapedProduct: (val: any) => void;
  setScrapeError: (val: string | null) => void;
  cartItems: { product_url: string }[];
  refreshCartItems: () => void;
  loading: boolean;
  handleImageUpload: (file: File) => void;
  imageMatches: Product[];
  handleAddToCart: (product: Product) => void;
}

const UniversalCartSearch: React.FC<UniversalCartSearchProps> = ({
  tab, setTab, scrapeLoading, isScraping, scrapeError, scrapedProduct,
  handleLiveLinkSubmit, setScrapedProduct, setScrapeError, cartItems,
  refreshCartItems, loading, handleImageUpload, imageMatches, handleAddToCart
}) => (
  <section id="search-section" className="py-10 bg-cartoon-cream">
    <div className="container mx-auto px-2">
      <div className="max-w-md mx-auto">
        <div className="mb-4 text-center animate-fade-in">
          <h2 className="text-[2rem] sm:text-3xl font-cartoon font-extrabold mb-1 text-cartoon-blue uppercase">
            Try Universal Cart Power
          </h2>
          <p className="text-base sm:text-lg text-cartoon-blue/90 font-sans mb-2 font-medium italic">
            Paste a product link or upload a picture — live magic!
          </p>
        </div>
        <Tabs value={tab} onValueChange={v => setTab(v as "link" | "image")} className="mb-2">
          <TabsList className="w-full grid grid-cols-2 mb-4">
            <TabsTrigger value="link" className="flex gap-2 items-center justify-center font-bold text-base font-cartoon w-full data-[state=active]:bg-cartoon-blue/90 data-[state=active]:text-cartoon-yellow rounded-2xl px-4 py-2">
              <Search className="h-5 w-5 mr-1" />
              Paste Product Link
            </TabsTrigger>
            <TabsTrigger value="image" className="flex gap-2 items-center justify-center font-bold text-base font-cartoon w-full data-[state=active]:bg-cartoon-blue/90 data-[state=active]:text-cartoon-yellow rounded-2xl px-4 py-2">
              <ImageIcon className="h-5 w-5 mr-1" />
              Upload Image
            </TabsTrigger>
          </TabsList>
          <TabsContent value="link">
            <form
              onSubmit={e => {
                e.preventDefault();
                const linkInput = e.currentTarget.link?.value;
                if (!linkInput || !linkInput.trim()) return;
                setScrapedProduct(null);
                setScrapeError(null);
                setTab("link");
                handleLiveLinkSubmit(linkInput);
              }}
              className="flex flex-row w-full gap-2 items-center bg-cartoon-cream border-2 border-cartoon-blue shadow-cartoon rounded-2xl py-2.5 px-4 relative"
              style={{ minWidth: 0 }}
            >
              <input
                name="link"
                type="text"
                placeholder="Paste a product link (Shein, Zara, Nike...)"
                className="bg-transparent font-cartoon text-lg placeholder:italic rounded-xl border-none focus:ring-0 flex-1 min-w-0"
                disabled={scrapeLoading || isScraping}
                autoComplete="off"
              />
              <Button
                type="submit"
                size="lg"
                className="rounded-xl bg-cartoon-blue hover:bg-cartoon-yellow text-cartoon-cream font-bold px-5 py-2 transition-all duration-300"
                disabled={scrapeLoading || isScraping}
                aria-label="Import product"
              >
                Import
              </Button>
            </form>
            {(scrapeLoading || isScraping) && (
              <div className="flex items-center gap-2 mt-4 animate-fade-in">
                <span className="font-cartoon text-cartoon-blue text-lg">Finding product...</span>
              </div>
            )}
            {scrapeError && (
              <div className="my-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl transition">
                {scrapeError}
              </div>
            )}
            {scrapedProduct && !scrapeError && (
              <ScrapedProductPreview
                product={scrapedProduct}
                cartItems={cartItems}
                onAdd={success => { if(success) refreshCartItems(); }}
              />
            )}
          </TabsContent>
          <TabsContent value="image">
            <FileUploader onImageUpload={handleImageUpload} />
            {loading && (
              <div className="flex items-center gap-2 mt-6">
                <Search className="h-6 w-6 animate-spin text-cartoon-blue" />
                <span className="font-cartoon text-cartoon-blue text-lg">Finding matches...</span>
              </div>
            )}
            {!loading && imageMatches.length > 0 && (
              <div className="mt-6 grid grid-cols-1 gap-5">
                {imageMatches.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  </section>
);

export default UniversalCartSearch;
