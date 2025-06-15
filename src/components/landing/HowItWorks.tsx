
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
    icon: <Search className="h-16 w-16 text-cartoon-cream drop-shadow-md" strokeWidth={2.2} />,
    bg: "bg-cartoon-blue",
    shadow: "shadow-[0_8px_0_0_#69A7F6,0_0_0_4px_#FFD06A]",
    ring: "before:absolute before:-inset-2 before:rounded-full before:animate-pulse-glow before:border-4 before:border-cartoon-yellow before:z-[-1]",
    card: "bg-cartoon-blue/90 border-cartoon-yellow",
    titleColor: "text-cartoon-yellow",
    anim: "animate-fade-in",
  },
  {
    title: "Collect Anything",
    description: (
      <>
        Pick products from any store.<br />Mix and match your dream basket.
      </>
    ),
    icon: <Plus className="h-16 w-16 text-cartoon-yellow drop-shadow-md" strokeWidth={2.2} />,
    bg: "bg-cartoon-orange",
    shadow: "shadow-[0_8px_0_0_0_#F9743E,0_0_0_4px_#FFF0D5]",
    ring: "before:absolute before:-inset-[10px] before:rounded-full before:animate-pulse-glow before:border-4 before:border-cartoon-blue before:z-[-1]",
    card: "bg-cartoon-orange/90 border-cartoon-blue",
    titleColor: "text-cartoon-cream",
    anim: "animate-fade-in",
  },
  {
    title: "Checkout — Easy",
    description: (
      <>
        Pay once for all your picks.<br />Secure, simple, and organized delivery.
      </>
    ),
    icon: <ShoppingCart className="h-16 w-16 text-cartoon-blue drop-shadow-md" strokeWidth={2.2} />,
    bg: "bg-cartoon-yellow",
    shadow: "shadow-[0_8px_0_0_0_#FFD06A,0_0_0_4px_#69A7F6]",
    ring: "before:absolute before:-inset-2 before:rounded-full before:animate-pulse-glow before:border-4 before:border-cartoon-orange before:z-[-1]",
    card: "bg-cartoon-yellow/90 border-cartoon-orange",
    titleColor: "text-cartoon-blue",
    anim: "animate-fade-in",
  },
];

const HowItWorks = () => (
  <section className="py-24 bg-cartoon-blue/10 border-t-4 border-cartoon-blue relative overflow-hidden">
    {/* playful background dots */}
    <div className="absolute w-full h-full pointer-events-none z-0">
      <svg width="100%" height="100%" className="absolute -left-12 -top-8 opacity-30" style={{filter: 'blur(1px)'}}>
        <circle cx="80" cy="70" r="40" fill="#69A7F6" />
        <circle cx="220" cy="120" r="30" fill="#FFD06A" />
        <circle cx="80" cy="240" r="32" fill="#F9743E" />
      </svg>
      <svg width="100%" height="100%" className="absolute right-0 bottom-0 opacity-20" style={{filter: 'blur(2px)'}}>
        <circle cx="580" cy="320" r="44" fill="#E94E49" />
        <circle cx="440" cy="210" r="36" fill="#FFD06A" />
        <circle cx="700" cy="350" r="24" fill="#69A7F6" />
      </svg>
    </div>
    <div className="container mx-auto px-4 relative z-10">
      {/* Add a glassy background for text readability */}
      <div className="absolute inset-0 -mx-4 rounded-[2.5rem] bg-cartoon-cream/90 backdrop-blur-lg shadow-[0_8px_32px_0_rgba(207,240,255,0.14)] -z-10" />
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-cartoon font-extrabold text-center mb-16 text-cartoon-blue uppercase drop-shadow tracking-tight">
          How Click It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className={`relative group flex flex-col items-center text-center border-4 ${step.card} rounded-[2.75rem] ${step.shadow} px-10 py-16 min-h-[400px] outline-none hover:scale-[1.028] hover:-rotate-2 transition-all duration-300 focus-within:ring-4 focus-within:ring-cartoon-yellow mb-3 md:mb-0 ${step.anim}`}
              tabIndex={0}
              aria-label={step.title}
              style={{
                // Slight staggering for playful effect
                marginTop: idx === 0 ? "0px" : idx === 1 ? "24px" : "10px",
                marginBottom: idx === 1 ? "0px" : idx === 2 ? "20px" : "0px",
                zIndex: 1 + idx,
              }}
            >
              <div className={`relative h-28 w-28 mb-8 flex items-center justify-center rounded-full ${step.bg} border-4 border-white shadow-cartoon transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${step.ring} animate-pulse`} style={{ boxShadow: "0 10px 0 #CB6F2C, 0 6px 24px #00000016" }}>
                {step.icon}
                {/* Sparkle accent */}
                <svg width="24" height="24" className="absolute top-2 right-2 group-hover:scale-110 transition">
                  <circle cx="12" cy="12" r="4" fill="#FFD06A" opacity="0.22"/>
                </svg>
              </div>
              <h3 className={`text-2xl sm:text-3xl font-cartoon font-extrabold mb-3 leading-none drop-shadow-md ${step.titleColor}`}>
                {step.title}
              </h3>
              <p className="text-lg sm:text-xl font-sans font-semibold text-cartoon-blue/95 max-w-xs" style={{ textShadow: "0 1px 0 #FFF" }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
