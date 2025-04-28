
import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart, Search, Plus } from "lucide-react";
import FileUploader from "@/components/FileUploader";
import LinkInput from "@/components/LinkInput";
import ProductCard, { Product } from "@/components/ProductCard";

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

  const handleImageUpload = (file: File) => {
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setProducts(demoProducts);
      setLoading(false);
      
      toast({
        title: "Image processed successfully!",
        description: "We found some matching products for you.",
      });
    }, 2000);
  };

  const handleLinkSubmit = (link: string) => {
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setProducts(demoProducts.slice(0, 2)); // Show fewer products for link submission
      setLoading(false);
      
      toast({
        title: "Link processed successfully!",
        description: "We found some related products for you.",
      });
    }, 1500);
  };

  const handleAddToCart = (product: Product) => {
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your Click It Cart.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-sky-blue/40 to-white pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-lg animate-fade-in">
              <h1 className="text-4xl sm:text-5xl font-bold text-navy leading-tight mb-4">
                Snap It. Click It. <span className="text-sky-blue">Love It.</span>
              </h1>
              <p className="text-lg mb-6 text-gray-700">
                Upload a product image or paste a link. We'll find it across multiple stores and save it to your personal shopping cart.
              </p>
              <div className="flex gap-4">
                <Button className="btn-primary" onClick={() => document.getElementById('search-section')?.scrollIntoView({ behavior: 'smooth' })}>
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="w-full max-w-md glass-card p-6 animate-slide-in">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Shopping online" 
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg">
                  <ShoppingCart className="h-6 w-6 text-sky-blue" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section id="search-section" className="py-16 bg-cool-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">Find Your Products</h2>
            <p className="text-center text-gray-600 mb-8">
              Upload an image or paste a product link to find matching items
            </p>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <Tabs defaultValue="image" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="image">Upload Image</TabsTrigger>
                  <TabsTrigger value="link">Paste Link</TabsTrigger>
                </TabsList>
                <TabsContent value="image">
                  <FileUploader onImageUpload={handleImageUpload} />
                </TabsContent>
                <TabsContent value="link">
                  <LinkInput onLinkSubmit={handleLinkSubmit} />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {loading && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="h-16 w-16 rounded-full bg-sky-blue/20 flex items-center justify-center animate-pulse">
                  <Search className="h-8 w-8 text-sky-blue" />
                </div>
                <h2 className="text-xl font-medium">Finding products...</h2>
                <p className="text-gray-500">This might take a few moments</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {!loading && products.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">We found {products.length} products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      )}

      {/* How It Works */}
      <section className="py-16 bg-sand-beige/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How Click It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-sky-blue flex items-center justify-center mb-4">
                  <Search className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-medium mb-2">Find Products</h3>
                <p className="text-gray-600">Upload an image or paste a product link to find matching items across multiple stores.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-sky-blue flex items-center justify-center mb-4">
                  <Plus className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-medium mb-2">Save to Your Cart</h3>
                <p className="text-gray-600">Add products from different stores to your unified Click It Cart.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-sky-blue flex items-center justify-center mb-4">
                  <ShoppingCart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-medium mb-2">Purchase with Ease</h3>
                <p className="text-gray-600">Open each store's checkout page with a single click when you're ready to buy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to simplify your shopping?</h2>
            <p className="text-lg text-gray-600 mb-8">
              One Cart. Endless Possibilities.
            </p>
            <Button className="btn-primary" onClick={() => document.getElementById('search-section')?.scrollIntoView({ behavior: 'smooth' })}>
              Start Shopping Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
