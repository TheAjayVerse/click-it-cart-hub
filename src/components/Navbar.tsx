
import React from "react";
import { Link } from "react-router-dom";
import CartoonMascot from "./CartoonMascot";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cartoon-cream/95 backdrop-blur py-4 shadow-cartoon border-b-4 border-cartoon-orange">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Mascot + Logo */}
        <Link to="/" className="flex items-center gap-4">
          <CartoonMascot />
          <h1 className="text-4xl font-cartoon text-cartoon-orange font-extrabold tracking-wide drop-shadow-[2px_4px_0_#FFF0D5]">
            Click It
          </h1>
        </Link>
        {/* Fun nav/link, not salesy */}
        <div className="flex items-center gap-6">
          <Link to="/" className="font-cartoon text-cartoon-red text-xl tracking-wide px-3 hover:bg-cartoon-yellow/80 rounded-2xl transition-all duration-200">
            Play
          </Link>
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
