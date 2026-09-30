"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[640px] items-end overflow-hidden pt-32 pb-16 md:min-h-[760px] md:pb-24"
    >
      <Image
        src="/hero/hero-pulido.png"
        alt="Pulido de pintura a mano con pulidora orbital"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_42%] filter brightness-[0.4] contrast-[1.05] saturate-[0.85]"
      />

      {/* legibilidad del texto a la izquierda */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
      {/* fade hacia la sección siguiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
      {/* viñeta superior para que el navbar flote bien */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/80 to-transparent" />

      <div className="relative mx-auto w-full max-w-6xl px-5">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-xs tracking-[0.3em] text-silver uppercase mb-6"
        >
          Detailing · Repuestos · Preparación para la venta
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-semibold text-5xl md:text-7xl leading-[1.05] text-mist max-w-2xl"
        >
          Siempre
          <br />
          en cada detalle.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-md text-base md:text-lg text-silver"
        >
          Corrección de pintura, detailing integral y preparación para la venta.
          A mano, sin apuro, hasta que el auto vuelva a brillar como el primer día.
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
            className="clip-edge border border-mist/40 px-7 py-3.5 text-mist backdrop-blur-sm hover:border-mist transition-colors"
          >
            Ver servicios
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-xl border-t border-mist/20 pt-6"
        >
          {[
            ["Un auto", "Por vez"],
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
