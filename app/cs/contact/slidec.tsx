"use client"
import { useEffect, useState } from "react";
import './design.css'
import Image from "next/image";
import scrollImg from '@/public/Scroll-Down-white.gif'


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
      <div className={`c1 self-center pb-[10px] 
        ${scrollUps ? "sup" : ""} 
        ${scrollDowns ? "sdown" : ""}`}
        >
        <h2 className="text-white box-border font-normal leading-normal text-center align-middle  self-center mx-auto my-2 pt-40 sm:pt-50 md:pt-60 lg:pt-70 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Connect Over a Cup
        </h2>
        <p className="text-white box-border font-sans text-[20px] font-light leading-[32px] my-[20px] mx-0 text-center [text-size-adjust:100%] [unicode-bidi:isolate] ml-5 mr-5 md:ml-7 md:mr-7">
          We&apos;d love to hear from you! Reach out with your questions, feedback, or inquiries, and we&apos;ll be happy to assist.
        </p>
        <div className="w-[135px] sm:w-[160px] md:w-[200px]">
          <Image
            src={scrollImg}
            alt="Scroll Down Image"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>);
}

