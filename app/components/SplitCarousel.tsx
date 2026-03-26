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
        eyebrow: "Enfoque",
        title: "Estrategia primero. Ejecución después.",
        description:
          "Intervenimos donde las decisiones cambian el resultado, el impacto es medible y la complejidad exige criterio.",
        leftLabel: "Principio",
        leftValue: "Impacto medible",
        quote:
          "No intervenimos por volumen ni por tendencia. Intervenimos donde una decisión cambia el resultado.",
        author: "Kubo Global",
        role: "Strategy & Technology Advisory",
        primaryCta: { label: "Conversar", href: "/contact" },
        secondaryCta: { label: "Ver intervenciones", href: "/services" },
      },
      {
        eyebrow: "Intervenciones",
        title: "Estructura antes de ejecución.",
        description:
          "Un marco claro para convertir decisiones en resultados, con métricas, foco operativo y responsabilidad explícita.",
        leftLabel: "Capacidad",
        leftValue: "6 intervenciones",
        quote:
          "Sin claridad estratégica no hay ejecución efectiva. Sin métricas, no hay responsabilidad.",
        author: "Kubo Global",
        role: "Intervention Framework",
        primaryCta: { label: "Ver intervenciones", href: "/services" },
        secondaryCta: { label: "Conversar", href: "/contact" },
      },
      {
        eyebrow: "Prioridad estratégica",
        title: "Run · Grow · Transform",
        description:
          "Priorizamos para estabilizar, escalar o rediseñar iniciativas según su impacto real, no según presión operativa o tendencia.",
        leftLabel: "Decisión",
        leftValue: "Priorizar con criterio",
        quote:
          "No toda iniciativa merece inversión. Primero se define el impacto, después la ejecución.",
        author: "Kubo Global",
        role: "Strategic Prioritization",
        primaryCta: { label: "Cómo trabajamos", href: "/approach" },
        secondaryCta: { label: "Conversar", href: "/contact" },
      },
      {
        eyebrow: "Dominios",
        title: "Aplicamos criterio en entornos exigentes.",
        description:
          "Search & AI, eCommerce, Supply Chain y plataformas complejas: cambia el contexto, no la disciplina para decidir bien.",
        leftLabel: "Ámbitos",
        leftValue: "4 dominios",
        quote:
          "La tecnología es un medio. El resultado depende de las decisiones que la gobiernan.",
        author: "Kubo Global",
        role: "Applied Strategy",
        primaryCta: { label: "Ver dominios", href: "/domains" },
        secondaryCta: { label: "Conversar", href: "/contact" },
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

  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    startX.current = touch.clientX;
    startY.current = touch.clientY;
    setPaused(true);
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (startX.current == null || startY.current == null) {
      setPaused(false);
      return;
    }

    const touch = e.changedTouches[0];
    const dx = touch.clientX - startX.current;
    const dy = touch.clientY - startY.current;
    const threshold = 50;

    if (Math.abs(dx) > threshold && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) next();
      else prev();
    }

    startX.current = null;
    startY.current = null;
    setPaused(false);
  };

  return (
    <section
      className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-white text-slate-900 shadow-sm md:rounded-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="h-[1px]"
        style={{ backgroundColor: "rgb(215 247 14 / 0.6)" }}
      />

      <div className="overflow-hidden">
        <div
          className="flex select-none transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${index * 100}%)`,
            touchAction: "pan-y",
          }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {slides.map((s, i) => (
            <div key={i} className="w-full shrink-0">
              <div className="relative overflow-hidden rounded-[24px] md:rounded-3xl">
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

                <div className="relative grid md:grid-cols-12">
                  {/* Left panel */}
                  <div className="border-b border-slate-200 px-4 py-4 md:col-span-4 md:border-b-0 md:border-r md:p-10">
                    <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-700 md:text-xs">
                      {s.eyebrow}
                    </div>

                    <div className="mt-4 rounded-xl bg-white p-4 ring-1 ring-slate-200/70 md:mt-6 md:rounded-2xl md:p-6">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500 md:text-xs md:tracking-widest">
                        {s.leftLabel}
                      </div>
                      <div className="mt-2 text-lg font-semibold tracking-tight md:mt-3 md:text-2xl">
                        {s.leftValue}
                      </div>
                    </div>
                  </div>

                  {/* Right panel */}
                  <div className="px-4 py-5 md:col-span-8 md:p-10">
                    <h2 className="text-[1.42rem] font-semibold leading-[1.08] tracking-tight md:text-4xl">
                      {s.title}
                    </h2>

                    <p className="mt-3 max-w-2xl text-[15px] leading-6 text-slate-600 md:mt-4 md:text-lg">
                      {s.description}
                    </p>

                    <div className="mt-4 rounded-xl bg-white p-3.5 ring-1 ring-slate-200/70 md:mt-8 md:rounded-2xl md:p-8">
                      <div className="mb-3 h-px w-8 bg-slate-200 md:mb-4 md:w-10" />
                      <p className="text-[15px] leading-6 text-slate-700 md:text-lg md:leading-relaxed">
                        “{s.quote}”
                      </p>
                      <div className="mt-3 text-xs text-slate-500 md:mt-4 md:text-sm">
                        <div className="font-semibold text-slate-700">
                          {s.author}
                        </div>
                        <div>{s.role}</div>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-col gap-2.5 sm:flex-row md:mt-8 md:gap-3">
                      <Link
                        href={s.primaryCta.href}
                        className="inline-flex h-10 items-center justify-center rounded-lg bg-slate-900 px-4 text-sm font-semibold text-white transition hover:bg-slate-800 md:rounded-xl md:px-5"
                      >
                        {s.primaryCta.label}
                      </Link>

                      <Link
                        href={s.secondaryCta.href}
                        className="inline-flex h-10 items-center justify-center rounded-lg border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 md:rounded-xl md:px-5"
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
      </div>

      <div className="flex justify-center px-3 pb-3 pt-2 md:px-4 md:pb-4 md:pt-3">
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ir a slide ${i + 1}`}
              aria-current={i === index}
              className="inline-flex h-8 items-center justify-center px-1.5"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-8 bg-slate-900"
                    : "w-4 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}