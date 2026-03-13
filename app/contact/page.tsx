"use client";

import { useState } from "react";
import { Section } from "../components/Section";

type DomainOption =
  | "Search & AI"
  | "eCommerce"
  | "Supply Chain"
  | "Plataformas complejas"
  | "No definido";

const DOMAIN_CARDS = [
  {
    title: "Search & AI",
    description:
      "Relevancia, búsqueda semántica, LLM query understanding y evolución de plataformas de search.",
  },
  {
    title: "eCommerce",
    description:
      "Arquitectura, catálogo, navegación, conversión y experiencia digital para comercio electrónico.",
  },
  {
    title: "Supply Chain",
    description:
      "Operación digital, flotas, talleres, procesos críticos e integración de plataformas.",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    email: "",
    phone: "",
    domain: "No definido" as DomainOption,
    initiative: "",
  });

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const isValid =
    isValidEmail(form.email) && form.initiative.trim().length >= 10;

  const buildMailto = () => {
    const subject = `Kubo Global — Conversación estratégica`;

    const body = `
Kubo Global — Conversación inicial
-----------------------------------
Email: ${form.email}
Teléfono: ${form.phone || "No proporcionado"}
Dominio: ${form.domain}

Iniciativa:
${form.initiative}

Enviado desde kubo-global.com/contact
    `;

    return `mailto:contact@kubo-global.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="overflow-x-hidden">
      <Section tone="dark" pad="lg">
        <div className="space-y-14 md:space-y-16">
          {/* Header de página */}
          <div className="max-w-3xl space-y-5">
            <p className="inline-flex items-center rounded-full border border-white/12 bg-white/8 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-slate-200">
              Contacto
            </p>

            <h1 className="max-w-2xl text-3xl font-semibold leading-tight text-white md:text-5xl md:leading-[1.05]">
              Hablemos de tu iniciativa
            </h1>

            <p className="max-w-2xl text-sm leading-6 text-slate-300 md:text-base md:leading-7">
              Si estás evaluando mejorar búsqueda, eCommerce, supply chain o
              plataformas digitales complejas, podemos ayudarte a analizar la
              situación, identificar riesgos y definir el siguiente paso con más
              claridad.
            </p>
          </div>

          {/* Contenido principal */}
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Narrativa izquierda */}
            <section className="space-y-6 lg:col-span-5">
              <div className="rounded-[28px] border border-white/10 bg-white/6 p-6 shadow-[0_10px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm md:p-7">
                <div className="space-y-4">
                  <div className="inline-flex rounded-full border border-[#d7f70e]/30 bg-[#d7f70e]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#d7f70e]">
                    Estrategia primero
                  </div>

                  <h2 className="text-xl font-semibold text-white md:text-2xl">
                    Conversación inicial, sin fricción.
                  </h2>

                  <p className="text-sm leading-6 text-slate-300">
                    Cuéntanos qué está pasando hoy, qué quieres mejorar y qué
                    restricciones existen. Te respondemos con claridad sobre si
                    tiene sentido avanzar, qué se requeriría y cómo reducir
                    riesgo.
                  </p>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-sm font-semibold text-white">
                    Qué puedes incluir
                  </p>

                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                    <li>• Contexto actual y problema principal</li>
                    <li>• Objetivo, impacto esperado o métrica a mejorar</li>
                    <li>• Restricciones de tiempo, equipo o sistemas</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-400">
                <p>
                  También puedes escribir directamente a{" "}
                  <a
                    href="mailto:contact@kubo-global.com"
                    className="font-medium text-slate-200 transition hover:text-white"
                  >
                    contact@kubo-global.com
                  </a>
                </p>

                <p className="text-xs leading-5 text-slate-500">
                  Respondemos normalmente en menos de 24 horas hábiles.
                </p>
              </div>
            </section>

            {/* Formulario derecha */}
            <section className="lg:col-span-7">
              <div className="rounded-[28px] border border-white/10 bg-white/95 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur md:p-8 lg:p-10">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-slate-900">
                    Iniciar conversación
                  </p>
                  <p className="text-sm leading-6 text-slate-500">
                    Déjanos tu información y una breve descripción de la
                    iniciativa.
                  </p>
                </div>

                <div className="mt-8 space-y-5">
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
                      Email
                    </label>
                    <input
                      placeholder="tu@empresa.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-[#d7f70e] focus:ring-4 focus:ring-[#d7f70e]/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
                      Teléfono
                    </label>
                    <input
                      placeholder="Opcional"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-[#d7f70e] focus:ring-4 focus:ring-[#d7f70e]/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
                      Dominio
                    </label>
                    <select
                      value={form.domain}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          domain: e.target.value as DomainOption,
                        })
                      }
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-[#d7f70e] focus:ring-4 focus:ring-[#d7f70e]/20"
                    >
                      <option>Search & AI</option>
                      <option>eCommerce</option>
                      <option>Supply Chain</option>
                      <option>Plataformas complejas</option>
                      <option>No definido</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
                      Iniciativa
                    </label>
                    <textarea
                      placeholder="Nombre de contacto, contexto, objetivo y cualquier detalle relevante sobre tu proyecto..."
                      rows={6}
                      value={form.initiative}
                      onChange={(e) =>
                        setForm({ ...form, initiative: e.target.value })
                      }
                      className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-[#d7f70e] focus:ring-4 focus:ring-[#d7f70e]/20"
                    />
                  </div>

                  <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <a
                      href={isValid ? buildMailto() : "#"}
                      className={[
                        "inline-flex h-12 items-center justify-center rounded-2xl px-6 text-sm font-semibold transition",
                        isValid
                          ? "bg-[#d7f70e] text-slate-950 hover:bg-[#c6e90b]"
                          : "pointer-events-none bg-slate-200 text-slate-500",
                      ].join(" ")}
                    >
                      Iniciar conversación
                    </a>

                    <p className="text-xs leading-5 text-slate-500">
                      Respuesta estimada: menos de 24 horas.
                    </p>
                  </div>

                  <div className="border-t border-slate-200 pt-5">
                    <p className="text-xs leading-5 text-slate-400">
                      También puedes escribir directamente a{" "}
                      <a
                        href="mailto:contact@kubo-global.com"
                        className="font-medium text-slate-600 transition hover:text-slate-900"
                      >
                        contact@kubo-global.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Bloque inferior de dominios */}
          <section className="space-y-5">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div className="space-y-2">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
                  Podemos ayudarte en
                </p>
                <h2 className="text-xl font-semibold text-white md:text-2xl">
                  Capacidades donde solemos entrar
                </h2>
              </div>

              <p className="max-w-2xl text-sm leading-6 text-slate-400">
                Desde definición estratégica hasta arquitectura, evolución de
                plataforma y ejecución técnica.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {DOMAIN_CARDS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/6 p-6 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/[0.08]"
                >
                  <p className="text-base font-semibold text-white">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </Section>
    </main>
  );
}