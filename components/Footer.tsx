"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { CREATOR_CONFIG } from "@/config/creator";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#171519] border-t border-white/5 py-12 px-6 sm:px-12 text-[#A59AA8]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand & Coordinates */}
        <div className="flex items-center gap-4 text-center sm:text-left">
          <Link
            href="/"
            className="font-display font-bold text-lg text-[#F0EDE6] hover:text-[#C8E66B] transition-colors"
          >
            SHAZZAM
          </Link>
          <span className="text-white/10">|</span>
          <p className="font-mono text-xs uppercase tracking-widest text-[#A59AA8]">
            {CREATOR_CONFIG.name} — Tech Critic & Filmmaker
          </p>
        </div>

        {/* Center: Malayalam signature */}
        <div className="editorial-italic text-sm text-[#A59AA8] text-center">
          &ldquo;Chai, Tech & Pucham&rdquo;
        </div>

        {/* Right: Back to top + copyright */}
        <div className="flex items-center gap-6">
          <span className="font-mono text-[10px] text-[#A59AA8] uppercase tracking-widest">
            © {new Date().getFullYear()} ALL RIGHTS RESERVED
          </span>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-9 h-9 rounded-full bg-[#241C27] hover:bg-[#C8E66B] text-[#F0EDE6] hover:text-[#171519] border border-white/10 flex items-center justify-center transition-all duration-200"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
