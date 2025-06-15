
import React from "react";
import { ShoppingCart, Star, Truck, Check } from "lucide-react";

const features = [
  {
    icon: <ShoppingCart className="text-cartoon-blue h-10 w-10" />,
    title: "One Cart. Every Site.",
    subtitle: "Add products from all your favorite stores in one place.",
  },
  {
    icon: <Truck className="text-cartoon-green h-10 w-10" />,
    title: "Fast & Secure Checkout",
    subtitle: "Just one payment for your whole haul — fully tracked.",
  },
  {
    icon: <Star className="text-cartoon-orange h-10 w-10" />,
    title: "Top Brands & New Finds",
    subtitle: "Mix big brands with unique discoveries, easily.",
  },
  {
    icon: <Check className="text-cartoon-blue h-10 w-10" />,
    title: "Simple. Reliable. Yours.",
    subtitle: "No hassle, no mess — just a smarter way to shop.",
  }
];

const BenefitsRow = () => (
  <div className="max-w-5xl mx-auto my-20 px-4 flex flex-col sm:flex-row gap-10 z-10 relative">
    {features.map((f, i) => (
      <div
        key={i}
        className="flex-1 min-w-[220px] bg-white/95 border-2 border-cartoon-blue rounded-3xl shadow-cartoon px-8 py-10 flex flex-col items-center group hover:bg-cartoon-blue/10 focus:bg-cartoon-blue/20 transition-all outline-none"
        tabIndex={0}
        aria-label={f.title}
      >
        <div className="mb-5">{f.icon}</div>
        <div className="font-cartoon text-2xl sm:text-3xl font-extrabold mb-2 text-cartoon-blue text-center" style={{ textShadow: "0 1px 0 #fff" }}>
          {f.title}
        </div>
        <div className="text-lg sm:text-xl font-sans font-semibold text-cartoon-blue/90 text-center" style={{ lineHeight: 1.5 }}>
          {f.subtitle}
        </div>
      </div>
    ))}
  </div>
);

export default BenefitsRow;
