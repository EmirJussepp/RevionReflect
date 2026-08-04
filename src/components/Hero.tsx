"use client";

import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-28 md:pt-52 md:pb-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[900px] rounded-full bg-surface-2/60 blur-3xl" />
        <div className="absolute top-24 left-1/2 -translate-x-1/2 h-px w-[70%] bg-gradient-to-r from-transparent via-silver/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-xs tracking-[0.3em] text-silver uppercase mb-6"
        >
          Detailing · Cerámico · PPF
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-semibold text-5xl md:text-7xl leading-[1.05] text-gradient max-w-3xl"
        >
          Uno a uno,
          <br />
          contra tu auto.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-base md:text-lg text-silver"
        >
          Corrección de pintura, tratamiento cerámico y detailing integral.
          Cada superficie trabajada con paciencia, en el orden correcto, sin apuro.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="clip-edge bg-mist text-ink font-semibold px-7 py-3.5 hover:bg-white transition-colors"
          >
            Agendar turno
          </a>
          <a
            href="#servicios"
            className="clip-edge border border-border px-7 py-3.5 text-mist hover:border-silver transition-colors"
          >
            Ver servicios
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-3 gap-6 max-w-xl border-t border-border pt-8"
        >
          {[
            ["1 a 1", "Contra tu auto"],
            ["Sin apuro", "Ni atajos"],
            ["Cada detalle", "Importa"],
          ].map(([a, b]) => (
            <div key={a}>
              <p className="font-display text-xl md:text-2xl font-semibold text-mist">{a}</p>
              <p className="text-xs text-silver uppercase tracking-wide mt-1">{b}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
