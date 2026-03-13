import Link from "next/link";
import TimelineNav, { TimelineItem } from "../components/TimelineNav";
import { VerticalModelCarousel } from "../components/VerticalModelCarousel";
import { Section } from "../components/Section";

const navItems: TimelineItem[] = [
  { id: "principios", num: "", title: "Principios" },
  { id: "intervenciones", num: "", title: "Qué hacemos" },
  { id: "rgt", num: "", title: "Run/Grow/Transform" },
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
      <Section>
      <section id="principios" className="scroll-mt-24 space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">Principios del modelo</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Impacto antes que actividad",
              desc: "Cada intervención debe alterar una métrica relevante del negocio.",
            },
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
            <div key={item.title} className="k-surface p-6">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="pt-2">
          <a href="#top" className="text-sm font-medium text-slate-500 hover:text-slate-900">
            Arriba ↑
          </a>
        </div>
      </section>
      </Section>

      {/* Intervenciones */}
      <Section tone="soft">
      <section id="intervenciones" className="scroll-mt-24 space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">Cómo intervenimos</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            "Consultoría Estratégica y Diagnóstico",
            "Diseño de Estrategia y Plan de Ejecución",
            "Ejecución de Iniciativas y Desarrollo de Soluciones",
            "Evaluación, Riesgo y Readiness Operativa",
            "Integración de Soluciones y Ecosistema Tecnológico",
            "Habilitación de Capacidades de Producto (PMaaS)",
          ].map((title) => (
            <div key={title} className="k-surface p-6">
              <h3 className="font-semibold">{title}</h3>
            </div>
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

        <div className="pt-2">
          <a href="#top" className="text-sm font-medium text-slate-500 hover:text-slate-900">
            Arriba ↑
          </a>
        </div>
      </section>
      </Section>



      {/* Cómo iniciamos */}
      <Section tone="dark">
      <section id="inicio" className="scroll-mt-24 space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">Cómo iniciamos</h2>

        <div className="max-w-3xl space-y-3 text-slate-600">
          <p className="text-lg text-slate-700">
            No iniciamos con una propuesta. Iniciamos con claridad.
          </p>
          <p>
            Antes de definir alcance, tecnología o presupuesto, entendemos la naturaleza estructural
            de la iniciativa.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            "Qué problema estructural se busca resolver.",
            "Qué métrica debe alterarse.",
            "Qué capacidades existen hoy.",
            "Qué riesgos son visibles.",
          ].map((item) => (
            <div key={item} className="k-surface p-6">
              <p className="text-sm text-slate-700">{item}</p>
            </div>
          ))}
        </div>

        <p className="max-w-3xl text-slate-600">
          La intervención es consecuencia de la claridad, no el punto de partida.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/approach"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
          >
            Framework de trabajo
          </Link>
        </div>

        <div className="pt-2">
          <a href="#top" className="text-sm font-medium text-slate-500 hover:text-slate-900">
            Arriba ↑
          </a>
        </div>
      </section>
      </Section>

      {/* Cierre */}
      <Section>
      <section id="cierre" className="k-surface scroll-mt-24 p-8">
        <h2 className="text-2xl font-semibold tracking-tight">
          No es un catálogo. Es un marco de responsabilidad.
        </h2>

        <p className="mt-3 max-w-3xl text-slate-600">
          Si estás evaluando una iniciativa crítica, conversemos antes de ejecutarla. Te ayudamos a
          definir claridad, reducir riesgo y estructurar la intervención correcta.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Iniciar conversación
          </Link>

          <Link
            href="/services"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
          >
            Ver detalle de intervenciones
          </Link>
        </div>

        <div className="pt-4">
          <a href="#top" className="text-sm font-medium text-slate-500 hover:text-slate-900">
            Arriba ↑
          </a>
        </div>
      </section>
      </Section>
      
    </main>
  );
}