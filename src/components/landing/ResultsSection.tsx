
import React from "react";
import ProductCard, { Product } from "@/components/ProductCard";

interface ResultsSectionProps {
  products: Product[];
  handleAddToCart: (product: Product) => void;
}

const ResultsSection: React.FC<ResultsSectionProps> = ({ products, handleAddToCart }) => (
  <section className="py-16 bg-cartoon-cream">
    <div className="container mx-auto px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-cartoon font-extrabold mb-7 text-cartoon-blue">
          🎈 <span className="text-cartoon-yellow">{products.length}</span> matches found
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ResultsSection;
