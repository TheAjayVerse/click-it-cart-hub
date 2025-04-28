
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  store: string;
  link: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <Card className="w-full card-hover">
      <CardHeader className="p-4">
        <div className="aspect-square w-full overflow-hidden rounded-lg relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded text-xs font-medium">
            {product.store}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <h3 className="font-medium line-clamp-1">{product.name}</h3>
        <p className="text-lg font-bold">{product.price}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between gap-2">
        <Button
          variant="outline"
          size="sm"
          className="flex-1"
          onClick={() => window.open(product.link, "_blank")}
        >
          View
        </Button>
        <Button
          className="flex-1 bg-sky-blue hover:bg-sky-blue/80"
          size="sm"
          onClick={() => onAddToCart(product)}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
