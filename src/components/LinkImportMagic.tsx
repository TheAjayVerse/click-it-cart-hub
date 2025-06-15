
import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { ShoppingCart, Sparkles } from "lucide-react";
import ProductCard, { Product } from "@/components/ProductCard";

interface LinkImportMagicProps {
  onAddToCart?: (product: Product) => void;
}

// Demo product for UI feel. In a real app this would come from the backend fetch.
const DEMO_PRODUCT: Product = {
  id: "l1",
  name: "Dreamy Air Max 97",
  price: "$149.95",
  image: "https://images.unsplash.com/photo-1503342452485-86a096e79bba?auto=format&fit=crop&w=500&q=80",
  store: "Nike",
  link: "https://www.nike.com/t/air-max-97",
};

const LinkImportMagic = ({ onAddToCart }: LinkImportMagicProps) => {
  const [link, setLink] = useState("");
  const [importing, setImporting] = useState(false);
  const [importedProduct, setImportedProduct] = useState<Product | null>(null);
  const [showAnimation, setShowAnimation] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const cartIconRef = useRef<HTMLDivElement>(null);

  // Animate spark trail from input bar to cart
  const triggerSparkAnimation = () => {
    if (!inputRef.current || !cartIconRef.current) return;
    setShowAnimation(true);
    setTimeout(() => setShowAnimation(false), 750);
  };

  // Simulate fetching product info
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate
    if (!link.trim()) {
      toast({
        title: "Paste a link!",
        description: "Paste any product link to summon its details.",
        variant: "destructive",
      });
      return;
    }
    if (!link.startsWith("http")) {
      toast({
        title: "Enter a valid URL",
        description: "The link should start with http:// or https://",
        variant: "destructive",
      });
      return;
    }

    setImporting(true);
    setShowAnimation(false);

    setTimeout(() => {
      setImportedProduct({
        ...DEMO_PRODUCT,
        link,
      });
      setImporting(false);
      triggerSparkAnimation();
      toast({
        title: "Item Imported!",
        description: "Product added from the secret level.",
        // No emoji, and avoid background highlight here.
      });
    }, 1400);
  };

  // Magic spark trail absolute positioned
  const SparkTrail = () => {
    if (!showAnimation) return null;
    const inputRect = inputRef.current?.getBoundingClientRect();
    const cartRect = cartIconRef.current?.getBoundingClientRect();
    if (!inputRect || !cartRect) return null;

    // Calculate distance
    const startX = inputRect.left + inputRect.width / 2;
    const startY = inputRect.top + inputRect.height / 2;
    const endX = cartRect.left + cartRect.width / 2;
    const endY = cartRect.top + cartRect.height / 2;

    // In-app, use fixed overlay
    const style: React.CSSProperties = {
      position: "fixed",
      left: startX,
      top: startY,
      pointerEvents: "none",
      zIndex: 50,
      width: 0,
      height: 0,
      animation: "trail-move 0.75s cubic-bezier(.75,0,.25,1)",
    };

    const keyframes = `
      @keyframes trail-move {
        to {
          transform: translate(${endX - startX}px, ${endY - startY}px);
          opacity: 0;
        }
      }
    `;

    return (
      <>
        <style>{keyframes}</style>
        <Sparkles
          style={style}
          className="text-cartoon-blue drop-shadow-xl animate-[trail-move_0.75s_ease-in-out]"
          size={36}
        />
      </>
    );
  };

  return (
    <div className="w-full flex flex-col items-center px-2 py-4 bg-cartoon-blue/10 rounded-3xl">
      <div className="flex items-center justify-center gap-3 w-full max-w-md mx-auto mb-1">
        <form
          onSubmit={handleSubmit}
          className="flex flex-row w-full gap-2 items-center bg-cartoon-cream border-2 border-cartoon-blue shadow-cartoon rounded-2xl py-2.5 px-4 relative"
          style={{ minWidth: 0 }}
        >
          <Input
            ref={inputRef}
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Paste a product link (Shein, Zara, Nike...)"
            className="bg-transparent font-cartoon text-lg placeholder:italic rounded-xl border-none focus:ring-0 flex-1 min-w-0"
            disabled={importing}
          />
          <Button
            type="submit"
            size="lg"
            className="rounded-xl bg-cartoon-blue hover:bg-cartoon-yellow text-cartoon-cream font-bold px-5 py-2 transition-all duration-300"
            disabled={importing}
            aria-label="Import product"
          >
            Import
          </Button>
          {/* Spark Trail overlays the input → cart */}
          <div
            ref={cartIconRef}
            className="absolute right-[-48px] top-1/2 -translate-y-1/2 flex items-center"
          >
            <ShoppingCart
              className={
                "text-cartoon-blue h-9 w-9 drop-shadow " +
                (showAnimation ? "animate-pulse" : "")
              }
            />
          </div>
          {/* Show the spark trail animation */}
          {showAnimation && <SparkTrail />}
        </form>
      </div>
      {/* Loading/Importing Animation */}
      {importing && (
        <div className="flex items-center gap-2 mt-4 animate-fade-in">
          <Sparkles className="animate-spin text-cartoon-blue" size={24} />
          <span className="font-cartoon text-cartoon-blue text-lg">Summoning item...</span>
        </div>
      )}

      {/* Slide-in Preview Card */}
      {importedProduct && !importing && (
        <div className="w-full max-w-xs mt-6 animate-slide-in-right">
          <ProductCard
            product={importedProduct}
            onAddToCart={onAddToCart}
          />
        </div>
      )}
    </div>
  );
};

export default LinkImportMagic;

