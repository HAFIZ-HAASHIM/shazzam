"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { CREATOR_CONFIG } from "@/config/creator";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "ABOUT", href: "#about" },
    { label: "CHANNELS", href: "#channels" },
    { label: "SELECTED WORK", href: "#work" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#241C27]/90 backdrop-blur-md border-b border-white/5 py-3.5 shadow-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
        {/* Brand identity */}
        <Link href="/" className="font-display font-bold text-lg tracking-tight text-[#F0EDE6] hover:text-[#C8E66B] transition-colors">
          SHAZZAM
        </Link>

        {/* Minimal Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-mono text-[11px] uppercase tracking-widest text-[#A59AA8] hover:text-[#F0EDE6] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Minimal YouTube link */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={CREATOR_CONFIG.channels.tech.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-[#F0EDE6] hover:text-[#C8E66B] transition-colors"
          >
            <span>YOUTUBE</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#C8E66B]" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[#F0EDE6] hover:text-[#C8E66B] focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {mobileOpen ? <X className="w-5 h-5 text-[#C8E66B]" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#241C27]/98 backdrop-blur-xl border-b border-white/10 px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-display text-lg font-bold uppercase tracking-tight text-[#F0EDE6] hover:text-[#C8E66B] transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
