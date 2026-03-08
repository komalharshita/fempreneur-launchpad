const footerColumns = [
  {
    title: "Platform",
    links: ["About The Fempreneur Lab", "Our Mission", "Contact"],
  },
  {
    title: "Learn",
    links: ["Learning Paths", "Resource Library", "Startup Guides"],
  },
  {
    title: "Tools",
    links: [
      "Business Name Generator",
      "Pricing Calculator",
      "Business Plan Generator",
      "Caption Generator",
    ],
  },
  {
    title: "Community",
    links: ["Women Entrepreneurs Showcase", "Newsletter", "Success Stories"],
  },
];

const Footer = () => (
  <footer className="bg-foreground">
    <div className="mx-auto max-w-[1200px] px-5 py-12 md:px-8 md:py-16">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
        {/* Brand column */}
        <div className="sm:col-span-2 lg:col-span-1">
          <span className="font-display text-lg font-bold text-primary-foreground">
            The Fempreneur Lab
          </span>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            Empowering women to build businesses with confidence.
          </p>
        </div>

        {footerColumns.map((col) => (
          <div key={col.title}>
            <h4 className="font-subheading text-sm font-semibold text-primary-foreground">
              {col.title}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-primary-foreground/70 transition-colors duration-200 hover:text-accent"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom row */}
      <div className="mt-12 flex flex-col items-center gap-4 border-t border-primary-foreground/15 pt-6 sm:flex-row sm:justify-between">
        <p className="text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} The Fempreneur Lab. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-xs text-primary-foreground/50 transition-colors duration-200 hover:text-accent"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-xs text-primary-foreground/50 transition-colors duration-200 hover:text-accent"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
