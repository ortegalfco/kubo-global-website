import Link from "next/link";
import Image from "next/image";
import { SplitCarousel } from "./components/SplitCarousel";
import { Section } from "./components/Section";
import HeroHeadline from "./components/HeroHeadline";

const interventionCards = [
  {
    title: "Consultoría Estratégica y Diagnóstico",
    desc: "Identificamos fricciones estructurales, oportunidades y riesgos antes de invertir.",
    href: "/services#diagnostico",
  },
  {
    title: "Diseño de Estrategia y Plan de Ejecución",
    desc: "Traducimos visión en un plan ejecutable: métricas, roadmap, capacidades y dependencias.",
    href: "/services#estrategia",
  },
  {
    title: "Ejecución de Iniciativas y Soluciones",
    desc: "Acompañamos implementación con disciplina: alineación, control de alcance y resultados.",
    href: "/services#ejecucion",
  },
  {
    title: "Evaluación, Riesgo y Readiness Operativa",
    desc: "Validamos readiness organizacional, técnica y operativa para evitar fallas previsibles.",
    href: "/services#readiness",
  },
  {
    title: "Integración de Soluciones y Ecosistema",
    desc: "Integramos sin romper: arquitectura evolutiva, datos, APIs, seguridad y operación.",
    href: "/services#integracion",
  },
  {
    title: "Capacidades de Producto (PMaaS)",
    desc: "Fortalecemos Product Management: gobernanza, métricas, rituales y toma de decisiones.",
    href: "/services#pmaas",
  },
];

export default function Home() {
  return (


    <main>

{/* Hero Banner principal */}
      <section className="relative overflow-hidden">
        <div className="relative h-[520px] md:h-[640px] lg:h-[720px]">
          {/* Background */}
          <img
            src="/kubo-hero-banner01.svg"
            alt="Kubo Global"
            className="
        absolute inset-0
        w-full h-full
        object-cover
        object-[70%_center]
        md:object-[60%_center]
        lg:object-center
      "
          />

          {/* Premium motion layers */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 hero-grid-motion opacity-30" />
            <div className="absolute inset-0">
              <div className="hero-scan-line absolute left-0 right-0 h-[160px]" />
            </div>
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071623]/72 via-[#071623]/28 to-transparent" />

          {/* CONTENIDO */}
          <div className="relative z-10 h-full flex items-center">
            <div className="mx-auto max-w-7xl px-6 w-full flex justify-center">
              <HeroHeadline />
            </div>
          </div>
        </div>
      </section>

      {/* Carrusel principal */}
      <Section tone="soft" pad="sm">
        <SplitCarousel />
      </Section>



      {/* HERO editorial */}
      <Section tone="white">
        <section className="relative overflow-hidden">
          {/* Fondo */}
          <div className="absolute inset-0 -z-0">
            <Image
              src="/banner01-background.png"
              alt="kubo Global Background"
              fill
              priority
              className="object-cover opacity-15"
            />

            {/* overlay para legibilidad */}
            <div className="absolute inset-0  bg-white/80" />
          </div>
          <section className="k-surface p-6 md:p-8" >

            <div className="relative z-10 space-y-5">
              <p className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                Firma boutique • Estrategia + ejecución • Impacto medible
              </p>

              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Tecnología como medio no como fin.
              </h1>

              <p className="text-lg text-slate-600">
                Kubo Global interviene en iniciativas críticas donde el resultado del negocio depende
                de decisiones estructurales bien diseñadas y correctamente ejecutadas.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/model"
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 px-5 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Explorar nuestro modelo
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  Conversar sobre una iniciativa
                </Link>
              </div>

              <p className="text-sm text-slate-500">
                No somos staff augmentation. No somos fábrica de software. No vendemos servicios aislados.
              </p>
            </div>

            {/* Panel derecho */}
            <div className="k-surface-soft">


            </div>
          </section>
        </section>
      </Section>

            {/* Run–Grow–Transform */}
      <Section tone="soft">
        <section className="k-surface-soft p-6 md:p-8">
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Marco transversal
            </p>
            <h2 className="text-2xl font-semibold tracking-tight">Run · Grow · Transform</h2>
            <p className="text-sm text-slate-600">
              Priorizamos iniciativas según su papel real en la operación: estabilizar, escalar o
              rediseñar.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Run",
                desc: "Optimizar y estabilizar lo que ya opera. Reducir fricción, proteger margen y elevar eficiencia.",
              },
              {
                title: "Grow",
                desc: "Expandir capacidad y resultados. Escalar conversión, productividad o throughput con control.",
              },
              {
                title: "Transform",
                desc: "Rediseñar estructura. Arquitectura, modelo operativo o ventaja competitiva, no solo mejoras.",
              },
            ].map((card) => (
              <div key={card.title} className="k-surface p-6">
                <h3 className="text-base font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </Section>


      {/* Modelo de intervención */}
      <Section tone="white">
        <section className="space-y-5">
          <div className="flex items-end justify-between gap-6">
            <div className="space-y-2">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Modelo de intervención
              </p>
              <h2 className="text-2xl font-semibold tracking-tight">
                Un marco claro para convertir decisiones en resultados.
              </h2>
              <p className="text-sm text-slate-600">
                Intervenimos por impacto, no por tareas. Cada iniciativa se estructura con métricas,
                responsables y un plan de ejecución realista.
              </p>
            </div>
            <Link
              href="/services"
              className="hidden text-sm font-medium text-slate-900 hover:underline md:inline"
            >
              Ver catálogo completo →
            </Link>
          </div>

          <section className="grid gap-4 md:grid-cols-3">
            {interventionCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-slate-800 hover:bg-slate-900 hover:shadow-xl active:scale-[0.985] active:translate-y-[1px] active:shadow-md"
              >
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-100 bg-lime-300/70 transition-transform duration-300 md:scale-x-0 md:group-hover:scale-x-100" />

                <div className="relative flex h-full min-h-[240px] flex-col">
                  <h3 className="text-base font-semibold text-slate-900 transition-colors duration-300 group-hover:text-white">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600 transition-colors duration-300 group-hover:text-slate-300">
                    {card.desc}
                  </p>

                  <div className="mt-auto pt-6 flex items-center justify-between ">
                    <span className="text-sm font-medium text-slate-500 md:hidden">
                      Tocar para ver detalle
                    </span>

                    <span className="hidden text-sm font-medium text-slate-500 transition-colors duration-300 group-hover:text-lime-300 md:inline">
                      Ver servicio
                    </span>

                    <span className="absolute right-5 button-5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:border-white/20 group-hover:text-lime-300">
                      ↗
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </section>
        </section>
      </Section>



      {/* Dominios */}
      <Section tone="soft">
        <section className="space-y-5">
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Dominios</p>
            <h2 className="text-2xl font-semibold tracking-tight">
              Operamos donde la complejidad exige estructura.
            </h2>
            <p className="text-sm text-slate-600">
              Aplicamos el mismo modelo de intervención en dominios distintos: el foco siempre es
              impacto medible.
            </p>
          </div>

          <section className="grid gap-6 md:grid-cols-4">
            {[
              {
                title: "Search & AI",
                desc: "Decisiones de relevancia, arquitectura y medición que impactan conversión y eficiencia comercial.",
              },
              {
                title: "eCommerce",
                desc: "Ecosistema digital, catálogo, experiencia de descubrimiento e integración con sistemas críticos.",
              },
              {
                title: "Supply Chain / Operaciones",
                desc: "Disponibilidad operativa, trazabilidad, costos y digitalización de procesos distribuidos.",
              },
              {
                title: "Plataformas complejas",
                desc: "Arquitectura evolutiva, integración, gobernanza y reducción de riesgo estructural.",
              },
            ].map((card) => (
              <div key={card.title} className="k-surface p-6">
                <h3 className="text-base font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{card.desc}</p>
              </div>
            ))}

            {/* CTA como card para que no rompa el grid */}
            <Link
              href="/demo"
              className="k-surface flex items-center justify-center p-6 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Ver demo (Search Lab)
            </Link>
          </section>
        </section>
      </Section>

      {/* Cierre + CTA */}
      <Section tone="dark">
        <section className="py-12">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight">
                No intervenimos en todo. Solo en lo que impacta.
              </h2>
              <p className="text-sm text-slate-300">
                Si estás evaluando una iniciativa crítica, conversemos antes de ejecutarla.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-white px-6 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-900"
              >
                Iniciar conversación
              </Link>
            </div>
          </div>
        </section>
      </Section>
    </main>
  );
}