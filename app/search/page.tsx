import Link from "next/link";
import { Section } from "../components/Section";

const capabilities = [
  {
    title: "Search architecture design",
    description:
      "Diseñamos plataformas de búsqueda modernas sobre Solr para eCommerce y ecosistemas complejos: frontend, BFF, APIs, pipelines de indexación, relevancia y operación.",
  },
  {
    title: "Solr implementation & optimization",
    description:
      "Configuramos schemas, analyzers, query parsers, facets, boosting, performance tuning y estructuras escalables para catálogos, contenido o plataformas enterprise.",
  },
  {
    title: "Relevance engineering",
    description:
      "Trabajamos relevancia como disciplina: BM25 tuning, query rewriting, sinónimos, boosting, reglas de negocio, zero results y estrategias de ranking orientadas a conversión.",
  },
  {
    title: "Semantic & hybrid search",
    description:
      "Evolucionamos la búsqueda tradicional hacia modelos modernos con embeddings, query understanding, vector search e híbridos BM25 + semantic retrieval.",
  },
  {
    title: "Search analytics & observability",
    description:
      "Medimos comportamiento real de búsqueda: top queries, no-result queries, refinamientos, engagement, performance y oportunidades de mejora continua.",
  },
  {
    title: "Business control layers",
    description:
      "Ayudamos a habilitar capacidades para negocio: curación, merchandising, reglas, priorización de resultados, navegación guiada y operación segura sin depender siempre de IT.",
  },
];

const services = [
  {
    title: "Search diagnostic",
    points: [
      "Assessment de arquitectura y relevancia",
      "Diagnóstico de performance, operación y escalabilidad",
      "Identificación de quick wins y roadmap evolutivo",
    ],
  },
  {
    title: "Solr platform implementation",
    points: [
      "Diseño de schema y estrategia de indexación",
      "Implementación de APIs y capa BFF",
      "Configuración de facets, filtros, ranking y observabilidad",
    ],
  },
  {
    title: "Search modernization",
    points: [
      "Hybrid search con BM25 + vector",
      "LLM query understanding e intent detection",
      "Arquitectura de evolución hacia semantic search",
    ],
  },
];

const useCases = [
  "eCommerce product discovery",
  "Marketplaces y catálogos complejos",
  "Búsqueda enterprise de contenido y conocimiento",
  "Supply chain search para inventarios, partes y documentación",
  "Plataformas con alta exigencia operativa y relevancia avanzada",
];

export default function SearchPage() {
  return (
    <main >
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-[#071623] text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,229,255,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(215,247,14,0.10),transparent_28%)]" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)] [background-size:42px_42px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#071623]/95 via-[#0a1b2a]/92 to-[#071623]/98" />
        </div>

<div className="relative mx-auto flex min-h-[78svh] w-full max-w-7xl items-center px-6 pb-20 pt-32 sm:px-8 lg:px-10 lg:pt-36">          <div className="grid w-full gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="max-w-3xl space-y-7">
              <div className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/8 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-cyan-200/90 backdrop-blur">
                Search & AI • Solr • Relevance Engineering
              </div>

              <div className="space-y-4">
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.02]">
                  Modern Search Platforms
                  <span className="block text-lime-300">built on Solr, relevance and AI</span>
                </h1>
                <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                  Diseñamos, implementamos y evolucionamos plataformas de búsqueda para eCommerce y
                  ecosistemas complejos. Desde arquitectura Solr y relevancia avanzada, hasta hybrid
                  search, semantic search y capas de control para negocio.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Enterprise search architecture",
                  "Solr implementation & optimization",
                  "Semantic and hybrid search",
                  "Search analytics and control",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/12 bg-white/6 px-4 py-3 text-sm text-slate-200 backdrop-blur-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-lime-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:translate-y-[-1px]"
                >
                  Request a search diagnostic
                </Link>
                <a
                  href="#capabilities"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/8"
                >
                  Explore capabilities
                </a>
              </div>
            </div>

            <div className="lg:justify-self-end">
                <div className="rounded-[22px] border border-white/10 bg-[#08131d]/90 p-5 text-sm text-slate-200">
                  <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-cyan-200/80">
                    Example architecture
                  </p>

                  <div className="space-y-3">
                    {[
                      "Web / Mobile / Commerce Channels",
                      "Search API / BFF",
                      "Query understanding layer",
                      "Solr core search + ranking",
                      "Hybrid retrieval BM25 + vectors",
                      "Analytics, merchandising and optimization",
                    ].map((step, index) => (
                      <div key={step} className="flex items-center gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-xs font-semibold text-cyan-200">
                          {index + 1}
                        </div>
                        <div className="flex-1 rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm text-slate-200">
                          {step}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <Section tone="white">
        <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
              Why search initiatives stall
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Most search platforms fail not because of technology, but because of architecture.
            </h2>
            <p className="text-base leading-7 text-slate-600">
              Muchas implementaciones se quedan en un motor de keywords con facets. El problema no es
              solo indexar y buscar, sino conectar relevancia, observabilidad, operación y evolución.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Búsqueda limitada a keyword matching sin estrategia de relevancia",
              "Pobre entendimiento del query, sin intent detection ni rewriting",
              "Falta de analítica para identificar zero results y oportunidades reales",
              "Operación dependiente de equipos técnicos para cada ajuste",
              "Arquitectura difícil de escalar o modernizar hacia modelos híbridos",
              "Desconexión entre búsqueda, negocio y conversión",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </section>
      </Section>

      {/* Capabilities */}
      <Section tone="soft">
        <section id="capabilities" className="space-y-8 scroll-mt-28">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
              What we can build with Solr
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Solr is not just a search engine. It can be the core of a modern search platform.
            </h2>
            <p className="text-base leading-7 text-slate-600">
              En Kubo Global usamos Solr como base para construir plataformas de búsqueda robustas,
              escalables y listas para evolucionar con IA, semántica y mejores controles operativos.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((item) => (
              <article
                key={item.title}
                className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 h-10 w-10 rounded-2xl bg-slate-950/5" />
                <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      </Section>

      {/* Services */}
      <Section tone="white">
        <section className="space-y-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
              Consulting services
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              From diagnostic to implementation and modernization.
            </h2>
            <p className="text-base leading-7 text-slate-600">
              Podemos entrar como consultoría estratégica, como apoyo de implementación o como
              partner técnico para evolucionar una plataforma ya existente.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-950">{service.title}</h3>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-lime-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </Section>

      {/* Operating model */}
      <Section tone="soft">
        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
              Search modernization path
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              A realistic evolution path for modern search.
            </h2>
            <p className="text-base leading-7 text-slate-600">
              No todo se tiene que construir de golpe. La evolución correcta suele comenzar con una
              base estable en Solr, después relevancia avanzada, luego observabilidad y finalmente
              capacidades semánticas e híbridas.
            </p>
          </div>

          <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="space-y-4">
              {[
                "1. Stable Solr foundation",
                "2. Relevance and ranking optimization",
                "3. Analytics and observability",
                "4. Query understanding and intent",
                "5. Hybrid retrieval and semantic layers",
                "6. Business control and continuous optimization",
              ].map((phase) => (
                <div
                  key={phase}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700"
                >
                  {phase}
                </div>
              ))}
            </div>
          </div>
        </section>
      </Section>

      {/* Use cases */}
      <Section tone="white">
        <section className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
              Where this applies
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Search is a business capability, not just an infrastructure component.
            </h2>
            <p className="text-base leading-7 text-slate-600">
              Este tipo de arquitectura aplica especialmente cuando hay catálogos complejos, alta
              operación comercial, múltiples fuentes de datos o necesidad de evolucionar hacia IA.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {useCases.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm font-medium leading-6 text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </section>
      </Section>

      {/* Lab / credibility */}
      <Section tone="dark">
        <section className="rounded-[34px] border border-white/10 bg-[#071623] p-8 text-white shadow-2xl sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-cyan-200/80">
                Search platform lab
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                We do not only advise. We build and test search platforms hands-on.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-slate-300">
                Kubo Global también trabaja sobre un laboratorio propio para validar arquitectura,
                APIs, facets, query flows y evolución hacia hybrid search. Eso nos permite hablar no
                solo desde teoría, sino desde implementación real.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-sm font-semibold text-lime-300">kubo-search-platform</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "Apache Solr",
                  "Node / Search API",
                  "Next.js frontend",
                  "Facets & filters",
                  "Relevance tuning",
                  "Hybrid search roadmap",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Section>

      {/* CTA */}
      <Section tone="white">
        <section className="rounded-[34px] border border-slate-200 bg-slate-50 p-8 sm:p-10">
          <div className="max-w-4xl space-y-5">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
              Final thought
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Building a modern search platform requires more than deploying a search engine.
            </h2>
            <p className="text-base leading-7 text-slate-600">
              Requiere arquitectura, relevancia, operación, medición y una ruta clara de evolución.
              Ahí es donde Kubo Global puede apoyar.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px]"
              >
                Talk to an expert
              </Link>
              <a
                href="mailto:contact@kubo-global.com"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white"
              >
                Contact Kubo Global
              </a>
            </div>
          </div>
        </section>
      </Section>
    </main>
  );
}
