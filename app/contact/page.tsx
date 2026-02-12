export default function ContactPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold">Contacto</h1>
        <p className="mt-2 text-slate-600">
          Cuéntame qué estás buscando mejorar: búsqueda, relevancia, conversión o eficiencia operativa.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border p-6">
          <p className="text-sm font-medium">Email</p>
          <a
            className="mt-2 inline-block text-slate-900 underline underline-offset-4"
            href="mailto:contacto@kuboglobal.com?subject=Kubo%20Global%20-%20Contacto"
          >
            contacto@kuboglobal.com
          </a>

          <p className="mt-4 text-sm text-slate-600">
            Respondo normalmente el mismo día hábil.
          </p>
        </div>

        <div className="rounded-2xl border p-6">
          <p className="text-sm font-medium">Qué incluir</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>• Industria y tamaño del catálogo</li>
            <li>• Problema principal (no results, relevancia, navegación)</li>
            <li>• Objetivo (CTR, conversión, eficiencia)</li>
            <li>• Si ya usan Solr / Elastic / SaaS</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
