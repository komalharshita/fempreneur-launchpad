import SectionWrapper from "../layout/SectionWrapper";
import { Sparkles } from "lucide-react";

const stories = [
  { name: "Sarah K.", tagline: "Handmade Jewelry Brand", quote: "The Fempreneur Lab gave me the tools and confidence to turn my hobby into a real business." },
  { name: "Maya R.", tagline: "Digital Marketing Agency", quote: "From college student to agency owner — the structured courses made all the difference." },
  { name: "Priya D.", tagline: "Wellness Coach", quote: "The community here is incredible. I found my first clients through the network." },
];

const ShowcaseSection = () => (
  <SectionWrapper id="showcase">
    <div className="mb-12 text-center">
      <h2>Women Entrepreneurs Showcase</h2>
      <p className="mt-4 font-subheading text-muted-foreground">Get inspired by stories of women building incredible businesses.</p>
    </div>
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {stories.map((story) => (
        <div
          key={story.name}
          className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
        >
          <Sparkles size={20} className="mb-4 text-accent" strokeWidth={1.5} />
          <p className="italic leading-relaxed text-muted-foreground">"{story.quote}"</p>
          <div className="mt-6 border-t border-border pt-4">
            <p className="font-subheading text-sm font-semibold text-foreground">{story.name}</p>
            <p className="text-xs text-muted-foreground">{story.tagline}</p>
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default ShowcaseSection;
