import { ArrowRight } from "lucide-react";

const stages = [
  "Program Input",
  "Compiler",
  "zkVM Execution",
  "Proof Generation",
  "Verification",
];

export const Architecture = () => {
  return (
    <section className="py-20 lg:py-32 border-t border-border bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <div className="inline-block px-3 py-1 border border-border rounded text-xs font-mono text-muted-foreground">
              Pipeline
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-semibold tracking-tight">
              How ZisK Works
            </h2>
            <p className="text-lg text-muted-foreground">
              A streamlined proving pipeline built for clarity and performance.
            </p>
          </div>
          
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {stages.map((stage, index) => (
                <div key={stage} className="flex items-center gap-4 w-full md:w-auto">
                  <div className="flex-1 md:flex-none">
                    <div className="p-4 border border-border rounded bg-background text-center min-w-[140px]">
                      <div className="text-xs font-mono text-muted-foreground mb-1">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="text-sm font-medium">
                        {stage}
                      </div>
                    </div>
                  </div>
                  {index < stages.length - 1 && (
                    <ArrowRight className="hidden md:block h-5 w-5 text-muted-foreground flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <div className="p-4 border border-border rounded">
              <div className="text-xs font-mono text-muted-foreground mb-2">Frontend</div>
              <div className="text-sm">Language Support</div>
            </div>
            <div className="p-4 border border-border rounded">
              <div className="text-xs font-mono text-muted-foreground mb-2">Core</div>
              <div className="text-sm">zkVM Engine</div>
            </div>
            <div className="p-4 border border-border rounded">
              <div className="text-xs font-mono text-muted-foreground mb-2">Backend</div>
              <div className="text-sm">Proof System</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
