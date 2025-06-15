
import React from "react";
import { Search, Plus, ShoppingCart } from "lucide-react";

const HowItWorks = () => (
  <section className="py-20 bg-cartoon-blue/10 border-t-4 border-cartoon-blue">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-cartoon font-extrabold text-center mb-14 text-cartoon-blue uppercase drop-shadow-sm tracking-tight">
          How Click It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div
            className="flex flex-col items-center text-center bg-white/95 border-2 border-cartoon-blue rounded-3xl shadow-cartoon px-10 py-14 focus-within:bg-cartoon-blue/20 hover:bg-cartoon-blue/10 transition-all outline-none"
            tabIndex={0}
            aria-label="Try Stuff"
          >
            <div className="h-24 w-24 rounded-full bg-cartoon-blue flex items-center justify-center mb-7 shadow-cartoon">
              <Search className="h-14 w-14 text-cartoon-cream" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-cartoon font-extrabold text-cartoon-blue mb-3 leading-none">
              Try Stuff
            </h3>
            <p className="text-lg sm:text-xl font-sans font-semibold text-cartoon-blue/90 max-w-xs">
              Paste a link or upload a picture.<br />Instantly see your shopping matches.
            </p>
          </div>
          <div
            className="flex flex-col items-center text-center bg-cartoon-yellow rounded-3xl border-2 border-cartoon-blue shadow-cartoon px-10 py-14 focus-within:bg-cartoon-blue/20 hover:bg-cartoon-yellow/90 transition-all outline-none"
            tabIndex={0}
            aria-label="Collect Anything"
          >
            <div className="h-24 w-24 rounded-full bg-cartoon-blue flex items-center justify-center mb-7 shadow-cartoon">
              <Plus className="h-14 w-14 text-cartoon-cream" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-cartoon font-extrabold text-cartoon-yellow mb-3 leading-none">
              Collect Anything
            </h3>
            <p className="text-lg sm:text-xl font-sans font-semibold text-cartoon-blue/90 max-w-xs">
              Pick products from any store.<br />Mix and match your dream basket.
            </p>
          </div>
          <div
            className="flex flex-col items-center text-center bg-cartoon-blue/15 rounded-3xl border-2 border-cartoon-blue shadow-cartoon px-10 py-14 focus-within:bg-cartoon-blue/20 hover:bg-cartoon-blue/25 transition-all outline-none"
            tabIndex={0}
            aria-label="Checkout — Easy"
          >
            <div className="h-24 w-24 rounded-full bg-cartoon-blue flex items-center justify-center mb-7 shadow-cartoon">
              <ShoppingCart className="h-14 w-14 text-cartoon-cream" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-cartoon font-extrabold text-cartoon-blue mb-3 leading-none">
              Checkout — Easy
            </h3>
            <p className="text-lg sm:text-xl font-sans font-semibold text-cartoon-blue/90 max-w-xs">
              Pay once for all your picks.<br />Secure, simple, and organized delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
