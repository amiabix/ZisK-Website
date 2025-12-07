import { Button } from "@/components/ui/button";
import { ArrowUpRight, MessageCircle } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-12">
            <a href="/" className="transition-smooth hover:opacity-80">
              <img 
                src="/logos/logo.png" 
                alt="ZisK" 
                className="h-24 w-auto brightness-0 invert"
              />
            </a>
            <nav className="hidden md:flex items-center gap-8">
                    <a href="#what-is-zisk" className="text-sm text-muted-foreground transition-smooth hover:text-foreground">
                      Overview
                    </a>
              <a 
                href="https://ziskdocs.vercel.app/getting-started/installation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-[#0ABF83] hover:underline hover:scale-110 transition-smooth font-medium flex items-center gap-0 group"
              >
                Get Started
                <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-smooth -ml-1" />
              </a>
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <Button 
              className="bg-[#007755] border border-[#F3f3f2]/30 text-white transition-smooth font-medium group gap-1.5 rounded-none"
              asChild
            >
              <a href="#contact">
                Contact Us
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
            <a 
              href="https://discord.gg/bh2b7JurXH"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-[#0ABF83] transition-smooth font-medium flex items-center gap-1.5 group"
            >
              Developer Assistance
              <MessageCircle className="h-4 w-4 text-[#0ABF83] group-hover:text-[#0ABF83]" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
