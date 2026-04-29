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
          Mission, Vision, and Values
        </h1>

        <p className="text-zinc-400 mb-10 leading-relaxed">
          Who we are, what we do, where we want to go from here
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-20 text-center">

          {/* Mission */}
          <div className="flex flex-col items-center">
            <img
              src="/mission.png"
              alt="Mission"
              className="h-10 w-10 mb-6 opacity-70 invert dark:invert-0"
            />
            <p className="max-w-xs text-sm md:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Bring our best ideas and effort to overcome the challenges to
              peace and prosperity for our nation and its allies.
            </p>
          </div>

          {/* Vision */}
          <div className="flex flex-col items-center">
            <img
              src="/vision.png"
              alt="Vision"
              className="h-10 w-10 mb-6 opacity-70 invert dark:invert-0"
            />
            <p className="max-w-xs text-sm md:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Find talented and passionate people, equip them, and reward them.
              Minerva wants to build the future where the American dream is
              alive again for all Americans willing to put on their best effort.
            </p>
          </div>

          {/* Values */}
          <div className="flex flex-col items-center">
            <img
              src="/values.png"
              alt="Values"
              className="h-10 w-10 mb-6 opacity-70 invert dark:invert-0"
            />

            <div className="max-w-xs">
              <h2 className="text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                OUR STANDARDS
              </h2>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
                Be wise, Be just, Be passionate, Be excellent
              </p>

              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                Our Values
              </h3>

              <div className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
                <p>Have Fun</p>
                <p>Do Great Work</p>
                <p>Flourish</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}