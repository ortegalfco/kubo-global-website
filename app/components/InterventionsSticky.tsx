"use client";

import Link from "next/link";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Intervention = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  when: string[];
  outcomes: string[];
  eyebrow: string;
};

const interventions: Intervention[] = [
  {
    id: "01",
    slug: "diagnostico",
    title: "Consultoría Estratégica y Diagnóstico",
    summary:
      "Clarificamos el problema, su impacto real y el punto correcto de intervención antes de comprometer inversión, cambio operativo o tecnología.",
    when: [
      "Cuando hay incertidumbre alta o ambigüedad en el problema.",
      "Cuando existen fricciones estructurales en operación o plataforma.",
      "Antes de comprometer inversión relevante o una ruta tecnológica.",
    ],
    outcomes: [
      "Definición clara del problema y del objetivo.",
      "Métrica objetivo y baseline.",
      "Mapa de fricciones, dependencias y riesgos visibles.",
      "Hipótesis de intervención y opciones de enfoque.",
    ],
    eyebrow: "Diagnóstico",
  },
  {
    id: "02",
    slug: "estrategia",
    title: "Diseño de Estrategia y Plan de Ejecución",
    summary:
      "Traducimos la dirección deseada en una ruta ejecutable, priorizada y gobernable, con fases, dependencias y criterios claros de avance.",
    when: [
      "Cuando el problema ya está claro pero el cómo no está estructurado.",
      "Cuando se requiere priorización, fases y gobernanza de decisiones.",
      "Cuando hay múltiples equipos y dependencias críticas.",
    ],
    outcomes: [
      "Roadmap por fases con métricas por etapa.",
      "Estructura de gobernanza y decisiones.",
      "Plan de capacidades (personas, proceso, tecnología).",
      "Riesgos clave y mitigadores.",
    ],
    eyebrow: "Estrategia",
  },
  {
    id: "03",
    slug: "ejecucion",
    title: "Ejecución de Iniciativas y Soluciones",
    summary:
      "Acompañamos la ejecución para reducir fricción, alinear equipos y acelerar la materialización del cambio sin perder control.",
    when: [
      "Cuando ya existe una ruta pero la ejecución está trabada.",
      "Cuando hay demasiadas dependencias entre negocio y tecnología.",
      "Cuando se necesita avanzar sin perder visibilidad ni foco.",
    ],
    outcomes: [
      "Cadencia de ejecución y seguimiento.",
      "Bloqueos identificados y resueltos más rápido.",
      "Alineación entre frentes de trabajo.",
      "Mejor control sobre avance, riesgo y decisiones.",
    ],
    eyebrow: "Ejecución",
  },
  {
    id: "04",
    slug: "readiness",
    title: "Evaluación, Riesgo y Readiness Operativa",
    summary:
      "Validamos la preparación organizacional, técnica y operativa para reducir fallas previsibles antes de escalar o transformar.",
    when: [
      "Cuando hay dudas sobre capacidad real de ejecución.",
      "Cuando existen riesgos operativos o dependencias frágiles.",
      "Antes de un cambio relevante en proceso, plataforma o modelo operativo.",
    ],
    outcomes: [
      "Evaluación de readiness por dimensión.",
      "Mapa de riesgos y puntos críticos.",
      "Brechas prioritarias antes de ejecutar.",
      "Recomendaciones de estabilización y preparación.",
    ],
    eyebrow: "Readiness",
  },
  {
    id: "05",
    slug: "integracion",
    title: "Integración de Soluciones y Ecosistema",
    summary:
      "Integramos capacidades, datos, APIs, seguridad y operación para habilitar evolución sin romper continuidad.",
    when: [
      "Cuando hay múltiples sistemas o vendors conviviendo.",
      "Cuando integración y coordinación técnica frenan el avance.",
      "Cuando se requiere arquitectura evolutiva y menor fricción operativa.",
    ],
    outcomes: [
      "Mapa de integraciones y dependencias.",
      "Diseño de flujo técnico y operativo.",
      "Reducción de fricción entre plataformas y equipos.",
      "Base más robusta para escalar capacidades.",
    ],
    eyebrow: "Integración",
  },
  {
    id: "06",
    slug: "pmaas",
    title: "Capacidades de Producto (PMaaS)",
    summary:
      "Fortalecemos la práctica de Product Management con gobernanza, métricas, rituales y una toma de decisiones más clara y consistente.",
    when: [
      "Cuando producto opera de forma reactiva.",
      "Cuando faltan métricas, ownership o cadencia de decisión.",
      "Cuando se busca profesionalizar la función de producto.",
    ],
    outcomes: [
      "Modelo de gestión de producto más claro.",
      "Rituales y gobernanza definidos.",
      "Métricas y criterios de priorización.",
      "Mayor consistencia en decisiones y ejecución.",
    ],
    eyebrow: "PMaaS",
  },
];

function StickyCard({
  item,
  index,
  total,
}: {
  item: Intervention;
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isPmaas = item.slug === "pmaas";

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 78%", "end 18%"],
  });

  const y = useTransform(scrollYProgress, [0, 0.35, 0.75, 1], [36, 12, 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.35, 0.75, 1], [0.992, 0.996, 1, 1]);
  const rightX = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [10, 4, 0, 0]);
  const glow = useTransform(scrollYProgress, [0, 0.5, 1], [0.06, 0.09, 0.12]);

  const shadow = useMotionTemplate`0 24px 80px rgba(15, 23, 42, ${glow})`;

  return (
    <section
      ref={ref}
      className={index === 0 ? "relative min-h-[92vh]" : "relative -mt-[18vh] min-h-[92vh]"}
    >
      <motion.div
        className="sticky"
        style={{
          top: "88px",
          y,
          scale,
          boxShadow: shadow,
          zIndex: total + index,
        }}
      >
        <article
          className={[
            "overflow-hidden rounded-[32px] bg-white",
            isPmaas
              ? "border border-[rgba(215,247,14,0.32)] shadow-[0_24px_80px_rgba(15,23,42,0.10)]"
              : "border border-slate-200",
          ].join(" ")}
        >
          <div className="grid min-h-[10vh] grid-cols-1 lg:grid-cols-[1.08fr_0.92fr]">
            {/* Columna izquierda */}
            <div className="flex flex-col justify-between p-4 md:p-5 xl:p-6">
              <div>
                <div className="flex items-center gap-4">
                  <div
                    className={[
                      "inline-flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold",
                      isPmaas
                        ? "bg-[rgba(215,247,14,0.14)] text-slate-900 ring-1 ring-[rgba(215,247,14,0.34)]"
                        : "bg-slate-900 text-white",
                    ].join(" ")}
                  >
                    {item.id}
                  </div>

                  <div
                    className={[
                      "inline-flex items-center rounded-full px-3 py-1",
                      isPmaas ? "bg-[rgba(215,247,14,0.10)]" : "bg-transparent",
                    ].join(" ")}
                  >
                    <p
                      className={[
                        "text-xs font-semibold uppercase tracking-[0.20em]",
                        isPmaas ? "text-slate-800" : "text-slate-500",
                      ].join(" ")}
                    >
                      {item.eyebrow}
                    </p>
                  </div>
                </div>

                {isPmaas && (
                  <div className="mt-4 inline-flex items-center rounded-full border border-[rgba(215,247,14,0.28)] bg-[rgba(215,247,14,0.10)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-800">
                    Capacidad destacada
                  </div>
                )}

                <h3 className="mt-3 max-w-2xl text-[2rem] font-semibold tracking-tight text-slate-900 md:text-[2.35rem] md:leading-[1.02]">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 md:text-base md:leading-7">
                  {item.summary}
                </p>

                <div className="mt-5 border-t border-slate-200 pt-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Cuándo aplicar
                  </p>

                  <ul className="mt-3 space-y-3 text-sm leading-6 text-slate-700 md:text-base md:leading-7">
                    {item.when.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-slate-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {isPmaas ? (
                  <>
                    <Link
                      href="/pmaas"
                      className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                      Explorar PMaaS
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                    >
                      Conversar
                    </Link>
                  </>
                ) : (
                  <Link
                    href="/contact"
                    className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Conversar
                  </Link>
                )}
              </div>
            </div>

            {/* Columna derecha */}
            <motion.div
              style={{ x: rightX }}
              className="relative overflow-hidden border-t border-slate-200 bg-slate-50 lg:border-l lg:border-t-0"
            >
              <div
                className={[
                  "absolute inset-0",
                  isPmaas
                    ? "bg-[radial-gradient(circle_at_top_right,rgba(215,247,14,0.16),transparent_24%),linear-gradient(to_bottom_right,rgba(255,255,255,0.94),rgba(248,250,252,0.98))]"
                    : "bg-[radial-gradient(circle_at_top_right,rgba(215,247,14,0.10),transparent_24%),linear-gradient(to_bottom_right,rgba(255,255,255,0.90),rgba(248,250,252,0.98))]",
                ].join(" ")}
              />
              <div
                className={[
                  "absolute inset-0",
                  isPmaas
                    ? "bg-[radial-gradient(circle_at_top_right,rgba(215,247,14,0.08),transparent_18%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.04),transparent_24%)]"
                    : "bg-[radial-gradient(circle_at_top_right,rgba(215,247,14,0.05),transparent_18%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.025),transparent_24%)]",
                ].join(" ")}
              />

              <div className="relative flex h-full flex-col justify-between p-4 text-slate-900 md:p-5 xl:p-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Resultados esperados
                  </p>

                  <ul className="mt-4 space-y-2">
                    {item.outcomes.map((point) => (
                      <li
                        key={point}
                        className="border-b border-slate-200 pb-2 text-base leading-7 text-slate-800 md:text-lg last:border-b-0"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className={[
                    "mt-4 rounded-2xl p-4 backdrop-blur-sm",
                    isPmaas
                      ? "border border-[rgba(215,247,14,0.28)] bg-white/88"
                      : "border border-slate-200 bg-white/80",
                  ].join(" ")}
                >
                  <p className="text-sm leading-6 text-slate-600">
                    {isPmaas
                      ? "PMaaS puede operar como capacidad transversal dentro de iniciativas críticas, conectando decisión, prioridad y ejecución."
                      : "Se puede combinar con otras intervenciones según madurez, urgencia, impacto esperado y nivel de riesgo operativo."}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </article>
      </motion.div>
    </section>
  );
}

export default function InterventionsSticky() {
  return (
    <section className="relative bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
            Intervenciones
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            La combinación depende del contexto.
          </h2>
        </div>

        {/* Desktop */}
        <div className="mt-12 hidden lg:block">
          <div className="relative">
            {interventions.map((item, index) => (
              <section
                key={item.id}
                id={`desktop-${item.slug}`}
                className="scroll-mt-32"
              >
                <StickyCard
                  item={item}
                  index={index}
                  total={interventions.length}
                />
              </section>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="mt-10 space-y-8 lg:hidden">
          {interventions.map((item, index) => {
            const isPmaas = item.slug === "pmaas";

            return (
              <motion.article
                key={item.id}
                id={`mobile-${item.slug}`}
                initial={{
                  opacity: 0,
                  y: 24,
                  x: index % 2 === 0 ? -10 : 10,
                  scale: 0.985,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  x: 0,
                  scale: 1,
                }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={[
                  "overflow-hidden rounded-[24px] bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)]",
                  isPmaas
                    ? "border border-[rgba(215,247,14,0.32)]"
                    : "border border-slate-200",
                ].join(" ")}
              >
                <div className="bg-slate-50 p-5">
                  <div className="flex items-center gap-3">
                    <div
                      className={[
                        "inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold",
                        isPmaas
                          ? "bg-[rgba(215,247,14,0.14)] text-slate-900 ring-1 ring-[rgba(215,247,14,0.34)]"
                          : "bg-slate-900 text-white",
                      ].join(" ")}
                    >
                      {item.id}
                    </div>

                    <div
                      className={[
                        "inline-flex items-center rounded-full px-3 py-1",
                        isPmaas ? "bg-[rgba(215,247,14,0.10)]" : "bg-transparent",
                      ].join(" ")}
                    >
                      <p
                        className={[
                          "text-xs font-semibold uppercase tracking-[0.18em]",
                          isPmaas ? "text-slate-800" : "text-slate-500",
                        ].join(" ")}
                      >
                        {item.eyebrow}
                      </p>
                    </div>
                  </div>

                  {isPmaas && (
                    <div className="mt-4 inline-flex items-center rounded-full border border-[rgba(215,247,14,0.28)] bg-[rgba(215,247,14,0.10)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-800">
                      Capacidad destacada
                    </div>
                  )}

                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.summary}
                  </p>
                </div>

                <div className="space-y-6 p-5">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Cuándo aplicar
                    </p>
                    <ul className="mt-3 space-y-3 text-sm leading-6 text-slate-700">
                      {item.when.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-slate-400" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className={[
                      "rounded-2xl p-4",
                      isPmaas
                        ? "border border-[rgba(215,247,14,0.28)] bg-[rgba(215,247,14,0.06)]"
                        : "border border-slate-200 bg-slate-50/70",
                    ].join(" ")}
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Resultados esperados
                    </p>
                    <ul className="mt-3 space-y-3 text-sm leading-6 text-slate-700">
                      {item.outcomes.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-slate-400" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {isPmaas && (
                    <div className="rounded-2xl border border-[rgba(215,247,14,0.28)] bg-white p-4">
                      <p className="text-sm leading-6 text-slate-600">
                        PMaaS puede operar como capacidad transversal dentro de iniciativas críticas, conectando decisión, prioridad y ejecución.
                      </p>
                    </div>
                  )}

                  <div className="flex flex-col gap-3 sm:flex-row">
                    {isPmaas ? (
                      <>
                        <Link
                          href="/pmaas"
                          className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
                        >
                          Explorar PMaaS
                        </Link>

                        <Link
                          href="/contact"
                          className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                        >
                          Conversar
                        </Link>
                      </>
                    ) : (
                      <Link
                        href="/contact"
                        className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
                      >
                        Conversar
                      </Link>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}