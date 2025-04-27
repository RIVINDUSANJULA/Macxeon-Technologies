"use client"

import React, { useState, useEffect } from 'react';

interface SliderProps {
  slides: {
    first: string[];
    second: string[];
  }[];
}

export const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides[0].first.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides]);

  return (
    <div className="relative w-full h-64 flex flex-col items-center justify-center bg-gray-900 text-white p-6 rounded-lg">
      <div className="flex space-x-8">
        {slides[currentIndex].first.map((value_slide, index) => (
          <div key={index} className="text-center">
            <h2 className="text-4xl font-bold">{value_slide}</h2>
            <p className="text-sm">{slides[0].second[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};