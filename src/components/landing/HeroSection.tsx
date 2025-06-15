import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
interface HeroSectionProps {
  onTryItNow: () => void;
}
const HeroSection: React.FC<HeroSectionProps> = ({
  onTryItNow
}) => <section className="relative bg-cartoon-blue pt-32 pb-14 overflow-hidden border-b-4 border-cartoon-blue shadow-cartoon">
    <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
      {/* ... Decorative accents ... */}
      <div className="absolute top-14 left-10 w-32 h-20 bg-cartoon-yellow/30 rounded-[2.5rem] rotate-6" />
      <div className="absolute right-0 top-24 w-28 h-20 bg-cartoon-orange/25 rounded-[2rem] rotate-[-8deg]" />
      <div className="absolute left-1/2 top-4 w-24 h-10 bg-cartoon-cream/30 rounded-2xl -translate-x-1/2" />
    </div>
    <div className="container mx-auto px-4 relative z-10">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Mascot */}
        <div className="w-full max-w-md glass-card p-6 rounded-3xl shadow-cartoon bg-cartoon-cream/95 flex justify-center scale-105">
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80" alt="Animated shopping mascot" className="w-[260px] h-[260px] object-cover rounded-3xl border-4 border-cartoon-blue shadow-cartoon" style={{
          boxShadow: '0 12px 0 0 #69A7F6, 0 6px 18px #69A7F688'
        }} />
        </div>
        {/* Text */}
        <div className="max-w-xl text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-cartoon-blue/90 px-7 py-2 mb-4 text-lg tracking-wide font-extrabold text-cartoon-yellow shadow-cartoon font-cartoon uppercase border border-cartoon-blue/40">
            One Cart. Every Site. No Mess.
          </div>
          <h1 className="text-5xl sm:text-7xl font-cartoon font-extrabold leading-tight mb-5 text-cartoon-cream uppercase gradient-text">
            Click It<span className="inline text-cartoon-yellow drop-shadow"> Right</span>
          </h1>
          <p className="text-2xl mb-6 mt-2 text-cartoon-yellow font-sans font-medium" style={{
          letterSpacing: ".01em"
        }}>
            The universal cart that lets you shop every website —{" "}
            <span className="inline font-bold text-cartoon-blue bg-cartoon-yellow/80 border border-cartoon-blue/40 px-2 py-0.5 rounded-xl transition-all duration-200 sm:text-xl text-lg" style={{
            textShadow: "0 1px 4px #fff0d599, 0 1px 0 #fff"
          }} tabIndex={0}>add anything to one basket</span>
            . Checkout and boom — it’s like Ocean’s Eleven, but you’re winning every heist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button className="bg-cartoon-blue hover:bg-cartoon-yellow text-cartoon-cream font-cartoon font-extrabold text-xl px-10 py-4 rounded-3xl shadow-cartoon transform hover:scale-110 transition" onClick={onTryItNow}>
              Try It Now!
            </Button>
            <Button variant="outline" className="bg-cartoon-cream border-2 border-cartoon-blue text-cartoon-blue font-cartoon font-bold text-xl px-10 py-4 rounded-3xl shadow-cartoon hover:bg-cartoon-yellow hover:text-cartoon-blue transition">
              How does it work?
            </Button>
          </div>
          <div className="mt-4 text-md text-cartoon-cream/90 font-sans font-medium tracking-wide italic">
            “Duolingo meets PayPal — but for your next buy.”
          </div>
        </div>
      </div>
    </div>
  </section>;
export default HeroSection;