"use client";

import { motion } from "framer-motion";
import { gallery } from "@/data/site";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

export function Galeria() {
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
            Deslizá para ver el antes y el después de cada trabajo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {gallery.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border border-border"
            >
              <BeforeAfterSlider before={item.before} after={item.after} alt={item.title} />
              <div className="p-4">
                <p className="text-mist text-sm font-medium">{item.title}</p>
                <p className="text-silver text-xs mt-0.5">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
