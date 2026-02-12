const services = [
  {
    title: "Search & AI (Solr / Relevancia)",
    bullets: [
      "Diseño de estrategia y arquitectura de búsqueda",
      "Relevancia: boosting, reglas, sinónimos, facets",
      "Observabilidad: métricas, no-results, query insights",
      "PoC / Search Lab para validación rápida con negocio",
    ],
  },
  {
    title: "eCommerce & Product Discovery",
    bullets: [
      "PLP/PDP, navegación por categorías y filtros",
      "Typeahead, sugerencias, autocorrect",
      "Integración con APIs, gateways y microservicios",
      "Mejora de conversión mediante experimentación",
    ],
  },
  {
    title: "Supply Chain Digital Solutions",
    bullets: [
      "WMS / inventario por ubicación",
      "Talleres y mantenimiento de flota (preventivo/correctivo)",
      "Visibilidad y eficiencia operativa",
      "Roadmaps Run–Grow–Transform",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-semibold">Servicios</h1>
        <p className="mt-2 text-slate-600">
          Un catálogo de servicios orientado a valor: resultados medibles y entrega incremental.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl border p-6">
            <h2 className="text-base font-semibold">{s.title}</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {s.bullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
