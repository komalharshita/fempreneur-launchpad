import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const toolPrompts: Record<string, (inputs: Record<string, string>) => string> = {
  "brand-generator": (i) =>
    `You are a creative branding expert for women entrepreneurs. Generate 5 unique business name ideas and a tagline for each.
Business type: ${i.businessType}
Target audience: ${i.targetAudience}
Brand style: ${i.brandStyle || "modern and feminine"}
Format each as:
**Name:** [name]
**Tagline:** [tagline]
Keep names catchy, memorable, and suitable for a small business.`,

  "pricing-calculator": (i) =>
    `You are a pricing strategist for small businesses run by women. Calculate a suggested selling price.
Material cost: $${i.materialCost}
Time spent: ${i.timeSpent} hours
Packaging cost: $${i.packagingCost}
Assume an hourly rate of $25. Provide:
- **Suggested Price Range:** $X – $Y
- **Estimated Profit Margin:** X%
- A brief explanation of the pricing strategy.
Keep it concise and encouraging.`,

  "business-plan": (i) =>
    `You are a startup advisor for women entrepreneurs. Create a simple business plan outline.
Business idea: ${i.businessIdea}
Target audience: ${i.targetAudience}
Budget estimate: $${i.budget}
Provide:
1. **Business Summary** (2-3 sentences)
2. **Target Market**
3. **Suggested Selling Platforms** (3-4 platforms)
4. **First 3 Marketing Steps**
5. **Revenue Goal** (first 3 months)
Keep it beginner-friendly and actionable.`,

  "caption-generator": (i) =>
    `You are a social media expert for women-owned businesses. Generate content for Instagram.
Product name: ${i.productName}
Product description: ${i.productDescription}
Tone: ${i.tone || "fun"}
Provide:
1. **Instagram Caption** (2-3 sentences, engaging)
2. **Hashtags** (10 relevant hashtags)
3. **Short Promo Text** (1 sentence for stories/ads)
Make it feel authentic and empowering.`,
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { tool, inputs } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const promptFn = toolPrompts[tool];
    if (!promptFn) throw new Error(`Unknown tool: ${tool}`);

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            {
              role: "system",
              content:
                "You are a helpful, encouraging AI assistant for The Fempreneur Lab — a platform for women entrepreneurs. Be warm, professional, and concise.",
            },
            { role: "user", content: promptFn(inputs) },
          ],
        }),
      }
    );

    if (!response.ok) {
      const status = response.status;
      if (status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (status === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits exhausted. Please try again later." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", status, t);
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || "No response generated.";

    return new Response(JSON.stringify({ result: content }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("business-tools error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
