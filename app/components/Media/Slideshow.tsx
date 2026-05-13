"use client";

import { useEffect, useState } from "react";
import { main_slideshow } from "../../data/main_slideshow";
import Image from "next/image";
import "./Slideshow.css";

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
    setIndex((prev) => (prev + 1) % main_slideshow.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? main_slideshow.length - 1 : prev - 1
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
			{main_slideshow.map((slide, i) => (
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
					{main_slideshow.map((_, i) => (
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