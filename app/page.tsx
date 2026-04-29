import { CardHoverEffect } from "@/components/CardHoverEffect";
import HeroSection from "@/components/HeroSection";
import { ExTracingBeam } from "@/components/ExTracingBeam";
import { SkillInfiniteMovingCards } from "@/components/InfiniteMovingCards";
import { StickyScrollReveal } from "@/components/StickyScrollReveal";
import { BackgroundBeam } from "@/components/BackgroundBeam";
import Footer from "@/components/Footer";




export default function Home() {
  return (

    <main className="min-h-screen bg-black antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <CardHoverEffect />
      <ExTracingBeam />
      <SkillInfiniteMovingCards />
      <StickyScrollReveal />
      <BackgroundBeam />
      <Footer />
    </main>

  );
}
