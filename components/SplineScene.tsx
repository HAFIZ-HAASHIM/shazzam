"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface SplineSceneProps {
  className?: string;
  sceneUrl?: string;
}

export default function SplineScene({
  className = "",
  sceneUrl = "/spline/index.html",
}: SplineSceneProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative w-full h-full overflow-hidden bg-transparent select-none ${className}`}>
      {/* Lightweight Preloader Fallback (Pure Black #000000, Zero White Flash) */}
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#000000] z-20 transition-opacity duration-500 pointer-events-none">
          <div className="relative w-36 h-36 opacity-20 animate-pulse">
            <Image
              src="/spline-preview.jpg"
              alt="3D Robot Loading"
              fill
              className="object-cover grayscale"
              priority
            />
          </div>
          <div className="flex items-center gap-2 mt-4 font-mono text-[10px] uppercase tracking-widest text-[#A59AA8]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8E66B] animate-ping" />
            Connecting 3D Scene
          </div>
        </div>
      )}

      {/* Official Spline 3D Scene (Layer 3) with Cursor-Follow Interaction */}
      {isClient && !hasError && (
        <iframe
          src={sceneUrl}
          title="SHAZZAM 3D Robot Scene"
          allowTransparency={true}
          style={{ backgroundColor: "transparent" }}
          className="w-full h-full border-0 absolute inset-0 z-0 pointer-events-auto bg-transparent object-cover"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
        />
      )}

      {/* Clean Fallback if WebGL fails */}
      {hasError && (
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center bg-[#000000]">
          <p className="font-display font-bold text-xl text-[#F0EDE6] uppercase tracking-wider mb-2">
            3D Space Active
          </p>
          <p className="font-mono text-xs text-[#A59AA8]">
            Interactive environment optimized for desktop and mobile.
          </p>
        </div>
      )}
    </div>
  );
}
