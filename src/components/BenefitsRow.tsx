
import React from "react";
import { ShoppingCart, Star, Truck, Check } from "lucide-react";

const features = [
  {
    icon: <ShoppingCart className="text-cartoon-orange h-8 w-8" />,
    title: "So Easy!",
    subtitle: "No sales. Just drop stuff in your Click-It!",
    badge: "🛒"
  },
  {
    icon: <Truck className="text-cartoon-green h-8 w-8" />,
    title: "Zip Zap",
    subtitle: "It works fast — like a cartoon race!",
    badge: "💨"
  },
  {
    icon: <Star className="text-cartoon-blue h-8 w-8" />,
    title: "Silly Finds",
    subtitle: "It finds weird, random, fun stuff.",
    badge: "🥒"
  },
  {
    icon: <Check className="text-cartoon-red h-8 w-8" />,
    title: "Just for Fun",
    subtitle: "Nobody can buy — this is a joke, okay?!",
    badge: "😜"
  }
];

const BenefitsRow = () => (
  <div className="max-w-5xl mx-auto -mt-16 mb-14 px-2 flex flex-col sm:flex-row gap-6 z-10 relative">
    {features.map((f, i) => (
      <div
        key={i}
        className="flex-1 min-w-[170px] bg-cartoon-cream border-4 border-cartoon-orange rounded-3xl shadow-cartoon px-6 py-7 flex flex-col items-center group hover:bg-cartoon-yellow/80 transition-all"
      >
        <div className="mb-1.5">{f.icon}</div>
        <div className="font-cartoon text-2xl mb-1 text-cartoon-orange flex items-center gap-1 font-extrabold">
          <span className="text-2xl">{f.badge}</span>
          {f.title}
        </div>
        <div className="text-md text-cartoon-red/80 font-cartoon text-center">{f.subtitle}</div>
      </div>
    ))}
  </div>
);

export default BenefitsRow;
