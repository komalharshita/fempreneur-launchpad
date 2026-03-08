import SectionWrapper from "../layout/SectionWrapper";

const LearningToolsSection = () => (
  <SectionWrapper id="learn" className="bg-secondary">
    <div className="mb-12 text-center">
      <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Learning &amp; Tools</h2>
      <p className="mt-4 font-body text-muted-foreground">Courses, AI tools, and resources — built for your entrepreneurial journey.</p>
    </div>
    <div className="grid gap-[var(--grid-spacing)] md:grid-cols-3">
      {["Courses & Guides", "AI Business Tools", "Templates & Kits"].map((item) => (
        <div
          key={item}
          className="flex h-48 items-center justify-center rounded-2xl border border-border bg-card font-display text-lg font-semibold text-muted-foreground"
        >
          {item}
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default LearningToolsSection;
