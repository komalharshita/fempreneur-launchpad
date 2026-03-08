import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CTASection from "@/components/sections/CTASection";
import FadeIn from "@/components/ui/FadeIn";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, GraduationCap, Users, BookOpen, ArrowRight } from "lucide-react";

const highlights = [
  { icon: MessageCircle, title: "AI Mentor", description: "Get personalized guidance from your AI business coach.", href: "/mentor" },
  { icon: Sparkles, title: "Business Tools", description: "Generate names, plans, pricing, and captions with AI.", href: "/tools" },
  { icon: GraduationCap, title: "Learning Paths", description: "Follow step-by-step paths to build your business.", href: "/learning" },
  { icon: BookOpen, title: "Resources", description: "Browse curated guides, tutorials, and articles.", href: "/resources" },
  { icon: Users, title: "Showcase", description: "Discover inspiring women-owned businesses.", href: "/showcase" },
];

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <HeroSection />

      <FeaturesSection />

      {/* Platform highlights linking to pages */}
      <SectionWrapper className="section-rose">
        <FadeIn>
          <div className="text-center">
            <h2>Explore the platform</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Everything you need to go from idea to launch — all in one place.
            </p>
          </div>
        </FadeIn>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, i) => (
            <FadeIn key={item.title} delay={i * 80}>
              <Link to={item.href} className="card-premium group flex h-full flex-col p-6 transition-all">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/15">
                  <item.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg">{item.title}</h3>
                <p className="mt-1 flex-1 text-sm text-muted-foreground">{item.description}</p>
                <span className="mt-3 inline-flex items-center gap-1 font-subheading text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Mid CTA */}
      <SectionWrapper>
        <FadeIn>
          <div className="text-center">
            <h2>Ready to start your business journey?</h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">
              Thousands of women are already using The Fempreneur Lab to turn their passions into thriving businesses.
            </p>
            <Button variant="gradient" size="lg" className="mt-8" asChild>
              <Link to="/tools">Get Started Free</Link>
            </Button>
          </div>
        </FadeIn>
      </SectionWrapper>

      <CTASection />
    </main>
    <Footer />
    <ScrollToTop />
  </div>
);

export default Index;
