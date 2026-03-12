import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import SectionWrapper from "@/components/layout/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";
import { BookOpen, Video, Wrench, FileText } from "lucide-react";

type Category = "All" | "Marketing" | "Design" | "Selling" | "Finance";

const resources = [
{ icon: BookOpen, title: "How to Price Handmade Products", type: "Guide", category: "Finance" as Category, description: "Learn simple strategies to price your products without undervaluing your work.", thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop" },
{ icon: Video, title: "Using Canva to Design Product Posters", type: "Video Tutorial", category: "Design" as Category, description: "Step-by-step tutorial showing how to create beautiful product visuals.", thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop" },
{ icon: BookOpen, title: "How to Set Up an Etsy Store", type: "Guide", category: "Selling" as Category, description: "A beginner-friendly guide to launching your Etsy shop.", thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop" },
{ icon: Wrench, title: "Where to Find Free Design Mockups", type: "Article", category: "Design" as Category, description: "Discover websites where you can download free product mockups.", thumbnail: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop" },
{ icon: FileText, title: "Beginner Marketing for Small Businesses", type: "Article", category: "Marketing" as Category, description: "Simple marketing strategies to help you get your first customers.", thumbnail: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&h=400&fit=crop" },
{ icon: FileText, title: "Simple Bookkeeping for Beginners", type: "Guide", category: "Finance" as Category, description: "Track income and expenses with easy-to-follow bookkeeping basics.", thumbnail: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=600&h=400&fit=crop" }];


const categories: Category[] = ["All", "Marketing", "Design", "Selling", "Finance"];

const typeBadgeColor: Record<string, string> = {
  Guide: "bg-primary/10 text-primary",
  "Video Tutorial": "bg-accent/15 text-accent",
  Article: "bg-muted text-muted-foreground"
};

const ResourcesPage = () => {
  const [active, setActive] = useState<Category>("All");
  const filtered = active === "All" ? resources : resources.filter((r) => r.category === active);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <SectionWrapper>
          <FadeIn>
            <div className="text-center">
              <h1>Resource Library</h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Browse curated tutorials, guides, and tools organized by topic to help you at every stage of your business journey.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) =>
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full px-4 py-1.5 font-subheading text-sm font-medium transition-all duration-300 ${
                active === cat ?
                "bg-primary text-primary-foreground shadow-md" :
                "bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary"}`
                }>
                
                  {cat}
                </button>
              )}
            </div>
          </FadeIn>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 py-[50px]">
            {filtered.map((res, i) =>
            <FadeIn key={res.title} delay={i * 80}>
                <div className="card-premium group flex h-full flex-col overflow-hidden">
                  <div className="flex h-32 items-center justify-center bg-secondary">
                    <res.icon className="h-10 w-10 text-primary/30" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className={`mb-3 inline-block w-fit rounded-full px-3 py-1 font-subheading text-xs font-semibold ${typeBadgeColor[res.type] || "bg-muted text-muted-foreground"}`}>
                      {res.type}
                    </span>
                    <h3 className="text-base">{res.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{res.description}</p>
                  </div>
                </div>
              </FadeIn>
            )}
          </div>
        </SectionWrapper>
      </main>
      <Footer />
      <ScrollToTop />
    </div>);

};

export default ResourcesPage;