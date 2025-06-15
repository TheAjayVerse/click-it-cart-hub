
import React from "react";
import { Search } from "lucide-react";

const LoadingSection = () => (
  <section className="py-16 bg-cartoon-blue/10">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="h-24 w-24 rounded-full bg-cartoon-blue flex items-center justify-center animate-bounce shadow-cartoon">
            <Search className="h-12 w-12 text-cartoon-cream" />
          </div>
          <h2 className="text-2xl font-cartoon font-bold text-cartoon-blue">Finding matches...</h2>
          <p className="text-cartoon-blue/70 font-sans">Scanning for your best fit!</p>
        </div>
      </div>
    </div>
  </section>
);

export default LoadingSection;
