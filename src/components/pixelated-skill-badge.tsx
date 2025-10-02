"use client";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface PixelatedSkillBadgeProps {
  skill: string;
  delay?: number;
}

export function PixelatedSkillBadge({ skill, delay = 0 }: PixelatedSkillBadgeProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Use black and white theme
  const skillColor = "#000000"; // Black background

  if (isHovered) {
    return (
      <div
        className="relative inline-block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <PixelatedCanvas
          src={`data:image/svg+xml;base64,${btoa(`
            <svg width="120" height="32" xmlns="http://www.w3.org/2000/svg">
              <rect width="120" height="32" fill="${skillColor}" rx="6"/>
              <text x="60" y="20" text-anchor="middle" fill="white" font-family="Arial" font-size="12" font-weight="bold">${skill}</text>
            </svg>
          `)}`}
          width={120}
          height={32}
          cellSize={2}
          dotScale={0.8}
          shape="square"
          backgroundColor="transparent"
          dropoutStrength={0.05}
          interactive
          distortionStrength={2}
          distortionRadius={60}
          distortionMode="swirl"
          followSpeed={0.3}
          jitterStrength={2}
          jitterSpeed={2}
          sampleAverage
          className="rounded-md"
        />
      </div>
    );
  }

  return (
    <Badge
      className="transition-all duration-200 hover:scale-105 cursor-pointer bg-black text-white border border-white/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {skill}
    </Badge>
  );
}
