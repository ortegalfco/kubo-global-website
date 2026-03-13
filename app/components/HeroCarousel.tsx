"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Slide = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export function HeroCarousel() {
  const slides: Slide[] = useMemo(
    () => [
      {
        eyebrow: "Search & AI",
        title: "Relevancia y descubrimiento de producto con enfoque a negocio.",
        description:
          "Mejoramos búsqueda, navegación y ranking para catálogos complejos con control y gobernanza para equipos de negocio.",
        bullets: [
          "Boosting, sinónimos, facets, reglas, intent detection",
          "A/B testing y medición (CTR, CVR, no-results)",
          "Arquitecturas con Solr + microservicios",
        ],
        primaryCta: { label: "Ver servicios", href: "/services" },
        secondaryCta: { label: "Conversar", href: "/contact" },
      },
      {
        eyebrow: "eCommerce Platform",
        title: "Integración y performance para experiencias omnicanal.",
        description:
          "Conectamos capas de datos, APIs y front para mejorar velocidad, consistencia del catálogo y time-to-market.",
        bullets: [
          "APIs, GraphQL, middleware, observabilidad",
          "Catálogo y data quality (feeds, enrichment, governance)",
          "Mejoras de PLP/PDP y journeys críticos",
        ],
        primaryCta: { label: "Industrias", href: "/industries" },
        secondaryCta: { label: "Conversar", href: "/contact" },
      },
      {
        eyebrow: "Supply Chain Digital",
        title: "Sistemas operativos para flota, talleres y operación.",
        description:
          "Digitalizamos procesos para operación y mantenimiento, reduciendo fricción y mejorando control, trazabilidad y eficiencia.",
        bullets: [
          "Mantenimiento preventivo/correctivo y control de costos",
          "Disponibilidad de flota y cumplimiento operativo",
          "Backoffice y tableros para decisiones",
        ],
        primaryCta: { label: "Conversar", href: "/contact" },
        secondaryCta: { label: "Ver servicios", href: "/services" },
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-play suave
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 500);
    return () => window.clearInterval(id);
  }, [paused, slides.length]);

  const goTo = (i: number) => setIndex(i);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section
      className="relative overflow-hidden rounded-2xl border bg-white shadow-sm"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* barra superior marca */}
      <div
        className="h-[2px] w-full"
        style={{ backgroundColor: "rgb(215 247 14 / 0.85)" }}
      />

      <div className="grid gap-8 p-6 md:grid-cols-2 md:p-10">
        {/* Copy */}
        <div className="space-y-5">
          <p className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
            {slides[index].eyebrow}
          </p>

          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {slides[index].title}
          </h1>

          <p className="text-base text-slate-600 md:text-lg">
            {slides[index].description}
          </p>

          <ul className="space-y-2 text-sm text-slate-700">
            {slides[index].bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span style={{ color: "rgb(215 247 14 / 0.95)" }}>●</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={slides[index].primaryCta.href}
              className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              {slides[index].primaryCta.label}
            </Link>

            <Link
              href={slides[index].secondaryCta.href}
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              {slides[index].secondaryCta.label}
            </Link>
          </div>
        </div>

        {/* Panel derecho (formal, tipo “resumen ejecutivo”) */}
        <div className="rounded-2xl border bg-slate-50 p-5 md:p-6">
          <div className="text-sm font-semibold text-slate-900">
            Resultados típicos
          </div>
          <div className="mt-4 space-y-3 text-sm text-slate-700">
            <div className="rounded-xl bg-white p-4 border">
              <div className="font-semibold">Mejor conversión y CTR</div>
              <div className="mt-1 text-slate-600">
                Más “good clicks” y menos fricción en búsqueda y navegación.
              </div>
            </div>
            <div className="rounded-xl bg-white p-4 border">
              <div className="font-semibold">Menos “no results”</div>
              <div className="mt-1 text-slate-600">
                Mejora de recall/precision con control de negocio.
              </div>
            </div>
            <div className="rounded-xl bg-white p-4 border">
              <div className="font-semibold">Eficiencia operativa</div>
              <div className="mt-1 text-slate-600">
                Automatización y tableros para decisiones más rápidas.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controles */}
      <div className="flex items-center justify-between border-t bg-white px-4 py-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-900 hover:bg-slate-50"
          >
            ←
          </button>
          <button
            type="button"
            onClick={next}
            className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-900 hover:bg-slate-50"
          >
            →
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => {
            const active = i === index;
            return (
              <button
                key={i}
                type="button"
                aria-label={`Ir a slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={[
                  "h-2.5 w-2.5 rounded-full transition",
                  active ? "bg-slate-900" : "bg-slate-300 hover:bg-slate-400",
                ].join(" ")}
              />
            );
          })}
        </div>

        <div className="text-xs text-slate-500">
          {index + 1} / {slides.length}
        </div>
      </div>
    </section>
  );
}
