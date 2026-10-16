"use client";

import React from "react";
import { ArrowUpRight, Instagram, Youtube, Twitter } from "lucide-react";
import { CREATOR_CONFIG } from "@/config/creator";

export default function Contact() {
  const verifiedChannels = [
    {
      platform: "Instagram",
      handle: "@callmeshazzam",
      description: "Direct inquiries & keynote speaking",
      url: CREATOR_CONFIG.socials.instagram,
      icon: <Instagram className="w-4 h-4 text-[#C8E66B]" />,
    },
    {
      platform: "YouTube Tech",
      handle: "@CallMeShazzamTECH",
      description: "1M+ community & hardware audits",
      url: CREATOR_CONFIG.socials.youtubeTech,
      icon: <Youtube className="w-4 h-4 text-[#C8E66B]" />,
    },
    {
      platform: "YouTube Life",
      handle: "@Lifeof_Shazzam",
      description: "Cinema discussions & essays",
      url: CREATOR_CONFIG.socials.youtubeLife,
      icon: <Youtube className="w-4 h-4 text-[#C8E66B]" />,
    },
    {
      platform: "Twitter / X",
      handle: "@callmeshazzam",
      description: "Bite-sized reactions & commentary",
      url: CREATOR_CONFIG.socials.twitter,
      icon: <Twitter className="w-4 h-4 text-[#C8E66B]" />,
    },
  ];

  return (
    <section id="contact" className="w-full bg-[#241C27] text-[#F0EDE6] py-24 sm:py-32 px-6 sm:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Index Marker */}
        <div className="font-mono text-xs uppercase tracking-widest text-[#C8E66B] mb-6">
          04 // CONTACT
        </div>

        {/* Closing Statement */}
        <div className="max-w-3xl mb-16">
          <h2 className="section-title-minimal text-[#F0EDE6] mb-6">
            INQUIRIES & COLLABORATIONS<span className="text-[#C8E66B]">.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#A59AA8] font-light leading-relaxed">
            For keynote speaking, technical consulting, and editorial partnerships with zero corporate PR filters, reach out through verified digital platforms.
          </p>
        </div>

        {/* Minimal Verified Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-white/10">
          {verifiedChannels.map((channel) => (
            <a
              key={channel.platform}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-lg bg-[#171519] border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded bg-[#241C27] border border-white/5">
                    {channel.icon}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#A59AA8] group-hover:text-[#C8E66B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#A59AA8] block mb-1">
                  {channel.platform}
                </span>
                <p className="font-display font-bold text-base text-[#F0EDE6] group-hover:text-[#C8E66B] transition-colors mb-2">
                  {channel.handle}
                </p>
                <p className="font-sans text-xs text-[#A59AA8] font-light">
                  {channel.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 font-mono text-[10px] uppercase tracking-widest text-[#A59AA8] group-hover:text-[#F0EDE6]">
                Open Platform →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
