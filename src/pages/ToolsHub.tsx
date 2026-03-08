import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import SectionWrapper from "@/components/layout/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";
import { allTools } from "@/data/tools";

const ToolsHub = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <SectionWrapper>
        <FadeIn>
          <div className="text-center">
            <h1>AI-Powered Business Tools</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Use our suite of free AI tools to generate ideas, plan your business, set your prices, and create content — all in one place.
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {allTools.map((tool, i) => (
            <FadeIn key={tool.slug} delay={i * 100}>
              <div className="card-premium group flex h-full flex-col p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/15">
                    <tool.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl">{tool.title}</h3>
                </div>
                <p className="mb-6 flex-1 text-sm text-muted-foreground">{tool.helperText}</p>
                <Button variant="gradient" asChild className="w-full">
                  <Link to={`/tools/${tool.slug}`}>Open Tool</Link>
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>
    </main>
    <Footer />
    <ScrollToTop />
  </div>
);

export default ToolsHub;
