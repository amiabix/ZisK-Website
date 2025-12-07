import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center pt-20 lg:pt-32 pb-8 lg:pb-12 overflow-hidden group">
      {/* Animated background box effect - responds to hover */}
      <div className="absolute inset-0 animated-card-background hero-background z-0">
        <div className="animated-card-shine" />
        <div className="animated-card-tiles hero-tiles">
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
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="space-y-8 animate-fade-in max-w-7xl">
            <div className="inline-block px-3 py-1 border border-border rounded text-xs font-mono text-muted-foreground">
              v1.0 — Open Source
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-semibold tracking-tight leading-[1.1]">
              <span className="text-[#0ABF83]">ZisK</span> - The Proof Infrastructure<br />
              for Modern Compute
            </h1>
            
            <div className="space-y-4 max-w-4xl">
              <p className="text-base lg:text-lg text-muted-foreground">
                ZisK provides proof generation that makes computation verifiable at scale. Built around a high-performance zkVM, ZisK enables real programs written in Rust to execute with cryptographic correctness, low latency, and predictable throughput.
              </p>
              <p className="text-base lg:text-lg text-muted-foreground font-medium">
                This is not zero-knowledge research tooling.<br />
                This is proof infrastructure designed for real systems.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Button 
                className="bg-[#007755] border border-[#F3f3f2]/30 text-white transition-smooth font-medium group gap-1.5 rounded-none"
              >
                Contact Us
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <a 
                href="https://ziskdocs.vercel.app/getting-started/installation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#0ABF83] hover:underline hover:scale-110 transition-smooth font-medium text-base h-10 flex items-center gap-0 group"
              >
                Get Started
                <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-smooth -ml-1" />
              </a>
            </div>
        </div>
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-0">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>
    </section>
  );
};
