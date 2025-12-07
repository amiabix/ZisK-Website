import { Github, Twitter, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          <div className="space-y-4">
            <a href="/" className="transition-smooth hover:opacity-80 inline-block">
              <img 
                src="/logos/logo.png" 
                alt="ZisK" 
                className="h-16 w-auto brightness-0 invert"
              />
            </a>
            <p className="text-sm text-muted-foreground">
              Real-time zero-knowledge proving for modern applications.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="text-sm font-medium">Product</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="https://ziskdocs.vercel.app/getting-started/installation" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-smooth">Documentation</a>
              </li>
              <li>
                <a href="https://github.com/0xPolygonHermez/zisk" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-smooth">GitHub</a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-smooth">Examples</a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <div className="text-sm font-medium">Company</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-foreground transition-smooth">About</a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-smooth">Blog</a>
              </li>
              <li>
                <a href="mailto:info@silentsig.build" className="hover:text-foreground transition-smooth">Contact</a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <div className="text-sm font-medium">Connect</div>
            <div className="flex gap-4">
              <a 
                href="https://github.com/0xPolygonHermez/zisk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-smooth"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://x.com/ziskvm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-smooth"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://discord.gg/bh2b7JurXH" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-smooth"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground font-mono">
            © 2025 SilentSig Switzerland GmbH
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground font-mono">
            <a href="#" className="hover:text-foreground transition-smooth">Privacy</a>
            <a href="#" className="hover:text-foreground transition-smooth">Terms</a>
            <a href="#" className="hover:text-foreground transition-smooth">License</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
