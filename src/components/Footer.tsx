import Image from "next/image";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image
            src="/brand/logo2.jpeg"
            alt=""
            width={20}
            height={20}
            className="brand-mark h-5 w-5 object-contain"
          />
          <span className="font-display text-sm text-mist tracking-wide">
            REVION REFLECT
          </span>
        </div>
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {site.name}. {site.tagline}.
        </p>
      </div>
    </footer>
  );
}
