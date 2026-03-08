import SectionWrapper from "../layout/SectionWrapper";
import { GraduationCap, Cpu, FileText } from "lucide-react";

const items = [
  { icon: GraduationCap, title: "Courses & Guides", description: "Structured paths from ideation to launch." },
  { icon: Cpu, title: "AI Business Tools", description: "Intelligent assistants for naming, planning, and marketing." },
  { icon: FileText, title: "Templates & Kits", description: "Ready-to-use resources that save you hours." },
];

const LearningToolsSection = () => (
  <SectionWrapper id="learn" className="bg-secondary">
    <div className="mb-12 text-center">
      <h2>Learning &amp; Tools</h2>
      <p className="mt-4 font-subheading text-muted-foreground">Courses, AI tools, and resources — built for your entrepreneurial journey.</p>
    </div>
    <div className="grid gap-8 md:grid-cols-3">
      {items.map(({ icon: Icon, title, description }) => (
        <div
          key={title}
          className="group flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
        >
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 text-accent transition-colors group-hover:bg-accent/25">
            <Icon size={26} strokeWidth={1.5} />
          </div>
          <h3 className="text-lg">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default LearningToolsSection;
