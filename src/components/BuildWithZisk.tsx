import { Button } from "@/components/ui/button";
import { ArrowUpRight, MessageCircle } from "lucide-react";

export const BuildWithZisk = () => {
  return (
    <section className="pt-12 sm:pt-16 lg:pt-20 xl:pt-32 pb-12 sm:pb-16 lg:pb-20 xl:pb-32 relative overflow-hidden group">
      {/* Animated background box effect - top right */}
      <div className="absolute inset-0 animated-card-background build-with-zisk-background-top z-0">
        <div className="animated-card-shine" />
        <div className="animated-card-tiles build-with-zisk-tiles-top">
          {[...Array(10)].map((_, i) => (
            <div
              key={`top-${i}`}
              className={`animated-card-tile tile-${i + 1}`}
            />
          ))}
        </div>
        <div className="animated-card-line line-1" />
        <div className="animated-card-line line-2" />
        <div className="animated-card-line line-3" />
      </div>
      {/* Animated background box effect - bottom right */}
      <div className="absolute inset-0 animated-card-background build-with-zisk-background z-0">
        <div className="animated-card-shine" />
        <div className="animated-card-tiles build-with-zisk-tiles">
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display font-semibold tracking-tight">
            Build with <span className="text-[#0ABF83]">ZisK</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-center">
            <Button
              className="bg-[#007755] border border-[#F3f3f2]/30 text-white transition-smooth font-medium group gap-1.5 rounded-none w-full sm:w-auto text-sm sm:text-base"
              asChild
            >
              <a href="https://discord.gg/bh2b7JurXH" target="_blank" rel="noopener noreferrer">
                Contact Us
                <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4" />
              </a>
            </Button>
            
            <a 
              href="https://ziskdocs.vercel.app/getting-started/installation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#0ABF83] hover:underline hover:scale-110 transition-smooth font-medium text-sm sm:text-base h-10 flex items-center justify-center gap-0 group w-full sm:w-auto"
            >
              Get Started
              <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-smooth -ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

