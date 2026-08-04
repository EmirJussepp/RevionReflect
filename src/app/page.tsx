import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Servicios } from "@/components/Servicios";
import { Galeria } from "@/components/Galeria";
import { Contacto } from "@/components/Contacto";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Servicios />
        <Galeria />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
