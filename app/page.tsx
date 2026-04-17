import { CardHoverEffect } from "@/components/CardHoverEffect";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    
    <main className="min-h-screen bg-black antialiased bg-grid-white/[0.02]">
     <HeroSection/>
     <CardHoverEffect/>
    </main>

  );
}
