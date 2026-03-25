import Link from "next/link";
import TimelineNav, { TimelineItem } from "../components/TimelineNav";
import { VerticalModelCarousel } from "../components/VerticalModelCarousel";
import { Section } from "../components/Section";
import ModelArchitecture from "../components/ModelArchitecture";

const navItems: TimelineItem[] = [
  { id: "principios", num: "", title: "Principios" },
  { id: "arquitectura", num: "", title: "Modelo completo" },
  { id: "intervenciones", num: "", title: "Qué hacemos" },
  { id: "inicio", num: "", title: "Cómo iniciamos" },
  { id: "cierre", num: "", title: "Cierre" },
];

const modelCards = [
  {
    label: "Run",
    title: "Continuidad operativa y resiliencia",
    desc: "Aseguramos estabilidad, control operativo y capacidad de respuesta en plataformas críticas.",
  },
  {
    label: "Grow",
    title: "Optimización de plataformas digitales",
    desc: "Mejoramos relevancia, operación y experiencia para generar impacto medible en negocio.",
  },
  {
    label: "Transform",
    title: "Nuevos modelos tecnológicos",
    desc: "Diseñamos evolución estructural, capacidades nuevas y arquitectura para crecimiento sostenible.",
  },
];

export default function ModelPage() {
  return (
    <main id="top" className="w-full overflow-x-clip">

      <section className="relative isolate overflow-hidden">
        <div className="relative min-h-[760px] lg:min-h-[860px]">
          {/* Background */}
          <img
            src="/herobanner01-home.png"
            alt="Kubo Global"
            className="
              absolute inset-0
              h-full w-full
              object-cover
              object-[70%_center]
              md:object-[60%_center]
              lg:object-center
            "
          />

          {/* Motion layers */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="hero-grid-motion absolute inset-0 opacity-25" />
            <div className="absolute inset-0">
              <div className="hero-scan-line absolute left-0 right-0 h-[160px]" />
            </div>
          </div>

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020817]/94 via-[#020817]/72 to-[#020817]/38" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,rgba(59,130,246,0.12),transparent_28%),radial-gradient(circle_at_84%_65%,rgba(251,146,60,0.10),transparent_24%)]" />

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-16 sm:px-8 sm:pt-32 lg:px-10 lg:pt-36 lg:pb-24">
            <div className="grid items-start gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
              {/* LEFT */}
              <div className="max-w-2xl pt-4 lg:pt-12">
                <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-lime-300/80">
                  Estrategia
                </p>

                <h2
                  className="
                    max-w-[760px]
                    text-3xl
                    font-normal
                    leading-[1.06]
                    tracking-[-0.03em]
                    text-white
                    md:text-4xl
                    lg:text-[3.6rem]
                  "
                >
                  Nuestro modelo no empieza en tecnología.
                  <br />
                  Empieza en criterio.
                </h2>

                <p className="mt-8 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
                  Clasificamos cada iniciativa según su impacto estructural:
                  estabilizar lo que opera, escalar capacidad o rediseñar
                  estructura con control de riesgo.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex h-12 items-center justify-center rounded-xl bg-[#d7f70e] px-6 text-sm font-semibold text-slate-950 transition hover:brightness-95"
                  >
                    Conversar
                  </Link>
                </div>
              </div>

              {/* RIGHT DESKTOP */}
              <div className="hidden lg:block lg:pt-16">
                <VerticalModelCarousel />
              </div>
            </div>

            {/* MOBILE / TABLET AUTO HORIZONTAL CAROUSEL */}
            <div className="mt-12 lg:hidden">
              <div className="relative overflow-hidden px-6 sm:px-8">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-[#020817] to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-[#020817] to-transparent" />

                <div className="mobile-carousel-track flex gap-4 pb-2">
                  {[...modelCards, ...modelCards].map((item, i) => (
                    <article
                      key={`${item.label}-${i}`}
                      className="w-[72vw] max-w-[290px] shrink-0 rounded-2xl border border-white/10 bg-slate-950/65 p-6 backdrop-blur-md shadow-[0_18px_60px_rgba(0,0,0,0.28)]"
                    >
                      <p className="text-xs font-medium uppercase tracking-[0.18em] text-lime-300/85">
                        {item.label}
                      </p>

                      <h3 className="mt-3 text-2xl font-semibold leading-tight text-white">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-base leading-7 text-slate-300">
                        {item.desc}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TimelineNav */}
      <TimelineNav
        label=""
        items={navItems}
        ctaHref="/contact"
        ctaLabel="Conversar"

      />
      {/* Principios */}
      <Section tone="soft">
        <section id="principios" className="scroll-mt-24">
          <div className="space-y-8">
            <div className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                Principios del modelo
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                No operamos por tareas. Operamos por criterio.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
                Estos principios definen cómo evaluamos iniciativas, estructuramos decisiones
                y evitamos que la tecnología se convierta en actividad sin impacto.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
              {/* Card principal */}
              <article className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-950 p-7 text-white shadow-[0_18px_50px_rgba(15,23,42,0.16)] md:p-8">
                <div className="absolute inset-0 opacity-20">
                  <div className="hero-grid-motion absolute inset-0" />
                </div>
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-lime-300/10 blur-3xl" />

                <div className="relative">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-lime-300/85">
                    Principio rector
                  </p>

                  <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-[2rem]">
                    Impacto antes que actividad
                  </h3>

                  <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200">
                    Cada intervención debe alterar una métrica relevante del negocio.
                    Si no cambia el resultado, no es prioridad real.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 backdrop-blur-sm">
                      Priorización basada en impacto esperado
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 backdrop-blur-sm">
                      Decisiones conectadas a métricas
                    </div>
                  </div>
                </div>
              </article>

              {/* Principios complementarios */}
              <div className="grid gap-5">
                {[
                  {
                    title: "Estructura antes que ejecución",
                    desc: "Sin claridad estratégica no hay implementación efectiva.",
                  },
                  {
                    title: "Accountability explícito",
                    desc: "Toda iniciativa define responsables, métricas y horizonte de evaluación.",
                  },
                  {
                    title: "Tecnología como medio",
                    desc: "Se implementa únicamente cuando cambia el resultado.",
                  },
                ].map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
                  >
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                      Principio
                    </p>

                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                      {item.desc}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="pt-1">
              <a href="#top" className="text-sm font-medium text-slate-500 hover:text-slate-900">
                Arriba ↑
              </a>
            </div>
          </div>
        </section>
      </Section>

      {/* Arquitectura */}
      <Section tone="white">
        <section id="arquitectura" className="scroll-mt-24">
          <ModelArchitecture />
        </section>
      </Section>

      {/* Intervenciones */}
      <Section tone="soft">
        <section
          id="intervenciones"
          className="scroll-mt-[calc(var(--header-h)+96px)] md:scroll-mt-24"
        >
          <div className="space-y-8">
            <div className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                Cómo intervenimos
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                El modelo se traduce en tipos de intervención.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
                No son servicios aislados ni un catálogo genérico. Son formas de
                aplicar el modelo según la naturaleza de la iniciativa, su riesgo y el
                impacto esperado.
              </p>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
              {[
                {
                  eyebrow: "Diagnóstico",
                  title: "Consultoría Estratégica y Diagnóstico",
                  desc: "Clarificamos el problema, el impacto esperado y el punto correcto de intervención antes de comprometer inversión o tecnología.",
                  tag: "Transversal",
                  href: "/services#diagnostico",
                },
                {
                  eyebrow: "Estrategia",
                  title: "Diseño de Estrategia y Plan de Ejecución",
                  desc: "Traducimos dirección en una ruta ejecutable, priorizada y gobernable, con métricas, fases y criterios claros de avance.",
                  tag: "Transversal",
                  href: "/services#estrategia",
                },
                {
                  eyebrow: "Ejecución",
                  title: "Ejecución de Iniciativas y Soluciones",
                  desc: "Acompañamos la ejecución para reducir fricción, alinear equipos y acelerar resultados sin perder control.",
                  tag: "Run / Grow",
                  href: "/services#ejecucion",
                },
                {
                  eyebrow: "Readiness",
                  title: "Evaluación, Riesgo y Readiness Operativa",
                  desc: "Validamos si la organización está preparada para ejecutar decisiones sin generar fricción o fallas previsibles.",
                  tag: "Run / Transform",
                  href: "/services#readiness",
                },
                {
                  eyebrow: "Integración",
                  title: "Integración de Soluciones y Ecosistema",
                  desc: "Definimos cuándo construir, integrar o adoptar soluciones existentes, evitando complejidad innecesaria y fragmentación.",
                  tag: "Grow / Transform",
                  href: "/services#integracion",
                },
                {
                  eyebrow: "PMaaS",
                  title: "Capacidades de Producto (PMaaS)",
                  desc: "Fortalecemos Product Management: gobernanza, métricas, rituales y toma de decisiones, con acompañamiento directo en la operación.",
                  tag: "Capacidad continua",
                  href: "/services#pmaas",
                },
              ].map((item, index, arr) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className={[
                    "group block transition-colors duration-300 hover:bg-slate-50/80",
                    index !== arr.length - 1 ? "border-b border-slate-200" : "",
                  ].join(" ")}
                >
                  <article className="grid gap-5 px-6 py-6 md:px-8 md:py-7 lg:grid-cols-[0.22fr_0.56fr_0.22fr] lg:items-start">
                    {/* Left */}
                    <div className="space-y-2">
                      <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                        {item.eyebrow}
                      </p>

                      <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600">
                        {item.tag}
                      </span>
                    </div>

                    {/* Center */}
                    <div className="min-w-0">
                      <h3 className="text-xl font-semibold tracking-tight text-slate-950 md:text-2xl">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
                        {item.desc}
                      </p>
                    </div>

                    {/* Right */}
                    <div className="flex items-center justify-between gap-4 lg:justify-end">
                      <span className="text-sm font-medium text-slate-500 transition-colors duration-300 group-hover:text-slate-900">
                        Ver detalle
                      </span>

                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:border-slate-300 group-hover:text-slate-900">
                        ↗
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Ver detalle de intervenciones
              </Link>
            </div>

            <div className="pt-1">
              <a
                href="#top"
                className="text-sm font-medium text-slate-500 hover:text-slate-900"
              >
                Arriba ↑
              </a>
            </div>
          </div>
        </section>
      </Section>


      {/* Cómo iniciamos */}
      <Section tone="dark">
        <section id="inicio" className="scroll-mt-[calc(var(--header-h)+96px)] md:scroll-mt-24">
          <div className="space-y-10">
            <div className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-lime-300/80">
                Cómo iniciamos
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                No iniciamos con una propuesta. Iniciamos con claridad.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">
                Antes de definir alcance, tecnología o presupuesto, entendemos la naturaleza
                estructural de la iniciativa.
              </p>
            </div>

            {/* LISTA */}
            <div className="relative pl-6">
              {/* línea vertical */}
              <div className="absolute left-2 top-0 h-full w-px bg-gradient-to-b from-lime-300/40 via-slate-600/40 to-transparent" />

              <div className="space-y-6">
                {[
                  "Qué problema estructural se busca resolver.",
                  "Qué métrica debe alterarse.",
                  "Qué capacidades existen hoy.",
                  "Qué riesgos son visibles.",
                ].map((item, i) => (
                  <div key={item} className="relative flex items-start gap-4">
                    {/* punto */}
                    <div className="relative mt-1">
                      <div className="h-4 w-4 rounded-full border border-lime-300/60 bg-[#0b1a2f]" />
                      <div className="absolute inset-0 rounded-full bg-lime-300/20 blur-sm" />
                    </div>

                    {/* contenido */}
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm leading-7 text-slate-200 backdrop-blur-sm">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* cierre */}
            <div className="max-w-2xl">
              <p className="text-sm leading-6 text-slate-400">
                La intervención es consecuencia de la claridad, no el punto de partida.
              </p>
            </div>

            {/* CTA */}
            <div>
              <Link
                href="/approach"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
              >
                Ver framework de trabajo
              </Link>
            </div>
          </div>
        </section>
      </Section>

      {/* Cierre */}
<Section tone="white">
  <section id="cierre" className="py-6">
    
<div className="text-center space-y-3">
        <p className="text-sm text-slate-500">
    ¿Lo revisamos juntos?
  </p>
      <Link
        href="/contact"
        className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
      >
        Conversar
      </Link>
    </div>
  </section>
</Section>

    </main>
  );
}