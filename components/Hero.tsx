"use client";

import React from "react";
import { ArrowDown } from "lucide-react";
import SplineScene from "./SplineScene";
import { CREATOR_CONFIG } from "@/config/creator";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] max-h-[1080px] w-full bg-[#000000] text-[#F0EDE6] overflow-hidden flex flex-col justify-between select-none">
      {/* LAYER 1: Pure Black Webpage Background (#000000) extending across all viewport edges */}
      <div className="absolute inset-0 bg-[#000000] z-0 pointer-events-none" />

      {/* LAYER 2: Oversized SHAZZAM Typography Centered Vertically Behind the Robot's Head */}
      <div className="absolute inset-x-0 top-[22%] sm:top-[20%] md:top-[17%] lg:top-[15%] z-10 flex items-center justify-center pointer-events-none select-none px-4 sm:px-8">
        <h1 className="hero-poster-title text-[#F0EDE6] text-center select-none w-full">
          SHAZZAM
        </h1>
      </div>

      {/* LAYER 3: Spline Robot Scene Emerging in Front of Typography */}
      <div className="absolute inset-0 z-20 pointer-events-auto">
        <SplineScene className="w-full h-full" />
      </div>

      {/* LAYER 4: Navigation Clearance & Understated Foreground Details */}
      <div className="relative z-30 h-20 sm:h-24 pointer-events-none" />

      {/* LAYER 4: Bottom Editorial Descriptor & Subtle Scroll Indicator */}
      <div className="relative z-30 pb-8 px-6 sm:px-12 max-w-7xl w-full mx-auto flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pointer-events-none">
        {/* Short Understated Professional Descriptor */}
        <div className="max-w-md pointer-events-none">
          <p className="font-sans text-xs sm:text-sm text-[#A59AA8] font-light leading-relaxed">
            {CREATOR_CONFIG.descriptor}
          </p>
        </div>

        {/* Subtle Scroll Indicator */}
        <a
          href="#about"
          className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#A59AA8] hover:text-[#C8E66B] transition-colors pointer-events-auto group cursor-pointer"
        >
          <span>EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#C8E66B] group-hover:translate-y-0.5 transition-transform" />
        </a>
      </div>
    </section>
  );
}
