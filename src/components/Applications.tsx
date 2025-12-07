import { Layers, Network, Database, Brain, User } from "lucide-react";

const applications = [
  {
    icon: Layers,
    title: "L1s",
    description: "Layer 1 blockchain infrastructure",
  },
  {
    icon: Network,
    title: "L2 - Rollups",
    description: "Layer 2 scaling solutions",
  },
  {
    icon: Database,
    title: "Zk Interoperability",
    description: "Cross-chain communication protocols",
  },
  {
    icon: Database,
    title: "Data Coprocessors",
    description: "Verifiable computation off-chain",
  },
  {
    icon: Brain,
    title: "Verifiable AI",
    description: "Trustless AI inference and training",
  },
  {
    icon: User,
    title: "Identity",
    description: "Privacy-preserving identity systems",
  },
];

export const Applications = () => {
  return (
    <section className="py-20 lg:py-32 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="space-y-6 text-center">
            <h2 className="text-4xl lg:text-5xl font-display font-semibold tracking-tight">
              ZisK works anywhere
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Out-of-the-box support for the most common stacks, and custom implementations for your specific ZK use case
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <a 
                href="#"
                className="text-sm font-medium text-primary-bright hover:text-primary-bright/80 transition-smooth inline-flex items-center gap-2"
              >
                Learn more
                <span className="text-xs">→</span>
              </a>
              <span className="text-muted-foreground">•</span>
              <a 
                href="#"
                className="text-sm font-medium text-foreground hover:text-primary-bright transition-smooth"
              >
                Contact us
              </a>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <div 
                key={app.title}
                className="p-6 border border-border rounded hover:border-primary-bright transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <app.icon className="h-8 w-8 text-primary-bright mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-display font-semibold mb-2">
                  {app.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {app.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

