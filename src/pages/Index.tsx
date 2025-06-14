import React, { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart, Search, Plus, Zap, Sparkles } from "lucide-react";
import FileUploader from "@/components/FileUploader";
import LinkInput from "@/components/LinkInput";
import ProductCard, { Product } from "@/components/ProductCard";
import AnnouncementBar from "@/components/AnnouncementBar";
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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pure-white/100 via-pure-white/95 to-electric-blue/5">
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Hero Section - Updated with more detail vibe */}
      <section className="relative bg-gradient-to-br from-hot-pink/10 via-electric-blue/20 to-neon-purple/10 pt-28 pb-14 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
          <div className="absolute top-12 left-8 w-40 h-40 bg-hot-pink/70 rounded-full blur-3xl animate-pulse" />
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-electric-blue/70 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "0.7s" }} />
          <div className="absolute left-1/2 top-10 w-32 h-32 bg-neon-purple/60 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1.2s" }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between gap-10">
            {/* Hero image, cropped and poppy */}
            <div className="w-full max-w-lg glass-card p-6 rounded-3xl shadow-2xl neon-glow relative flex justify-center animate-scale-in">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
                alt="Bold hero product"
                className="w-[350px] h-[350px] object-cover rounded-2xl border-4 border-hot-pink/60 shadow-xl"
              />
            </div>
            {/* Hero text */}
            <div className="max-w-xl animate-fade-in text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-lime-green/90 px-5 py-1.5 mb-4 text-[1rem] tracking-wide font-black shadow-md uppercase">
                <span role="img" aria-label="Point">👇</span>
                <span className="font-black">Paste, Snap, Cart – Done!</span>
                <span role="img" aria-label="Party">🎉</span>
              </div>
              <h1 className="text-5xl sm:text-7xl font-black leading-tight mb-5 gradient-text uppercase tracking-tight font-sans" style={{ letterSpacing: "0.035em" }}>
                Shopping<br />
                <span className="inline font-black text-hot-pink">As Fun</span><br />
                <span className="inline font-black text-electric-blue">As Soda 🍹</span>
              </h1>
              <p className="text-[1.35rem] mb-8 mt-1 text-deep-space/80 leading-relaxed font-medium max-w-lg">
                Upload your dream product or link, <span className="font-bold text-hot-pink">see instant matches</span>, and checkout in style—all in one playful cart.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button 
                  className="btn-primary text-lg px-9 py-4 rounded-2xl bg-hot-pink hover:bg-electric-blue/90 font-black shadow-lg animate-pulse-glow transition tracking-wide"
                  onClick={() => document.getElementById('search-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Paste or Snap Now
                </Button>
                <Button 
                  variant="outline" 
                  className="btn-secondary text-lg px-9 py-4 rounded-2xl border-hot-pink text-hot-pink hover:bg-hot-pink hover:text-pure-white font-black shadow transition tracking-wide"
                >
                  Watch it in Action
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Row/Features */}
      <BenefitsRow />

      {/* Search Section - ENERGIZED! */}
      <section id="search-section" className="py-20 bg-gradient-to-r from-pure-white to-electric-blue/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black mb-4">
                <span className="gradient-text">Find Your Products</span>
              </h2>
              <p className="text-xl text-deep-space/70 leading-relaxed">
                ⚡ Upload an image or paste a product link to find matching items across the web
              </p>
            </div>
            
            <div className="glass-card p-8 neon-glow">
              <Tabs defaultValue="image" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8 bg-gradient-to-r from-electric-blue/10 to-neon-purple/10 p-1 rounded-xl">
                  <TabsTrigger 
                    value="image" 
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-electric-blue data-[state=active]:to-neon-purple data-[state=active]:text-pure-white font-bold rounded-lg transition-all duration-300"
                  >
                    Upload Image
                  </TabsTrigger>
                  <TabsTrigger 
                    value="link"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-electric-blue data-[state=active]:to-neon-purple data-[state=active]:text-pure-white font-bold rounded-lg transition-all duration-300"
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

      {/* Loading Section - WITH ENERGY! */}
      {loading && (
        <section className="py-16 bg-pure-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex flex-col items-center justify-center gap-6">
                <div className="h-20 w-20 rounded-full bg-gradient-to-r from-electric-blue to-neon-purple flex items-center justify-center animate-rainbow-shift">
                  <Search className="h-10 w-10 text-pure-white animate-pulse" />
                </div>
                <h2 className="text-2xl font-bold gradient-text">🚀 Finding products...</h2>
                <p className="text-deep-space/60">Scanning the entire web for the best deals</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Results Section - VIBRANT RESULTS! */}
      {!loading && products.length > 0 && (
        <section className="py-16 bg-pure-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-black mb-8">
                🎉 We found <span className="gradient-text">{products.length} amazing products</span>
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

      {/* How It Works - ENERGETIC EXPLANATION */}
      <section className="py-20 bg-gradient-to-br from-electric-blue/5 to-neon-purple/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black text-center mb-16">
              <span className="gradient-text">How Click It Works</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center glass-card p-8 card-hover">
                <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-electric-blue to-neon-purple flex items-center justify-center mb-6 animate-pulse-glow">
                  <Search className="h-10 w-10 text-pure-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">Find Products</h3>
                <p className="text-deep-space/70 leading-relaxed">Upload an image or paste a product link to find matching items across multiple stores instantly.</p>
              </div>
              <div className="flex flex-col items-center text-center glass-card p-8 card-hover">
                <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-neon-purple to-hot-pink flex items-center justify-center mb-6 animate-pulse-glow" style={{ animationDelay: '0.5s' }}>
                  <Plus className="h-10 w-10 text-pure-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">Save to Your Cart</h3>
                <p className="text-deep-space/70 leading-relaxed">Add products from different stores to your unified Click It Cart and organize your shopping.</p>
              </div>
              <div className="flex flex-col items-center text-center glass-card p-8 card-hover">
                <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-hot-pink to-sunset-orange flex items-center justify-center mb-6 animate-pulse-glow" style={{ animationDelay: '1s' }}>
                  <ShoppingCart className="h-10 w-10 text-pure-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">Purchase with Ease</h3>
                <p className="text-deep-space/70 leading-relaxed">Open each store's checkout page with a single click when you're ready to buy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA - EXPLOSIVE ENERGY! */}
      <section className="py-16 bg-gradient-to-r from-electric-blue via-neon-purple to-hot-pink relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/90 via-neon-purple/90 to-hot-pink/90"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-black mb-6 text-pure-white">
              Ready to revolutionize your shopping?
            </h2>
            <p className="text-xl text-pure-white/90 mb-10 leading-relaxed">
              🚀 <strong>One Cart. Endless Possibilities. Zero Limits.</strong>
            </p>
            <Button 
              className="bg-pure-white text-electric-blue hover:bg-pure-white/90 font-black text-lg px-10 py-4 rounded-xl shadow-2xl hover:shadow-pure-white/30 transition-all duration-300 transform hover:scale-105" 
              onClick={() => document.getElementById('search-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Zap className="mr-2 h-6 w-6" />
              Start Shopping Now
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
