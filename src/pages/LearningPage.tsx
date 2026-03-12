import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import SectionWrapper from "@/components/layout/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";
import { Scissors, FileImage, Instagram, Home } from "lucide-react";

const learningPaths = [
{ icon: Scissors, title: "Handmade Product Business", description: "Learn how to create, price, package, and sell handmade products.", lessons: 8 },
{ icon: FileImage, title: "Digital Product Business", description: "Understand how to create and sell digital products such as templates, guides, or artwork.", lessons: 6 },
{ icon: Instagram, title: "Instagram Store Setup", description: "Step-by-step guidance to start selling your products using Instagram.", lessons: 5 },
{ icon: Home, title: "Local Small Business", description: "Learn how to start a home-based or local service business.", lessons: 7 }];


const LearningPage = () =>
<div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <SectionWrapper>
        <FadeIn>
          <div className="text-center">
            <h1>Learning Paths</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Follow beginner-friendly, step-by-step learning paths designed to help you understand every stage of starting and growing a business.
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 py-[40px]">
          {learningPaths.map((path, i) =>
        <FadeIn key={path.title} delay={i * 80}>
              <div className="card-premium group flex h-full flex-col p-6 md:p-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/12 text-accent transition-colors duration-300 group-hover:bg-accent/20">
                  <path.icon className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <h3>{path.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{path.description}</p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="rounded-full bg-primary/10 px-3 py-1 font-subheading text-xs font-semibold uppercase tracking-wider text-primary">
                    Beginner
                  </span>
                  <span className="font-subheading text-sm text-muted-foreground">
                    {path.lessons} lessons
                  </span>
                </div>
                <Button variant="gradient" className="mt-6 w-full" asChild>
                  <a href="#">Start Learning</a>
                </Button>
              </div>
            </FadeIn>
        )}
        </div>
      </SectionWrapper>
    </main>
    <Footer />
    <ScrollToTop />
  </div>;


export default LearningPage;