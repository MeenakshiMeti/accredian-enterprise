const PROGRAMS = [
  {
    title: "Applied AI for Product Teams",
    duration: "6 weeks",
    description:
      "Hands-on program for PMs and engineers to ship AI features responsibly, from prompt design to evaluation.",
  },
  {
    title: "Data Science Fundamentals",
    duration: "8 weeks",
    description:
      "Builds statistical thinking and Python fluency for teams that need to read and act on data, not just look at dashboards.",
  },
  {
    title: "Advanced Analytics & ML",
    duration: "10 weeks",
    description:
      "For teams ready to build and deploy models in production, with a focus on MLOps and measurable business impact.",
  },
  {
    title: "Leading Data-Driven Teams",
    duration: "4 weeks",
    description:
      "A manager-track program on translating data literacy into better team decisions and hiring.",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-14 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold-600">Programs</p>
        <h2 className="font-display text-3xl font-semibold text-ink-900 md:text-4xl">
          Built around your team&apos;s actual work, not a generic curriculum.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {PROGRAMS.map((program) => (
          <div
            key={program.title}
            className="group rounded-2xl border border-ink-900/10 bg-white p-8 transition-shadow hover:shadow-lg"
          >
            <div className="mb-4 flex items-start justify-between">
              <h3 className="font-display text-xl font-semibold text-ink-900">{program.title}</h3>
              <span className="whitespace-nowrap rounded-full bg-navy-900/5 px-3 py-1 text-xs font-medium text-navy-900">
                {program.duration}
              </span>
            </div>
            <p className="text-ink-600">{program.description}</p>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-gold-600 group-hover:gap-2 transition-all"
            >
              Explore curriculum &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
