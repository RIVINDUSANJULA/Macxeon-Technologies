{/*"use client"

import { useEffect, useState, useRef } from "react";
import React from 'react'
import "@/app/(home)/page.css"

function homes1() {

  const [scrollUps1, setScrollUps1] = useState(true);
  const [scrollDowns1, setScrollDowns1] = useState(false);
  
    {useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY < 250) {
          setScrollUps1(true);
          setScrollDowns1(false);
        } else {
          setScrollUps1(false);
          setScrollDowns1(true);
        }
        if (window.screenY == 0) {
          setScrollUps1(false)
          setScrollDowns1(false)
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);}

return (
  <div>
    <div className={`s1 ${scrollState === 'scrolling' ? "scrolling" : ""} ${scrollState === 'completed' ? "completed" : ""}`}>
      
      <h2 className="pt-40 text-7xl">Want To Taste Our Tea?</h2>
      <p className="p1 pt-45">Each tea purchase comes with organically and ethically grown loose <br/> LIYONTA tea, carefully blended to create the perfect cup.</p>
    </div>
  </div>
)
}

export default homes1
*/}