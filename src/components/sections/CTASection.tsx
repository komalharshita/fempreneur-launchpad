import SectionWrapper from "../layout/SectionWrapper";

const CTASection = () => (
  <SectionWrapper id="cta">
    <div className="rounded-3xl bg-primary px-6 py-16 text-center md:px-16">
      <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
        Ready to start your business journey?
      </h2>
      <p className="mx-auto mt-4 max-w-lg font-body text-primary-foreground/80">
        Join thousands of women who are turning their ideas into thriving businesses.
      </p>
      <a
        href="#"
        className="mt-8 inline-block rounded-full bg-background px-8 py-3 font-body text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
      >
        Join The Fempreneur Lab
      </a>
    </div>
  </SectionWrapper>
);

export default CTASection;
