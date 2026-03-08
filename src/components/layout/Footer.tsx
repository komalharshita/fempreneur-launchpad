const footerColumns = [
  { title: "About", links: ["Our Story", "Mission", "Team"] },
  { title: "Resources", links: ["Blog", "Guides", "Templates"] },
  { title: "Community", links: ["Events", "Forum", "Partners"] },
];

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="mx-auto max-w-[1200px] px-5 py-12 md:px-8 md:py-16">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand + Newsletter */}
        <div className="sm:col-span-2 lg:col-span-1">
          <span className="font-display text-lg font-bold text-foreground">The Fempreneur Lab</span>
          <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-muted-foreground">
            Empowering women to build businesses with confidence.
          </p>
          {/* Newsletter placeholder */}
          <div className="mt-6 flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 rounded-full border border-border bg-background px-4 py-2 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button className="rounded-full bg-primary px-5 py-2 font-body text-sm font-semibold text-primary-foreground">
              Subscribe
            </button>
          </div>
        </div>

        {footerColumns.map((col) => (
          <div key={col.title}>
            <h4 className="font-display text-sm font-semibold text-foreground">{col.title}</h4>
            <ul className="mt-4 space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 border-t border-border pt-6 text-center font-body text-xs text-muted-foreground">
        © {new Date().getFullYear()} The Fempreneur Lab. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
