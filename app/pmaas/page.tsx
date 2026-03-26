"use client";

import Link from "next/link";

const tensions = [
  "Prioridades difusas",
  "Ownership débil",
  "Decisiones tardías",
  "Ejecución sin dirección clara",
];

const interventionSteps = [
  {
    number: "01",
    title: "Entendemos el contexto",
    desc: "Leemos la iniciativa, sus fricciones, dependencias y el nivel real de claridad que existe hoy.",
  },
  {
    number: "02",
    title: "Definimos la forma de intervención",
    desc: "Aterrizamos si hace falta capacidad de Product Owner, Product Manager, Program Management o una combinación.",
  },
  {
    number: "03",
    title: "Sostenemos decisiones y ejecución",
    desc: "Nos integramos con ritmo, visibilidad y criterio para que la iniciativa avance con mayor continuidad.",
  },
];

export default function PMaaSPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950">
        <div className="relative min-h-[560px] md:min-h-[640px]">
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

          <div className="relative z-10 mx-auto flex min-h-[560px] max-w-7xl items-center px-4 pb-16 pt-[calc(var(--header-h)+28px)] md:min-h-[640px] md:px-6 md:pb-20 md:pt-[calc(var(--header-h)+34px)]">
            <div className="grid w-full gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
              <div className="max-w-3xl">
                <div className="inline-flex items-center rounded-full border border-white/15 bg-white/8 px-3 py-1 text-[11px] font-medium text-white/80 backdrop-blur md:text-xs">
                  PMaaS · Product Ownership as a Service
                </div>

                <h1 className="mt-5 max-w-[13ch] text-[38px] font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-[48px] md:text-[54px]">
                  Capacidad de producto para iniciativas que no avanzan solo con coordinación.
                </h1>

                <p className="mt-6 max-w-2xl text-[16px] leading-8 text-slate-200 md:text-[18px]">
                  Extendemos dentro del cliente una capacidad de Product Ownership para ordenar decisiones, alinear frentes y sostener la ejecución con mayor claridad.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                  >
                    Conversar
                  </Link>

                  <a
                    href="#how"
                    className="inline-flex h-11 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
                  >
                    Cómo intervenimos
                  </a>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-300/90 md:text-sm">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    Product Owner
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    Product Manager
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    Program Management
                  </span>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/6 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-md">
                  <div className="border-b border-white/10 px-6 py-5">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-lime-300/80">
                      Qué habilita PMaaS
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                      Ownership más claro para iniciativas con más complejidad.
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 gap-px bg-white/10">
                    {[
                      "Prioridades más explícitas",
                      "Mejor alineación entre negocio y ejecución",
                      "Menor dependencia de coordinación informal",
                      "Más continuidad en decisiones clave",
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

      {/* TENSION */}
      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              Cuando la iniciativa importa
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Coordinar no basta.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Muchas iniciativas no están detenidas por falta de desarrollo. Están detenidas por prioridades difusas, ownership débil y una función de producto que opera de forma reactiva.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {tensions.map((item) => (
              <div
                key={item}
                className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.05)]"
              >
                <p className="text-lg font-medium tracking-tight text-slate-900">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IT IS */}
      <section className="border-y border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                Qué es PMaaS
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                No es staff augmentation. Es capacidad de Product Ownership integrada.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">
                PMaaS es una forma de extender dentro del cliente una capacidad de producto con estructura, criterio y foco en resultado.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Nos integramos para ayudar a que una iniciativa avance con mejor definición, priorización, alineación y seguimiento, sin operar como un rol aislado ni como una capa extra de coordinación.
              </p>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_12px_36px_rgba(15,23,42,0.05)] md:p-7">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                Lo que PMaaS no busca ser
              </p>

              <div className="mt-5 space-y-3">
                {[
                  "Un perfil suelto operando tickets",
                  "Solo Scrum o gestión de backlog",
                  "Una capa adicional de coordinación sin decisión real",
                  "Outsourcing disfrazado",
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

      {/* HOW */}
      <section id="how" className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
        <div className="space-y-8">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              Cómo intervenimos
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Nos integramos donde hace falta más claridad de producto.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {interventionSteps.map((step) => (
              <article
                key={step.number}
                className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_12px_36px_rgba(15,23,42,0.05)]"
              >
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#d7f70e] to-transparent" />

                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                  {step.number}
                </div>

                <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                  {step.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
        <div className="relative overflow-hidden rounded-[34px] border border-slate-200 bg-white p-8 text-center shadow-[0_16px_44px_rgba(15,23,42,0.06)] md:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(215,247,14,0.06),transparent_40%)]" />
          <div className="relative mx-auto max-w-3xl space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              No todas las iniciativas necesitan más manos. Algunas necesitan mejor ownership.
            </h2>

            <p className="text-slate-600">
              Conversemos sobre tu iniciativa y veamos si PMaaS es la forma correcta de intervenir.
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