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
        "Intervenimos donde las decisiones definen el resultado y el impacto es medible.",
        leftLabel: "Principio",
        leftValue: "Impacto medible",
        quote:
        "No intervenimos por volumen ni por tendencia. Intervenimos donde una decisión cambia el resultado.",
        author: "Kubo Global",
        role: "Strategy & Technology Advisory",
        primaryCta: { label: "Explorar el modelo", href: "/model" },
        secondaryCta: { label: "Conversar", href: "/contact" },
      },
      {
        eyebrow: "Intervenciones",
        title: "Estructura antes de ejecución.",
        description:
        "Un marco claro para convertir decisiones en resultados, con métricas y responsabilidad explícitas.",
        leftLabel: "Marco",
        leftValue: "6 intervenciones",
        quote:
        "Sin claridad estratégica no hay ejecución efectiva. Sin métricas, no hay responsabilidad.",
        author: "Kubo Global",
        role: "Intervention Framework",
        primaryCta: { label: "Ver intervenciones", href: "/services" },
        secondaryCta: { label: "Profundizar en el modelo", href: "/model" },
      },
      {
        eyebrow: "Marco transversal",
        title: "Run · Grow · Transform",
        description:
        "Priorizamos para estabilizar, escalar o rediseñar estructura, según el impacto real de cada iniciativa.",
        leftLabel: "Decisión estratégica",
        leftValue: "RUN / GROW / TRANSFORM",
        quote:
          "No toda iniciativa merece inversión. Primero se define el impacto, después la ejecución.",
        author: "Kubo Global",
        role: "Strategic Prioritization",
        primaryCta: { label: "Explorar el marco", href: "/model#run-grow-transform" },
        secondaryCta: { label: "Conversemos", href: "/contact" },
      },
      {
        eyebrow: "Dominios de complejidad",
        title: "Aplicamos criterio en entornos exigentes.",
        description:
          "Search & AI, eCommerce, Supply Chain y plataformas complejas: el criterio y la toma de decisiones no cambian.",
        leftLabel: "Ámbitos",
        leftValue: "4 dominios",
        quote:
          "La tecnología es un medio. El resultado depende de las decisiones que la gobiernan.",
        author: "Kubo Global",
        role: "Applied Strategy",
        primaryCta: { label: "Ver dominios", href: "/domains" },
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
      className="relative overflow-hidden rounded-[24px] md:rounded-3xl border border-slate-200 bg-white text-slate-900 shadow-sm"
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

                    <div className="mt-4 rounded-xl md:rounded-2xl bg-white p-4 md:mt-6 md:p-6 ring-1 ring-slate-200/70">
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
<h2 className="text-[1.42rem] leading-[1.08] font-semibold tracking-tight md:text-4xl">
                        {s.title}
                    </h2>

                    <p className="mt-3 max-w-2xl text-[15px] leading-6 text-slate-600 md:mt-4 md:text-lg">
                      {s.description}
                    </p>

<div className="mt-4 rounded-xl md:mt-8 md:rounded-2xl bg-white p-3.5 md:p-8 ring-1 ring-slate-200/70">
                      <div className="mb-3 h-px w-8 bg-slate-200 md:mb-4 md:w-10" />
                      <p className="text-[15px] leading-6 text-slate-700 md:text-lg md:leading-relaxed">
                        “{s.quote}”
                      </p>
                      <div className="mt-3 text-xs text-slate-500 md:mt-4 md:text-sm">
                        <div className="font-semibold text-slate-700">{s.author}</div>
                        <div>{s.role}</div>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-col gap-2.5 sm:flex-row md:mt-8 md:gap-3">
                      <Link
                        href={s.primaryCta.href}
                        className="inline-flex h-9 items-center justify-center rounded-lg md:rounded-xl bg-slate-900 px-4 md:px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
                      >
                        {s.primaryCta.label}
                      </Link>

                      <Link
                        href={s.secondaryCta.href}
                        className="inline-flex h-9 items-center justify-center rounded-lg md:rounded-xl border border-slate-300 bg-white px-4 md:px-5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
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