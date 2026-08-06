"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { gallery } from "@/data/site";

export function Galeria() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i === null ? i : (i + 1) % gallery.length));
      if (e.key === "ArrowLeft")
        setActive((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section id="galeria" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl mb-16">
          <p className="font-display text-xs tracking-[0.3em] text-silver uppercase mb-4">
            El trabajo habla
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-5xl text-mist">
            Galería
          </h2>
          <p className="mt-4 text-silver">
            Últimos trabajos terminados en el taller.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border">
          {gallery.map((item, i) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative aspect-[4/5] w-full overflow-hidden bg-ink text-left"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-ink/90 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <p className="text-mist text-xs md:text-sm font-medium leading-tight">
                  {item.title}
                </p>
                <p className="text-silver text-[10px] md:text-xs mt-0.5 uppercase tracking-wide">
                  {item.category}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] bg-ink/95 backdrop-blur flex items-center justify-center p-6"
          onClick={() => setActive(null)}
        >
          <button
            aria-label="Cerrar"
            onClick={() => setActive(null)}
            className="absolute top-6 right-6 text-mist text-3xl leading-none hover:text-silver"
          >
            ×
          </button>
          <div className="relative max-w-3xl max-h-[85vh] w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={gallery[active].src}
              alt={gallery[active].title}
              width={1200}
              height={1500}
              className="w-full h-auto max-h-[85vh] object-contain mx-auto"
            />
            <p className="text-center text-silver text-sm mt-4">
              {gallery[active].title} — {gallery[active].category}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
