import { Code2, Box, Zap, Cpu, FileCheck } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "High-Level Language Support",
    category: "Usability",
    description: "Compile Rust or Go programs to our RISC-V 64-bit zkVM for verifiable execution.",
  },
  {
    icon: Box,
    title: "Flexible Deployment",
    category: "Usability",
    description: "Integrate and deploy ZK applications across any platform using our versatile toolstack.",
  },
  {
    icon: Zap,
    title: "Optimized Performance",
    category: "Performance",
    description: "Leverage our precompiled libraries to maximize speed and efficiency.",
  },
  {
    icon: Cpu,
    title: "Distributed Proof Generation",
    category: "Performance",
    description: "Accelerate proofs with low-latency, distributed and parallelizable computation.",
  },
  {
    icon: Cpu,
    title: "GPU-Accelerated Prover",
    category: "Performance",
    description: "Boost efficiency and handle large workloads faster with our open-source GPU prover.",
  },
  {
    icon: FileCheck,
    title: "Compact Proofs",
    category: "Performance",
    description: "Enable efficient verification directly on blockchain platforms.",
  },
];

export const Features = () => {
  return (
    <section className="pt-2 lg:pt-4 pb-12 sm:pb-16 lg:pb-20 xl:pb-32 relative overflow-hidden group">
      {/* Animated background box effect - bottom left */}
      <div className="absolute inset-0 animated-card-background features-background z-0">
        <div className="animated-card-shine" />
        <div className="animated-card-tiles features-tiles">
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Top line - extends 20% on each side, pushed up 33px, thicker */}
            <div className="hidden md:block absolute bg-border" style={{ 
              top: '-33px',
              left: 'calc(-20% - 0.5rem)', 
              right: 'calc(-20% - 0.5rem)',
              height: '2px'
            }} />
            
            <div className="space-y-8 sm:space-y-10 lg:space-y-12 pt-4">
              {/* Heading */}
              <div className="w-full lg:w-[60%]">
                <div className="inline-block px-3 py-1 border border-border rounded text-xs font-mono text-muted-foreground mb-3 sm:mb-4">
                  For Whom
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-semibold tracking-tight leading-[1.1] text-left">
                  Built for <span style={{ color: '#0ABF83' }}>Developers</span>, Designed for <span style={{ color: '#0ABF83' }}>Infrastructure</span>, Run at <span style={{ color: '#0ABF83' }}>Scale</span>
                </h2>
              </div>
              
              {/* Features Grid */}
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch text-left w-full">
            {features.map((feature, index) => (
              <div key={feature.title} className="relative">
                {index > 0 && index % 3 === 0 && (
                  <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-border -ml-3"></div>
                )}
                <div 
                  className="luminous-card animate-fade-in"
                  style={{ 
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="content relative z-10 text-left">
                    <div className="text-xs font-mono text-muted-foreground mb-2">
                      {feature.category}
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-semibold mb-3 sm:mb-4 relative z-[3] mt-2 sm:mt-4" style={{ color: '#E7E7E3' }}>
                      {feature.title}
                    </h3>
                    <div className="bottom">
                      <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#E7E7E3' }}>
                        {(() => {
                          const desc = feature.description;
                          // Highlight keywords for each feature
                          if (feature.title === "High-Level Language Support") {
                            return desc.split(/(Rust|Go|RISC-V|zkVM|verifiable execution)/i).map((part, idx) => {
                              const lowerPart = part.toLowerCase();
                              if (lowerPart === 'rust' || lowerPart === 'go' || lowerPart === 'risc-v' || lowerPart === 'zkvm' || lowerPart === 'verifiable execution') {
                                return <span key={idx} className="font-bold" style={{ color: '#0ABF83' }}>{part}</span>;
                              }
                              return <span key={idx}>{part}</span>;
                            });
                          } else if (feature.title === "Flexible Deployment") {
                            return desc.split(/(ZK applications|platform|toolstack)/i).map((part, idx) => {
                              const lowerPart = part.toLowerCase();
                              if (lowerPart === 'zk applications' || lowerPart === 'platform' || lowerPart === 'toolstack') {
                                return <span key={idx} className="font-bold" style={{ color: '#0ABF83' }}>{part}</span>;
                              }
                              return <span key={idx}>{part}</span>;
                            });
                          } else if (feature.title === "Optimized Performance") {
                            return desc.split(/(precompiled libraries|speed|efficiency)/i).map((part, idx) => {
                              const lowerPart = part.toLowerCase();
                              if (lowerPart === 'precompiled libraries' || lowerPart === 'speed' || lowerPart === 'efficiency') {
                                return <span key={idx} className="font-bold" style={{ color: '#0ABF83' }}>{part}</span>;
                              }
                              return <span key={idx}>{part}</span>;
                            });
                          } else if (feature.title === "Distributed Proof Generation") {
                            return desc.split(/(proofs|low-latency|distributed|parallelizable computation)/i).map((part, idx) => {
                              const lowerPart = part.toLowerCase();
                              if (lowerPart === 'proofs' || lowerPart === 'low-latency' || lowerPart === 'distributed' || lowerPart === 'parallelizable computation') {
                                return <span key={idx} className="font-bold" style={{ color: '#0ABF83' }}>{part}</span>;
                              }
                              return <span key={idx}>{part}</span>;
                            });
                          } else if (feature.title === "GPU-Accelerated Prover") {
                            return desc.split(/(open-source|GPU prover)/i).map((part, idx) => {
                              const lowerPart = part.toLowerCase();
                              if (lowerPart === 'open-source' || lowerPart === 'gpu prover') {
                                return <span key={idx} className="font-bold" style={{ color: '#0ABF83' }}>{part}</span>;
                              }
                              return <span key={idx}>{part}</span>;
                            });
                          } else if (feature.title === "Compact Proofs") {
                            return desc.split(/(verification|blockchain platforms)/i).map((part, idx) => {
                              const lowerPart = part.toLowerCase();
                              if (lowerPart === 'verification' || lowerPart === 'blockchain platforms') {
                                return <span key={idx} className="font-bold" style={{ color: '#0ABF83' }}>{part}</span>;
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
            ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
