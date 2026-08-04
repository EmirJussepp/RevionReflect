# Revion Reflect

Landing de **Revion Reflect**, detailing automotor (corrección de pintura, cerámico, PPF, detailing integral). Next.js 16 (App Router) + Tailwind CSS v4 + Framer Motion, contenido estático (sin backend/DB).

## Desarrollo

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Estructura

- `src/data/site.ts` — datos editables: número de WhatsApp, servicios, ítems de galería. Actualizar acá para cambiar contenido sin tocar componentes.
- `src/components/` — secciones de la landing (Navbar, Hero, Servicios, Galería con slider antes/después, Contacto, Footer).
- `public/brand/` — logos e identidad de marca provistos por el cliente.
- `public/work/` — fotos de trabajos (antes/después). Actualmente con placeholders SVG.

## Pendientes antes de producción

- [ ] Reemplazar `whatsapp` en `src/data/site.ts` por el número real del cliente.
- [ ] Cargar fotos reales de trabajos en `public/work/` y actualizar `gallery` en `site.ts`.
- [ ] Confirmar Instagram/redes y completar `site.instagram`.
- [ ] Reemplazar el ícono (`src/app/icon.jpg`) por una versión con fondo transparente si el cliente la provee.

## Deploy

Pensado para deploy en Vercel (push a `main` → auto-deploy), mismo flujo que el resto de landings del estudio.
