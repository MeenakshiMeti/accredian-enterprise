const LOGOS = ["NexaBank", "Orbit Retail", "Falcon Logistics", "Verdant Health", "Kestrel Tech", "Anchorpoint"];

export default function TrustedBy() {
  return (
    <section className="border-y border-ink-900/5 bg-ink-900/[0.02] py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-ink-400">
          Trusted by learning &amp; development teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {LOGOS.map((name) => (
            <span
              key={name}
              className="font-display text-lg font-medium text-ink-400/70 grayscale hover:grayscale-0 hover:text-ink-600 transition-all"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
