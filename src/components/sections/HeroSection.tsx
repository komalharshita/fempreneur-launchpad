import SectionWrapper from "../layout/SectionWrapper";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <SectionWrapper id="hero" className="bg-secondary">
    <div className="flex flex-col items-center text-center">
      <span className="mb-6 inline-block rounded-full bg-primary/10 px-5 py-2 font-subheading text-xs font-semibold uppercase tracking-widest text-primary">
        For Women Who Build
      </span>
      <h1 className="max-w-3xl">
        A place where women{" "}
        <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
          learn, build,
        </span>{" "}
        and launch businesses.
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
        AI tools, structured learning, curated resources, and a community of inspiring women entrepreneurs — all in one place.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Button variant="gradient" size="lg" asChild>
          <a href="#cta">Start Your Journey</a>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <a href="#features">Explore Features</a>
        </Button>
      </div>
    </div>
  </SectionWrapper>
);

export default HeroSection;
