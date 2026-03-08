import SectionWrapper from "../layout/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";

const CTASection = () => (
  <SectionWrapper id="cta">
    <FadeIn>
      <div className="overflow-hidden rounded-3xl gradient-primary px-6 py-16 text-center md:px-16 md:py-20 shadow-lg">
        <h2 className="text-card">
          Start building your business today.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-card/80 md:text-lg">
          Join The Fempreneur Lab and take the first step toward turning your ideas into a real business.
        </p>
        <Button
          variant="outline"
          size="lg"
          className="mt-8 border-card/30 bg-card text-foreground shadow-md hover:bg-card/90 hover:shadow-lg"
          asChild
        >
          <a href="#">Create Your Free Account</a>
        </Button>
      </div>
    </FadeIn>
  </SectionWrapper>
);

export default CTASection;
