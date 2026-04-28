"use client";

import { useState } from "react";

export default function CareersPage() {
  const [locationFilter, setLocationFilter] = useState("All Locations");

  const jobs = [
    // Engineering
    {
      title: "Software Architect",
      category: "Engineering",
      locations: ["Huntsville, AL"],
    },
    {
      title: "Full Stack Software Engineer",
      category: "Engineering",
      locations: ["Beavercreek, OH"],
    },
    {
      title: "Senior Full Stack Software Engineer",
      category: "Engineering",
      locations: ["Beavercreek, OH"],
    },

    // Customer / Solutions
    {
      title: "Solutions Engineer",
      category: "Customer & Solutions",
      locations: ["Huntsville, AL"],
    },
    {
      title: "Customer Success Engineer",
      category: "Customer & Solutions",
      locations: ["Huntsville, AL"],
    },
    {
      title: "Customer Success Analyst",
      category: "Customer & Solutions",
      locations: ["Huntsville, AL"],
    },

    // DevOps / Delivery
    {
      title: "Release Manager",
      category: "DevOps & Delivery",
      locations: ["Huntsville, AL"],
    },
    {
      title: "QA Automation Engineer",
      category: "DevOps & Delivery",
      locations: ["Huntsville, AL"],
    },

    // Systems / Configuration
    {
      title:
        "Senior Configuration Manager (TS/SCI, Security+)",
      category: "Systems & Configuration",
      locations: ["Wright-Patterson AFB, OH"],
    },

    // Hardware
    {
      title: "Senior Electronics Technician",
      category: "Hardware",
      locations: ["Huntsville, AL"],
    },
  ];

  const categories = Array.from(new Set(jobs.map((j) => j.category)));

  const filteredJobs = jobs.filter((job) => {
    return (
      locationFilter === "All Locations" ||
      job.locations.includes(locationFilter)
    );
  });

  return (
    <div className="text-zinc-300 px-6 py-16 flex justify-center">
      <div className="w-full max-w-5/6 p-8 md:p-12 leading-relaxed topOffset">

        {/* Filter */}
        <div className="flex justify-center mb-10">
          <select
			className="
				w-full
				appearance-none
				bg-white dark:bg-zinc-900
				border border-zinc-300 dark:border-zinc-700
				text-black dark:text-white
				px-4 py-2 pr-10
				rounded-md
				focus:outline-none focus:ring-2 focus:ring-blue-500
				transition
			"
			value={locationFilter}
			onChange={(e) => setLocationFilter(e.target.value)}
		  >
            <option>All Locations</option>
            {[...new Set(jobs.flatMap((j) => j.locations))].map((loc) => (
              <option key={loc}>{loc}</option>
            ))}
          </select>
        </div>

        {/* Open Positions */}
        <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
          Open Positions
        </h3>

        {categories.map((category) => {
          const sectionJobs = filteredJobs.filter(
            (j) => j.category === category
          );

          if (sectionJobs.length === 0) return null;

          return (
            <div key={category} className="mb-8">
              <h4 className="font-medium text-black dark:text-white mb-2">
                {category}
              </h4>
              <div className="border-t border-zinc-300 dark:border-zinc-700 mb-4" />

              {sectionJobs.map((job) => (
                <div
                  key={job.title}
                  className="flex justify-between items-center py-3 border-b border-zinc-200 dark:border-zinc-800"
                >
                  <p className="font-semibold text-black dark:text-white">
                    {job.title}
                  </p>

                  <div className="flex gap-2 flex-wrap justify-end">
                    {job.locations.map((loc) => (
                      <span
                        key={loc}
                        className="border px-3 py-1 rounded-md text-sm text-black dark:text-white"
                      >
                        {loc}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}