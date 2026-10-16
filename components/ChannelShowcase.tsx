"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Youtube } from "lucide-react";
import { CREATOR_CONFIG } from "@/config/creator";

export default function ChannelShowcase() {
  const { tech, life } = CREATOR_CONFIG.channels;

  return (
    <section id="channels" className="w-full bg-[#241C27] text-[#F0EDE6] py-24 sm:py-32 px-6 sm:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Index Marker */}
        <div className="font-mono text-xs uppercase tracking-widest text-[#C8E66B] mb-6">
          02 // CHANNELS
        </div>

        {/* Minimal Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <h2 className="section-title-minimal text-[#F0EDE6]">
            TWO CHANNELS<span className="text-[#C8E66B]">.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#A59AA8] max-w-md font-light">
            Distinct broadcast formats for unfiltered consumer tech audits and long-form cinema reflections.
          </p>
        </div>

        {/* Refined Minimalist Channel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Channel 1: CallMeShazzam TECH */}
          <div className="flex flex-col justify-between border-t border-white/15 pt-8 group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 overflow-hidden rounded-full border border-white/20">
                    <Image
                      src={tech.avatar}
                      alt={tech.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-[#F0EDE6] group-hover:text-[#C8E66B] transition-colors">
                      {tech.name}
                    </h3>
                    <span className="font-mono text-xs text-[#A59AA8]">
                      {tech.handle} · {tech.subscribers}
                    </span>
                  </div>
                </div>

                <span className="font-mono text-[10px] uppercase tracking-wider text-[#C8E66B] bg-[#C8E66B]/10 px-2.5 py-1 rounded">
                  {tech.badge}
                </span>
              </div>

              <blockquote className="editorial-italic text-lg text-[#F0EDE6]/90 mb-4 font-normal">
                &ldquo;{tech.tagline}&rdquo;
              </blockquote>

              <p className="font-sans text-sm text-[#A59AA8] leading-relaxed mb-6 font-light">
                {tech.description}
              </p>

              {/* Minimal inline tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {tech.focus.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] text-[#A59AA8] bg-[#171519] px-2.5 py-1 rounded border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="font-mono text-xs text-[#A59AA8]">
                PRIMARY COMMUNITY
              </span>
              <a
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F0EDE6] hover:text-[#C8E66B] transition-colors"
              >
                <Youtube className="w-4 h-4 text-[#C8E66B]" />
                <span>Visit Channel</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Channel 2: LifeofShazzam */}
          <div className="flex flex-col justify-between border-t border-white/15 pt-8 group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 overflow-hidden rounded-full border border-white/20">
                    <Image
                      src={life.avatar}
                      alt={life.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-[#F0EDE6] group-hover:text-[#C8E66B] transition-colors">
                      {life.name}
                    </h3>
                    <span className="font-mono text-xs text-[#A59AA8]">
                      {life.handle} · {life.subscribers}
                    </span>
                  </div>
                </div>

                <span className="font-mono text-[10px] uppercase tracking-wider text-[#A59AA8] bg-white/5 px-2.5 py-1 rounded">
                  {life.badge}
                </span>
              </div>

              <blockquote className="editorial-italic text-lg text-[#F0EDE6]/90 mb-4 font-normal">
                &ldquo;{life.tagline}&rdquo;
              </blockquote>

              <p className="font-sans text-sm text-[#A59AA8] leading-relaxed mb-6 font-light">
                {life.description}
              </p>

              {/* Minimal inline tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {life.focus.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] text-[#A59AA8] bg-[#171519] px-2.5 py-1 rounded border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="font-mono text-xs text-[#A59AA8]">
                ESSAYS & TRAVEL
              </span>
              <a
                href={life.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F0EDE6] hover:text-[#C8E66B] transition-colors"
              >
                <Youtube className="w-4 h-4 text-[#C8E66B]" />
                <span>Visit Channel</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
