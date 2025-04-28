
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-sky-blue flex items-center justify-center">
            <ShoppingCart className="h-4 w-4 text-navy" />
          </div>
          <h1 className="text-xl font-bold text-navy">Click It</h1>
        </Link>
        
        <div className="flex items-center gap-4">
          <Link to="/cart">
            <Button variant="outline" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-sky-blue text-navy text-xs w-5 h-5 rounded-full flex items-center justify-center">
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
