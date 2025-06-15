
import React from "react";
import { ShoppingCart, Star, Truck, Check } from "lucide-react";

const features = [
  {
    icon: <ShoppingCart className="text-cartoon-blue h-8 w-8" />,
    title: "One Cart. Every Site.",
    subtitle: "Add products from all your favorite stores in one place.",
  },
  {
    icon: <Truck className="text-cartoon-green h-8 w-8" />,
    title: "Fast & Secure Checkout",
    subtitle: "Just one payment for your whole haul — fully tracked.",
  },
  {
    icon: <Star className="text-cartoon-orange h-8 w-8" />,
    title: "Top Brands & New Finds",
    subtitle: "Mix big brands with unique discoveries, easily.",
  },
  {
    icon: <Check className="text-cartoon-blue h-8 w-8" />,
    title: "Simple. Reliable. Yours.",
    subtitle: "No hassle, no mess — just a smarter way to shop.",
  }
];

const BenefitsRow = () => (
  <div className="max-w-5xl mx-auto my-16 px-2 flex flex-col sm:flex-row gap-6 z-10 relative">
    {features.map((f, i) => (
      <div
        key={i}
        className="flex-1 min-w-[200px] bg-white/90 border-2 border-cartoon-blue rounded-3xl shadow-cartoon px-7 py-8 flex flex-col items-center group hover:bg-cartoon-blue/5 hover:shadow-lg transition-all"
      >
        <div className="mb-3">{f.icon}</div>
        <div className="font-cartoon text-xl mb-1 text-cartoon-blue font-bold text-center">
          {f.title}
        </div>
        <div className="text-md text-cartoon-blue/80 font-sans text-center">{f.subtitle}</div>
      </div>
    ))}
  </div>
);

export default BenefitsRow;
