import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => (
  <section
    id="hero"
    className="relative overflow-hidden"
    style={{
      background:
        "linear-gradient(135deg, hsl(264 100% 97%) 0%, hsl(340 100% 97%) 50%, hsl(264 100% 97%) 100%)",
    }}
  >
    {/* Abstract decorative shapes */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[100px]" />
      <div className="absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/8 blur-[80px]" />
      <div className="absolute right-1/4 top-1/3 h-48 w-48 rounded-full bg-accent/5 blur-[60px]" />
    </div>

    <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-5 pb-[100px] pt-[120px] md:px-8 lg:grid-cols-2 lg:gap-16 max-md:pb-16 max-md:pt-20">
      {/* Text column */}
      <div className="flex flex-col items-start">
        <span className="mb-6 inline-block rounded-full bg-primary/10 px-5 py-2 font-subheading text-xs font-semibold uppercase tracking-widest text-primary">
          For Women Who Build
        </span>

        <h1 className="max-w-xl">
          A place where women{" "}
          <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            learn, build,
          </span>{" "}
          and launch businesses.
        </h1>

        <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
          The Fempreneur Lab is your startup companion — helping women turn ideas
          into real businesses through AI tools, step-by-step guidance, and
          supportive resources.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button variant="gradient" size="lg" asChild>
            <a href="#cta">Start Your Journey</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#features">Explore Tools</a>
          </Button>
        </div>
      </div>

      {/* Illustration column */}
      <div className="relative flex items-center justify-center lg:justify-end">
        {/* Decorative ring */}
        <div className="absolute h-[340px] w-[340px] rounded-full border-2 border-dashed border-accent/20 md:h-[420px] md:w-[420px]" />

        <svg
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative h-[300px] w-[300px] md:h-[380px] md:w-[380px]"
        >
          {/* Background circle */}
          <circle cx="200" cy="200" r="180" fill="hsl(264 100% 97%)" />
          <circle cx="200" cy="200" r="160" fill="hsl(340 100% 97%)" />

          {/* Laptop / desk */}
          <rect x="110" y="210" width="180" height="110" rx="12" fill="hsl(258 90% 66%)" opacity="0.12" />
          <rect x="125" y="225" width="150" height="75" rx="8" fill="white" />
          <rect x="140" y="240" width="70" height="6" rx="3" fill="hsl(258 90% 66%)" opacity="0.5" />
          <rect x="140" y="254" width="100" height="4" rx="2" fill="hsl(340 82% 76%)" opacity="0.4" />
          <rect x="140" y="264" width="55" height="4" rx="2" fill="hsl(258 90% 66%)" opacity="0.3" />
          <rect x="140" y="274" width="80" height="4" rx="2" fill="hsl(340 82% 76%)" opacity="0.25" />

          {/* Growth chart line */}
          <polyline
            points="240,280 255,268 270,272 285,255 300,240"
            stroke="hsl(258 90% 66%)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity="0.6"
          />
          <circle cx="300" cy="240" r="5" fill="hsl(258 90% 66%)" opacity="0.6" />

          {/* Person silhouette */}
          <circle cx="200" cy="135" r="32" fill="hsl(340 82% 76%)" opacity="0.25" />
          <ellipse cx="200" cy="185" rx="28" ry="22" fill="hsl(258 90% 66%)" opacity="0.15" />

          {/* Lightbulb / idea */}
          <circle cx="305" cy="140" r="22" fill="hsl(340 82% 76%)" opacity="0.2" />
          <line x1="305" y1="125" x2="305" y2="118" stroke="hsl(340 82% 76%)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
          <line x1="315" y1="130" x2="320" y2="125" stroke="hsl(340 82% 76%)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
          <line x1="295" y1="130" x2="290" y2="125" stroke="hsl(340 82% 76%)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />

          {/* Star accents */}
          <circle cx="120" cy="155" r="6" fill="hsl(258 90% 66%)" opacity="0.2" />
          <circle cx="330" cy="195" r="4" fill="hsl(340 82% 76%)" opacity="0.3" />
          <circle cx="145" cy="185" r="3" fill="hsl(258 90% 66%)" opacity="0.25" />

          {/* Rocket */}
          <g transform="translate(100, 100) rotate(-30)" opacity="0.3">
            <ellipse cx="20" cy="12" rx="8" ry="16" fill="hsl(258 90% 66%)" />
            <polygon points="12,22 20,30 28,22" fill="hsl(340 82% 76%)" />
          </g>
        </svg>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
      <a href="#features" aria-label="Scroll down">
        <ChevronDown className="h-6 w-6 text-primary/40" />
      </a>
    </div>
  </section>
);

export default HeroSection;
