"use client";

import { useState } from "react";
import { Section } from "../components/Section";

type SearchItem = {
  id: string;
  title: string;
  price?: number;
  image?: string;
};

export default function DemoPage() {
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<SearchItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  async function onSearch(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const query = q.trim();
    if (!query) return;

    setLoading(true);
    try {
      const res = await fetch(`http://127.0.0.1:3001/search?q=${encodeURIComponent(query)}`, {
        method: "GET",
        headers: { "Accept": "application/json" },
      });

      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg || `HTTP ${res.status}`);
      }

      const data = await res.json();
      setItems(data.items ?? []);
    } catch (err: any) {
      setError(err?.message ?? "Error al buscar");
      setItems([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <Section tone="dark" pad="lg" size="lg">
        <section className="k-surface p-12  md:p-4">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Demo de búsqueda</h2>
          <p className="text-sm text-slate-600">Escribe un término.</p>
        </div>

        <form onSubmit={onSearch} className="mt-5 flex flex-col gap-3 sm:flex-row">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Ej. jamón de pavo, llanta 205/55R16, etc."
            className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:ring-2 focus:ring-slate-900/10"
          />
          <button
            type="submit"
            disabled={loading}
            className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-60"
          >
            {loading ? "Buscando..." : "Buscar"}
          </button>
        </form>

        {error && (
          <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <div className="mt-6">
          {items.length === 0 && !loading && !error ? (
            <p className="text-sm text-slate-500">Sin resultados todavía.</p>
          ) : (
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((it) => (
                <li key={it.id} className="k-surface-inset p-4">
                  <div className="text-sm font-semibold text-slate-900">{it.title}</div>

                  {typeof it.price === "number" && (
                    <div className="mt-1 text-sm text-slate-600">
                      ${it.price.toFixed(2)}
                    </div>
                  )}

                  <div className="mt-3 text-xs text-slate-400">id: {it.id}</div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      </Section>
    </main>
  );
}
