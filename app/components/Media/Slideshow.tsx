"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./Slideshow.css";

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

type SlideShowProps = {
	interactable: boolean;
	heroTextVisible: boolean;
	captionVisible: boolean;
};

export default function Slideshow({
		interactable, 
		heroTextVisible,
		captionVisible
	} : SlideShowProps) {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);

	return (
		<div className="slideshow">
			{slides.map((slide, i) => (
				<div key={i} className={`slide ${i === index ? "active" : ""}`}>
					<Image src={slide.src} alt="" fill priority={i === 0} />

					<div className="overlay" />

					{heroTextVisible && 
						<div className="hero-text">
							<h1>
								LOOKING FORWARD <br />
								TO PROTECT OUR <br />
								HERITAGE
							</h1>
						</div>
					}

					{captionVisible && 
						<div className="caption">
							{slide.caption}
						</div>
					}
				</div>
			))}

			{interactable && 
				<div>
					<button className="arrow left" onClick={prevSlide}>‹</button>
					<button className="arrow right" onClick={nextSlide}>›</button>
				</div>
			}
			{interactable && 
				<div className="dots">
					{slides.map((_, i) => (
						<span
							key={i}
							className={i === index ? "dot active" : "dot"}
							onClick={() => setIndex(i)}
						/>
					))}
				</div>
			}
		</div>
	);
}