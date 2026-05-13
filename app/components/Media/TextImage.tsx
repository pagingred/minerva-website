// components/Media/TextImage.tsx
import Image from "next/image";
import "./TextImage.css";

type TextImageProps = {
  src: string;
  alt: string;
  text: string;
};

export default function ImageWithText({ src, alt, text } : TextImageProps) {
  return (
    <div className="container">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="image"
        sizes="(max-width: 768px) 100vw, 800px"
      />
      <div className="overlay">
        <span className="text">{text}</span>
      </div>
    </div>
  );
}