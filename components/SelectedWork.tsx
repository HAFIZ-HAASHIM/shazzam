"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CREATOR_CONFIG, VideoItem } from "@/config/creator";

export default function SelectedWork() {
  const videos = CREATOR_CONFIG.featuredVideos;

  return (
    <section id="work" className="w-full bg-[#241C27] text-[#F0EDE6] py-24 sm:py-32 px-6 sm:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Index Marker */}
        <div className="font-mono text-xs uppercase tracking-widest text-[#C8E66B] mb-6">
          03 // SELECTED WORK
        </div>

        {/* Minimal Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <h2 className="section-title-minimal text-[#F0EDE6]">
            CURATED ARCHIVE<span className="text-[#C8E66B]">.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#A59AA8] max-w-md font-light">
            Selected dissections, consumer advocacy videos, and director-turned-creator essays.
          </p>
        </div>

        {/* Minimal Grid of Authentic Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {videos.map((video: VideoItem, idx: number) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Clean Aspect-Video Thumbnail */}
                <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-[#171519] border border-white/10 mb-5">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-[#241C27]/85 backdrop-blur-sm px-2.5 py-1 rounded font-mono text-[10px] text-[#C8E66B] uppercase tracking-wider border border-white/5">
                    {video.channel}
                  </div>
                  <div className="absolute bottom-3 right-3 font-mono text-[10px] text-[#F0EDE6]/80 bg-[#171519]/80 px-2 py-0.5 rounded">
                    0{idx + 1}
                  </div>
                </div>

                {/* Video Metadata & Headline */}
                <div className="flex items-center gap-2 mb-2 font-mono text-[11px] text-[#A59AA8] uppercase tracking-wider">
                  <span>{video.category}</span>
                </div>

                <h3 className="font-display font-bold text-lg sm:text-xl text-[#F0EDE6] group-hover:text-[#C8E66B] transition-colors leading-snug">
                  {video.title}
                </h3>
              </div>

              {/* Minimal watch link */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between font-mono text-xs text-[#A59AA8] group-hover:text-[#F0EDE6] transition-colors">
                <span>Watch on YouTube</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C8E66B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        {/* Quiet Editorial Archive Link */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-[#A59AA8]">
            Full archive available across both YouTube channels
          </span>
          <a
            href={CREATOR_CONFIG.channels.tech.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F0EDE6] hover:text-[#C8E66B] transition-colors"
          >
            <span>Explore Complete Channel Archive</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#C8E66B]" />
          </a>
        </div>
      </div>
    </section>
  );
}
