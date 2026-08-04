"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

type Props = {
  before: string;
  after: string;
  alt: string;
};

export function BeforeAfterSlider({ before, after, alt }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] w-full select-none overflow-hidden bg-surface-2 cursor-ew-resize touch-none"
      onPointerDown={(e) => {
        dragging.current = true;
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
        updateFromClientX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (!dragging.current) return;
        updateFromClientX(e.clientX);
      }}
      onPointerUp={() => (dragging.current = false)}
      onPointerLeave={() => (dragging.current = false)}
    >
      <Image src={after} alt={alt} fill className="object-cover" draggable={false} />

      <Image
        src={before}
        alt={alt}
        fill
        className="object-cover"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        draggable={false}
      />

      <div
        className="absolute inset-y-0 w-0.5 bg-mist"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-9 w-9 rounded-full bg-mist text-ink flex items-center justify-center text-xs font-semibold shadow-lg">
          ⇔
        </div>
      </div>

      <span className="absolute bottom-3 left-3 text-[10px] tracking-widest uppercase bg-ink/70 text-mist px-2 py-1">
        Antes
      </span>
      <span className="absolute bottom-3 right-3 text-[10px] tracking-widest uppercase bg-ink/70 text-mist px-2 py-1">
        Después
      </span>
    </div>
  );
}
