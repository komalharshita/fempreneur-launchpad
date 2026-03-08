import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/", isRoute: true },
  { label: "AI Mentor", href: "/mentor", isRoute: true },
  { label: "Tools", href: "/tools", isRoute: true },
  { label: "Learning", href: "/learning", isRoute: true },
  { label: "Resources", href: "/resources", isRoute: true },
  { label: "Showcase", href: "/showcase", isRoute: true },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-card/90 backdrop-blur-lg shadow-sm"
          : "bg-card/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-3.5 md:px-8">
        <Link to="/" className="font-display text-xl font-bold text-foreground">
          The Fempreneur Lab
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`group relative font-subheading text-sm font-medium transition-colors duration-200 hover:text-primary focus-visible:text-primary focus-visible:outline-none ${
                location.pathname === link.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-primary transition-all duration-300 ${
                location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline" size="sm">Login</Button>
          <Button variant="gradient" size="sm">Sign Up</Button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-1 text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="border-t border-border bg-card px-5 pb-6 pt-4" aria-label="Mobile navigation">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`font-subheading text-base font-medium transition-colors duration-200 hover:text-primary ${
                  location.pathname === link.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <Button variant="outline" className="w-full">Login</Button>
              <Button variant="gradient" className="w-full">Sign Up</Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
