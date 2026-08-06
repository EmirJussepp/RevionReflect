"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 md:pt-52 md:pb-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/4 h-[520px] w-[700px] rounded-full bg-surface-2/60 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-10 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-xs tracking-[0.3em] text-silver uppercase mb-6"
            >
              Detailing · Cerámico · Preparación para la venta
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-semibold text-5xl md:text-6xl leading-[1.05] text-gradient"
            >
              Uno a uno,
              <br />
              contra tu auto.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-md text-base md:text-lg text-silver"
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
              className="mt-16 grid grid-cols-3 gap-6 max-w-md border-t border-border pt-8"
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

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-3 bg-gradient-to-br from-surface-2 to-transparent blur-xl opacity-70" />
            <div className="relative clip-edge border border-border overflow-hidden">
              <Image
                src="/hero/hero-pulido.png"
                alt="Pulido de pintura a mano con pulidora orbital"
                width={823}
                height={458}
                priority
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-mist/10" />
            </div>
            <p className="mt-3 text-xs text-muted uppercase tracking-wide">
              Corrección de pintura en proceso
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
