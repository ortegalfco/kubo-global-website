"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import AuthButton from "./AuthButton";

const navItems = [
  { href: "/services", label: "Qué hacemos" },
  { href: "/pmaas", label: "PMaaS" },
  { href: "/domains", label: "Dominios" },
  { href: "/search", label: "Search Platform" },
  { href: "/contact", label: "Conversar" },
];

const CONTAINER = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileHidden, setMobileHidden] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const lastScrollYRef = useRef(0);

  const useDarkLogo = scrolled || mobileOpen;

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const isMobile = window.innerWidth < 768;

      setScrolled(currentY > 10);

      if (!isMobile) {
        setMobileHidden(false);
        lastScrollYRef.current = currentY;
        return;
      }

      if (mobileOpen) {
        setMobileHidden(false);
        lastScrollYRef.current = currentY;
        return;
      }

      const delta = currentY - lastScrollYRef.current;
      const hideThreshold = 10;
      const showThreshold = 4;

      if (currentY <= 16) {
        setMobileHidden(false);
      } else if (delta > hideThreshold) {
        setMobileHidden(true);
      } else if (delta < -showThreshold) {
        setMobileHidden(false);
      }

      lastScrollYRef.current = currentY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setMobileHidden(false);
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
  }, [mobileOpen, scrolled, mobileHidden]);

  const handleBrandClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    setMobileOpen(false);
    setMobileHidden(false);

    if (pathname === "/") {
      window.history.replaceState(null, "", "/");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    router.push("/");

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 60);
  };

  return (
    <header
      ref={headerRef}
      className={[
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        mobileHidden ? "-translate-y-full md:translate-y-0" : "translate-y-0",
        useDarkLogo
          ? "bg-white text-slate-900 shadow-sm backdrop-blur border-b border-slate-200"
          : "bg-black/5 text-white",
      ].join(" ")}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[2px] z-[60] transition-all duration-300"
        style={{
          backgroundColor: useDarkLogo
            ? "rgb(215 247 14 / 0.9)"
            : "rgb(215 247 14 / 0.55)",
        }}
      />

      <div className={CONTAINER}>
        <div
          className={[
            "flex items-center justify-between transition-all duration-300",
            scrolled
              ? "py-4 pt-[calc(1rem+2px)]"
              : "py-7 pt-[calc(1.75rem+2px)]",
          ].join(" ")}
        >
          <Link
            href="/"
            onClick={handleBrandClick}
            aria-label="Ir al inicio"
            className="relative flex items-center gap-3 min-w-0"
          >
            {/* Versión clara */}
            <div
              className={[
                "pointer-events-none absolute inset-0 flex items-center gap-3 transition-all duration-300 ease-in-out",
                useDarkLogo ? "opacity-0 scale-[0.985]" : "opacity-100 scale-100",
              ].join(" ")}
            >
              <Image
                src="/logo.svg"
                alt="Kubo Global"
                width={36}
                height={36}
                className={[
                  "w-auto transition-all duration-300",
                  scrolled ? "h-8 md:h-8" : "h-9 md:h-9",
                ].join(" ")}
              />

              <Image
                src="/logo-lockup-white.svg"
                alt="Kubo Global — Tecnología y estrategia"
                width={130}
                height={34}
                priority
                className={[
                  "w-auto shrink-0 transition-all duration-300",
                  scrolled ? "h-9 md:h-9" : "h-10 md:h-11",
                ].join(" ")}
              />
            </div>

            {/* Versión oscura */}
            <div
              className={[
                "pointer-events-none flex items-center gap-3 transition-all duration-300 ease-in-out",
                useDarkLogo ? "opacity-100 scale-100" : "opacity-0 scale-[0.985]",
              ].join(" ")}
            >
              <Image
                src="/logo-black.svg"
                alt="Kubo Global"
                width={36}
                height={36}
                className={[
                  "w-auto transition-all duration-300",
                  scrolled ? "h-8 md:h-8" : "h-9 md:h-9",
                ].join(" ")}
              />

              <Image
                src="/logo-lockup-black.svg"
                alt="Kubo Global — Tecnología y estrategia"
                width={130}
                height={34}
                priority
                className={[
                  "w-auto shrink-0 transition-all duration-300",
                  scrolled ? "h-9 md:h-9" : "h-10 md:h-11",
                ].join(" ")}
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

            <AuthButton dark={useDarkLogo} />

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
              onClick={() => {
                setMobileOpen((v) => !v);
                setMobileHidden(false);
              }}
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

            <div className="mt-3 border-t border-slate-200 pt-3">
              <AuthButton mobile dark />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}