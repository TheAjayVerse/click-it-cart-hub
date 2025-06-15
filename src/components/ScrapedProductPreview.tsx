
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

type ScrapedProduct = {
  name: string;
  price: string;
  image: string;
  store: string;
  product_url: string;
  raw?: any;
};

interface ScrapedProductPreviewProps {
  product: ScrapedProduct;
  cartItems: { product_url: string }[];
  onAdd: (success: boolean) => void;
  disabled?: boolean;
}

export default function ScrapedProductPreview({ product, cartItems, onAdd, disabled }: ScrapedProductPreviewProps) {
  const alreadyInCart = cartItems.some(item => item.product_url === product.product_url);

  const handleAddToCart = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      toast({ title: "You must log in to add items to cart.", variant: "destructive" });
      return;
    }
    const { error } = await supabase.from("cart_items").insert([{
      user_id: user.id,
      product_url: product.product_url,
      name: product.name,
      price: product.price,
      image: product.image,
      store: product.store,
    }]);
    if (error) {
      toast({ title: "Could not add to cart", description: error.message, variant: "destructive" });
      onAdd(false);
    } else {
      toast({ title: "Added!", description: `${product.name} saved to your cart.` });
      onAdd(true);
    }
  };

  return (
    <Card className="max-w-xs w-full mx-auto my-5 animate-slide-in-right">
      <CardHeader>
        <div className="aspect-square w-full rounded-2xl overflow-hidden bg-white border mb-2">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="font-cartoon text-cartoon-blue font-bold text-lg">{product.name}</div>
        <div className="text-base text-cartoon-orange font-extrabold mb-1">{product.price}</div>
        <div className="text-xs text-gray-500">{product.store}</div>
      </CardHeader>
      <CardContent>
        <a href={product.product_url} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:underline break-all">
          View product page
        </a>
      </CardContent>
      <CardFooter className="flex gap-3">
        <Button
          className="w-full bg-sky-blue hover:bg-sky-blue/80 disabled:bg-gray-200"
          onClick={handleAddToCart}
          disabled={disabled || alreadyInCart}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {alreadyInCart ? "Already in Cart" : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  );
}
