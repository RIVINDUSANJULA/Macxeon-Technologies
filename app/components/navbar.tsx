"use client"
import { useEffect, useState } from "react";
import Link from 'next/link'


export default function Navbar() {

  const [scrollUps, setScrollUps] = useState(true);
  const [scrollDowns, setScrollDowns] = useState(false);

  {useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
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
    <div className={`pt-7 w-full z-50 fixed items-end ${scrollUps ? "transition-all duration-650 ease-in-out bg-transparent" : ""} ${scrollDowns ? "transition-all duration-650 ease-in-out bg-black/45 backdrop-blur-sm" : ""}`}>
      <div className="ml-20 mt-0 absolute bg-[url('/liyonta_tea_logo.webp')] bg-contain bg-no-repeat w-25 h-8 justify-start"></div>  
      <div className='pb-4 flex justify-end mr-15'>
        <Link href="/" className='links text-white text-1xl font-bold hover:text-orange-300 transition-colors mr-10'>Home</Link>
        <Link href="/about-us" className='links text-white text-1xl font-bold hover:text-orange-300 transition-colors mr-10'>About</Link>
        <Link href="/shop" className='links text-white text-1xl font-bold hover:text-orange-300 transition-colors mr-10'>Shop</Link>
        <Link href="/contact-us" className='links text-white text-1xl font-bold hover:text-orange-300 transition-colors mr-10'>Contact</Link>
      </div>
      <div className="w-7xl relative border-t border-white/60 mx-auto max-w-7xl mt-5.5"></div>
    </div>
  )
}
