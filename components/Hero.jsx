export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-900 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gold-500 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-600 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <p className="mb-4 inline-block rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-gold-400">
            For L&D and HR leaders
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
            Upskill your team in Data, AI, and Product
            <span className="text-gold-500"> before your competitors do.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70">
            Cohort-based enterprise programs designed with industry practitioners,
            built around your team&apos;s real workflows &mdash; not generic slide decks.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-gold-500 px-7 py-3 font-semibold text-navy-950 hover:bg-gold-400 transition-colors"
            >
              Get a program proposal
            </a>
            <a
              href="#programs"
              className="rounded-full border border-white/20 px-7 py-3 font-semibold text-white hover:border-white/40 transition-colors"
            >
              View programs
            </a>
          </div>
        </div>

        {/* Signature element: a mini "cohort progress" dashboard card,
            grounded in the subject (enterprise upskilling data) rather than a generic stat block */}
        <div className="relative">
          <div className="rounded-2xl border border-white/10 bg-navy-800/80 p-6 shadow-2xl backdrop-blur">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-sm font-medium text-white/60">Cohort readiness &mdash; Q3</span>
              <span className="rounded-full bg-green-500/15 px-2.5 py-1 text-xs font-semibold text-green-400">
                On track
              </span>
            </div>
            <div className="space-y-4">
              {[
                { label: "Applied AI for Product Teams", value: 82 },
                { label: "Data Science Fundamentals", value: 67 },
                { label: "Advanced Analytics", value: 54 },
              ].map((row) => (
                <div key={row.label}>
                  <div className="mb-1.5 flex justify-between text-xs text-white/70">
                    <span>{row.label}</span>
                    <span className="font-semibold text-white">{row.value}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-gold-600 to-gold-400"
                      style={{ width: `${row.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-5 text-center">
              <div>
                <p className="font-display text-xl font-semibold">120+</p>
                <p className="text-[11px] text-white/50">Enterprises trained</p>
              </div>
              <div>
                <p className="font-display text-xl font-semibold">92%</p>
                <p className="text-[11px] text-white/50">Completion rate</p>
              </div>
              <div>
                <p className="font-display text-xl font-semibold">4.7/5</p>
                <p className="text-[11px] text-white/50">Manager rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
