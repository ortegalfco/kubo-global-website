import Link from "next/link";
import TimelineNav, { TimelineItem } from "../components/TimelineNav";

type Phase = {
  id: string;
  step: string;
  title: string;
  desc: string;
  outputs: string[];
};

const navItems: TimelineItem[] = [
  { id: "alineacion", num: "1", title: "Alineación" },
  { id: "diagnostico", num: "2", title: "Diagnóstico" },
  { id: "diseno", num: "3", title: "Diseño" },
  { id: "ejecucion", num: "4", title: "Ejecución" },
  { id: "medicion", num: "5", title: "Medición" },
  { id: "transferencia", num: "6", title: "Transferencia" },
];

const phases: Phase[] = [
  {
    id: "alineacion",
    step: "1",
    title: "Alineación (Clarity First)",
    desc: "Definimos el problema estructural, el impacto esperado y las métricas. Sin esto, cualquier plan es ruido.",
    outputs: [
      "Enunciado claro del problema",
      "Métrica objetivo y cómo se medirá",
      "Hipótesis, restricciones y alcance",
      "Criterios de decisión",
    ],
  },
  {
    id: "diagnostico",
    step: "2",
    title: "Diagnóstico (Reality Check)",
    desc: "Entendemos el estado actual: operación, datos, arquitectura y capacidades. Buscamos fricción estructural y riesgos antes de ejecutar.",
    outputs: [
      "Mapa de fricciones y dependencias",
      "Riesgos visibles y supuestos",
      "Lectura de readiness técnico y operativo",
    ],
  },
  {
    id: "diseno",
    step: "3",
    title: "Diseño (Strategy to Plan)",
    desc: "Convertimos la decisión en un plan ejecutable: prioridades, fases, gobernanza y métricas.",
    outputs: [
      "Roadmap por fases",
      "Gobernanza y modelo de decisión",
      "Plan de seguimiento y medición",
    ],
  },
  {
    id: "ejecucion",
    step: "4",
    title: "Ejecución (Disciplined Delivery)",
    desc: "Acompañamos la implementación sin perder el norte: métrica, alcance y riesgo. Disciplina, no urgencia.",
    outputs: [
      "Cadencia de seguimiento",
      "Control de dependencias y alcance",
      "Gestión de riesgos",
      "Visibilidad de avance",
    ],
  },
  {
    id: "medicion",
    step: "5",
    title: "Medición (Accountability)",
    desc: "Entregamos y medimos. Si no mueve la métrica, se ajusta. El objetivo no es entregar, sino mejorar el resultado.",
    outputs: [
      "Impacto vs baseline",
      "Recomendaciones de ajuste",
      "Siguiente decisión estratégica",
    ],
  },
  {
    id: "transferencia",
    step: "6",
    title: "Transferencia (Capability Building)",
    desc: "Cuando aplica, dejamos capacidad instalada o continuamos operando como una extensión de Product Ownership dentro de la organización.",
    outputs: [
      "Playbook operativo",
      "KPIs y tableros",
      "Ritual y roles claros",
    ],
  },
];

export default function ApproachPage() {
  return (
    <main id="top" className="bg-white pb-20">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950">
        <div className="relative min-h-[460px] sm:min-h-[500px] md:min-h-[560px]">
          {/* background */}
          <div
            className="absolute inset-0 bg-[url('/banner01-background.png')] bg-cover bg-[76%_center] sm:bg-[72%_center] md:bg-center"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 hero-grid-motion opacity-15"
            aria-hidden="true"
          />

          {/* overlays */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#05101c]/92 via-[#071623]/76 to-[#071623]/28"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-slate-950/18 via-transparent to-slate-950/42"
            aria-hidden="true"
          />

          {/* soft glows */}
          <div className="absolute left-[-6%] top-[16%] h-40 w-40 rounded-full bg-lime-300/10 blur-3xl" />
          <div className="absolute right-[8%] top-[22%] h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative z-10 mx-auto flex min-h-[460px] max-w-6xl items-center px-4 pb-16 pt-[calc(var(--header-h)+28px)] sm:min-h-[500px] md:min-h-[560px] md:pb-20 md:pt-[calc(var(--header-h)+34px)]">
            <div className="max-w-[640px]">
              <div className="inline-flex items-center rounded-full border border-white/15 bg-white/8 px-3 py-1 text-[11px] font-medium text-white/80 backdrop-blur md:text-xs">
                Cómo trabajamos
              </div>

              <h1 className="mt-5 max-w-[12ch] text-[34px] font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-[42px] md:text-[52px] lg:text-[56px]">
                Intervenimos con estructura, no con improvisación.
              </h1>

              <p className="mt-5 max-w-[580px] text-[15px] leading-7 text-slate-200 md:text-[16px]">
                Cada engagement avanza por claridad, diagnóstico, diseño,
                ejecución disciplinada y medición.
              </p>

              <p className="mt-4 max-w-[610px] text-sm leading-7 text-slate-300 md:text-[15px]">
                <span className="font-semibold text-white">
                  No iniciamos con una propuesta.
                </span>{" "}
                Iniciamos con claridad, criterio y una estructura de trabajo que
                reduzca riesgo desde el inicio.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                >
                  Conversar
                </Link>

                <Link
                  href="/model"
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
                >
                  Ver el modelo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
<TimelineNav
  label="Framework"
  items={navItems}
  ctaHref="/contact"
  ctaLabel="Conversar"
/>

      {/* INTRO */}
      <section className="mx-auto max-w-6xl px-4 pt-14 md:pt-16">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
            Fases de trabajo
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            Un framework flexible, no una receta rígida.
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            No todos los casos requieren todas las fases. Ajustamos la
            estructura según impacto, riesgo, madurez y urgencia.
          </p>
        </div>
      </section>

      {/* PHASES */}
      <section className="mx-auto max-w-6xl px-4 pt-8">
        <div className="grid gap-6 md:grid-cols-2">
          {phases.map((p) => (
            <section
              key={p.id}
              id={p.id}
              className="scroll-mt-32 rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)] md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3 pr-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                    {p.step}
                  </div>

                  <h3 className="text-lg font-semibold text-slate-950 md:text-[1.06rem]">
                    {p.title}
                  </h3>
                </div>

                <a
                  href="#top"
                  className="shrink-0 text-sm font-medium text-slate-500 transition hover:text-slate-900"
                >
                  Arriba ↑
                </a>
              </div>

              <p className="mt-5 text-[15px] leading-7 text-slate-600">
                {p.desc}
              </p>

              <div className="mt-6 rounded-2xl border border-slate-200/80 bg-slate-50/85 p-5">
                <p className="text-sm font-semibold text-slate-900">
                  Salidas típicas
                </p>

                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                  {p.outputs.map((o) => (
                    <li key={o} className="flex items-start gap-3">
                      <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-lime-300" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-6xl px-4 pt-14">
        <section className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-slate-950 px-6 py-8 shadow-[0_18px_50px_rgba(15,23,42,0.16)] md:px-8 md:py-10">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 hero-grid-motion" />
          </div>

          <div className="relative grid gap-6 md:grid-cols-[1.35fr_0.65fr] md:items-center">
            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                Claridad antes de ejecutar
              </p>

              <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Si la iniciativa es crítica, la estructura importa.
              </h2>

              <p className="max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                Si estás evaluando una iniciativa relevante, conversemos.
                Podemos ayudarte a entender rápido si tiene sentido, qué
                condiciones necesita y cómo reducir riesgo antes de mover
                recursos.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:items-end">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Iniciar conversación
              </Link>

              <Link
                href="/services"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-white/20 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Ver qué hacemos
              </Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}