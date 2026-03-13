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
                      El dominio cambia. El modelo de intervención es el mismo.
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
      <section className="grid gap-6 md:grid-cols-2">
        {[
          {
            title: "Search & AI",
            problems: [
              "Relevancia inconsistente",
              "Alta tasa de 'no results'",
              "Discovery deficiente",
              "Arquitectura de búsqueda fragmentada",
            ],
            metrics: ["CTR", "Conversión", "Revenue por búsqueda"],
          },
          {
            title: "eCommerce",
            problems: [
              "Fricción en PLP/PDP",
              "Arquitectura API desalineada",
              "Problemas de escalabilidad",
              "Gobernanza de producto débil",
            ],
            metrics: ["Conversión", "AOV", "Performance"],
          },
          {
            title: "Supply Chain",
            problems: [
              "Falta de visibilidad operativa",
              "Costos no controlados",
              "Procesos manuales críticos",
              "Riesgo en migraciones",
            ],
            metrics: ["Disponibilidad", "Costo por operación", "Tiempo de ciclo"],
          },
          {
            title: "Plataformas Complejas",
            problems: [
              "Integraciones frágiles",
              "Deuda técnica acumulada",
              "Dependencias críticas",
              "Riesgo estructural elevado",
            ],
            metrics: ["Estabilidad", "Escalabilidad", "Time-to-market"],
          },
        ].map((domain) => (
          <div key={domain.title} className="k-surface p-8 space-y-6">
            <h3 className="text-xl font-semibold">{domain.title}</h3>

            <div className="k-surface-inset p-5">
              <p className="text-sm font-semibold text-slate-900">Problemas típicos</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {domain.problems.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
            </div>

            <div className="k-surface-inset p-5">
              <p className="text-sm font-semibold text-slate-900">Métricas impactadas</p>
              <p className="mt-2 text-sm text-slate-600">{domain.metrics.join(" · ")}</p>
            </div>

            <Link
              href="/services"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Ver intervenciones aplicables
            </Link>
          </div>
        ))}
      </section>

      {/* Cierre */}
      <section className="k-surface p-8">
        <h2 className="text-2xl font-semibold tracking-tight">
          El dominio no define la intervención. La claridad estratégica sí.
        </h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Si estás evaluando una iniciativa en alguno de estos contextos, podemos ayudarte a
          estructurarla correctamente antes de ejecutarla.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Iniciar conversación
          </Link>

          <Link
            href="/model"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
          >
            Ver el modelo
          </Link>
        </div>
      </section>
    </main>
  );
}