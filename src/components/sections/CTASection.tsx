import SectionWrapper from "../layout/SectionWrapper";
import { Button } from "@/components/ui/button";

const CTASection = () => (
  <SectionWrapper id="cta">
    <div className="overflow-hidden rounded-3xl gradient-primary px-6 py-16 text-center md:px-16">
      <h2 className="text-card">
        Ready to start your business journey?
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-card/80">
        Join thousands of women who are turning their ideas into thriving businesses.
      </p>
      <Button variant="outline" size="lg" className="mt-8 border-card/30 bg-card text-foreground hover:bg-card/90" asChild>
        <a href="#">Join The Fempreneur Lab</a>
      </Button>
    </div>
  </SectionWrapper>
);

export default CTASection;
