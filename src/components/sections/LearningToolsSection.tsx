import SectionWrapper from "../layout/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";
import { Scissors, FileImage, Instagram, Home, BookOpen, Video, Wrench, FileText } from "lucide-react";

const learningPaths = [
  { icon: Scissors, title: "Handmade Product Business", description: "Learn how to create, price, package, and sell handmade products." },
  { icon: FileImage, title: "Digital Product Business", description: "Understand how to create and sell digital products such as templates, guides, or artwork." },
  { icon: Instagram, title: "Instagram Store Setup", description: "Step-by-step guidance to start selling your products using Instagram." },
  { icon: Home, title: "Local Small Business", description: "Learn how to start a home-based or local service business." },
];

const resources = [
  { icon: BookOpen, title: "How to Price Handmade Products", type: "Guide", description: "Learn simple strategies to price your products without undervaluing your work." },
  { icon: Video, title: "Using Canva to Design Product Posters", type: "Video Tutorial", description: "Step-by-step tutorial showing how to create beautiful product visuals.", videoId: "dQw4w9WgXcQ" },
  { icon: BookOpen, title: "How to Set Up an Etsy Store", type: "Guide", description: "A beginner-friendly guide to launching your Etsy shop." },
  { icon: Wrench, title: "Where to Find Free Design Mockups", type: "Article", description: "Discover websites where you can download free product mockups." },
  { icon: FileText, title: "Beginner Marketing for Small Businesses", type: "Article", description: "Simple marketing strategies to help you get your first customers." },
];

const typeBadgeColor: Record<string, string> = {
  Guide: "bg-primary/10 text-primary",
  "Video Tutorial": "bg-accent/15 text-accent",
  Article: "bg-muted text-muted-foreground",
  Tool: "bg-primary/10 text-primary",
};

const LearningToolsSection = () => (
  <SectionWrapper id="learn">
    <FadeIn>
      <div className="text-center">
        <h2>Learn how to build your business step by step</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Follow beginner-friendly learning paths and explore curated resources that help you understand every stage of starting and growing a business.
        </p>
      </div>
    </FadeIn>

    <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {learningPaths.map((path, i) => (
        <FadeIn key={path.title} delay={i * 80}>
          <div className="card-premium group flex h-full flex-col p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/12 text-accent transition-colors duration-300 group-hover:bg-accent/20">
              <path.icon className="h-6 w-6" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg">{path.title}</h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">{path.description}</p>
            <a href="#" className="mt-4 inline-block font-subheading text-sm font-semibold text-primary transition-colors hover:text-accent" aria-label={`Start learning ${path.title}`}>
              Start Learning →
            </a>
          </div>
        </FadeIn>
      ))}
    </div>

    <FadeIn className="mt-20 md:mt-24">
      <div className="text-center">
        <h2>Curated resources to help you succeed</h2>
      </div>
    </FadeIn>

    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {resources.map((res, i) => (
        <FadeIn key={res.title} delay={i * 80}>
          <div className="card-premium group flex h-full flex-col overflow-hidden">
            {res.videoId ? (
              <div className="relative aspect-video w-full bg-muted">
                <iframe
                  src={`https://www.youtube.com/embed/${res.videoId}`}
                  title={res.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="flex h-32 items-center justify-center bg-secondary">
                <res.icon className="h-10 w-10 text-primary/30" strokeWidth={1.5} aria-hidden="true" />
              </div>
            )}
            <div className="flex flex-1 flex-col p-6">
              <span className={`mb-3 inline-block w-fit rounded-full px-3 py-1 font-subheading text-xs font-semibold ${typeBadgeColor[res.type] || "bg-muted text-muted-foreground"}`}>
                {res.type}
              </span>
              <h3 className="text-base">{res.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{res.description}</p>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  </SectionWrapper>
);

export default LearningToolsSection;
