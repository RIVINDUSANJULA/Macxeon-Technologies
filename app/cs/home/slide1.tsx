"use client"
import { useEffect, useState } from "react";
import './design.css'

export default function Slide1() {
  const [scrollUps, setScrollUps] = useState(true);
  const [scrollDowns, setScrollDowns] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 250) {
        setScrollUps(true);
        setScrollDowns(false);
      } else {
        setScrollUps(false);
        setScrollDowns(true);
      }
      if (window.scrollY === 0) {
        setScrollUps(false);
        setScrollDowns(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <div className={`s1 self-center pb-[10px] 
        ${scrollUps ? "sup" : ""} 
        ${scrollDowns ? "sdown" : ""}`}>
        
        <h2 className="text-white box-border font-normal leading-normal text-center align-middle w-[511px] h-[91.75px] self-center mx-auto my-2 pt-40 text-7xl">
          Want To Taste Our Tea?
        </h2>
        
        <p className="text-white box-border font-sans text-[20px] font-light leading-[32px] my-[20px] mx-0 text-center [text-size-adjust:100%] [unicode-bidi:isolate] pt-45">
          Each tea purchase comes with organically and ethically grown loose <br /> 
          LIYONTA tea, carefully blended to create the perfect cup.
        </p>

        {/* Center the button */}
        <div className="flex justify-center mt-6">
          <button className="flex items-center gap-2 px-6 py-3 bg-white rounded-full text-black font-sans text-[18px] font-medium shadow-md hover:shadow-lg transition">
            Shop Now
            <span className="text-xl">→</span>
          </button>
        </div>

      </div>
    </div>
  );
}
