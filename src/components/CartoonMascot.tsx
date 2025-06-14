
import React from "react";

const CartoonMascot = () => (
  <div className="cartoon-bubble flex items-center justify-center">
    <span className="block relative w-12 h-12 bg-cartoon-cream rounded-full border-4 border-cartoon-orange shadow-cartoon transition-transform duration-300 hover:scale-110">
      {/* Face */}
      <span className="absolute top-[22%] left-[28%] w-3 h-3 bg-cartoon-red rounded-full" />
      <span className="absolute top-[22%] right-[28%] w-3 h-3 bg-cartoon-red rounded-full" />
      {/* Smile */}
      <svg viewBox="0 0 40 10" className="absolute left-1/2 bottom-[18%] -translate-x-1/2" width={22} height={10}>
        <path d="M2 2 Q 10 12 22 2" stroke="#F9743E" strokeWidth="2.2" fill="none" />
      </svg>
    </span>
  </div>
);

export default CartoonMascot;
