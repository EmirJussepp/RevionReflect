"use client";

import { motion } from "framer-motion";
import { Filter, Droplet, Cog } from "lucide-react";
import { partCategories, site } from "@/data/site";
import { whatsappLink } from "@/lib/whatsapp";

const icons = { filter: Filter, droplet: Droplet, cog: Cog };

export function Repuestos() {
  return (
    <section id="repuestos" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl mb-16">
          <p className="font-display text-xs tracking-[0.3em] text-silver uppercase mb-4">
            Además, repuestos
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-5xl text-mist">
            Repuestos al mejor precio
          </h2>
          <p className="mt-4 text-silver">
            Filtros, aceites y kits de distribución para las marcas más comunes en Argentina.
            ¿No lo tenemos en stock? Te lo traemos a pedido.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-px bg-border">
          {partCategories.map((p, i) => {
            const Icon = icons[p.icon];
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-7 bg-ink flex flex-col"
              >
                <Icon className="h-6 w-6 text-silver mb-4" strokeWidth={1.5} />
                <h3 className="font-display text-xl font-semibold text-mist mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-silver leading-relaxed">{p.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-border p-7"
        >
          <p className="text-silver text-sm max-w-sm">
            Mejores precios de la zona, en cantidad o por unidad.{" "}
            <span className="text-mist">Consultanos por WhatsApp</span> y te pasamos precio al
            toque.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={whatsappLink(site.whatsappRepuestosMinorista)}
              target="_blank"
              rel="noopener noreferrer"
              className="clip-edge bg-whatsapp text-ink font-semibold px-6 py-3 text-sm hover:brightness-110 transition-all"
            >
              Precio Minorista
            </a>
            <a
              href={whatsappLink(site.whatsappRepuestosMayorista)}
              target="_blank"
              rel="noopener noreferrer"
              className="clip-edge border border-mist/40 text-mist font-semibold px-6 py-3 text-sm hover:border-mist transition-colors"
            >
              Precio Mayorista
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
