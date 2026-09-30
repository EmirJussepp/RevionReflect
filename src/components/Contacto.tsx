"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";
import { whatsappLink } from "@/lib/whatsapp";

export function Contacto() {
  return (
    <section id="contacto" className="relative py-24 md:py-32 border-t border-border overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-72 w-[700px] rounded-full bg-surface-2/50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-semibold text-3xl md:text-5xl text-mist"
        >
          ¿Hablamos?
        </motion.h2>
        <p className="mt-4 text-silver">
          Turno para tu auto o consulta de repuestos, escribinos por WhatsApp.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex clip-edge bg-whatsapp text-ink font-semibold px-8 py-4 hover:brightness-110 transition-all"
          >
            Agendar turno
          </a>
          <a
            href={whatsappLink(site.whatsappRepuestosMinorista)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex clip-edge border border-mist/40 text-mist font-semibold px-8 py-4 hover:border-mist transition-colors"
          >
            Consultar repuestos
          </a>
        </div>
      </div>
    </section>
  );
}
