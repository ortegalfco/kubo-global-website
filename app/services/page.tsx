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
      {/* Hero Banner */}
{/* Hero Banner — Minimal */}
<section className="relative overflow-hidden border-b border-slate-200">
  <div className="relative min-h-[520px] md:min-h-[620px] lg:min-h-[700px]">
    {/* Background */}
    <img
      src="/banner01-background.png"
      alt="Kubo Global"
      className="
        absolute inset-0
        h-full w-full
        object-cover
        object-[72%_center]
        md:object-[64%_center]
        lg:object-center
      "
    />

    {/* Motion */}
    <div className="absolute inset-0 z-10 pointer-events-none">
      <div className="absolute inset-0 hero-grid-motion opacity-15 md:opacity-20" />
    </div>

    {/* Overlays */}
    <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#04101b]/92 via-[#071623]/70 to-[#071623]/24" />
    <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-950/12 via-transparent to-slate-950/38" />

    {/* Glow accents */}
    <div className="absolute right-[8%] top-[18%] z-10 h-52 w-52 rounded-full bg-lime-300/10 blur-3xl" />
    <div className="absolute left-[-4%] top-[14%] z-10 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl" />

    {/* Content */}
    <div className="relative z-20 mx-auto flex min-h-[520px] max-w-7xl items-center px-4 pb-12 pt-[calc(var(--header-h)+28px)] md:min-h-[620px] md:px-6 md:pb-16 md:pt-[calc(var(--header-h)+34px)] lg:min-h-[700px]">
      <div className="max-w-[720px]">

        {/* Label */}
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-lime-300/80">
          Modelo de intervención        
          </p>

        {/* Headline */}
        <h1 className="mt-5 max-w-[16ch] text-[34px] font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-[42px] md:text-[52px] lg:text-[60px]">
        Seis intervenciones para estructurar iniciativas complejas.
        </h1>

        {/* Accent line */}
        <div className="mt-6 h-[2px] w-20 bg-gradient-to-r from-[#d7f70e] to-transparent" />

        {/* Description */}
        <p className="mt-6 max-w-2xl text-[15px] leading-8 text-slate-300 md:text-base md:leading-8 lg:text-lg">
        No son un checklist. Son tipos de intervención que se combinan
        según la naturaleza del problema, su complejidad y el nivel de riesgo operativo.
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-2xl bg-[#d7f70e] px-6 text-base font-semibold text-slate-950 transition hover:brightness-95"
          >
            Conversar
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

      <Section pad="lg">
        <InterventionsSticky />
      </Section>

<Section tone="white">
  <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
    <div className="mx-auto mb-5 h-[2px] w-16 bg-gradient-to-r from-transparent via-[#d7f70e] to-transparent" />

    <div className="space-y-5">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
        Conversación inicial
      </p>

      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
        ¿Lo revisamos juntos?
      </h2>

      <div className="pt-2">
        <Link
          href="/contact"
          className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Iniciar conversación
        </Link>
      </div>
    </div>
  </div>
</Section>
    </main>
  );
}