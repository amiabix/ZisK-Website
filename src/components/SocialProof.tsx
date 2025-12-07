import { useEffect, useRef, useState } from "react";

const partners = [
  { name: "Eth Proofs by Ethereum Foundation", url: "https://ethproofs.org" },
  { name: "Ethrex", url: "#" },
  { name: "ZkCloud", url: "#" },
  { name: "Boundless Network", url: "#" },
  { name: "Erigon", url: "https://github.com/ledgerwatch/erigon" },
  { name: "Nethermind", url: "https://nethermind.io" },
  { name: "Geth", url: "https://geth.ethereum.org" },
];

export const SocialProof = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`pt-20 pb-12 relative social-proof-section group overflow-hidden ${isVisible ? 'social-proof-visible' : ''}`}
    >
      {/* Animated background box effect - top right to blend with WhatIsZisk */}
      <div className="absolute inset-0 animated-card-background what-is-zisk-background social-proof-background z-0">
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

      {/* Subtle animated background glow */}
      <div className="social-proof-glow-bg"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex items-center gap-8 flex-wrap">
          <div className="flex-shrink-0 text-base lg:text-lg font-mono font-bold text-muted-foreground uppercase tracking-wider whitespace-nowrap social-proof-label">
            Trusted by:
          </div>
          <div className="flex-1 flex items-center gap-12 flex-wrap">
            {partners.map((partner, index) => (
              <a
                key={`${partner.name}-${index}`}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-proof-partner text-base lg:text-lg font-display font-bold text-muted-foreground transition-smooth flex-shrink-0 relative"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <span className="social-proof-partner-text">{partner.name}</span>
                <span className="social-proof-partner-underline"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

