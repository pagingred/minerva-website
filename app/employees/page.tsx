export default function EmployeesPage() {
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
          Employees
        </h1>

        <p className="text-zinc-400 mb-10 leading-relaxed max-w-2xl">
          Our team is composed of engineers, researchers, and operators focused
          on building high-impact defense technologies.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Engineering Team", role: "Systems & Software" },
            { name: "Research Division", role: "AI & Data Science" },
            { name: "Security Team", role: "Cyber Defense" },
            { name: "Operations", role: "Mission Support" },
            { name: "Leadership", role: "Strategy & Direction" },
            { name: "Analysis Group", role: "Intelligence Insights" },
          ].map((person) => (
            <div
              key={person.name}
              className="bg-zinc-900/80 p-6 hover:bg-zinc-900 transition"
            >
              <h2 className="text-white text-lg font-medium">
                {person.name}
              </h2>
              <p className="text-zinc-400 text-sm mt-1">
                {person.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}