import { useState, useEffect } from "react";
import SectionWrapper from "../layout/SectionWrapper";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { ExternalLink, Upload, Loader2, BadgeCheck } from "lucide-react";

const staticShowcases = [
  {
    business_name: "Ananya's Crochet Studio",
    founder_name: "Ananya Sharma",
    description: "Handmade crochet bags and accessories crafted with love.",
    image_url: null,
    website_url: "#",
  },
  {
    business_name: "Sweet Bloom Bakery",
    founder_name: "Riya Patel",
    description: "Home-based bakery specializing in custom cakes and desserts.",
    image_url: null,
    website_url: "#",
  },
  {
    business_name: "Minimal Canvas Designs",
    founder_name: "Sara Khan",
    description: "Modern digital templates for creatives and small businesses.",
    image_url: null,
    website_url: "#",
  },
];

interface ShowcaseEntry {
  business_name: string;
  founder_name: string;
  description: string;
  image_url: string | null;
  website_url: string | null;
}

const ShowcaseCard = ({ entry }: { entry: ShowcaseEntry }) => (
  <div className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
    <div className="flex h-44 items-center justify-center bg-secondary">
      {entry.image_url ? (
        <img src={entry.image_url} alt={entry.business_name} className="h-full w-full object-cover" />
      ) : (
        <span className="font-display text-3xl font-bold text-primary/20">
          {entry.business_name.charAt(0)}
        </span>
      )}
    </div>
    <div className="flex flex-1 flex-col p-6">
      <span className="mb-2 inline-flex w-fit items-center gap-1 rounded-full bg-accent/15 px-3 py-1 font-subheading text-[10px] font-semibold uppercase tracking-wider text-accent">
        <BadgeCheck className="h-3 w-3" /> Women-Owned Business
      </span>
      <h3 className="text-lg">{entry.business_name}</h3>
      <p className="mt-0.5 font-subheading text-xs font-medium text-muted-foreground">by {entry.founder_name}</p>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{entry.description}</p>
      {entry.website_url && (
        <a
          href={entry.website_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1 font-subheading text-sm font-medium text-primary transition-colors hover:text-accent"
        >
          Visit Store <ExternalLink className="h-3.5 w-3.5" />
        </a>
      )}
    </div>
  </div>
);

const ShowcaseSection = () => {
  const [dbEntries, setDbEntries] = useState<ShowcaseEntry[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ founder_name: "", business_name: "", description: "", website_url: "" });
  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    supabase
      .from("showcase_submissions")
      .select("business_name, founder_name, description, image_url, website_url")
      .then(({ data }) => {
        if (data) setDbEntries(data);
      });
  }, []);

  const allEntries = [...staticShowcases, ...dbEntries];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.founder_name.trim() || !form.business_name.trim() || !form.description.trim()) return;

    setSubmitting(true);
    try {
      let image_url: string | null = null;

      if (imageFile) {
        const ext = imageFile.name.split(".").pop();
        const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
        const { error: uploadError } = await supabase.storage
          .from("showcase-images")
          .upload(path, imageFile);
        if (uploadError) throw uploadError;
        const { data: urlData } = supabase.storage.from("showcase-images").getPublicUrl(path);
        image_url = urlData.publicUrl;
      }

      const { error } = await supabase.from("showcase_submissions").insert({
        founder_name: form.founder_name.trim().slice(0, 100),
        business_name: form.business_name.trim().slice(0, 100),
        description: form.description.trim().slice(0, 500),
        website_url: form.website_url.trim().slice(0, 255) || null,
        image_url,
      });

      if (error) throw error;

      toast({ title: "Submitted!", description: "Your business will appear after review." });
      setForm({ founder_name: "", business_name: "", description: "", website_url: "" });
      setImageFile(null);
    } catch (err: any) {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="showcase" className="bg-secondary">
      <div className="text-center">
        <h2>Women building incredible businesses</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Discover inspiring women entrepreneurs who turned their ideas into real businesses — and share your own story with the community.
        </p>
      </div>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {allEntries.map((entry, i) => (
          <ShowcaseCard key={`${entry.business_name}-${i}`} entry={entry} />
        ))}
      </div>

      {/* Submission */}
      <div className="mx-auto mt-20 max-w-xl text-center">
        <h2 className="text-2xl md:text-3xl">Share your business with the community</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          If you've started your own business, we would love to feature your story and inspire other women.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4 text-left">
          <input
            type="text"
            placeholder="Your name"
            value={form.founder_name}
            onChange={(e) => setForm((p) => ({ ...p, founder_name: e.target.value }))}
            required
            maxLength={100}
            className="rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <input
            type="text"
            placeholder="Business name"
            value={form.business_name}
            onChange={(e) => setForm((p) => ({ ...p, business_name: e.target.value }))}
            required
            maxLength={100}
            className="rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <textarea
            placeholder="Short description of your business"
            value={form.description}
            onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
            required
            maxLength={500}
            rows={3}
            className="rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <input
            type="url"
            placeholder="Website or social link (optional)"
            value={form.website_url}
            onChange={(e) => setForm((p) => ({ ...p, website_url: e.target.value }))}
            maxLength={255}
            className="rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring"
          />

          <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-dashed border-border bg-card px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-primary/40">
            <Upload className="h-4 w-4 text-primary" />
            {imageFile ? imageFile.name : "Upload business image (optional)"}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => setImageFile(e.target.files?.[0] || null)}
            />
          </label>

          <Button variant="gradient" className="mt-2" disabled={submitting}>
            {submitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting…
              </>
            ) : (
              "Submit My Business"
            )}
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            All submissions are reviewed before being published.
          </p>
        </form>
      </div>
    </SectionWrapper>
  );
};

export default ShowcaseSection;
