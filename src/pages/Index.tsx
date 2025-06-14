import React, { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart, Search, Plus } from "lucide-react";
import FileUploader from "@/components/FileUploader";
import LinkInput from "@/components/LinkInput";
import ProductCard, { Product } from "@/components/ProductCard";
import BenefitsRow from "@/components/BenefitsRow";

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
        title: "🚀 Image processed successfully!",
        description: "We found some amazing products for you.",
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
        title: "⚡ Link processed successfully!",
        description: "We found some related products for you.",
      });
    }, 1500);
  };

  const handleAddToCart = (product: Product) => {
    toast({
      title: "🎉 Added to cart!",
      description: `${product.name} has been added to your Click It Cart.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-cartoon-cream">
      {/* Header/navbar comes from layout */}
      
      {/* Hero Section - CARTOON VIBE */}
      <section className="relative bg-cartoon-yellow pt-32 pb-14 overflow-hidden border-b-4 border-cartoon-orange shadow-cartoon">
        <div className="absolute inset-0 opacity-40 pointer-events-none z-0">
          {/* Cartoon playful clouds or shapes */}
          <div className="absolute top-14 left-6 w-32 h-20 bg-cartoon-orange/30 rounded-[2.5rem] rotate-12" />
          <div className="absolute right-0 top-24 w-28 h-20 bg-cartoon-red/30 rounded-[2rem] rotate-[-10deg]" />
          <div className="absolute left-1/2 top-4 w-24 h-12 bg-cartoon-blue/30 rounded-2xl -translate-x-1/2" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
            {/* Cartoon hero image */}
            <div className="w-full max-w-md glass-card p-6 rounded-3xl shadow-cartoon bg-cartoon-cream/90 flex justify-center scale-105">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
                alt="Playful cartoon product hero"
                className="w-[260px] h-[260px] object-cover rounded-3xl border-4 border-cartoon-orange shadow-cartoon"
                style={{ boxShadow: '0 12px 0 0 #F9743E, 0 6px 18px #E94E4977' }}
              />
            </div>
            {/* Cartoon hero text */}
            <div className="max-w-xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-cartoon-yellow px-6 py-2 mb-4 text-xl tracking-wide font-extrabold text-cartoon-red shadow-cartoon font-cartoon uppercase">
                It's for fun, not for sale!
              </div>
              <h1 className="text-5xl sm:text-7xl font-cartoon font-extrabold leading-tight mb-5 text-cartoon-orange uppercase" style={{ letterSpacing: "0.025em" }}>
                Snap<br />
                <span className="inline text-cartoon-red">Paste</span><br />
                <span className="inline text-cartoon-blue">Play! 🍭</span>
              </h1>
              <p className="text-2xl mb-7 mt-2 text-cartoon-red/80 font-cartoon">
                Upload your wackiest wish, see what you discover – just for fun.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  className="bg-cartoon-orange hover:bg-cartoon-red text-cartoon-cream font-cartoon font-extrabold text-xl px-10 py-4 rounded-3xl shadow-cartoon transform hover:scale-110 transition"
                  onClick={() => document.getElementById('search-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Try It Now!
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-cartoon-yellow border-4 border-cartoon-orange text-cartoon-orange font-cartoon font-bold text-xl px-10 py-4 rounded-3xl shadow-cartoon hover:bg-cartoon-cream transition"
                >
                  How does it work?
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Row/Features */}
      <BenefitsRow />

      {/* Search Section */}
      <section id="search-section" className="py-20 bg-cartoon-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-cartoon font-extrabold mb-3 text-cartoon-red uppercase">Let's Make Something Funny</h2>
              <p className="text-xl text-cartoon-orange leading-relaxed">
                Upload a goofy pic or paste a link, and see what Click It finds for you!
              </p>
            </div>
            <div className="glass-card p-8 bg-cartoon-yellow/40 rounded-3xl shadow-cartoon">
              <Tabs defaultValue="image" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8 bg-cartoon-cream rounded-2xl border-4 border-cartoon-yellow p-1">
                  <TabsTrigger 
                    value="image" 
                    className="data-[state=active]:bg-cartoon-orange data-[state=active]:text-cartoon-cream font-cartoon text-xl rounded-xl"
                  >
                    Upload Pic
                  </TabsTrigger>
                  <TabsTrigger 
                    value="link"
                    className="data-[state=active]:bg-cartoon-orange data-[state=active]:text-cartoon-cream font-cartoon text-xl rounded-xl"
                  >
                    Paste Link
                  </TabsTrigger>
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

      {/* Loading Section - Cartoon loader! */}
      {loading && (
        <section className="py-16 bg-cartoon-yellow/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex flex-col items-center justify-center gap-8">
                <div className="h-24 w-24 rounded-full bg-cartoon-orange flex items-center justify-center animate-bounce shadow-cartoon">
                  <Search className="h-12 w-12 text-cartoon-cream" />
                </div>
                <h2 className="text-2xl font-cartoon font-bold text-cartoon-red">Finding your fun stuff...</h2>
                <p className="text-cartoon-orange/80 font-cartoon">Looking for the silliest matches!</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Results Section */}
      {!loading && products.length > 0 && (
        <section className="py-16 bg-cartoon-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-cartoon font-extrabold mb-7 text-cartoon-orange">
                🎈 Found <span className="text-cartoon-red">{products.length} goofball goodies</span>
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
      )}

      {/* How It Works */}
      <section className="py-20 bg-cartoon-yellow/60 border-t-4 border-cartoon-orange">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-cartoon font-extrabold text-center mb-12 text-cartoon-red uppercase">
              What Happens Here?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="flex flex-col items-center text-center bg-cartoon-cream p-8 rounded-3xl shadow-cartoon card-hover">
                <div className="h-20 w-20 rounded-full bg-cartoon-orange flex items-center justify-center mb-6 shadow-cartoon">
                  <Search className="h-12 w-12 text-cartoon-cream" />
                </div>
                <h3 className="text-xl font-cartoon font-extrabold text-cartoon-red mb-2">Try Stuff</h3>
                <p className="text-cartoon-orange font-cartoon">Upload a picture or paste a link, see what pops up!</p>
              </div>
              <div className="flex flex-col items-center text-center bg-cartoon-yellow p-8 rounded-3xl shadow-cartoon card-hover">
                <div className="h-20 w-20 rounded-full bg-cartoon-red flex items-center justify-center mb-6 shadow-cartoon">
                  <Plus className="h-12 w-12 text-cartoon-cream" />
                </div>
                <h3 className="text-xl font-cartoon font-extrabold text-cartoon-orange mb-2">Collect Laughs</h3>
                <p className="text-cartoon-red font-cartoon">Add fun things to your Click-It wherever you find them.</p>
              </div>
              <div className="flex flex-col items-center text-center bg-cartoon-blue/30 p-8 rounded-3xl shadow-cartoon card-hover">
                <div className="h-20 w-20 rounded-full bg-cartoon-green flex items-center justify-center mb-6 shadow-cartoon">
                  <ShoppingCart className="h-12 w-12 text-cartoon-cream" />
                </div>
                <h3 className="text-xl font-cartoon font-extrabold text-cartoon-blue mb-2">Show & Tell</h3>
                <p className="text-cartoon-blue font-cartoon">See what’s in your collection, but just for giggles — not for sale!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 bg-cartoon-red border-t-4 border-cartoon-orange">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-cartoon font-extrabold mb-6 text-cartoon-cream">
              Ready to Goof Around?
            </h2>
            <p className="text-xl text-cartoon-yellow mb-8 font-cartoon">
              🚀 <strong>Nothing for sale, just endless fun.</strong>
            </p>
            <Button 
              className="bg-cartoon-yellow text-cartoon-red font-cartoon font-extrabold text-lg px-10 py-4 rounded-3xl shadow-cartoon hover:bg-cartoon-cream hover:text-cartoon-orange transition-all"
              onClick={() => document.getElementById('search-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ArrowRight className="mr-2 h-7 w-7" />
              Try Click It!
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
