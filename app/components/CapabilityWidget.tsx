"use client"

import * as React from "react"
import Image from "next/image";
import "./capability-widget.css";

const capabilities = [
  {
    src: "/capability1.png",
    caption: "Creating emergent defense technology",
  },
  {
    src: "/capability1.png",
    caption: "Creating emergent defense technology",
  },
  {
    src: "/capability1.png",
    caption: "Creating emergent defense technology",
  },
  {
    src: "/capability1.png",
    caption: "Creating emergent defense technology",
  },
];

export default function CapabilityWidget() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
		{
			capabilities.map((capability, i) => (
				<div key={i} className="capability-container p-4">
					<div className="capability-text">
						{capability.caption}
					</div>
				</div>
			))
		};
		</div>
	)
}
