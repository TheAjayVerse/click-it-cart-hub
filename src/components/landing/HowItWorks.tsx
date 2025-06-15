
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
    icon: <Search className="h-10 w-10 text-cartoon-blue" strokeWidth={2.2} />,
  },
  {
    title: "Collect Anything",
    description: (
      <>
        Pick products from any store.<br />Mix and match your dream basket.
      </>
    ),
    icon: <Plus className="h-10 w-10 text-cartoon-orange" strokeWidth={2.2} />,
  },
  {
    title: "Checkout — Easy",
    description: (
      <>
        Pay once for all your picks.<br />Secure, simple, and organized delivery.
      </>
    ),
    icon: <ShoppingCart className="h-10 w-10 text-cartoon-yellow" strokeWidth={2.2} />,
  },
];

const HowItWorks = () => (
  <section className="py-16 bg-white border-t border-cartoon-blue">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-3xl sm:text-4xl font-cartoon font-bold text-center mb-10 text-cartoon-blue uppercase">
        How Click It Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div
            key={step.title}
            className="flex flex-col items-center text-center bg-white border border-cartoon-blue rounded-xl p-7 min-h-[240px]"
            tabIndex={0}
            aria-label={step.title}
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-cartoon font-semibold mb-2 text-cartoon-blue">{step.title}</h3>
            <p className="text-base font-sans text-cartoon-blue/95">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
