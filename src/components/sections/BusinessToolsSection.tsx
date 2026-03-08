import SectionWrapper from "../layout/SectionWrapper";
import ToolCard from "../tools/ToolCard";
import FadeIn from "@/components/ui/FadeIn";
import { Palette, Calculator, FileText, Instagram } from "lucide-react";

const tools = [
  {
    icon: Palette, title: "Business Name & Branding Generator",
    helperText: "Struggling to name your business? Let AI help you generate creative brand ideas.",
    toolId: "brand-generator", buttonLabel: "Generate Brand Ideas",
    fields: [
      { key: "businessType", label: "Business type", placeholder: "e.g. Crochet business" },
      { key: "targetAudience", label: "Target audience", placeholder: "e.g. College students" },
      { key: "brandStyle", label: "Brand style (optional)", placeholder: "e.g. Cute and cozy" },
    ],
  },
  {
    icon: Calculator, title: "Pricing Calculator",
    helperText: "Not sure what to charge? Get an AI-powered pricing recommendation for your product.",
    toolId: "pricing-calculator", buttonLabel: "Calculate Price",
    fields: [
      { key: "materialCost", label: "Material cost ($)", placeholder: "e.g. 15" },
      { key: "timeSpent", label: "Time spent (hours)", placeholder: "e.g. 3" },
      { key: "packagingCost", label: "Packaging cost ($)", placeholder: "e.g. 5" },
    ],
  },
  {
    icon: FileText, title: "AI Business Plan Generator",
    helperText: "Turn your idea into a simple, actionable business plan in seconds.",
    toolId: "business-plan", buttonLabel: "Generate Business Plan",
    fields: [
      { key: "businessIdea", label: "Business idea", placeholder: "e.g. Handmade candles" },
      { key: "targetAudience", label: "Target audience", placeholder: "e.g. Wellness enthusiasts" },
      { key: "budget", label: "Budget estimate ($)", placeholder: "e.g. 500" },
    ],
  },
  {
    icon: Instagram, title: "Social Media Caption Generator",
    helperText: "Create scroll-stopping captions for your products in one click.",
    toolId: "caption-generator", buttonLabel: "Generate Caption",
    fields: [
      { key: "productName", label: "Product name", placeholder: "e.g. Rose Gold Earrings" },
      { key: "productDescription", label: "Product description", placeholder: "e.g. Handmade minimalist jewelry" },
      { key: "tone", label: "Tone", placeholder: "e.g. Cute, professional, fun" },
    ],
  },
];

const BusinessToolsSection = () => (
  <SectionWrapper id="tools" className="bg-secondary">
    <FadeIn>
      <div className="text-center">
        <h2>Powerful tools to build your business</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Use AI-powered tools to generate ideas, plan your business, and create content that helps you launch with confidence.
        </p>
      </div>
    </FadeIn>

    <div className="mt-14 grid gap-8 md:grid-cols-2">
      {tools.map((tool, i) => (
        <FadeIn key={tool.toolId} delay={i * 100}>
          <ToolCard {...tool} />
        </FadeIn>
      ))}
    </div>
  </SectionWrapper>
);

export default BusinessToolsSection;
