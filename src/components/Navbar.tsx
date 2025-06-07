
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-pure-white/90 backdrop-blur-xl shadow-lg border-b border-electric-blue/20 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-electric-blue to-neon-purple flex items-center justify-center shadow-lg animate-pulse-glow">
            <ShoppingCart className="h-5 w-5 text-pure-white" />
          </div>
          <h1 className="text-2xl font-black gradient-text">Click It</h1>
        </Link>
        
        <div className="flex items-center gap-4">
          <Link to="/cart">
            <Button variant="outline" size="icon" className="relative bg-pure-white border-2 border-electric-blue hover:bg-electric-blue hover:border-electric-blue group transition-all duration-300">
              <ShoppingCart className="h-5 w-5 text-electric-blue group-hover:text-pure-white transition-colors" />
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-hot-pink to-sunset-orange text-pure-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold shadow-lg animate-pulse">
                0
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
