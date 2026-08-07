"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { whatsappLink } from "@/lib/whatsapp";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <Image
            src="/brand/logo2.jpeg"
            alt=""
            width={28}
            height={28}
            className="brand-mark h-7 w-7 object-contain"
          />
          <span className="font-display font-semibold tracking-wide text-lg text-mist">
            REVION <span className="text-silver">REFLECT</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-silver hover:text-mist transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 clip-edge bg-mist text-ink text-sm font-semibold px-5 py-2.5 hover:bg-white transition-colors"
        >
          Agendar turno
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-mist p-2 -mr-2"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <span
            className={`block w-6 h-0.5 bg-mist transition-transform duration-200 ${
              open ? "translate-y-2 rotate-45" : "mb-1.5"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-mist transition-opacity duration-200 ${
              open ? "opacity-0" : "mb-1.5"
            }`}
          />
          <span
            className={`block h-0.5 bg-mist transition-all duration-200 ${
              open ? "w-6 -translate-y-2 -rotate-45" : "w-4"
            }`}
          />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-ink border-t border-border px-5 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-silver hover:text-mist"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="clip-edge bg-mist text-ink text-sm font-semibold px-5 py-2.5 text-center"
          >
            Agendar turno
          </a>
        </div>
      )}
    </header>
  );
}
