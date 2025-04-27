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
      <div className={`c1 self-center pb-[10px] 
        ${scrollUps ? "sup" : ""} 
        ${scrollDowns ? "sdown" : ""}`}
        >
        <h2 className="text-white box-border font-lora text-[70px] font-normal leading-normal text-center align-self-center mx-auto my-2 w-[659.125px] h-[70px]">Connect Over a Cup</h2>
        <p className="text-white box-border font-sans text-[20px] font-light leading-[32px] text-center my-5 mx-0 w-[453.5px] h-[96px]">We&apos;d love to hear from you! Reach out with your questions, feedback, or inquiries, and we&apos;ll be happy to assist.</p>
        <Image src={scrollImg} alt="Scroll Down Image" className="w-[136.047px] h-[102.031px]" />
      </div>
    </div>);
}

