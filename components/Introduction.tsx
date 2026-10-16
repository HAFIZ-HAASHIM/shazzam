"use client";

import React from "react";
import { Coffee, Flame, Video, ShieldCheck, ArrowDownRight } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

export default function Introduction() {
  const pillars = [
    {
      num: "01",
      icon: <Coffee className="w-5 h-5 text-[#24132E]" />,
      title: "Chai with Tech",
      desc: "Daily morning ritual dissecting global hardware announcements, consumer leaks, and firmware controversies over a cup of hot tea.",
    },
    {
      num: "02",
      icon: <Flame className="w-5 h-5 text-[#24132E]" />,
      title: "Zero Sugarcoating",
      desc: "If a flagship display develops green lines or an upgrade is minimal, no brand sponsorship softens the verdict.",
    },
    {
      num: "03",
      icon: <Video className="w-5 h-5 text-[#24132E]" />,
      title: "Malayalam-First",
      desc: "Deep technical insight delivered in colloquial, sarcastic Malayalam that resonates from Kochi to Dubai and across the globe.",
    },
    {
      num: "04",
      icon: <ShieldCheck className="w-5 h-5 text-[#24132E]" />,
      title: "Consumer Defense",
      desc: "Standing up for buyer rights against anti-consumer repair policies, disposable tech trends, and misleading benchmark numbers.",
    },
  ];

  return (
    <section
      id="introduction"
      className="relative z-10 w-full bg-[#F5F0E8] text-[#17151A] brutalist-transition-sheet"
    >
      {/* DISTINCTIVE ACID LIME TRANSITION SEAM: Physical Architectural Band */}
      <div className="w-full bg-[#D5FF45] text-[#17151A] border-y-2 border-[#17151A] py-2 px-6 sm:px-10 flex items-center justify-between overflow-hidden select-none">
        <div className="flex items-center gap-8 font-mono text-[11px] sm:text-xs uppercase tracking-widest font-extrabold whitespace-nowrap">
          <span>// SPREAD 01: EDITORIAL DISSECTION</span>
          <span className="hidden sm:inline">✦</span>
          <span className="hidden sm:inline">NO SPONSORED BIAS</span>
          <span className="hidden md:inline">✦</span>
          <span className="hidden md:inline">UNFILTERED MALAYALAM COMMENTARY</span>
          <span className="hidden lg:inline">✦</span>
          <span className="hidden lg:inline">CINEMATIC ROOTS</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs font-black">
          <span>OVERLAP // ACTIVE</span>
          <ArrowDownRight className="w-4 h-4 stroke-[3]" />
        </div>
      </div>

      {/* Main Print Magazine Editorial Spread */}
      <div className="max-w-7xl mx-auto py-24 sm:py-32 px-6 sm:px-10">
        {/* Section Header with Folio Numbers */}
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-between border-b-2 border-[#17151A] pb-4 mb-12 sm:mb-16 font-mono text-xs uppercase tracking-widest text-[#24132E] font-bold">
            <div className="flex items-center gap-3">
              <span className="bg-[#17151A] text-[#D5FF45] px-2 py-0.5">SECTION 01</span>
              <span>THE EDITORIAL MANIFESTO</span>
            </div>
            <span className="text-[#A995B9]">PAGE 04 OF 16</span>
          </div>
        </ScrollReveal>

        {/* Massive Editorial Headline with Contrasting Serif */}
        <ScrollReveal delay={0.1}>
          <div className="max-w-5xl">
            <h2 className="editorial-headline text-[#17151A]">
              NOT ANOTHER CORPORATE TECH CHANNEL.
              <span className="block editorial-serif-accent text-[#24132E] font-normal mt-3 normal-case text-[0.85em]">
                Real opinions. Unapologetic satire.
              </span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Narrative Newspaper Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mt-14 sm:mt-18 pt-10 border-t border-[#17151A]/20 items-start">
          <div className="lg:col-span-5 border-l-4 border-[#D5FF45] pl-6 py-2">
            <ScrollReveal delay={0.2}>
              <p className="font-display font-bold text-xl sm:text-2xl text-[#17151A] leading-snug">
                Before the algorithms and millions of subscribers, Shaz Mohamed worked as an assistant director in Malayalam cinema.
              </p>
              <p className="font-sans text-sm text-[#24132E]/80 mt-4 leading-relaxed font-medium">
                That film background shapes every video: narrative drama, relentless timing, and an instinctive intolerance for rehearsed brand propaganda.
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7">
            <ScrollReveal delay={0.3}>
              <p className="font-sans text-base sm:text-lg text-[#24132E] leading-relaxed">
                When traditional tech reviewers read benchmark charts straight off vendor press sheets, SHAZZAM introduced <span className="bg-[#D5FF45] px-2 py-0.5 font-bold font-mono text-[#17151A]">&quot;Pucham&quot;</span>—the quintessential Malayali smirk of unapologetic skepticism. From personifying smartphones into comedic tragedy characters to confronting manufacturers over screen defects, his monologues prioritize the consumer&apos;s wallet over corporate relationships.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Four Brutalist Editorial Pillar Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 sm:mt-20">
          {pillars.map((item, idx) => (
            <ScrollReveal key={item.title} delay={0.1 * idx} direction="up">
              <div className="h-full bg-[#17151A] text-[#F5F0E8] border-2 border-[#17151A] p-6 sm:p-7 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1.5 shadow-xl">
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                    <span className="font-mono text-xs text-[#D5FF45] font-extrabold tracking-widest">
                      [{item.num}]
                    </span>
                    <div className="w-8 h-8 bg-[#D5FF45] flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight text-[#F5F0E8] mb-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-[#A995B9] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-5 mt-6 border-t border-white/10 font-mono text-[9px] text-[#A995B9] uppercase tracking-widest">
                  EDITORIAL PILLAR
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
