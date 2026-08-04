"use client";

import { motion } from "framer-motion";
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
          ¿Listo para proteger tu inversión?
        </motion.h2>
        <p className="mt-4 text-silver">
          Escribinos por WhatsApp y coordinamos tu turno.
        </p>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex clip-edge bg-whatsapp text-ink font-semibold px-8 py-4 hover:brightness-110 transition-all"
        >
          Agendar por WhatsApp
        </a>
      </div>
    </section>
  );
}
