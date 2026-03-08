import SectionWrapper from "../layout/SectionWrapper";

const ShowcaseSection = () => (
  <SectionWrapper id="showcase">
    <div className="mb-12 text-center">
      <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Women Entrepreneurs Showcase</h2>
      <p className="mt-4 font-body text-muted-foreground">Get inspired by stories of women building incredible businesses.</p>
    </div>
    <div className="grid gap-[var(--grid-spacing)] sm:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="flex h-64 items-center justify-center rounded-2xl border border-border bg-card font-body text-muted-foreground"
        >
          Entrepreneur Story {i}
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default ShowcaseSection;
