
import React from "react";
import { ShoppingCart, Star, Truck, Check } from "lucide-react";

const features = [
  {
    icon: <ShoppingCart className="text-electric-blue h-7 w-7" />,
    title: "All-in-One Cart",
    subtitle: "Products from any store, all in one click.",
    badge: "🌟"
  },
  {
    icon: <Truck className="text-neon-purple h-7 w-7" />,
    title: "Fast Delivery",
    subtitle: "We find real-time store delivery speeds.",
    badge: "⚡"
  },
  {
    icon: <Star className="text-hot-pink h-7 w-7" />,
    title: "Best Deals",
    subtitle: "Compare prices across the web instantly.",
    badge: "💸"
  },
  {
    icon: <Check className="text-lime-green h-7 w-7" />,
    title: "100% Secure",
    subtitle: "Shop safe with trusted checkout links.",
    badge: "🛡️"
  }
];

const BenefitsRow = () => (
  <div className="max-w-5xl mx-auto mt-[-3rem] mb-16 px-2 flex flex-col sm:flex-row gap-4 z-10 relative">
    {features.map((f, i) => (
      <div
        key={i}
        className="flex-1 min-w-[180px] glass-card border-2 border-hot-pink/60 rounded-2xl shadow-lg px-5 py-6 flex flex-col items-center group hover:bg-hot-pink/5 transition"
      >
        <div className="mb-2">{f.icon}</div>
        <div className="font-bold text-lg mb-0.5 text-deep-space flex items-center gap-1">
          <span className="text-2xl">{f.badge}</span>
          {f.title}
        </div>
        <div className="text-xs text-deep-space/70">{f.subtitle}</div>
      </div>
    ))}
  </div>
);

export default BenefitsRow;
