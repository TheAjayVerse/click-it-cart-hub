
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
    icon: <Search className="h-8 w-8 text-cartoon-blue" strokeWidth={2} />,
  },
  {
    title: "Collect Anything",
    description: (
      <>
        Pick products from any store.<br />Mix and match your dream basket.
      </>
    ),
    icon: <Plus className="h-8 w-8 text-cartoon-orange" strokeWidth={2} />,
  },
  {
    title: "Checkout — Easy",
    description: (
      <>
        Pay once for all your picks.<br />Secure, simple, and organized delivery.
      </>
    ),
    icon: <ShoppingCart className="h-8 w-8 text-cartoon-yellow" strokeWidth={2} />,
  },
];

const HowItWorks = () => (
  <section className="py-12 bg-white border-t border-cartoon-blue">
    <div className="max-w-2xl mx-auto px-4">
      <h2 className="text-3xl font-cartoon font-bold text-center mb-8 text-cartoon-blue uppercase">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {steps.map((step) => (
          <div
            key={step.title}
            className="flex flex-col items-center text-center bg-white border border-cartoon-blue rounded-lg p-6 min-h-[180px]"
            tabIndex={0}
            aria-label={step.title}
          >
            <div className="mb-2">{step.icon}</div>
            <h3 className="text-lg font-bold text-cartoon-blue mb-1">{step.title}</h3>
            <p className="text-base text-black">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;

