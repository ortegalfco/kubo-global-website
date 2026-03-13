import "./globals.css";
import type { Metadata } from "next";
import { Header } from "./components/Header";


const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: "Kubo Global",
  description:
    "Estrategia y tecnología para plataformas de búsqueda, eCommerce y operaciones digitales complejas.",

  openGraph: {
    title: "Kubo Global — Tecnología y Estrategia",
    description:
      "Plataformas de búsqueda, eCommerce y transformación digital con enfoque a negocio.",
    url: "https://kubo-global.com",
    siteName: "Kubo Global",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Kubo Global" }],
    locale: "es_MX",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kubo Global — Tecnología y Estrategia",
    description: "Search & AI • eCommerce • Supply Chain • Digital Solutions",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white text-slate-900">
        <Header />

        {/* full-width real */}
        <main className="w-full">{children}</main>

        {/* footer full-width + container interno */}
        <footer className="relative mt-12 bg-white">
          {/* Línea de marca sutil */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-[rgb(215_247_14_/_0.6)]" />

          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="text-sm text-slate-600">
                <div className="font-semibold text-slate-900">Kubo Global</div>

                <div className="mt-2 text-slate-500">
                  Tecnología y estrategia para operaciones complejas.
                </div>

                <div className="mt-4 text-slate-400 text-xs">
                  © {new Date().getFullYear()} Kubo Global
                </div>
              </div>

              <div className="flex flex-col gap-2 text-sm text-slate-500 md:items-end">
                <a
                  href="mailto:contacto@kubo-global.com"
                  className="transition hover:text-slate-700"
                >
                  contacto@kubo-global.com
                </a>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span>Estrategia clara.</span>
                  <span className="opacity-50">•</span>
                  <span>Tecnología con propósito.</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}