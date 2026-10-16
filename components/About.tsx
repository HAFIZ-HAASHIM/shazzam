"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CREATOR_CONFIG } from "@/config/creator";

export default function About() {
  return (
    <section id="about" className="w-full bg-[#241C27] text-[#F0EDE6] pt-20 sm:pt-28 pb-24 px-6 sm:px-12 border-t border-white/10 rounded-t-[32px] sm:rounded-t-[44px] sheet-elevation">
      <div className="max-w-7xl mx-auto">
        {/* Subtle physical sheet indicator */}
        <div className="w-12 h-1 bg-white/15 rounded-full mx-auto -mt-14 sm:-mt-20 mb-14 sm:mb-20" />

        {/* Section Index Marker */}
        <div className="font-mono text-xs uppercase tracking-widest text-[#C8E66B] mb-6">
          01 // ABOUT
        </div>

        {/* Strong, Minimal Editorial Headline */}
        <h2 className="section-title-minimal text-[#F0EDE6] max-w-4xl">
          CHAI, TECH & UNFILTERED PERSPECTIVE.
        </h2>

        {/* Balanced Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-12 items-start">
          {/* Authentic Portrait (Minimal framing) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-xl bg-[#171519] border border-white/10 group">
              <Image
                src="/images/thumb-ezvO3fWNU74.jpg"
                alt="Shaz Mohamed"
                fill
                className="object-cover filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#241C27]/90 backdrop-blur-md p-3 rounded-lg border border-white/10">
                <span className="font-mono text-[10px] text-[#C8E66B] uppercase tracking-wider block">
                  SUBJECT
                </span>
                <p className="font-display font-bold text-sm text-[#F0EDE6]">
                  Shaz Mohamed (SHAZZAM)
                </p>
              </div>
            </div>
          </div>

          {/* Concise Verified Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <p className="font-sans text-base sm:text-lg text-[#F0EDE6] leading-relaxed font-light">
              Before millions of views across platforms, Shaz Mohamed worked as an assistant director in Malayalam cinema. That film background shapes every video: precise comedic timing, character-driven tech sketches, and zero patience for rehearsed marketing PR.
            </p>

            <p className="font-sans text-sm sm:text-base text-[#A59AA8] leading-relaxed">
              With his signature morning series <span className="text-[#F0EDE6]">&ldquo;Chai with Tech&rdquo;</span>, he introduced <span className="editorial-italic text-[#C8E66B]">&ldquo;Pucham&rdquo;</span>—unapologetic skepticism toward hardware compromises, green-line display flaws, and planned obsolescence.
            </p>

            {/* Documented Highlights (Minimal inline list) */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 font-mono text-xs">
              <div>
                <span className="text-[#C8E66B] block text-lg font-bold font-display">1M+</span>
                <span className="text-[#A59AA8]">Tech Community</span>
              </div>
              <div>
                <span className="text-[#C8E66B] block text-lg font-bold font-display">Gold</span>
                <span className="text-[#A59AA8]">YouTube Award</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-[#C8E66B] block text-lg font-bold font-display">TEDx</span>
                <span className="text-[#A59AA8]">Keynote Speaker</span>
              </div>
            </div>

            {/* Keynote Link */}
            <div className="pt-4">
              <a
                href={CREATOR_CONFIG.socials.tedx}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F0EDE6] hover:text-[#C8E66B] transition-colors"
              >
                <span>Watch TEDx Keynote</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C8E66B]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
