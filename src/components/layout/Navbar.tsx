import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = ["Features", "Learn", "Showcase", "Community"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4 md:px-8">
        <a href="/" className="font-display text-xl font-bold tracking-tight text-foreground">
          The Fempreneur Lab
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-subheading text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link}
            </a>
          ))}
          <Button variant="gradient" size="sm" asChild>
            <a href="#cta">Get Started</a>
          </Button>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border bg-background px-5 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="font-subheading text-base font-medium text-muted-foreground"
              >
                {link}
              </a>
            ))}
            <Button variant="gradient" className="mt-2" asChild>
              <a href="#cta" onClick={() => setMobileOpen(false)}>Get Started</a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
