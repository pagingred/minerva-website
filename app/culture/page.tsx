export default function CulturePage() {
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
          Culture
        </h1>

        <div className="space-y-6">
          {[
            {
              title: "Precision Over Noise",
              desc: "We prioritize correctness and clarity in all technical and operational work.",
            },
            {
              title: "Ownership Mindset",
              desc: "Every team member is responsible for outcomes, not just tasks.",
            },
            {
              title: "Continuous Learning",
              desc: "We invest heavily in research, experimentation, and skill development.",
            },
            {
              title: "Mission Focused",
              desc: "We align every effort with meaningful, real-world impact.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6"
            >
              <h2 className="text-black dark:text-white text-xl font-medium mb-2">
                {item.title}
              </h2>
              <p className="text-black dark:text-zinc-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}