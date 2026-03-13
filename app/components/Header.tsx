"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/model", label: "Modelo" },
  { href: "/services", label: "Qué hacemos" },
  { href: "/domains", label: "Dominios" },
  { href: "/search", label: "Search Platform" },
  { href: "/contact", label: "Conversar" },
];

const CONTAINER = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Usa logo/texto oscuro cuando hay scroll o menú mobile abierto
  const useDarkLogo = scrolled || mobileOpen;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (!headerRef.current) return;
      const h = headerRef.current.getBoundingClientRect().height;
      document.documentElement.style.setProperty("--header-h", `${Math.ceil(h)}px`);
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  useEffect(() => {
    const t = window.setTimeout(() => {
      if (!headerRef.current) return;
      const h = headerRef.current.getBoundingClientRect().height;
      document.documentElement.style.setProperty("--header-h", `${Math.ceil(h)}px`);
    }, 50);

    return () => window.clearTimeout(t);
  }, [mobileOpen, scrolled]);

  return (
    <header
      ref={headerRef}
      className={[
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        useDarkLogo
          ? "bg-white text-slate-900 shadow-sm backdrop-blur border-b border-slate-200"
          : "bg-black/5 text-white",
      ].join(" ")}
    >
      {/* Barra superior lime full-width */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] z-[60] transition-all duration-300"
        style={{
          backgroundColor: useDarkLogo
            ? "rgb(215 247 14 / 0.9)"
            : "rgb(215 247 14 / 0.55)",
        }}
      />

      {/* Row principal */}
      <div className={CONTAINER}>
        <div className="flex items-center justify-between py-7 pt-[calc(1.75rem+2px)]">
          {/* Brand */}
          <Link href="/" className="relative flex items-center gap-3 min-w-0 h-11">
            {/* Versión clara: para fondo oscuro / top del sitio */}
            <div
              className={[
                "pointer-events-none absolute inset-0 flex items-center gap-3 transition-all duration-300 ease-in-out",
                useDarkLogo ? "opacity-0 scale-[0.985]" : "opacity-100 scale-100",
              ].join(" ")}
            >
              <Image
                src="/logo.svg"
                alt="Kubo Global"
                width={38}
                height={38}
                className="h-9 w-auto"
              />

              <Image
                src="/logo-lockup-white.svg"
                alt="Kubo Global — Tecnología y estrategia"
                width={140}
                height={38}
                priority
                className="h-11 w-auto shrink-0"
              />
            </div>

            {/* Versión oscura: para header blanco / scroll / mobile open */}
            <div
              className={[
                "pointer-events-none flex items-center gap-3 transition-all duration-300 ease-in-out",
                useDarkLogo ? "opacity-100 scale-100" : "opacity-0 scale-[0.985]",
              ].join(" ")}
            >
              <Image
                src="/logo-black.svg"
                alt="Kubo Global"
                width={38}
                height={38}
                className="h-9 w-auto"
              />

              <Image
                src="/logo-lockup-black.svg"
                alt="Kubo Global — Tecnología y estrategia"
                width={140}
                height={38}
                priority
                className="h-11 w-auto shrink-0"
              />
            </div>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <nav className="flex items-center gap-1">
              {navItems
                .filter((i) => i.href !== "/contact")
                .map((item) => {
                  const active = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={[
                        "relative px-3 py-2 text-sm font-medium transition-colors duration-200",
                        "after:content-[''] after:absolute after:left-3 after:right-3 after:bottom-1 after:h-[2px]",
                        "after:origin-left after:scale-x-0 after:transition-transform after:duration-200",
                        active
                          ? "after:scale-x-100 after:bg-[rgb(215_247_14)]"
                          : useDarkLogo
                            ? "text-slate-700 hover:text-slate-900 after:bg-[rgb(215_247_14)] hover:after:scale-x-100"
                            : "text-white/90 hover:text-white after:bg-[rgb(215_247_14)] hover:after:scale-x-100",
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  );
                })}
            </nav>

            <Link
              href="/contact"
              className={[
                "inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold shadow-sm transition duration-200",
                useDarkLogo
                  ? "bg-slate-900 text-white hover:ring-2 hover:ring-[rgb(215_247_14_/_0.35)]"
                  : "bg-white/15 text-white border border-white/20 backdrop-blur hover:bg-white/20",
              ].join(" ")}
            >
              Conversar
            </Link>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/contact"
              className={[
                "inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm transition duration-200",
                useDarkLogo
                  ? "bg-slate-900 text-white"
                  : "bg-white/15 text-white border border-white/20 backdrop-blur hover:bg-white/20",
              ].join(" ")}
            >
              Conversar
            </Link>

            <button
              type="button"
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className={[
                "inline-flex items-center justify-center rounded-md p-2 transition active:scale-[0.98]",
                useDarkLogo
                  ? "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50"
                  : "border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/15",
              ].join(" ")}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className={CONTAINER + " py-3"}>
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      "rounded-md px-3 py-2 text-sm font-medium transition",
                      active
                        ? "bg-slate-900 text-white"
                        : "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}