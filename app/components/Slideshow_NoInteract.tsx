"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./slideshow_nointeract.css";

const slides = [
  {
    src: "/slide1.jpg"
  },
  {
    src: "/background.png"
  }
];

export default function Slideshow_NoInteract() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div className="slideshow_nointeract">
      {slides.map((slide, i) => (
        <div key={i} className={`slide ${i === index ? "active" : ""}`}>
          <Image src={slide.src} alt="" fill priority={i === 0} />

          {/* Dark overlay */}
          <div className="overlay" />

          {/* HERO TEXT (centered) */}
          <div className="hero-text">
            <h1>
              LOOKING FORWARD <br />
              TO PROTECTING <br />
              OUR HERITAGE
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
}