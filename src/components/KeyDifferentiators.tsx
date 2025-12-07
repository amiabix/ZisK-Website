import { Zap, Code, Shield } from "lucide-react";

const differentiators = [
  {
    icon: Zap,
    title: "Distributed architecture, built-in",
    description: "Distributed proof generation, natively in the stack. Without latency compromises even under sustained throughput.",
  },
  {
    icon: Code,
    title: "Fully open source with dual permissive licensing",
    description: "The stack is open source and dual-licensed. VM internals and GPU layers are available for inspection and self-hosting.",
  },
  {
    icon: Shield,
    title: "Security that survives real-world exposure",
    description: "128-bit soundness. When proofs settle state, correctness cannot be optional.",
  },
];

const KeyDiffCard = ({ item, index }: { item: typeof differentiators[0], index: number }) => {
  return (
    <div className="relative">
      {index > 0 && (
        <div className="hidden md:block absolute top-0 bottom-0 w-px bg-[#E7E7E3]" style={{ left: '-2rem' }}></div>
      )}
      <div className="luminous-card animate-fade-in group relative">
        <div className="content relative z-10 p-6 lg:p-8">
          <h3 className="text-3xl lg:text-4xl font-display font-semibold mb-6 relative z-[3]" style={{ color: '#E7E7E3', WebkitTextStroke: '0.5px rgba(45, 46, 61, 0.3)' }}>
            {item.title}
          </h3>
          <div className="bottom">
            <p className="text-lg leading-relaxed" style={{ color: '#E7E7E3' }}>
              {(() => {
                const desc = item.description;
                // Highlight key terms for each card
                if (item.title === "Distributed architecture, built-in") {
                  return desc.split(/(distributed proof generation|natively in the stack|without latency compromises)/i).map((part, idx) => {
                    const lowerPart = part.toLowerCase();
                                    if (lowerPart === 'distributed proof generation' || lowerPart === 'natively in the stack' || lowerPart === 'without latency compromises') {
                                      return <span key={idx} className="font-bold transition-smooth cursor-pointer highlighted-term" style={{ color: '#0ABF83' }}>{part}</span>;
                                    }
                    return <span key={idx}>{part}</span>;
                  });
                } else if (item.title === "Fully open source with dual permissive licensing") {
                  return desc.split(/(open source|dual-licensed|VM internals|GPU layers|inspection|self-hosting)/i).map((part, idx) => {
                    const lowerPart = part.toLowerCase();
                                    if (lowerPart === 'open source' || lowerPart === 'dual-licensed' || lowerPart === 'vm internals' || lowerPart === 'gpu layers' || lowerPart === 'inspection' || lowerPart === 'self-hosting') {
                                      return <span key={idx} className="font-bold transition-smooth cursor-pointer highlighted-term" style={{ color: '#0ABF83' }}>{part}</span>;
                                    }
                    return <span key={idx}>{part}</span>;
                  });
                } else if (item.title === "Security that survives real-world exposure") {
                  return desc.split(/(128-bit soundness|correctness cannot be optional)/i).map((part, idx) => {
                    const lowerPart = part.toLowerCase();
                                    if (lowerPart === '128-bit soundness' || lowerPart === 'correctness cannot be optional') {
                                      return <span key={idx} className="font-bold transition-smooth cursor-pointer highlighted-term" style={{ color: '#0ABF83' }}>{part}</span>;
                                    }
                    return <span key={idx}>{part}</span>;
                  });
                }
                return desc;
              })()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const KeyDifferentiators = () => {
  return (
    <section className="pt-2 lg:pt-4 pb-20 lg:pb-32 key-diff-section-bg relative overflow-hidden group">
      {/* Animated background box effect - top right */}
      <div className="absolute inset-0 animated-card-background key-diff-section-background z-0">
        <div className="animated-card-shine" />
        <div className="animated-card-tiles key-diff-section-tiles">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className={`animated-card-tile tile-${i + 1}`}
            />
          ))}
        </div>
        <div className="animated-card-line line-1" />
        <div className="animated-card-line line-2" />
        <div className="animated-card-line line-3" />
      </div>
      {/* Animated background box effect - bottom right */}
      <div className="absolute inset-0 animated-card-background key-diff-section-background-bottom z-0">
        <div className="animated-card-shine" />
        <div className="animated-card-tiles key-diff-section-tiles-bottom">
          {[...Array(10)].map((_, i) => (
            <div
              key={`bottom-${i}`}
              className={`animated-card-tile tile-${i + 1}`}
            />
          ))}
        </div>
        <div className="animated-card-line line-1" />
        <div className="animated-card-line line-2" />
        <div className="animated-card-line line-3" />
      </div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-4 text-left relative">
            {/* Top line - extends 20% on each side, pushed up 33px, thicker */}
            <div className="absolute bg-border" style={{ 
              top: '-33px',
              left: 'calc(-20% - 0.5rem)', 
              right: 'calc(-20% - 0.5rem)',
              height: '2px'
            }} />
            
            <div className="pt-4">
            <div className="inline-block px-3 py-1 border border-border rounded text-xs font-mono text-muted-foreground">
              Key Differentiators
            </div>
            <h2 className="text-3xl lg:text-4xl font-display font-semibold tracking-tight" style={{ WebkitTextStroke: '0.5px rgba(45, 46, 61, 0.3)' }}>
              How <span className="text-[#0ABF83]">ZisK</span> Delivers
            </h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 items-stretch pt-16 lg:pt-24">
            {differentiators.map((item, index) => (
              <KeyDiffCard 
                key={item.title} 
                item={item} 
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
