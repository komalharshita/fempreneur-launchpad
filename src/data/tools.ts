import { Palette, Calculator, FileText, Instagram, type LucideIcon } from "lucide-react";

export interface ToolDefinition {
  icon: LucideIcon;
  title: string;
  slug: string;
  helperText: string;
  toolId: string;
  buttonLabel: string;
  fields: { key: string; label: string; placeholder: string }[];
  tips: string[];
}

export const allTools: ToolDefinition[] = [
  {
    icon: Palette,
    title: "Business Name & Branding Generator",
    slug: "business-name-generator",
    helperText: "Struggling to name your business? Let AI help you generate creative brand ideas.",
    toolId: "brand-generator",
    buttonLabel: "Generate Brand Ideas",
    fields: [
      { key: "businessType", label: "Business type", placeholder: "e.g. Crochet business" },
      { key: "targetAudience", label: "Target audience", placeholder: "e.g. College students" },
      { key: "brandStyle", label: "Brand style (optional)", placeholder: "e.g. Cute and cozy" },
    ],
    tips: [
      "Try different combinations of audience and style for varied results.",
      "Use the generated names as starting points — mix and match words you like.",
      "Check domain availability for your favorite name ideas.",
    ],
  },
  {
    icon: Calculator,
    title: "Pricing Calculator",
    slug: "pricing-calculator",
    helperText: "Not sure what to charge? Get an AI-powered pricing recommendation for your product.",
    toolId: "pricing-calculator",
    buttonLabel: "Calculate Price",
    fields: [
      { key: "materialCost", label: "Material cost ($)", placeholder: "e.g. 15" },
      { key: "timeSpent", label: "Time spent (hours)", placeholder: "e.g. 3" },
      { key: "packagingCost", label: "Packaging cost ($)", placeholder: "e.g. 5" },
    ],
    tips: [
      "Don't forget to include your time as a cost — your labor has value.",
      "Consider adding a profit margin on top of the suggested price.",
      "Research competitors to see how your pricing compares.",
    ],
  },
  {
    icon: FileText,
    title: "AI Business Plan Generator",
    slug: "business-plan-generator",
    helperText: "Turn your idea into a simple, actionable business plan in seconds.",
    toolId: "business-plan",
    buttonLabel: "Generate Business Plan",
    fields: [
      { key: "businessIdea", label: "Business idea", placeholder: "e.g. Handmade candles" },
      { key: "targetAudience", label: "Target audience", placeholder: "e.g. Wellness enthusiasts" },
      { key: "budget", label: "Budget estimate ($)", placeholder: "e.g. 500" },
    ],
    tips: [
      "Be specific about your idea for more tailored results.",
      "Use the plan as a living document — update it as your business evolves.",
      "Share your plan with a mentor or friend for feedback.",
    ],
  },
  {
    icon: Instagram,
    title: "Social Media Caption Generator",
    slug: "caption-generator",
    helperText: "Create scroll-stopping captions for your products in one click.",
    toolId: "caption-generator",
    buttonLabel: "Generate Caption",
    fields: [
      { key: "productName", label: "Product name", placeholder: "e.g. Rose Gold Earrings" },
      { key: "productDescription", label: "Product description", placeholder: "e.g. Handmade minimalist jewelry" },
      { key: "tone", label: "Tone", placeholder: "e.g. Cute, professional, fun" },
    ],
    tips: [
      "Try different tones to see which resonates with your audience.",
      "Add relevant hashtags to increase discoverability.",
      "Pair your caption with a strong call-to-action like 'Shop now' or 'Link in bio'.",
    ],
  },
];
