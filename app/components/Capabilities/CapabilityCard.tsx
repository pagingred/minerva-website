"use client";

import { useState } from "react";
import Image from "next/image";

type CapabilityCardProps = {
  title: string;
  category: string;
  image: string;
  description: string[];
  index: number;
};

export default function CapabilityCard({
  title,
  category,
  image,
  description,
  index,
}: CapabilityCardProps) {
  const [expanded, setExpanded] = useState(false);

  const visibleItems = expanded
    ? description
    : description.slice(0, 5);

  return (
    <div className="group relative overflow-hidden border dark:border-zinc-800 bg-zinc-200 dark:bg-zinc-900 dark:hover:border-zinc-700 transition">
      <div
		  className={`flex flex-col md:flex-row ${
			index % 2 !== 0 ? "md:flex-row-reverse" : ""
		  }`}
		>

        {/* Image */}
        <div className="relative w-full md:w-1/2">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover opacity-80 group-hover:opacity-100 transition"
          />
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          
          {/*<p className="text-xs uppercase tracking-wider text-zinc-500 mb-2">
            {category}
          </p>*/}

          <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">
            {title}
          </h3>

          <ul className="space-y-5">
            {visibleItems.map((item) => (
              <li
                key={item}
                className="text-sm text-zinc-300 flex items-start gap-2"
              >
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#ff7e28] shrink-0" />
                <span className="text-black dark:text-white">{item}</span>
              </li>
            ))}
          </ul>

          {description.length > 4 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="cursor-pointer mt-4 text-sm text-[#ff7e28] hover:text-[#ff964f] transition"
            >
              {expanded
                ? "Show less"
                : `+ ${description.length - 4} more capabilities`}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}