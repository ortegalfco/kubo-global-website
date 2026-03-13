"use client";

const modelCards = [
  {
    label: "Run",
    title: "Continuidad operativa y resiliencia",
    desc: "Aseguramos estabilidad, control operativo y capacidad de respuesta en plataformas críticas.",
  },
  {
    label: "Grow",
    title: "Optimización de plataformas digitales",
    desc: "Mejoramos relevancia, operación y experiencia para generar impacto medible en negocio.",
  },
  {
    label: "Transform",
    title: "Nuevos modelos tecnológicos",
    desc: "Diseñamos evolución estructural, capacidades nuevas y arquitectura para crecimiento sostenible.",
  },
];

export function VerticalModelCarousel() {
  const cards = [...modelCards, ...modelCards];

  return (
    <div className="relative h-[560px] overflow-hidden group">
      <div className="pointer-events-none absolute top-0 left-0 right-0 z-10 h-20 bg-gradient-to-b from-[#020817] to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-20 bg-gradient-to-t from-[#020817] to-transparent" />

      <div className="animate-carousel flex flex-col gap-6 group-hover:[animation-play-state:paused]">
        {cards.map((item, i) => (
          <article
            key={i}
            className="rounded-2xl border border-white/10 bg-slate-950/60 p-8 backdrop-blur-md shadow-[0_18px_60px_rgba(0,0,0,0.28)]"
          >
            <div className="min-h-[190px]">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-lime-300/85">
                {item.label}
              </p>

              <h3 className="mt-4 text-[2rem] font-semibold leading-tight text-white">
                {item.title}
              </h3>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                {item.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}