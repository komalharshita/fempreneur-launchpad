import SectionWrapper from "../layout/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";

const MidCTASection = () => (
  <SectionWrapper id="mid-cta" className="section-lavender">
    <FadeIn>
      <div className="text-center">
        <h2>Ready to start your business journey?</h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">
          Thousands of women are already using The Fempreneur Lab to turn their passions into thriving businesses.
        </p>
        <Button variant="gradient" size="lg" className="mt-8" asChild>
          <a href="#cta">Get Started Free</a>
        </Button>
      </div>
    </FadeIn>
  </SectionWrapper>
);

export default MidCTASection;
