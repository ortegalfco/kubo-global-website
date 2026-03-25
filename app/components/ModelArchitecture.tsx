"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const layers = [
  {
    id: "capacity",
    label: "Capacidad",
    title: "PMaaS",
    subtitle: "Product Ownership continuo",
    description:
      "Extendemos la capacidad de Product Ownership dentro de la organización para estructurar decisiones, prioridades y ejecución de forma continua.",
    bullets: [
      "Product Owner, Product Manager y Program Management",
      "Acompañamiento directo en la operación",
      "Decisiones sostenidas en el tiempo",
    ],
    tone:
      "border-lime-300/50 bg-[linear-gradient(135deg,rgba(215,247,14,0.12),rgba(255,255,255,0.92))]",
  },
  {
    id: "interventions",
    label: "Qué hacemos",
    title: "Intervenciones",
    subtitle: "Tipos de movimiento según impacto y riesgo",
    description:
      "Aplicamos distintos tipos de intervención según la naturaleza de la iniciativa, su complejidad y el nivel de riesgo operativo.",
    bullets: [
      "Diagnóstico",
      "Estrategia y plan de ejecución",
      "Ejecución, readiness e integración",
    ],
    tone:
      "border-slate-200 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(248,250,252,0.96))]",
  },
  {
    id: "approach",
    label: "Cómo trabajamos",
    title: "Approach",
    subtitle: "Framework estructurado de trabajo",
    description:
      "Ejecutamos con una secuencia clara que reduce riesgo desde el inicio: alineación, diagnóstico, diseño, ejecución, medición y transferencia.",
    bullets: [
      "Claridad antes de ejecutar",
      "Criterio antes de invertir",
      "Medición y accountability explícitos",
    ],
    tone:
      "border-slate-200 bg-[linear-gradient(135deg,rgba(248,250,252,0.98),rgba(241,245,249,0.92))]",
  },
];

export default function ModelArchitecture() {
  return (
<section className="relative w-full max-w-full overflow-hidden rounded-[28px] md:rounded-[32px] border border-slate-200 bg-white px-4 py-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:px-5 md:px-8 md:py-10">
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(215,247,14,0.08),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.04),transparent_28%)]" />
  </div>

  <div className="relative max-w-3xl">
    <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
      Modelo completo
    </p>

    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
      Cómo se conecta nuestro modelo.
    </h2>

    <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
      No operamos con un catálogo aislado de servicios. Combinamos un framework
      de trabajo, tipos de intervención y capacidad continua de Product
      Ownership para sostener decisiones con criterio.
    </p>
  </div>

  <div className="relative mt-10">
    <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[linear-gradient(to_bottom,rgba(148,163,184,0.15),rgba(148,163,184,0.4),rgba(148,163,184,0.15))] lg:block" />

    <div className="space-y-5">
      {layers.map((layer, index) => (
        <motion.div
          key={layer.id}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute left-1/2 top-[-10px] hidden h-5 w-5 -translate-x-1/2 rounded-full border border-slate-200 bg-white shadow-sm lg:block" />

          <article
            className={`relative overflow-hidden rounded-[24px] md:rounded-[28px] border p-5 md:p-7 ${layer.tone}`}
          >
            <div className="grid min-w-0 gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="min-w-0">
                <div className="inline-flex max-w-full items-center rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600 backdrop-blur">
                  {layer.label}
                </div>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 md:text-[2rem]">
                  {layer.title}
                </h3>

                <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
                  {layer.subtitle}
                </p>
              </div>

              <div className="min-w-0">
                <p className="text-[15px] leading-7 text-slate-700 md:text-base break-words">
                  {layer.description}
                </p>

                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {layer.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-sm leading-6 text-slate-700 backdrop-blur-sm break-words"
                    >
                      {bullet}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </motion.div>
      ))}
    </div>
  </div>
</section>
  );
}