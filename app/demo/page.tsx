import Link from "next/link";

export default function DemoPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Search Lab (Demo)</h1>
      <p className="text-slate-600">
        Aquí construiremos el playground: buscador + PLP + PDP conectado a un microservicio y Apache Solr.
      </p>

      <div className="rounded-2xl border bg-slate-50 p-6">
        <p className="text-sm font-medium">Próximamente</p>
        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          <li>• Buscador con resultados</li>
          <li>• Filtros / facets</li>
          <li>• Autocomplete y autocorrect</li>
          <li>• Ranking y reglas</li>
        </ul>
      </div>

      <Link
        href="/contact"
        className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
      >
        Quiero ver un demo enfocado a mi industria
      </Link>
    </div>
  );
}
