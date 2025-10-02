"use client";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";

export function PixelatedCanvasDemo() {
  return (
    <PixelatedCanvas
      src="/sunil.jpg"
      width={200}
      height={150}
      cellSize={4}
      dotScale={0.9}
      shape="square"
      backgroundColor="#000000"
      dropoutStrength={0.1}
      interactive
      distortionStrength={0.1}
      distortionRadius={200}
      distortionMode="repel"
      followSpeed={0.2}
      jitterStrength={4}
      jitterSpeed={1}
      sampleAverage
      className="size-28 border rounded-xs drop-shadow-lg"
    />
  );
}
