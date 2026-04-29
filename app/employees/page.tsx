"use client";

export default function CareersPage() {
  const tools = [
    {
      name: "CBIZ Employee Portal",
      desc: "Access benefits, HR documents, and employee resources.",
      link: "https://cbiz.com",
    },
    {
      name: "Timekeeping (Quicken)",
      desc: "Submit and manage your timesheets.",
      link: "https://tsheets.intuit.com/",
    },
    {
      name: "Pay Stubs (QuickBooks Workforce)",
      desc: "View and download pay stubs.",
      link: "https://workforce.intuit.com/app/payroll-employee-portal-ui/",
    },
  ];

  return (
    <div className="text-zinc-300 px-6 py-16 flex justify-center">
      <div className="w-full max-w-5/6 p-8 md:p-12 topOffset">

        <h1 className="text-4xl font-semibold text-black dark:text-white mb-4">
          Employee Resources
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                border border-zinc-200 dark:border-zinc-800
                bg-white dark:bg-zinc-900/60
                p-6
                rounded-lg
                hover:bg-zinc-50 dark:hover:bg-zinc-800
                transition
                flex flex-col justify-between
              "
            >
              <div>
                <h2 className="text-lg font-medium text-zinc-900 dark:text-white group-hover:underline">
                  {tool.name}
                </h2>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                  {tool.desc}
                </p>
              </div>

              <div className="mt-6 text-sm text-zinc-500 dark:text-zinc-400">
                Open →
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}