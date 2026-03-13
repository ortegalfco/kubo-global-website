import React from "react";

type SectionProps = {
  children: React.ReactNode;

  /** estilo de fondo/texto */
  tone?: "white" | "soft" | "dark";

  /** clases extra sobre el <section> (fondo full-bleed) */
  className?: string;

  /** ancho del contenido dentro del section */
  size?: "xl" | "lg" | "md";

  /** si true: NO aplica container (contenido también full-width) */
  bleed?: boolean;

  /** control rápido del padding vertical */
  pad?: "none" | "sm" | "md" | "lg";
};

const toneMap: Record<NonNullable<SectionProps["tone"]>, string> = {
  white: "bg-white text-slate-900",
  soft: "bg-slate-50 text-slate-900",
  dark: "bg-slate-900 text-white",
};

const sizeMap: Record<NonNullable<SectionProps["size"]>, string> = {
  xl: "max-w-7xl",
  lg: "max-w-6xl",
  md: "max-w-5xl",
};

const padMap: Record<NonNullable<SectionProps["pad"]>, string> = {
  none: "py-0",
  sm: "py-12 md:py-12",
  md: "py-16 md:py-20",
  lg: "py-20 md:py-24",
};

const CONTAINER = "mx-auto w-full px-4 sm:px-6 lg:px-8";

export function Section({
  children,
  tone = "white",
  className = "",
  size = "lg",
  bleed = false,
  pad = "lg",
}: SectionProps) {
  return (
    <section className={`${toneMap[tone]} ${padMap[pad]} ${className}`}>
      {bleed ? (
        children
      ) : (
        <div className={`${CONTAINER} ${sizeMap[size]}`}>{children}</div>
      )}
    </section>
  );
}