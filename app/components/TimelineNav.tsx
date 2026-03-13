"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

export type TimelineItem = {
  id: string;
  num: string;
  title: string;
  shortTitle?: string;
};

type Props = {
  label?: string;
  items: TimelineItem[];
  ctaHref?: string;
  ctaLabel?: string;
  rootMarginTopPx?: number;
};

export default function TimelineNav({
  label = "Framework",
  items,
  ctaHref,
  ctaLabel,
  rootMarginTopPx = 110,
}: Props) {
  const ids = useMemo(() => items.map((x) => x.id), [items]);
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");
  const isClickScrollingRef = useRef(false);
  const clickScrollTimeoutRef = useRef<number | null>(null);

  const setFromHash = () => {
    const hash = window.location.hash?.replace("#", "");
    if (hash && ids.includes(hash)) setActiveId(hash);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    setFromHash();
    const onHash = () => setFromHash();
    window.addEventListener("hashchange", onHash);

    return () => window.removeEventListener("hashchange", onHash);
  }, [ids]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrollingRef.current) return;

        const visible = entries
          .filter((e) => e.isIntersecting)
          .map((e) => e.target as HTMLElement);

        if (!visible.length) return;

        visible.sort(
          (a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top
        );

        const next = visible[0]?.id;
        if (next && ids.includes(next)) setActiveId(next);
      },
      {
        root: null,
        rootMargin: `-${rootMarginTopPx}px 0px -58% 0px`,
        threshold: [0.05, 0.2, 0.4, 0.6],
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ids, rootMarginTopPx]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const lastId = ids[ids.length - 1];
    if (!lastId) return;

    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const viewport = window.innerHeight;
      const full = doc.scrollHeight;

      const nearBottom = scrollTop + viewport >= full - 64;

      if (nearBottom) {
        isClickScrollingRef.current = true;
        setActiveId(lastId);

        if (clickScrollTimeoutRef.current) {
          window.clearTimeout(clickScrollTimeoutRef.current);
        }

        clickScrollTimeoutRef.current = window.setTimeout(() => {
          isClickScrollingRef.current = false;
        }, 400);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [ids]);

  useEffect(() => {
    return () => {
      if (clickScrollTimeoutRef.current) {
        window.clearTimeout(clickScrollTimeoutRef.current);
      }
    };
  }, []);

  const handleClick = (id: string) => {
    setActiveId(id);
    isClickScrollingRef.current = true;

    if (clickScrollTimeoutRef.current) {
      window.clearTimeout(clickScrollTimeoutRef.current);
    }

    clickScrollTimeoutRef.current = window.setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 700);
  };

  return (
    <div className="sticky top-[calc(var(--header-h)+10px)] z-40">
      <div className="rounded-2xl border border-slate-200/80 bg-white/92 shadow-[0_10px_24px_rgba(15,23,42,0.08)] backdrop-blur">
        <div className="px-3 py-3 md:px-4">
          <div className="flex items-center gap-4">
            <p className="hidden shrink-0 text-xs font-medium uppercase tracking-[0.16em] text-slate-500 md:block">
              {label}
            </p>

            <nav className="min-w-0 flex-1">
              {/* MOBILE */}
              <ul className="flex w-full items-center gap-2 overflow-x-auto pb-1 md:hidden [-webkit-overflow-scrolling:touch]">
                {items.map((it) => {
                  const isActive = it.id === activeId;
                  const chipLabel = it.shortTitle ?? it.title;

                  return (
                    <li key={it.id} className="shrink-0">
                      <a
                        href={`#${it.id}`}
                        onClick={() => handleClick(it.id)}
                        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition ${
                          isActive
                            ? "border-slate-900 bg-slate-900 text-white"
                            : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <span className="text-xs font-semibold">{it.num}</span>
                        <span className="whitespace-nowrap">{chipLabel}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* DESKTOP */}
              <ol className="hidden items-center justify-between gap-3 md:flex">
                {items.map((it, idx) => {
                  const isActive = it.id === activeId;
                  const isLast = idx === items.length - 1;
                  const itemLabel = it.shortTitle ?? it.title;

                  return (
                    <li key={it.id} className="flex-1">
                      <div className="flex items-center">
                        <a
                          href={`#${it.id}`}
                          onClick={() => handleClick(it.id)}
                          className="group inline-flex items-center gap-3"
                        >
                          <span
                            className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition ${
                              isActive
                                ? "bg-slate-900 text-white"
                                : "border border-slate-200 bg-white text-slate-900 group-hover:bg-slate-50"
                            }`}
                          >
                            {it.num}
                          </span>

                          <span
                            className={`whitespace-nowrap text-sm font-semibold transition ${
                              isActive ? "text-slate-900" : "text-slate-700"
                            }`}
                          >
                            {itemLabel}
                          </span>
                        </a>

                        {!isLast && <div className="mx-3 h-px flex-1 bg-slate-200" />}
                      </div>
                    </li>
                  );
                })}
              </ol>
            </nav>

            {ctaHref && ctaLabel ? (
              <Link
                href={ctaHref}
                className="hidden shrink-0 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800 md:inline-flex"
              >
                {ctaLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}