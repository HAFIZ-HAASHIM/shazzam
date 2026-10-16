import type { Metadata } from "next";
import { Syne, Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "700", "800"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SHAZZAM — Experimental Digital Portfolio | Shaz Mohamed",
  description:
    "Official portfolio of SHAZZAM (Shaz Mohamed). Experimental digital art direction, Malayalam-first tech commentary, and cinema culture.",
  keywords: [
    "SHAZZAM",
    "Shaz Mohamed",
    "CallMeShazzam",
    "CallMeShazzam TECH",
    "LifeofShazzam",
    "Malayalam Tech Reviews",
    "Chai Tech Pucham",
    "TEDx Speaker",
  ],
  authors: [{ name: "SHAZZAM", url: "https://instagram.com/callmeshazzam" }],
  openGraph: {
    title: "SHAZZAM — Experimental Digital Portfolio",
    description: "Tea × Tech × Sarcasm. Digital brutalism & print magazine editorial direction.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/shazaam-tech-avatar.jpg",
        width: 900,
        height: 900,
        alt: "SHAZZAM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SHAZZAM — Experimental Digital Portfolio",
    description: "Tea × Tech × Sarcasm.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${syne.variable} ${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans bg-[#000000] text-[#F0EDE6] antialiased selection:bg-[#C8E66B] selection:text-black min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
