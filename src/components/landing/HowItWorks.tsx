
import React from "react";
import { Search, Plus, ShoppingCart } from "lucide-react";

const steps = [
  {
    title: "Try Stuff",
    description: (
      <>
        Paste a link or upload a picture.<br />Instantly see your shopping matches.
      </>
    ),
    icon: <Search className="h-12 w-12 text-cartoon-cream" strokeWidth={2.2} />,
    bg: "bg-cartoon-blue",
    card: "bg-cartoon-blue/90 border-cartoon-yellow",
    titleColor: "text-cartoon-yellow",
  },
  {
    title: "Collect Anything",
    description: (
      <>
        Pick products from any store.<br />Mix and match your dream basket.
      </>
    ),
    icon: <Plus className="h-12 w-12 text-cartoon-yellow" strokeWidth={2.2} />,
    bg: "bg-cartoon-orange",
    card: "bg-cartoon-orange/90 border-cartoon-blue",
    titleColor: "text-cartoon-cream",
  },
  {
    title: "Checkout — Easy",
    description: (
      <>
        Pay once for all your picks.<br />Secure, simple, and organized delivery.
      </>
    ),
    icon: <ShoppingCart className="h-12 w-12 text-cartoon-blue" strokeWidth={2.2} />,
    bg: "bg-cartoon-yellow",
    card: "bg-cartoon-yellow/90 border-cartoon-orange",
    titleColor: "text-cartoon-blue",
  },
];

const HowItWorks = () => (
  <section className="py-20 bg-cartoon-cream border-t-4 border-cartoon-blue">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-4xl sm:text-5xl font-cartoon font-extrabold text-center mb-14 text-cartoon-blue uppercase tracking-tight">
        How Click It Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {steps.map((step) => (
          <div
            key={step.title}
            className={`flex flex-col items-center text-center border-2 ${step.card} rounded-2xl px-7 py-10 min-h-[320px] hover:scale-105 transition-transform duration-200`}
            tabIndex={0}
            aria-label={step.title}
          >
            <div className={`flex items-center justify-center ${step.bg} rounded-full mb-6 h-20 w-20`}>
              {step.icon}
            </div>
            <h3 className={`text-2xl font-cartoon font-bold mb-2 ${step.titleColor}`}>{step.title}</h3>
            <p className="text-base sm:text-lg font-sans font-semibold text-cartoon-blue/95">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
