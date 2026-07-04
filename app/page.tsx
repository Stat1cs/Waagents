import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Comparison } from "@/components/sections/Comparison";
import { DemoChat } from "@/components/sections/DemoChat";
import { FAQ } from "@/components/sections/FAQ";
import { Features } from "@/components/sections/Features";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Industries } from "@/components/sections/Industries";
import { Pricing } from "@/components/sections/Pricing";
import { SocialProof } from "@/components/sections/SocialProof";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/shared/MobileStickyCTA";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <BeforeAfter />
        <HowItWorks />
        <Features />
        <Comparison />
        <Industries />
        <DemoChat />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
