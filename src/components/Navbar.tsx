
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cartoon-cream/95 backdrop-blur py-4 shadow-cartoon border-b-4 border-cartoon-orange">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Image */}
        <Link to="/" className="flex items-center gap-4">
          <img
            src="/lovable-uploads/ae98b796-f019-437a-b820-d90c7541b536.png"
            alt="Click It logo"
            className="w-14 h-14 object-contain rounded-xl shadow-cartoon border-4 border-cartoon-orange bg-cartoon-cream"
            style={{ background: "#FFF0D5" }}
          />
          <h1 className="text-4xl font-cartoon text-cartoon-orange font-extrabold tracking-wide drop-shadow-[2px_4px_0_#FFF0D5]">
            Click It
          </h1>
        </Link>
        <div className="flex items-center gap-6">
          {/* Removed 'Play' button */}
          <Link to="/cart">
            <Button
              variant="outline"
              size="icon"
              className="relative bg-cartoon-yellow border-4 border-cartoon-orange hover:bg-cartoon-red/90 group rounded-full shadow-cartoon transition-all duration-300"
            >
              <ShoppingCart className="h-7 w-7 text-cartoon-orange group-hover:text-cartoon-cream transition-colors" />
              <span className="absolute -top-2 -right-2 bg-cartoon-red text-cartoon-cream font-cartoon text-sm w-7 h-7 rounded-full flex items-center justify-center font-extrabold border-4 border-cartoon-cream shadow-cartoon animate-bounce">
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

