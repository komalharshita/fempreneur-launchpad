import SectionWrapper from "../layout/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";
import { MessageCircle, Sparkles, GraduationCap, BookOpen, Store, Users } from "lucide-react";

const features = [
  { icon: MessageCircle, title: "AI Mentor", description: "Chat with an AI mentor that guides you step-by-step through starting and growing your business." },
  { icon: Sparkles, title: "Business Tools", description: "Generate business names, pricing strategies, and business plans using powerful AI tools." },
  { icon: GraduationCap, title: "Learning Paths", description: "Follow structured learning paths designed to help beginners build real businesses." },
  { icon: BookOpen, title: "Resource Library", description: "Access curated tutorials, guides, and tools that help you understand every stage of entrepreneurship." },
  { icon: Store, title: "Platform Setup Guides", description: "Learn how to launch your store on platforms like Etsy, Amazon, Instagram, or even offline." },
  { icon: Users, title: "Women Entrepreneurs Showcase", description: "Discover inspiring businesses created by women in the community and share your own journey." },
];

const FeaturesSection = () => (
  <SectionWrapper id="features">
    <FadeIn>
      <div className="text-center">
        <h2>Everything you need to start your business</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          The Fempreneur Lab combines AI guidance, business tools, structured learning, and community inspiration to help women confidently turn their ideas into real businesses.
        </p>
      </div>
    </FadeIn>

    <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, i) => (
        <FadeIn key={feature.title} delay={i * 80}>
          <div className="card-premium group flex h-full flex-col p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/15">
              <feature.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl">{feature.title}</h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">{feature.description}</p>
            <a href="#" className="mt-4 inline-block font-subheading text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100" aria-label={`Learn more about ${feature.title}`}>
              Learn More →
            </a>
          </div>
        </FadeIn>
      ))}
    </div>
  </SectionWrapper>
);

export default FeaturesSection;
