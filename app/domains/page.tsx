"use client";

import { useState } from "react";
import Link from "next/link";
 
export default function DomainsPage() {
  return (
    <main>
      {/* Hero Banner principal */}
      <section className="relative overflow-hidden">
        <div className="relative min-h-[720px] md:h-[680px] lg:h-[760px]">
          {/* Background */}
          <img
            src="/herobanner02-home.png"
            alt="Kubo Global"
            className="
        absolute inset-0
        h-full w-full
        object-cover
        object-[76%_center]
        md:object-[64%_center]
        lg:object-center
      "
          />

          {/* Motion layers */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 hero-grid-motion opacity-20 md:opacity-25" />
            <div className="absolute inset-0">
              <div className="hero-scan-line absolute left-0 right-0 h-[160px] opacity-35" />
            </div>
          </div>

          {/* Overlay */}
          <div
            className="
        absolute inset-0
        bg-[linear-gradient(180deg,rgba(5,12,20,0.55)_0%,rgba(5,12,20,0.72)_18%,rgba(5,12,20,0.82)_100%)]
        md:bg-[linear-gradient(90deg,rgba(3,10,18,0.82)_0%,rgba(5,14,24,0.64)_34%,rgba(7,22,35,0.28)_62%,rgba(7,22,35,0.08)_100%)]
      "
          />

          {/* Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(2,6,12,0.24)_100%)]" />

          {/* Línea superior */}
          <div className="absolute inset-x-0 top-0 z-20 h-[2px] bg-gradient-to-r from-transparent via-[#d7f70e]/70 to-transparent" />

          {/* Contenido */}
          <div
            className="
          relative z-10 h-full
          px-4 pt-[calc(var(--header-h)+18px)] pb-8
          md:px-6 md:pt-28 md:pb-0
          lg:pt-1
          "
          >
            <div
              className="
          mx-auto flex h-full w-full
          items-start justify-center
          md:max-w-7xl md:items-center md:justify-center
        "
            >
              {/* ancho distinto por breakpoint */}
              <div className="w-full max-w-none md:max-w-[760px] xl:max-w-[860px]">
                <div
                  className="
              rounded-[22px] border border-white/10
              bg-[rgba(16,27,42,0.56)]
              px-5 py-5
              shadow-[0_10px_45px_rgba(0,0,0,0.34)]
              backdrop-blur-lg

              md:rounded-[28px]
              md:bg-[rgba(16,27,42,0.48)]
              md:px-8 md:py-8

              lg:px-10 lg:py-10
            "
                >
                  <p className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur-sm md:text-xs">
                    Dominios
                  </p>


                  <p
                    className="
                mt-4 max-w-[22ch]
                text-[17px] leading-8 text-slate-200

                md:mt-5 md:max-w-2xl md:text-[24px] md:leading-8
                lg:text-[28px] lg:leading-9
              "
                  >
                    Operamos donde la complejidad exige criterio.
                  </p>

                  <div className="mt-5 h-px w-20 bg-gradient-to-r from-[#d7f70e] to-transparent md:mt-6 md:w-24" />

                  <div
                    className="
                mt-5 space-y-4
                text-[15px] leading-8 text-slate-300

                md:mt-6 md:max-w-3xl md:text-base md:leading-8
                lg:text-lg
              "
                  >
                    <p>
                      El dominio cambia. La forma de intervenir también.
                    </p>

                  </div>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row md:mt-8">
                    <Link
                      href="/contact"
                      className="inline-flex h-12 items-center justify-center rounded-2xl bg-[#d7f70e] px-6 text-base font-semibold text-slate-950 transition hover:brightness-95"
                    >
                      Conversar
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dominios */}
      <section className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-b from-white to-slate-50/80 p-6 md:p-8 lg:p-10">
        {/* fondo sutil */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(215,247,14,0.07),transparent_42%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.035),transparent_28%)]" />
        </div>

        {(() => {
          const domains = [
            {
              id: "search",
              title: "Search & AI",
              intro:
                "Intervenimos donde la búsqueda, la relevancia y el discovery afectan conversión, experiencia y eficiencia comercial.",
              problems: [
                "Relevancia inconsistente",
                "Alta tasa de 'no results'",
                "Discovery deficiente",
                "Arquitectura de búsqueda fragmentada",
              ],
              metrics: ["CTR", "Conversión", "Revenue por búsqueda"],
              focus: "Run / Grow",
            },
            {
              id: "commerce",
              title: "eCommerce",
              intro:
                "Aplicamos el modelo cuando la experiencia digital, la arquitectura y la operación comercial pierden consistencia o capacidad de evolución.",
              problems: [
                "Fricción en PLP/PDP",
                "Arquitectura API desalineada",
                "Problemas de escalabilidad",
                "Gobernanza de producto débil",
              ],
              metrics: ["Conversión", "AOV", "Performance"],
              focus: "Grow / Transform",
            },
            {
              id: "supply",
              title: "Supply Chain",
              intro:
                "Intervenimos donde la operación requiere más visibilidad, control y capacidad de respuesta sin aumentar complejidad innecesaria.",
              problems: [
                "Falta de visibilidad operativa",
                "Costos no controlados",
                "Procesos manuales críticos",
                "Riesgo en migraciones",
              ],
              metrics: ["Disponibilidad", "Costo por operación", "Tiempo de ciclo"],
              focus: "Run / Transform",
            },
            {
              id: "platforms",
              title: "Plataformas Complejas",
              intro:
                "Aplicamos el mismo criterio cuando múltiples sistemas, dependencias y decisiones tecnológicas elevan el riesgo estructural.",
              problems: [
                "Integraciones frágiles",
                "Deuda técnica acumulada",
                "Dependencias críticas",
                "Riesgo estructural elevado",
              ],
              metrics: ["Estabilidad", "Escalabilidad", "Time-to-market"],
              focus: "Transversal",
            },
          ] as const;

          const [activeId, setActiveId] =
            useState<(typeof domains)[number]["id"]>("search");
          const active = domains.find((d) => d.id === activeId) ?? domains[0];

          return (
            <div className="relative space-y-8">
              <div className="max-w-3xl">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                  Dominios de aplicación
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                  Operamos en distintos dominios.
                </h2>
              </div>

              {/* capa transversal */}
              <div className="rounded-2xl border border-slate-200 bg-white/80 px-5 py-4 shadow-[0_8px_24px_rgba(15,23,42,0.035)] backdrop-blur-sm">
                <p className="text-sm leading-6 text-slate-600">
                  En todos los dominios operamos a través de{" "}
                  <span className="font-semibold text-slate-900">
                    Product Ownership
                  </span>{" "}
                  como capacidad transversal para estructurar decisiones,
                  priorizar correctamente y ejecutar con control.
                </p>
              </div>
<p className="text-xs text-slate-500">
  Selecciona un dominio
</p>
               {/* tabs */}
              <div className="-mx-1 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex w-max min-w-full gap-2 px-1">
                  {domains.map((domain) => {
                    const isActive = active.id === domain.id;

                    return (
                      <button
                        key={domain.id}
                        type="button"
                        onClick={() => setActiveId(domain.id)}
                        aria-pressed={isActive}
                        className={`inline-flex shrink-0 items-center rounded-full border px-4 py-2.5 text-sm font-medium transition ${
                          isActive
                            ? "border-slate-900 bg-slate-900 text-white shadow-[0_6px_20px_rgba(15,23,42,0.15)]"
                            : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        {domain.title}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* panel activo */}
              {/* panel activo */}
              <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
                {/* Main panel */}
                <div className="relative overflow-hidden rounded-[22px] border border-slate-200 bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.05)] md:rounded-[28px] md:p-8">
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#d7f70e] to-transparent" />

                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                      {active.title}
                    </p>

                    <span className="inline-flex items-center rounded-full border border-[#d7f70e]/30 bg-[#d7f70e]/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-700">
                      {active.focus}
                    </span>
                  </div>

                  <h3 className="mt-3 text-[24px] font-semibold leading-tight tracking-tight text-slate-950 md:text-3xl">
                    {active.title}
                  </h3>

                  <p className="mt-3 text-[13px] leading-6 text-slate-600 md:text-base md:leading-7">
                    {active.intro}
                  </p>

                  {/* Mobile quick facts */}
                  <div className="mt-4 grid gap-3 lg:hidden">
                    <div className="rounded-[18px] border border-slate-200 bg-slate-50/70 p-3 shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
                      <p className="text-sm font-semibold text-slate-900">
                        Problemas típicos
                      </p>

                      <ul className="mt-2 space-y-1.5 text-[13px] leading-6 text-slate-600">
                        {active.problems.map((problem) => (
                          <li key={problem} className="flex gap-2">
                            <span className="mt-[7px] h-1 w-1 rounded-full bg-slate-400" />
                            <span>{problem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-[18px] border border-slate-200 bg-slate-50/70 p-3 shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
                      <p className="text-sm font-semibold text-slate-900">
                        Métricas impactadas
                      </p>

                      <p className="mt-2 text-[13px] leading-6 text-slate-600">
                        {active.metrics.join(" · ")}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/services"
                      className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                      Ver intervenciones aplicables
                    </Link>

                    <Link
                      href="/contact"
                      className="hidden h-11 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 sm:inline-flex"
                    >
                      Conversar
                    </Link>
                  </div>
                </div>

                {/* Desktop side panels */}
                <div className="hidden space-y-6 lg:block">
                  <div className="rounded-[24px] border border-slate-200 bg-slate-50/70 p-5 shadow-[0_6px_20px_rgba(15,23,42,0.04)]">
                    <p className="text-sm font-semibold text-slate-900">
                      Problemas típicos
                    </p>

                    <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                      {active.problems.map((problem) => (
                        <li key={problem} className="flex gap-3">
                          <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-slate-400" />
                          <span>{problem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[24px] border border-slate-200 bg-slate-50/70 p-5 shadow-[0_6px_20px_rgba(15,23,42,0.04)]">
                    <p className="text-sm font-semibold text-slate-900">
                      Métricas impactadas
                    </p>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {active.metrics.join(" · ")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </section>

      {/* Cierre */}
      <section className="k-surface p-8 text-center">
        <div className="mx-auto max-w-3xl space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
El dominio importa. Cómo se decide dentro de él, más.          </h2>

          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Conversar
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}