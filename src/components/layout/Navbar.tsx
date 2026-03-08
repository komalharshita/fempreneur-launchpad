import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "AI Mentor", href: "#features" },
  { label: "Business Tools", href: "#learn" },
  { label: "Learning Paths", href: "#learn" },
  { label: "Resource Library", href: "#features" },
  { label: "Showcase", href: "#showcase" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-card/90 backdrop-blur-lg shadow-sm"
          : "bg-card/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-3.5 md:px-8">
        {/* Logo */}
        <a href="/" className="font-display text-xl font-bold text-foreground">
          The Fempreneur Lab
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-subheading text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop auth buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline" size="sm">
            Login
          </Button>
          <Button variant="gradient" size="sm">
            Sign Up
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="border-t border-border bg-card px-5 pb-6 pt-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-subheading text-base font-medium text-muted-foreground transition-colors duration-200 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <Button variant="outline" className="w-full">
                Login
              </Button>
              <Button variant="gradient" className="w-full">
                Sign Up
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
