import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import SectionWrapper from "@/components/layout/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";
import { useBusinessTool } from "@/hooks/use-business-tool";
import { allTools } from "@/data/tools";
import { Loader2, Lightbulb, ArrowLeft } from "lucide-react";

const inputClass =
  "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 hover:border-primary/30";

const ToolPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const tool = allTools.find((t) => t.slug === slug);
  const otherTools = allTools.filter((t) => t.slug !== slug);
  const { loading, result, generate } = useBusinessTool();
  const [inputs, setInputs] = useState<Record<string, string>>({});

  if (!tool) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <SectionWrapper>
          <div className="text-center">
            <h1>Tool not found</h1>
            <Button variant="gradient" className="mt-6" asChild>
              <Link to="/tools">Browse All Tools</Link>
            </Button>
          </div>
        </SectionWrapper>
        <Footer />
      </div>
    );
  }

  const handleGenerate = () => {
    const filled = tool.fields.every((f) => inputs[f.key]?.trim());
    if (!filled) return;
    generate(tool.toolId, inputs);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Header */}
        <SectionWrapper>
          <FadeIn>
            <Link
              to="/tools"
              className="mb-6 inline-flex items-center gap-1.5 font-subheading text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" /> All Tools
            </Link>
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                <tool.icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h1>{tool.title}</h1>
                <p className="mt-2 max-w-xl text-lg text-muted-foreground">{tool.helperText}</p>
              </div>
            </div>
          </FadeIn>
        </SectionWrapper>

        {/* Tool Interface */}
        <SectionWrapper className="section-rose !pt-0">
          <FadeIn delay={100}>
            <div className="mx-auto max-w-2xl">
              <div className="card-premium p-6 md:p-8">
                <div className="flex flex-col gap-4">
                  {tool.fields.map((f) => (
                    <div key={f.key}>
                      <label htmlFor={`${tool.toolId}-${f.key}`} className="mb-1.5 block font-subheading text-sm font-medium text-foreground">
                        {f.label}
                      </label>
                      <input
                        id={`${tool.toolId}-${f.key}`}
                        type="text"
                        placeholder={f.placeholder}
                        value={inputs[f.key] || ""}
                        onChange={(e) => setInputs((p) => ({ ...p, [f.key]: e.target.value }))}
                        className={inputClass}
                      />
                    </div>
                  ))}
                </div>
                <Button
                  variant="gradient"
                  size="lg"
                  className="mt-6 w-full"
                  onClick={handleGenerate}
                  disabled={loading || !tool.fields.every((f) => inputs[f.key]?.trim())}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating…
                    </>
                  ) : (
                    tool.buttonLabel
                  )}
                </Button>
              </div>

              {/* Results */}
              {result && (
                <FadeIn>
                  <div className="mt-6 card-premium p-6 md:p-8 animate-in fade-in-0 slide-in-from-bottom-2 duration-500">
                    <h3 className="mb-4 text-lg">Generated Results</h3>
                    <div className="prose prose-sm max-w-none text-foreground [&_strong]:text-foreground [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-muted-foreground">
                      {result.split("\n").map((line, i) => (
                        <p key={i} dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
                      ))}
                    </div>
                  </div>
                </FadeIn>
              )}
            </div>
          </FadeIn>
        </SectionWrapper>

        {/* Tips */}
        <SectionWrapper>
          <FadeIn>
            <div className="mx-auto max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="h-5 w-5 text-accent" strokeWidth={1.5} />
                <h2 className="text-xl">Tips for Better Results</h2>
              </div>
              <ul className="space-y-3">
                {tool.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 font-subheading text-[10px] font-bold text-primary">
                      {i + 1}
                    </span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </SectionWrapper>

        {/* Explore More Tools */}
        <SectionWrapper className="section-lavender">
          <FadeIn>
            <h2 className="text-center">Explore More Tools</h2>
          </FadeIn>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {otherTools.map((t, i) => (
              <FadeIn key={t.slug} delay={i * 80}>
                <div className="card-premium group flex h-full flex-col p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/15">
                    <t.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base">{t.title}</h3>
                  <p className="mt-1 flex-1 text-sm text-muted-foreground">{t.helperText}</p>
                  <Button variant="outline" size="sm" className="mt-4 w-full" asChild>
                    <Link to={`/tools/${t.slug}`}>Open Tool</Link>
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
};

export default ToolPage;
