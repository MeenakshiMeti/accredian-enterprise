const STATS = [
  { value: "120+", label: "Enterprises trained" },
  { value: "18,000+", label: "Employees upskilled" },
  { value: "92%", label: "Program completion rate" },
  { value: "4.7/5", label: "Average manager rating" },
];

export default function WhyUs() {
  return (
    <section id="why" className="bg-navy-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold-500">Why Accredian</p>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              Training that shows up in your team&apos;s output, not just their certificates.
            </h2>
            <p className="mt-6 text-white/70">
              Every cohort is built with input from your team leads, benchmarked against
              real projects, and measured by whether people actually apply what they learned
              back on the job.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="border-l-2 border-gold-500 pl-4">
                <p className="font-display text-3xl font-semibold">{stat.value}</p>
                <p className="mt-1 text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
