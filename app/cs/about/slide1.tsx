"use client"
import { useEffect, useState } from "react";
import './design.css'
import Image from "next/image";
import scrollImg from '@/public/Scroll-Down-white.gif'


export default function Slide1() {

  const [scrollUps, setScrollUps] = useState(true);
  const [scrollDowns, setScrollDowns] = useState(false);

  {useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 250) {
        setScrollUps(true);
        setScrollDowns(false);
      } else {
        setScrollUps(false);
        setScrollDowns(true);
      }
      if (window.screenY == 0) {
        setScrollUps(false)
        setScrollDowns(false)
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);}

  return (
    <div className="">
      <div className={`a1 self-center pb-[10px] 
        ${scrollUps ? "sup" : ""} 
        ${scrollDowns ? "sdown" : ""}`}
        >
        
        <h2 className="text-white box-border font-serif text-7xl font-normal leading-normal text-center [text-size-adjust:100%] [unicode-bidi:isolate] self-center my-[10px] mx-auto">Our Journey in Every Sip</h2>
        <p className="text-white box-border font-sans text-[20px]  leading-[32px] my-[20px] mx-0 text-center [text-size-adjust:100%] [unicode-bidi:isolate] mb-15">Step into a world where passion meets perfection, crafting timeless teas from <br/> the heart of Sri Lanka.</p>
        <Image
          src={scrollImg}
          alt="Scroll Down Image"
          className='w-[136.047px] h-[102.031px]'
        />
      </div>
    </div>);
}
