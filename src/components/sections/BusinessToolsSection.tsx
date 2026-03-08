import { Link } from "react-router-dom";
import SectionWrapper from "../layout/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";
import { allTools } from "@/data/tools";

const BusinessToolsSection = () => (
  <SectionWrapper id="tools" className="section-rose">
    <FadeIn>
      <div className="text-center">
        <h2>Powerful tools to build your business</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Use AI-powered tools to generate ideas, plan your business, and create content that helps you launch with confidence.
        </p>
      </div>
    </FadeIn>

    <div className="mt-14 grid gap-8 md:grid-cols-2">
      {allTools.map((tool, i) => (
        <FadeIn key={tool.slug} delay={i * 100}>
          <div className="card-premium group flex h-full flex-col p-6">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <tool.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg">{tool.title}</h3>
            </div>
            <p className="mb-5 flex-1 text-sm text-muted-foreground">{tool.helperText}</p>
            <Button variant="gradient" className="w-full" asChild>
              <Link to={`/tools/${tool.slug}`}>Open Tool</Link>
            </Button>
          </div>
        </FadeIn>
      ))}
    </div>
  </SectionWrapper>
);

export default BusinessToolsSection;
