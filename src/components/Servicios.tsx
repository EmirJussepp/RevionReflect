"use client";

import { motion } from "framer-motion";
import { services } from "@/data/site";
import { whatsappLink } from "@/lib/whatsapp";

export function Servicios() {
  return (
    <section id="servicios" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl mb-16">
          <p className="font-display text-xs tracking-[0.3em] text-silver uppercase mb-4">
            Lo que hacemos
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-5xl text-mist">
            Servicios
          </h2>
          <p className="mt-4 text-silver">
            Cada servicio pensado para proteger y realzar tu vehículo al máximo nivel técnico.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className={`relative p-7 bg-ink flex flex-col ${
                s.featured ? "bg-surface" : ""
              }`}
            >
              {s.featured && (
                <span className="absolute top-5 right-5 text-[10px] tracking-wide uppercase text-ink bg-mist px-2 py-1 clip-edge">
                  Más pedido
                </span>
              )}
              <h3 className="font-display text-xl font-semibold text-mist mb-3">
                {s.title}
              </h3>
              <p className="text-sm text-silver leading-relaxed flex-1">
                {s.description}
              </p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs text-muted uppercase tracking-wide">
                  {s.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-border pt-8">
          <p className="text-silver text-sm">
            ¿Tenés una consulta específica? Escribinos sin compromiso.
          </p>
          <a
            href={whatsappLink("Hola! Quiero consultar por un servicio de detailing.")}
            target="_blank"
            rel="noopener noreferrer"
            className="clip-edge bg-whatsapp text-ink font-semibold px-6 py-3 text-sm hover:brightness-110 transition-all"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
