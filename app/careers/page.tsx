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
	  url: "https://www.indeed.com/viewjob?jk=6b2edcbf9c1fd0c6&from=shareddesktop_copy",
    },
    {
      title: "Full Stack Software Engineer",
      category: "Engineering",
      locations: ["Beavercreek, OH"],
	  url: "https://www.indeed.com/viewjob?jk=0a92a91bb10cc2e4&from=shareddesktop_copy",
    },
    {
      title: "Senior Full Stack Software Engineer",
      category: "Engineering",
      locations: ["Beavercreek, OH"],
	  url: "",
    },

    // Customer / Solutions
    {
      title: "Solutions Engineer",
      category: "Customer & Solutions",
      locations: ["Huntsville, AL"],
	  url: "https://www.indeed.com/viewjob?jk=1fc441ea3128a254&from=shareddesktop_copy",
    },
    {
      title: "Customer Success Engineer",
      category: "Customer & Solutions",
      locations: ["Huntsville, AL"],
	  url: "https://www.indeed.com/viewjob?jk=a26239d9af51b87c&from=shareddesktop_copy",
    },
    {
      title: "Customer Success Analyst",
      category: "Customer & Solutions",
      locations: ["Huntsville, AL"],
	  url: "",
    },

    // DevOps / Delivery
    {
      title: "Release Manager",
      category: "DevOps & Delivery",
      locations: ["Huntsville, AL"],
	  url: "https://www.indeed.com/viewjob?jk=e3502d622594c660&from=shareddesktop_copy",
    },
    {
      title: "QA Automation Engineer",
      category: "DevOps & Delivery",
      locations: ["Huntsville, AL"],
	  url: "https://www.indeed.com/viewjob?jk=a55b37e07d3bedf6&from=shareddesktop_copy",
    },

    // Systems / Configuration
    {
      title: "Senior Configuration Manager (TS/SCI, Security+)",
      category: "Systems & Configuration",
      locations: ["Wright-Patterson AFB, OH"],
	  url: "https://www.indeed.com/viewjob?jk=8cb514540893266e&from=shareddesktop_copy",
    },

    // Hardware
    {
      title: "Senior Electronics Technician",
      category: "Hardware",
      locations: ["Huntsville, AL"],
	  url: "",
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
      <div
        className="
          w-full max-w-5/6
          p-8 md:p-12
          text-zinc-300
          leading-relaxed
		  topOffset
        "
      >
        <h1 className="text-4xl font-semibold text-black dark:text-white mb-6">
          Dive into your passion, at Minerva.
        </h1>

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

        {categories.map((category) => {
          const sectionJobs = filteredJobs.filter(
            (j) => j.category === category
          );

          if (sectionJobs.length === 0) return null;

          return (
            <div key={category} className="mb-8">
              <h4 className="font-semibold text-black dark:text-white mb-2">
                {category}
              </h4>
              <div className="border-t border-zinc-300 dark:border-zinc-700 mb-4" />

              {sectionJobs.map((job) => (
                <div
                  key={job.title}
                  className="flex justify-between items-center py-3 border-b border-zinc-200 dark:border-zinc-800"
                >
                  <p className="font-medium text-black dark:text-white">
                    {job.title}
                  </p>

                  <div className="flex gap-2 flex-wrap justify-end">
                    {job.locations.map((loc) => (
                      <span
                        key={loc}
                        className="border px-3 py-1 rounded-md text-sm text-black dark:text-white"
                      >
                        <a href={job.url}>{loc}</a>
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