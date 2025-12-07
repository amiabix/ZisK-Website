export const WhatIsZisk = () => {
  return (
    <section id="what-is-zisk" className="relative pt-8 lg:pt-12 pb-20 lg:pb-32 overflow-hidden group">
      {/* Animated background box effect - responds to hover */}
      <div className="absolute inset-0 animated-card-background what-is-zisk-background z-0">
        <div className="animated-card-shine" />
        <div className="animated-card-tiles what-is-zisk-tiles">
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
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex">
          {/* Empty space for 40% */}
          <div className="w-0 lg:w-[40%] flex-shrink-0" />
          
          {/* Content taking 60% */}
          <div className="flex-1 max-w-4xl relative">
            {/* Top line at the boundary - extends 10% on each side, pushed up 17% */}
            <div className="absolute h-px bg-border" style={{ 
              top: '-18%',
              left: 'calc(-10% - 0.5rem)', 
              right: 'calc(-10% - 0.5rem)'
            }} />
            
            <div className="space-y-6 pt-8">
              <div className="inline-block px-3 py-1 border border-border rounded text-xs font-mono text-muted-foreground">
                Overview
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-display font-semibold tracking-tight">
                What <span className="text-[#0ABF83]">ZisK</span> Makes Possible
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                ZisK turns zero-knowledge from a specialized component into dependable execution infrastructure: proof generation that scales with available compute, verifiable results without rewriting application logic, fully auditable and fork-able systems, and predictable deployment and ownership. Teams can deliver ZK-based systems the way they deliver normal compute systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
