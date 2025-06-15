
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FooterCtaProps {
  onTryClick: () => void;
}

const FooterCta: React.FC<FooterCtaProps> = ({ onTryClick }) => (
  <section className="py-12 bg-cartoon-blue border-t-4 border-cartoon-blue">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-cartoon font-extrabold mb-6 text-cartoon-cream">
          Try the Universal Cart
        </h2>
        <p className="text-xl text-cartoon-yellow mb-8 font-sans">
          🚀 <strong>The fun way to shop smart, everywhere. Free forever core!</strong>
        </p>
        <Button 
          className="bg-cartoon-yellow text-cartoon-blue font-cartoon font-extrabold text-lg px-10 py-4 rounded-3xl shadow-cartoon hover:bg-cartoon-cream hover:text-cartoon-blue transition-all"
          onClick={onTryClick}
        >
          <ArrowRight className="mr-2 h-7 w-7" />
          Try Click It!
        </Button>
      </div>
    </div>
  </section>
);

export default FooterCta;
