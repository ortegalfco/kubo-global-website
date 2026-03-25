"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export type TimelineItem = {
  id?: string;
  num?: string;
  title: string;
};

type TimelineNavProps = {
  label?: string;
  items: TimelineItem[];
  ctaHref?: string;
  ctaLabel?: string;
};

export default function TimelineNav({
  label,
  items,
  ctaHref,
  ctaLabel,
}: TimelineNavProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const [isMounted, setIsMounted] = useState(false);

  const isClickScrollingRef = useRef(false);
  const clickScrollTimeoutRef = useRef<number | null>(null);

  const mobileNavRef = useRef<HTMLDivElement | null>(null);
  const mobileItemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (isClickScrollingRef.current) return;

      const headerOffset = 150;
      let current = items[0]?.id ?? "";

      for (const item of items) {
        if (!item.id) continue;

        const el = document.getElementById(item.id);
        if (!el) continue;

        const top = el.getBoundingClientRect().top;
        if (top <= headerOffset) {
          current = item.id;
        }
      }

      if (current && current !== activeId) {
        setActiveId(current);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items, activeId]);

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;
      if (items.some((item) => item.id === hash)) {
        setActiveId(hash);
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    return () => {
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, [items]);

  useEffect(() => {
    return () => {
      if (clickScrollTimeoutRef.current) {
        window.clearTimeout(clickScrollTimeoutRef.current);
      }
    };
  }, []);

useEffect(() => {
  if (typeof window === "undefined") return;
  if (window.innerWidth >= 1024) return;
  if (!activeId) return;

  const container = mobileNavRef.current;
  const activeEl = mobileItemRefs.current[activeId];
  if (!container || !activeEl) return;

  const containerRect = container.getBoundingClientRect();
  const activeRect = activeEl.getBoundingClientRect();

  const currentScrollLeft = container.scrollLeft;
  const activeCenter =
    activeRect.left - containerRect.left + currentScrollLeft + activeRect.width / 2;

  const targetScrollLeft = activeCenter - containerRect.width / 2;

  container.scrollTo({
    left: Math.max(0, targetScrollLeft),
    behavior: "smooth",
  });
}, [activeId]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const mobile = window.innerWidth < 768;
    const headerOffset = mobile ? 156 : 132;

    const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.history.replaceState(null, "", `#${id}`);
    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    setActiveId(id);
    isClickScrollingRef.current = true;

    if (clickScrollTimeoutRef.current) {
      window.clearTimeout(clickScrollTimeoutRef.current);
    }

    scrollToSection(id);

    clickScrollTimeoutRef.current = window.setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 750);
  };

  if (!isMounted || items.length === 0) return null;

  return (
    <section className="sticky top-[calc(var(--header-h)+10px)] z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/78">
      <div className="mx-auto max-w-7xl px-4 py-3 md:px-6">
        <div className="hidden items-center justify-between gap-6 lg:flex">
          <div className="min-w-0">
            {label ? (
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-slate-500">
                {label}
              </p>
            ) : null}

            <nav className="mt-2 flex flex-wrap gap-2">
              {items.map((it) => {
                const active = activeId === it.id;

                return (
                  <a
                    key={it.id}
                    href={`#${it.id}`}
                    onClick={(e) => it.id && handleClick(e, it.id)}
                    className={[
                      "inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium transition",
                      active
                        ? "border-slate-900 bg-slate-900 text-white shadow-sm"
                        : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50",
                    ].join(" ")}
                    aria-current={active ? "true" : undefined}
                  >
                    {it.num ? (
                      <span
                        className={[
                          "inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[11px] font-semibold",
                          active
                            ? "bg-white/15 text-white"
                            : "bg-slate-100 text-slate-600",
                        ].join(" ")}
                      >
                        {it.num}
                      </span>
                    ) : null}
                    <span>{it.title}</span>
                  </a>
                );
              })}
            </nav>
          </div>

          {ctaHref && ctaLabel ? (
            <Link
              href={ctaHref}
              className="inline-flex h-10 shrink-0 items-center justify-center rounded-xl border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              {ctaLabel}
            </Link>
          ) : null}
        </div>

        <div className="lg:hidden">
          <div
            ref={mobileNavRef}
            className="overflow-x-auto scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            <nav className="flex w-max min-w-full items-center gap-2">
              {items.map((it) => {
                const active = activeId === it.id;

                return (
                  <a
                    key={it.id}
                    ref={(el) => {
                      if (it.id) mobileItemRefs.current[it.id] = el;
                    }}
                    href={`#${it.id}`}
                    onClick={(e) => it.id && handleClick(e, it.id)}
                    className={[
                      "inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition",
                      active
                        ? "border-slate-900 bg-slate-900 text-white shadow-sm"
                        : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50",
                    ].join(" ")}
                    aria-current={active ? "true" : undefined}
                  >
                    {it.num ? (
                      <span
                        className={[
                          "inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[11px] font-semibold",
                          active
                            ? "bg-white/15 text-white"
                            : "bg-slate-100 text-slate-600",
                        ].join(" ")}
                      >
                        {it.num}
                      </span>
                    ) : null}
                    <span className="whitespace-nowrap">{it.title}</span>
                  </a>
                );
              })}
            </nav>
          </div>

          {ctaHref && ctaLabel ? (
            <div className="mt-3">
              <Link
                href={ctaHref}
                className="inline-flex h-10 items-center justify-center rounded-xl border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                {ctaLabel}
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}