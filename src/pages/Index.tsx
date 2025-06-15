
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
      
      {/* Hero Section - Professional cartoon blend */}
      <section className="relative bg-cartoon-blue pt-32 pb-14 overflow-hidden border-b-4 border-cartoon-blue shadow-cartoon">
        <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
          {/* Abstract playful shapes in blue, coral, and yellow */}
          <div className="absolute top-14 left-10 w-32 h-20 bg-cartoon-yellow/30 rounded-[2.5rem] rotate-6" />
          <div className="absolute right-0 top-24 w-28 h-20 bg-cartoon-orange/25 rounded-[2rem] rotate-[-8deg]" />
          <div className="absolute left-1/2 top-4 w-24 h-10 bg-cartoon-cream/30 rounded-2xl -translate-x-1/2" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
            {/* Animated Mascot Card */}
            <div className="w-full max-w-md glass-card p-6 rounded-3xl shadow-cartoon bg-cartoon-cream/95 flex justify-center scale-105">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
                alt="Animated shopping mascot"
                className="w-[260px] h-[260px] object-cover rounded-3xl border-4 border-cartoon-blue shadow-cartoon"
                style={{ boxShadow: '0 12px 0 0 #69A7F6, 0 6px 18px #69A7F688' }}
              />
            </div>
            {/* Hero text: professional/cartoon hybrid */}
            <div className="max-w-xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-cartoon-blue/90 px-7 py-2 mb-4 text-lg tracking-wide font-extrabold text-cartoon-yellow shadow-cartoon font-cartoon uppercase border border-cartoon-blue/40">
                One Cart. Every Site. No Mess.
              </div>
              <h1 className="text-5xl sm:text-7xl font-cartoon font-extrabold leading-tight mb-5 text-cartoon-cream uppercase gradient-text">
                Click It<span className="inline text-cartoon-yellow drop-shadow"> Right</span>
              </h1>
              <p className="text-2xl mb-8 mt-2 text-cartoon-yellow font-sans font-medium" style={{ letterSpacing: ".01em" }}>
                Universal shopping cart — fun look, pro feel.<br className="hidden sm:block" />
                Snap a link or pic. Discover. Organize. Checkout, everywhere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  className="bg-cartoon-blue hover:bg-cartoon-yellow text-cartoon-cream font-cartoon font-extrabold text-xl px-10 py-4 rounded-3xl shadow-cartoon transform hover:scale-110 transition"
                  onClick={() => document.getElementById('search-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Try It Now!
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-cartoon-cream border-2 border-cartoon-blue text-cartoon-blue font-cartoon font-bold text-xl px-10 py-4 rounded-3xl shadow-cartoon hover:bg-cartoon-yellow hover:text-cartoon-blue transition"
                >
                  How does it work?
                </Button>
              </div>
              <div className="mt-5 text-md text-cartoon-cream/90 font-sans font-medium tracking-wide italic">
                “Duolingo meets PayPal — but for your next buy.”
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
              <h2 className="text-4xl font-cartoon font-extrabold mb-3 text-cartoon-blue uppercase">
                Try Universal Cart Power
              </h2>
              <p className="text-xl text-cartoon-blue/90 leading-relaxed">
                Paste a goofy link or upload a product image. See what Click It Right finds for you!
              </p>
            </div>
            <div className="glass-card p-8 bg-cartoon-blue/10 rounded-3xl shadow-cartoon">
              <Tabs defaultValue="image" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8 bg-cartoon-cream rounded-2xl border-4 border-cartoon-blue p-1">
                  <TabsTrigger 
                    value="image" 
                    className="data-[state=active]:bg-cartoon-blue data-[state=active]:text-cartoon-cream font-cartoon text-xl rounded-xl"
                  >
                    Upload Pic
                  </TabsTrigger>
                  <TabsTrigger 
                    value="link"
                    className="data-[state=active]:bg-cartoon-blue data-[state=active]:text-cartoon-cream font-cartoon text-xl rounded-xl"
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

      {/* Loading Section - Pro cartoon loader */}
      {loading && (
        <section className="py-16 bg-cartoon-blue/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex flex-col items-center justify-center gap-8">
                <div className="h-24 w-24 rounded-full bg-cartoon-blue flex items-center justify-center animate-bounce shadow-cartoon">
                  <Search className="h-12 w-12 text-cartoon-cream" />
                </div>
                <h2 className="text-2xl font-cartoon font-bold text-cartoon-blue">Finding matches...</h2>
                <p className="text-cartoon-blue/70 font-sans">Scanning for your best fit!</p>
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
      )}

      {/* How It Works */}
      <section className="py-20 bg-cartoon-blue/10 border-t-4 border-cartoon-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-cartoon font-extrabold text-center mb-12 text-cartoon-blue uppercase">
              How Click It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="flex flex-col items-center text-center bg-cartoon-cream p-8 rounded-3xl shadow-cartoon card-hover">
                <div className="h-20 w-20 rounded-full bg-cartoon-blue flex items-center justify-center mb-6 shadow-cartoon">
                  <Search className="h-12 w-12 text-cartoon-cream" />
                </div>
                <h3 className="text-xl font-cartoon font-extrabold text-cartoon-blue mb-2">Try Stuff</h3>
                <p className="text-cartoon-blue font-sans">Paste a link or upload a pic. See what pops up — from anywhere!</p>
              </div>
              <div className="flex flex-col items-center text-center bg-cartoon-yellow p-8 rounded-3xl shadow-cartoon card-hover">
                <div className="h-20 w-20 rounded-full bg-cartoon-blue flex items-center justify-center mb-6 shadow-cartoon">
                  <Plus className="h-12 w-12 text-cartoon-cream" />
                </div>
                <h3 className="text-xl font-cartoon font-extrabold text-cartoon-yellow mb-2">Collect Anything</h3>
                <p className="text-cartoon-blue font-sans">Mix Adidas with Etsy. Anything, any store, one cart.</p>
              </div>
              <div className="flex flex-col items-center text-center bg-cartoon-blue/20 p-8 rounded-3xl shadow-cartoon card-hover">
                <div className="h-20 w-20 rounded-full bg-cartoon-blue flex items-center justify-center mb-6 shadow-cartoon">
                  <ShoppingCart className="h-12 w-12 text-cartoon-cream" />
                </div>
                <h3 className="text-xl font-cartoon font-extrabold text-cartoon-blue mb-2">Checkout — Easy</h3>
                <p className="text-cartoon-blue font-sans">One payment. Instantly routed across stores, minus the mess.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 bg-cartoon-blue border-t-4 border-cartoon-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-cartoon font-extrabold mb-6 text-cartoon-cream">
              Try the Universal Cart
            </h2>
            <p className="text-xl text-cartoon-yellow mb-8 font-sans">
              🚀 <strong>The fun way to shop smart, everywhere. Free forever core!</strong>
            </p>
            <Button 
              className="bg-cartoon-yellow text-cartoon-blue font-cartoon font-extrabold text-lg px-10 py-4 rounded-3xl shadow-cartoon hover:bg-cartoon-cream hover:text-cartoon-blue transition-all"
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

