import SectionWrapper from "../layout/SectionWrapper";

const HeroSection = () => (
  <SectionWrapper id="hero" className="bg-secondary">
    <div className="flex flex-col items-center text-center">
      <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-widest text-primary">
        For Women Who Build
      </span>
      <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
        A place where women <em className="not-italic text-primary">learn, build,</em> and launch businesses.
      </h1>
      <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-muted-foreground">
        AI tools, structured learning, curated resources, and a community of inspiring women entrepreneurs — all in one place.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <a
          href="#cta"
          className="rounded-full bg-primary px-8 py-3 font-body text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Start Your Journey
        </a>
        <a
          href="#features"
          className="rounded-full border border-border bg-background px-8 py-3 font-body text-sm font-semibold text-foreground transition-colors hover:bg-muted"
        >
          Explore Features
        </a>
      </div>
    </div>
  </SectionWrapper>
);

export default HeroSection;
