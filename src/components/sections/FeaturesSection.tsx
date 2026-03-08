import SectionWrapper from "../layout/SectionWrapper";
import { Lightbulb, Wrench, Users, BookOpen } from "lucide-react";

const features = [
  { icon: Lightbulb, title: "AI-Powered Tools", description: "Smart tools to help you plan, create, and grow your business with confidence." },
  { icon: BookOpen, title: "Structured Learning", description: "Step-by-step courses designed for beginners and aspiring entrepreneurs." },
  { icon: Wrench, title: "Curated Resources", description: "Hand-picked templates, guides, and toolkits to save you time." },
  { icon: Users, title: "Community", description: "Connect with women who inspire, support, and uplift each other." },
];

const FeaturesSection = () => (
  <SectionWrapper id="features">
    <div className="mb-12 text-center">
      <h2>Platform Features</h2>
      <p className="mt-4 font-subheading text-muted-foreground">Everything you need to go from idea to launch.</p>
    </div>
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {features.map(({ icon: Icon, title, description }) => (
        <div
          key={title}
          className="group rounded-2xl border border-border bg-card p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
        >
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
            <Icon size={26} strokeWidth={1.5} />
          </div>
          <h3 className="text-lg">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default FeaturesSection;
