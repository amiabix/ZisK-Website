import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhatIsZisk } from "@/components/WhatIsZisk";
import { KeyDifferentiators } from "@/components/KeyDifferentiators";
import { Features } from "@/components/Features";
import { SocialProof } from "@/components/SocialProof";
import { BuildWithZisk } from "@/components/BuildWithZisk";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
            <main>
              <Hero />
              <WhatIsZisk />
              <SocialProof />
              <KeyDifferentiators />
              <Features />
              <BuildWithZisk />
            </main>
      <Footer />
    </div>
  );
};

export default Index;
