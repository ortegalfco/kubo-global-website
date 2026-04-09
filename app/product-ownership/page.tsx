"use client";

import Link from "next/link";

const transformations = [
  {
    from: "Operar backlog por presión",
    to: "Decidir producto con mayor criterio",
  },
  {
    from: "Seguir ceremonias sin dirección clara",
    to: "Conectar producto con lógica de valor",
  },
  {
    from: "Trabajar de forma reactiva",
    to: "Operar con más claridad en contextos reales",
  },
];

export default function ProductOwnershipPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="relative min-h-[820px] md:min-h-[900px]">
          <div
            className="absolute inset-0 bg-[url('/kubo-badge.png')] bg-[length:78%] bg-[62%_42%] bg-no-repeat"
            aria-hidden="true"
          />

          <div
            className="absolute inset-0 hero-grid-motion opacity-[0.08]"
            aria-hidden="true"
          />

          {/* Main overlay: left protects text, center opens, right softly controls badge */}
{/* Image layer with REAL opacity + brightness control */}
<div
  className="absolute inset-0 bg-[url('/kubo-badge.png')] bg-[length:78%] bg-[62%_42%] bg-no-repeat opacity-[0.82] [filter:brightness(0.58)_saturate(0.92)_contrast(0.76)]"
  aria-hidden="true"
/>

{/* Optional subtle motion texture */}
<div
  className="absolute inset-0 hero-grid-motion opacity-[0.05]"
  aria-hidden="true"
/>

{/* Left side protection for text */}
<div
  className="absolute inset-0 bg-gradient-to-r from-[#020817]/90 via-[#020817]/50 to-transparent"
  aria-hidden="true"
/>

{/* Right side fade to soften the badge */}
<div
  className="absolute inset-0 bg-gradient-to-l from-[#020817]/58 via-transparent to-transparent"
  aria-hidden="true"
/>

{/* Very soft vertical depth */}
<div
  className="absolute inset-0 bg-gradient-to-b from-slate-950/6 via-transparent to-slate-950/14"
  aria-hidden="true"
/>

          <div className="relative mx-auto flex min-h-[820px] max-w-7xl flex-col px-4 pt-[calc(var(--header-h)+20px)] md:min-h-[900px] md:px-6 md:pt-[calc(var(--header-h)+26px)]">
            <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
              <div className="max-w-3xl">
<div className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.05] px-3 py-1 text-[11px] font-medium text-white/80 backdrop-blur md:text-xs">
  Product Ownership en la vida real
</div>

<h1 className="mt-4 max-w-[10ch] text-[48px] font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-[56px] md:text-[66px]">
  Más allá del framework.
</h1>

<div className="mt-4 max-w-2xl space-y-3">
  <p className="text-[17px] leading-8 text-white md:text-[20px] md:leading-9">
    Un programa para desarrollar{" "}
    <span className="text-lime-300"> criterio de Product Ownership</span>,{" "}
    en contextos reales.
  </p>

</div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                  >
                    Conversar
                  </Link>

                  <a
                    href="/docs/product-ownership-overview.pdf"
                    download
                    className="inline-flex h-11 items-center justify-center rounded-xl border border-white/20 bg-white/[0.05] px-5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/[0.09]"
                  >
                    Descargar Overview del Programa
                  </a>
                </div>
              </div>

              <div className="hidden lg:block" />
            </div>

            {/* Cards spacing */}
            <div className="mt-20 pb-8 md:mt-32 md:pb-10">
              <div className="grid gap-4 md:grid-cols-3 md:gap-5">
                <div className="rounded-[22px] border border-white/8 bg-slate-950/45 px-5 py-5 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.20)]">
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-lime-300/85">
                    Enfoque
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white md:text-base">
                    Desarrollar criterio para decidir producto.
                  </p>
                </div>

                <div className="rounded-[22px] border border-white/8 bg-slate-950/45 px-5 py-5 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.20)]">
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-cyan-300/85">
                    Transformación
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white md:text-base">
                    Pasar del framework a la operación real.
                  </p>
                </div>

                <div className="rounded-[22px] border border-white/8 bg-slate-950/45 px-5 py-5 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.20)]">
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-amber-300/85">
                    Detalle
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white md:text-base">
                    El overview del programa está disponible para descarga.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSFORMATION + VALIDATION */}
      <section className="bg-gradient-to-b from-[#020817] via-[#0b1220] to-white">
        <div className="h-3 bg-gradient-to-b from-transparent to-white/30 md:h-4" />

        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
          <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <div className="rounded-[30px] border border-slate-200 bg-[linear-gradient(180deg,#061120_0%,#0a1728_100%)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:p-7">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-lime-600">
                Qué transforma
              </p>

              <div className="mt-5 space-y-4">
                {transformations.map((item) => (
                  <div
                    key={item.from}
                    className="rounded-[22px] border border-white/10 bg-slate-950/45 px-5 py-5"
                  >
                    <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr] md:items-center">
                      <p className="text-sm leading-7 text-slate-300 md:text-base">
                        {item.from}
                      </p>

                      <div className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-lime-300">
                        hacia
                      </div>

                      <p className="text-sm font-medium leading-7 text-white md:text-base">
                        {item.to}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-slate-200 bg-[linear-gradient(180deg,#0b1626_0%,#0d1b2e_100%)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:p-7">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-300/80">
                Validación digital disponible
              </p>

              <div className="mt-5 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-lime-300/30 bg-lime-300/10">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-lime-300">
                    Kubo
                    <br />
                    PO
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-white">
                    Emisión verificable para participantes del programa.
                  </h2>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  "Constancia digital",
                  "ID único de emisión",
                  "Validación en línea",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[18px] border border-white/10 bg-slate-950/40 px-4 py-4 text-sm leading-6 text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-14 md:px-6 md:pb-16">
        <div className="relative overflow-hidden rounded-[34px] border border-slate-200 bg-white p-8 text-center shadow-[0_16px_44px_rgba(15,23,42,0.06)] md:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(215,247,14,0.06),transparent_40%)]" />
          <div className="relative mx-auto max-w-3xl space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Una forma de desarrollar mejor criterio de producto dentro del equipo.
            </h2>

            <p className="text-slate-600">
              Si te interesa evaluar este programa para tu organización, conversemos.
            </p>

            <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Conversar
              </Link>

              <a
                href="/docs/product-ownership-overview.pdf"
                download
                className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Descargar Overview
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}