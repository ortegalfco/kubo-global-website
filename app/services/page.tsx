"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Section } from "../components/Section";
import InterventionsSticky from "../components/InterventionsSticky";

export default function ServicesPage() {
  useEffect(() => {
    const scrollToHashTarget = () => {
      const hash = window.location.hash;
      if (!hash) return;

      const raw = hash.replace("#", "");
      const isMobile = window.innerWidth < 1024;

      const targetId = isMobile ? `mobile-${raw}` : `desktop-${raw}`;
      const el = document.getElementById(targetId);

      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    const timeout = window.setTimeout(scrollToHashTarget, 220);

    const handleHashChange = () => {
      window.setTimeout(scrollToHashTarget, 80);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <main id="top">
      {/* Hero Banner principal */}
      <section className="relative overflow-hidden">
        <div className="relative h-[78svh] min-h-[520px] md:h-[82svh] lg:h-[88svh]">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            
            className="
              absolute inset-0 z-0
              h-full w-full
              object-cover
              object-[68%_center]
              md:object-[60%_center]
              lg:object-center
            "
          >
            
            <source src="/videos/kubo-motion.mp4" type="video/mp4" />
          </video>
          

          <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 hero-grid-motion opacity-30" />
            <div className="absolute inset-0">
              <div className="hero-scan-line absolute left-0 right-0 h-[160px]" />
            </div>
          </div>

          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#071623]/78 via-[#071623]/40 to-[#071623]/16" />
          <div className="absolute inset-0 z-10 bg-black/15" />
          <div className="absolute right-0 top-0 bottom-0 z-10 w-[42%] bg-gradient-to-l from-[#071623]/85 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-white to-transparent" />
          
        </div>

        
      </section>


      <Section pad="lg">
        <InterventionsSticky />
      </Section>

      <section className="k-surface p-8">
        <h2 className="text-2xl font-semibold tracking-tight">
          La intervención correcta depende del impacto esperado.
        </h2>

        <p className="mt-3 max-w-3xl text-slate-600">
          Si estás evaluando una iniciativa crítica, conversemos antes de
          ejecutar. Te ayudamos a definir si tiene sentido, qué riesgos existen
          y cómo estructurarla.
        </p>

        <div className="mt-6">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Iniciar conversación
          </Link>
        </div>
      </section>
    </main>
  );
}