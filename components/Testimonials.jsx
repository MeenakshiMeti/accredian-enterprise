const TESTIMONIALS = [
  {
    quote:
      "Our product team went from being AI-curious to shipping an actual feature within the 6-week program. That speed was the real win.",
    name: "Ritu Sharma",
    role: "VP Product, Orbit Retail",
  },
  {
    quote:
      "Most vendor trainings are one-size-fits-all. Accredian's team actually sat with our data before designing the curriculum.",
    name: "Karan Mehta",
    role: "Head of L&D, NexaBank",
  },
  {
    quote:
      "Completion rates on internal trainings are usually rough. This one hit over 90% because people found it directly useful.",
    name: "Alisha Fernandes",
    role: "People Ops Lead, Kestrel Tech",
  },
];

export default function Testimonials() {
  return (
    <section id="results" className="mx-auto max-w-7xl px-6 py-24">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold-600">Results</p>
      <h2 className="mb-14 max-w-2xl font-display text-3xl font-semibold text-ink-900 md:text-4xl">
        What L&amp;D leaders say after a cohort wraps.
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col justify-between rounded-2xl border border-ink-900/10 bg-white p-7"
          >
            <blockquote className="text-ink-700">&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption className="mt-6 border-t border-ink-900/10 pt-4">
              <p className="font-semibold text-ink-900">{t.name}</p>
              <p className="text-sm text-ink-400">{t.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
