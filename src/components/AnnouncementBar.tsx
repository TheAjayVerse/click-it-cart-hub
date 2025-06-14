
import React from "react";

const AnnouncementBar = () => (
  <div className="w-full bg-hot-pink text-pure-white text-center py-2 px-4 text-base font-bold tracking-wide flex items-center justify-center gap-2 animate-fade-in z-50 select-none relative">
    <span role="img" aria-label="Sparkle">✨</span>
    <span>Summer Special: <span className="underline underline-offset-2">Free Shipping</span> on your first order! <span role="img" aria-label="Package">📦</span></span>
  </div>
);

export default AnnouncementBar;
