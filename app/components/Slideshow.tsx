"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./slideshow.css";

const slides = [
  {
    src: "/slide1.jpg",
    caption: "Creating emergent defense technology",
  },
  {
    src: "/slide2.png",
    caption: "Using state of the art software",
  }
];

export default function Slideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
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
    <div className="slideshow">
      {slides.map((slide, i) => (
        <div key={i} className={`slide ${i === index ? "active" : ""}`}>
          <Image src={slide.src} alt="" fill priority={i === 0} />

          {/* Dark overlay */}
          <div className="overlay" />

          {/* HERO TEXT (centered) */}
          <div className="hero-text">
            <h1>
              LOOKING FORWARD <br />
              TO PROTECT OUR <br />
              HERITAGE
            </h1>
          </div>

          {/* Caption */}
          <div className="caption">{slide.caption}</div>
        </div>
      ))}

      {/* Arrows */}
      <button className="arrow left" onClick={prevSlide}>
        ‹
      </button>
      <button className="arrow right" onClick={nextSlide}>
        ›
      </button>

      {/* Dots */}
      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={i === index ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}