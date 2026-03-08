import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useBusinessTool } from "@/hooks/use-business-tool";
import { Loader2, type LucideIcon } from "lucide-react";

interface ToolCardProps {
  icon: LucideIcon;
  title: string;
  helperText: string;
  toolId: string;
  fields: { key: string; label: string; placeholder: string }[];
  buttonLabel: string;
}

const inputClass = "w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary";

const ToolCard = ({ icon: Icon, title, helperText, toolId, fields, buttonLabel }: ToolCardProps) => {
  const { loading, result, generate } = useBusinessTool();
  const [inputs, setInputs] = useState<Record<string, string>>({});

  const handleGenerate = () => {
    const filled = fields.every((f) => inputs[f.key]?.trim());
    if (!filled) return;
    generate(toolId, inputs);
  };

  return (
    <div className="flex h-full flex-col rounded-2xl bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
          <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
        </div>
        <h3 className="text-lg">{title}</h3>
      </div>

      <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{helperText}</p>

      <div className="flex flex-col gap-3">
        {fields.map((f) => (
          <div key={f.key}>
            <label htmlFor={`${toolId}-${f.key}`} className="sr-only">{f.label}</label>
            <input
              id={`${toolId}-${f.key}`}
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
        className="mt-4"
        onClick={handleGenerate}
        disabled={loading || !fields.every((f) => inputs[f.key]?.trim())}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
            Generating…
          </>
        ) : (
          buttonLabel
        )}
      </Button>

      {result && (
        <div className="mt-5 rounded-xl border border-border bg-secondary/50 p-4 animate-in fade-in-0 slide-in-from-bottom-2 duration-500">
          <div className="prose prose-sm max-w-none text-foreground [&_strong]:text-foreground [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-muted-foreground">
            {result.split("\n").map((line, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ToolCard;
