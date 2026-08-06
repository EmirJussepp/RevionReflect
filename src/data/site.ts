export const site = {
  name: "Revion Reflect",
  tagline: "Detailing automotor de precisión",
  description:
    "Corrección de pintura, cerámico y detailing integral. Cada auto tratado uno a uno, sin atajos.",
  whatsapp: "5493564336238",
  whatsappMessage: "Hola! Quiero consultar por un trabajo de detailing.",
  instagram: "https://www.instagram.com/revionreflect/",
  location: "Argentina",
};

export type Service = {
  id: string;
  title: string;
  description: string;
  price: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    id: "correccion",
    title: "Corrección de Pintura",
    description:
      "Eliminación de rayas, swirl marks y defectos del barniz hasta recuperar la profundidad y el brillo original.",
    price: "Desde consultar",
  },
  {
    id: "ceramico",
    title: "Tratamiento Cerámico",
    description:
      "Protección nanocerámica de largo plazo: resistencia UV, repelencia al agua y brillo de alto estándar.",
    price: "Desde consultar",
  },
  {
    id: "preparacion-venta",
    title: "Preparación para la Venta",
    description:
      "Detailing integral pensado para vender más rápido y al mejor precio: interior a fondo, pulido y ese brillo de 0km que genera confianza al primer vistazo.",
    price: "Desde consultar",
    featured: true,
  },
  {
    id: "interior",
    title: "Detailing de Interiores",
    description:
      "Limpieza profunda y acondicionado de cueros, plásticos, techo y volante con el mismo nivel de detalle.",
    price: "Desde consultar",
  },
  {
    id: "motor",
    title: "Motor & Chasis",
    description:
      "Limpieza profunda y protección en motor y chasis. El trabajo que no se ve, hecho igual de bien.",
    price: "Desde consultar",
  },
  {
    id: "integral",
    title: "Tratamiento Integral",
    description:
      "Corrección de pintura más cerámico en todas las superficies. El auto trabajado de punta a punta.",
    price: "A consultar",
  },
];

export type GalleryItem = {
  id: string;
  title: string;
  category: string;
  src: string;
};

// Fotos reales provistas por el cliente en /public/work. Agregar acá cada trabajo nuevo.
export const gallery: GalleryItem[] = [
  { id: "limpieza1", title: "Toyota SW4", category: "Lavado y detailing", src: "/work/limpieza1.jpeg" },
  { id: "limpieza2", title: "Toyota SW4", category: "Lavado bajos", src: "/work/limpieza2.jpeg" },
  { id: "limpieza3", title: "Toyota SW4", category: "Prelavado con espuma", src: "/work/limpieza3.jpeg" },
  { id: "limpieza4", title: "Toyota SW4", category: "Brillo final", src: "/work/limpieza4.jpeg" },
  { id: "limpieza5", title: "Detalle de pintura", category: "Brillo final", src: "/work/limpieza5.jpeg" },
  { id: "limpieza6", title: "Fiat Punto", category: "Brillo final", src: "/work/limpieza6.jpeg" },
];
