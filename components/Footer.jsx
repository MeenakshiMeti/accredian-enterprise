const COLUMNS = [
  {
    title: "Programs",
    links: ["Applied AI", "Data Science", "Advanced Analytics", "Leadership"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Partners", "Contact"],
  },
  {
    title: "Resources",
    links: ["Case studies", "Blog", "Webinars", "FAQ"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="font-display text-xl font-semibold text-white">
              accredian<span className="text-gold-500">.</span>
            </p>
            <p className="mt-3 max-w-xs text-sm">
              Enterprise upskilling programs in Data, AI, and Product,
              built with practitioners.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="mb-4 text-sm font-semibold text-white">{col.title}</p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm hover:text-gold-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Accredian Enterprise. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
