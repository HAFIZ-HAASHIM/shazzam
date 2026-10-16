import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ChannelShowcase from "@/components/ChannelShowcase";
import SelectedWork from "@/components/SelectedWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-[#F0EDE6] selection:bg-[#C8E66B] selection:text-[#171519]">
      {/* 1. Global Navigation Bar (z-50) */}
      <Navigation />

      {/* 2. Sticky Full-Screen Hero Viewport with Published Spline 3D Scene (z-0) */}
      <div className="sticky top-0 z-0 h-screen w-full overflow-hidden bg-black">
        <Hero />
      </div>

      {/* 3. Physical Overlapping Editorial Surface (z-10) */}
      <div className="relative z-10 bg-[#241C27]">
        {/* Section 01: About & Cinematic Background */}
        <About />

        {/* Section 02: Dual Broadcast Destinations */}
        <ChannelShowcase />

        {/* Section 03: Curated Video Archive */}
        <SelectedWork />

        {/* Section 04: Typographic Closing & Inquiries */}
        <Contact />

        {/* Colophon Footer */}
        <Footer />
      </div>
    </main>
  );
}
