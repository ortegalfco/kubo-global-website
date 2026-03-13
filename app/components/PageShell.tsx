type PageShellProps = {
  children: React.ReactNode;
  className?: string;

  /** ancho del contenido */
  size?: "xl" | "lg" | "md";

  /** si true: contenido full-width (sin container) */
  bleed?: boolean;

  /** padding vertical */
  pad?: "none" | "sm" | "md" | "lg";
};

const sizeMap = {
  xl: "max-w-7xl",
  lg: "max-w-6xl",
  md: "max-w-5xl",
};

const padMap = {
  none: "pt-0 pb-0",
  sm: "pt-8 pb-12",
  md: "pt-10 pb-16",
  lg: "pt-12 pb-20",
};

const CONTAINER = "mx-auto w-full px-4 sm:px-6 lg:px-8";

export function PageShell({
  children,
  className = "",
  size = "lg",
  bleed = false,
  pad = "md",
}: PageShellProps) {
  return (
    <main className={["w-full", padMap[pad], className].join(" ")}>
      {bleed ? (
        children
      ) : (
        <div className={`${CONTAINER} ${sizeMap[size]}`}>{children}</div>
      )}
    </main>
  );
}