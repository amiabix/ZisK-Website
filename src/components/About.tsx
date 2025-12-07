export const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 border-t border-border bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 border border-border rounded text-xs font-mono text-muted-foreground">
                Team
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-semibold tracking-tight">
                About <span className="text-primary-bright">SilentSig</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                ZisK began as a research effort at Polygon Labs focused on reducing the cost 
                and latency of zero-knowledge proof generation.
              </p>
              
              <p>
                In 2025, the core team established SilentSig Switzerland GmbH to continue 
                the development independently.
              </p>
              
              <p>
                SilentSig now maintains ZisK as an open-source, community-led proving system.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <a 
                href="mailto:info@silentsig.build"
                className="inline-flex items-center justify-center px-6 py-3 border border-border rounded text-sm font-medium hover:border-primary-bright hover:text-primary-bright transition-smooth"
              >
                Contact Us
              </a>
              <a 
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-border rounded text-sm font-medium hover:border-primary-bright hover:text-primary-bright transition-smooth"
              >
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
