"use client";

import { useEffect, useMemo, useState, useRef } from "react";
import Link from "next/link";

type Slide = {
  eyebrow: string;
  title: string;
  description: string;
  leftLabel: string;
  leftValue: string;
  quote: string;
  author: string;
  role: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  image?: string;
};

export function SplitCarousel() {
  const slides: Slide[] = useMemo(
    () => [
      {
        eyebrow: "Kubo Global",
        title: "Estrategia primero. Ejecución después.",
        description:
          "Intervenimos solo donde la decisión cambia el resultado y el impacto es medible.",
        leftLabel: "Principio",
        leftValue: "Impacto medible",
        quote:
          "No operamos por volumen ni por tendencia. Intervenimos donde el resultado lo exige.",
        author: "Kubo Global",
        role: "Strategy & Technology Advisory",
        primaryCta: { label: "Explorar el modelo", href: "/model" },
        secondaryCta: { label: "Conversar", href: "/contact" },
      },
      {
        eyebrow: "Intervenciones",
        title: "Estructura antes de ejecución.",
        description:
          "Un marco claro para convertir decisiones en resultados, con métricas y responsabilidad definidas.",
        leftLabel: "Marco",
        leftValue: "6 intervenciones",
        quote:
          "Sin claridad estratégica no hay ejecución efectiva. Sin métricas, no hay responsabilidad real.",
        author: "Kubo Global",
        role: "Intervention Framework",
        primaryCta: { label: "Ver intervenciones", href: "/services" },
        secondaryCta: { label: "Profundizar en el modelo", href: "/model" },
      },
      {
        eyebrow: "Marco transversal",
        title: "Run · Grow · Transform",
        description:
          "Priorizamos para estabilizar, escalar o rediseñar estructura, con control de riesgo.",
        leftLabel: "Decisión estratégica",
        leftValue: "RUN / GROW / TRANSFORM",
        quote:
          "No toda iniciativa merece inversión. Primero se define el impacto estructural, después el presupuesto.",
        author: "Kubo Global",
        role: "Strategic Prioritization",
        primaryCta: { label: "Explorar el marco", href: "/model#run-grow-transform" },
        secondaryCta: { label: "Conversemos", href: "/contact" },
      },
      {
        eyebrow: "Dominios de complejidad",
        title: "Aplicamos criterio en entornos exigentes.",
        description:
          "Search & AI, eCommerce, Supply Chain y plataformas complejas: el rigor estratégico no cambia.",
        leftLabel: "Ámbitos",
        leftValue: "4 dominios",
        quote:
          "La tecnología es un medio. El objetivo es mejorar el resultado operativo y estratégico.",
        author: "Kubo Global",
        role: "Applied Strategy",
        primaryCta: { label: "Ver dominios", href: "/services#domains" },
        secondaryCta: { label: "Ver el modelo", href: "/model" },
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, [paused, slides.length]);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);
  const goTo = (i: number) => setIndex(i);

  /* swipe control (solo touch) */
  const trackRef = useRef<HTMLDivElement | null>(null);
  const startX = useRef<number | null>(null);
  const deltaX = useRef(0);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "touch") return;
    setPaused(true);
    startX.current = e.clientX;
    deltaX.current = 0;
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "touch") return;
    if (startX.current == null) return;
    deltaX.current = e.clientX - startX.current;
  };

  const endSwipe = () => {
    setPaused(false);
    if (startX.current == null) return;

    const threshold = 50;
    const dx = deltaX.current;

    startX.current = null;
    deltaX.current = 0;

    if (Math.abs(dx) < threshold) return;
    if (dx < 0) next();
    else prev();
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "touch") return;
    endSwipe();
  };

  const onPointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "touch") return;
    endSwipe();
  };

  return (
    <section
      className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white text-slate-900 shadow-sm"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Línea superior marca */}
      <div
        className="h-[1px]"
        style={{ backgroundColor: "rgb(215 247 14 / 0.6)" }}
      />

      {/* Track (slides) */}
      <div
        ref={trackRef}
        className="flex select-none touch-pan-x transition-transform duration-500 ease-out cursor-grab active:cursor-grabbing"
        style={{ transform: `translateX(-${index * 100}%)` }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
      >
        {slides.map((s, i) => (
          <div key={i} className="w-full shrink-0">
            <div className="relative overflow-hidden rounded-3xl">
              {/* Imagen de fondo opcional */}
              {s.image && (
                <div className="absolute inset-0">
                  <img
                    src={s.image}
                    alt=""
                    className="h-full w-full object-cover opacity-20"
                  />
                  <div className="absolute inset-0 bg-white/75 backdrop-blur-sm" />
                </div>
              )}

              {/* Contenido */}
              <div className="relative grid md:grid-cols-12">
                {/* Left panel */}
                <div className="md:col-span-4 border-b border-slate-200 md:border-b-0 md:border-r p-6 md:p-10">
                  <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    {s.eyebrow}
                  </div>

                  {/* Inset card (homologado) */}
                  <div className="mt-6 rounded-2xl bg-white p-6 ring-1 ring-slate-200/70">
                    <div className="text-xs uppercase tracking-widest text-slate-500">
                      {s.leftLabel}
                    </div>
                    <div className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">
                      {s.leftValue}
                    </div>
                  </div>
                </div>

                {/* Right panel */}
                <div className="md:col-span-8 p-6 md:p-10">
                  <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                    {s.title}
                  </h2>

                  <p className="mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
                    {s.description}
                  </p>

                  {/* Quote card (homologado) */}
                  <div className="mt-8 rounded-2xl bg-white p-6 ring-1 ring-slate-200/70 md:p-8">
                    <div className="mb-4 h-px w-10 bg-slate-200" />
                    <p className="text-base leading-relaxed text-slate-700 md:text-lg">
                      “{s.quote}”
                    </p>
                    <div className="mt-4 text-sm text-slate-500">
                      <div className="font-semibold text-slate-700">{s.author}</div>
                      <div>{s.role}</div>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={s.primaryCta.href}
                      className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                      {s.primaryCta.label}
                    </Link>

                    <Link
                      href={s.secondaryCta.href}
                      className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                    >
                      {s.secondaryCta.label}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer controls */}
      <div className="flex justify-center pb-4 pt-3">
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ir a slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-slate-900"
                  : "w-4 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}