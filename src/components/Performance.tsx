const stats = [
  {
    label: "Latency",
    value: "Real-Time",
    description: "Representative benchmarks for production workloads",
  },
  {
    label: "Proof Size",
    value: "Optimized",
    description: "Minimal overhead for efficient deployment",
  },
  {
    label: "Execution Cost",
    value: "Efficient",
    description: "Designed for scalable operations",
  },
];

export const Performance = () => {
  return (
    <section className="py-20 lg:py-32 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="space-y-4 text-center">
            <div className="inline-block px-3 py-1 border border-border rounded text-xs font-mono text-muted-foreground">
              Metrics
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-semibold tracking-tight">
              Performance at Scale
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="relative p-8 border border-border rounded animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-2">
                  <div className="text-xs font-mono text-muted-foreground">
                    {stat.label}
                  </div>
                  <div className="text-4xl font-display font-semibold text-primary-bright">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground pt-2">
                    {stat.description}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-bright to-transparent opacity-50" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
