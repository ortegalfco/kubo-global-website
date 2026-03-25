"use client";

import Link from "next/link";

const capabilityLevels = [
  {
    title: "Product Owner",
    desc: "Gestiona backlog, prioridades y ejecución diaria con foco en claridad, cadencia y decisiones aterrizadas.",
  },
  {
    title: "Product Manager",
    desc: "Define dirección, roadmap, métricas y alineación entre producto, negocio y tecnología.",
  },
  {
    title: "Program Management",
    desc: "Orquesta múltiples iniciativas, dependencias y decisiones transversales cuando el alcance supera un solo producto.",
  },
];

const commonProblems = [
  "Backlogs sin prioridad real",
  "Roadmaps desconectados del negocio",
  "Equipos ejecutando sin impacto claro",
  "Dependencia excesiva de áreas técnicas para decidir",
  "Falta de ownership entre múltiples iniciativas",
  "Decisiones fragmentadas entre áreas y stakeholders",
];

const outcomes = [
  "Mayor claridad en prioridades y roadmap",
  "Mejor alineación entre negocio y tecnología",
  "Decisiones más consistentes y oportunas",
  "Menos iniciativas sin impacto real",
  "Mayor velocidad de ejecución con foco en valor",
  "Estructura de producto más madura y gobernable",
];

const operatingExamples = [
  "Definición y reestructuración de backlog",
  "Priorización basada en impacto esperado",
  "Gobernanza de decisiones de producto",
  "Alineación entre squads, negocio y tecnología",
  "Seguimiento de métricas y accountability",
  "Orquestación de dependencias entre iniciativas",
];

export default function PMaaSPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950">
        <div className="relative min-h-[560px] md:min-h-[660px]">
          <div
            className="absolute inset-0 bg-[url('/herobanner01-home.png')] bg-cover bg-center"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 hero-grid-motion opacity-15"
            aria-hidden="true"
          />

          <div
            className="absolute inset-0 bg-gradient-to-r from-[#03101b]/94 via-[#071623]/78 to-[#071623]/34"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-slate-950/12 via-transparent to-slate-950/45"
            aria-hidden="true"
          />

          <div className="absolute left-[-6%] top-[10%] h-44 w-44 rounded-full bg-lime-300/10 blur-3xl" />
          <div className="absolute right-[10%] top-[18%] h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative z-10 mx-auto flex min-h-[560px] max-w-7xl items-center px-4 pb-16 pt-[calc(var(--header-h)+28px)] md:min-h-[660px] md:px-6 md:pb-20 md:pt-[calc(var(--header-h)+34px)]">
            <div className="grid w-full gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
              <div className="max-w-3xl">
                <div className="inline-flex items-center rounded-full border border-white/15 bg-white/8 px-3 py-1 text-[11px] font-medium text-white/80 backdrop-blur md:text-xs">
                  PMaaS · Product Management as a Service
                </div>

                <h1 className="mt-5 max-w-[14ch] text-[36px] font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-[46px] md:text-[48px]">
                  Extiende la capacidad de Product Ownership en tu organización.
                </h1>

                <p className="mt-6 max-w-2xl text-[16px] leading-8 text-slate-200 md:text-[18px]">
                  Integramos Product Owners, Product Managers y Program Managers
                  como una capa real de decisión, no como roles aislados.
                </p>



                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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

              {/* Hero support panel */}
              <div className="hidden lg:block">
                <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/6 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-md">
                  <div className="border-b border-white/10 px-6 py-5">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-lime-300/80">
                      Qué habilita PMaaS
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                      Decisiones más claras. Ejecución más alineada.
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 gap-px bg-white/10">
                    {[
                      "Más claridad en roadmap",
                      "Menos iniciativas sin impacto",
                      "Mejor alineación negocio–tecnología",
                      "Mayor capacidad de decisión",
                    ].map((item) => (
                      <div
                        key={item}
                        className="bg-slate-950/35 px-6 py-5 text-sm leading-6 text-slate-200"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              Dónde falla la iniciativa
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Muchas iniciativas fallan no por tecnología, sino por falta de
              decisión clara.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Cuando no existe una capacidad sólida de Product Ownership, el
              problema no es la ejecución. Es la ausencia de criterio para
              priorizar, alinear y sostener decisiones en el tiempo.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {commonProblems.map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
              >
                <p className="text-sm leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IT IS */}
      <section className="border-y border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                Qué es PMaaS
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                No es outsourcing. Es capacidad de decisión integrada.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
                PMaaS en Kubo Global no se limita a un perfil específico. Integra
                capacidades de Product Owner, Product Manager y Program
                Management según la necesidad real de la iniciativa.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Nos integramos directamente en la operación para estructurar
                decisiones, alinear equipos y asegurar que la ejecución responda
                a objetivos concretos de negocio.
              </p>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_12px_36px_rgba(15,23,42,0.05)] md:p-7">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                Diferenciador
              </p>

              <div className="mt-5 space-y-4">
                {[
                  "No operamos como recurso externo.",
                  "No vendemos una certificación ni un rol aislado.",
                  "Aportamos estructura de decisión dentro de la operación.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-4 text-sm leading-6 text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPERATING MODEL VISUAL */}
      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
        <div className="space-y-8">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              Operating model
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              PMaaS opera como una capa de decisión entre negocio, producto y ejecución.
            </h2>
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-b from-white to-slate-50/80 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] md:p-8">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(215,247,14,0.07),transparent_40%)]" />
            </div>

            <div className="relative grid gap-5 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">
              <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                  Negocio
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">
                  Prioridades y objetivos
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Traducimos necesidades de negocio en decisiones que puedan ser
                  gobernadas y ejecutadas con claridad.
                </p>
              </div>

              <div className="hidden lg:flex items-center justify-center text-slate-300">
                →
              </div>

              <div className="relative overflow-hidden rounded-[26px] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.14)]">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#d7f70e] to-transparent" />
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-lime-300/80">
                  PMaaS
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  Capa de decisión
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-200">
                  Product Ownership integrado para priorizar, alinear, gobernar
                  y sostener decisiones en el tiempo.
                </p>
              </div>

              <div className="hidden lg:flex items-center justify-center text-slate-300">
                →
              </div>

              <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                  Ejecución
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">
                  Entrega con foco
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Alineamos backlog, roadmap, dependencias y métricas para que la
                  ejecución responda al resultado esperado.
                </p>
              </div>
            </div>

            <div className="relative mt-6 grid gap-4 sm:grid-cols-3">
              {[
                "Backlog y prioridades",
                "Roadmap y métricas",
                "Dependencias y accountability",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-700 shadow-[0_6px_20px_rgba(15,23,42,0.03)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITY LEVELS */}
      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
        <div className="space-y-8">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              Niveles de capacidad
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Operamos en distintos niveles de Product Ownership.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {capabilityLevels.map((item) => (
              <article
                key={item.title}
                className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_12px_36px_rgba(15,23,42,0.05)]"
              >
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#d7f70e] to-transparent" />

                <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT OPERATES */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="max-w-xl">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-lime-300/80">
                Cómo opera
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Nos integramos a la operación para tomar decisiones con criterio.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-300">
                No actuamos como apoyo aislado. Intervenimos como una estructura
                de decisión que ayuda a ordenar prioridades, alinear equipos y
                sostener la ejecución.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {operatingExamples.map((item) => (
                <div
                  key={item}
                  className="rounded-[22px] border border-white/10 bg-white/5 p-5 text-sm leading-6 text-slate-200 backdrop-blur-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
        <div className="space-y-8">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              Resultados típicos
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Lo que habilita una capacidad madura de Product Ownership.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
              >
                <p className="text-sm leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODEL CONNECTION */}
      <section className="border-y border-slate-200 bg-slate-50/80">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              Relación con el modelo
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              PMaaS no sustituye el modelo. Lo sostiene en la operación.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Operamos sobre el mismo marco de claridad, priorización y
              ejecución disciplinada. La diferencia es que aquí aportamos una
              capacidad continua de Product Ownership para sostener decisiones en
              el tiempo.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
        <div className="relative overflow-hidden rounded-[34px] border border-slate-200 bg-white p-8 text-center shadow-[0_16px_44px_rgba(15,23,42,0.06)] md:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(215,247,14,0.06),transparent_40%)]" />
          <div className="relative mx-auto max-w-3xl space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Si tu organización necesita más capacidad de decisión de producto,
              conversemos.
            </h2>

            <p className="text-slate-600">
              Podemos ayudarte a definir dónde y cómo integrar PMaaS.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Conversar
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}