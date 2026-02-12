import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-14">
      <section className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-5">
          <p className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
            Search & AI • eCommerce • Supply Chain
          </p>

          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Construimos experiencias de búsqueda y plataformas digitales con enfoque a negocio.
          </h1>

          <p className="text-lg text-slate-600">
            Kubo Global ayuda a equipos de retail y eCommerce a mejorar descubrimiento de productos,
            relevancia, conversión y eficiencia operativa.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
            >
              Hablemos
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center rounded-md border px-5 py-3 text-sm font-medium hover:bg-slate-50"
            >
              Ver demo (Search Lab)
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border bg-slate-50 p-6">
          <div className="grid gap-4">
            <div className="rounded-xl bg-white p-4">
              <p className="text-sm font-medium">Lo que entregamos</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>• Relevancia, boosting, sinónimos, facets, A/B testing</li>
                <li>• Arquitecturas con Solr + microservicios</li>
                <li>• Search Lab: PoCs rápidas para stakeholders</li>
              </ul>
            </div>

            <div className="rounded-xl bg-white p-4">
              <p className="text-sm font-medium">Resultados típicos</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>• ↑ conversión y CTR en resultados</li>
                <li>• ↓ “no results” y consultas fallidas</li>
                <li>• Mejor experiencia en PLP/PDP</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Search & Relevance",
            desc: "Estrategia, tuning y gobernanza de búsqueda para catálogos complejos.",
          },
          {
            title: "Plataformas eCommerce",
            desc: "Integración con capas API, microservicios y experiencias omnicanal.",
          },
          {
            title: "Supply Chain Digital",
            desc: "Soluciones de operación: WMS, talleres, inventario, visibilidad y eficiencia.",
          },
        ].map((card) => (
          <div key={card.title} className="rounded-2xl border p-6">
            <h3 className="text-base font-semibold">{card.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{card.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
