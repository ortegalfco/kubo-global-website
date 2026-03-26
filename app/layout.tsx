import "./globals.css";
import type { Metadata } from "next";
import { Header } from "./components/Header";
import AuthProvider from "./components/AuthProvider";
import { WhatsAppFloat } from "./components/WhatsAppFloat";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/* ===============================
   Structured Data (SEO JSON-LD)
================================ */

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kubo Global",
  url: baseUrl,
  logo: `${baseUrl}/og-image.png`,
  description:
    "Consultoría tecnológica especializada en Search & AI, eCommerce y plataformas digitales complejas.",
  email: "contacto@kubo-global.com",
  sameAs: ["https://www.linkedin.com/company/kubo-global"],
  areaServed: "MX",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Francisco Ortega",
  jobTitle: "Enterprise Search Platform",
  worksFor: {
    "@type": "Organization",
    name: "Kubo Global",
    url: baseUrl,
  },
  url: baseUrl,
  sameAs: ["https://www.linkedin.com/in/jose-francisco-ortega-leyva"],
  knowsAbout: [
    "Apache Solr",
    "Enterprise Search",
    "Search Architecture",
    "Semantic Search",
    "eCommerce Search",
    "Lucidworks Fusion",
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Enterprise Search Consulting",
  serviceType: "Technology Consulting",
  category: "Enterprise Search Consulting",
  provider: {
    "@type": "Organization",
    name: "Kubo Global",
    url: baseUrl,
  },
  description:
    "Consultoría especializada en plataformas de búsqueda empresarial, Apache Solr, eCommerce search y arquitecturas modernas de search.",
  areaServed: {
    "@type": "Country",
    name: "Mexico",
  },
  about: [
    "Apache Solr",
    "Lucidworks",
    "Enterprise Search",
    "Semantic Search",
    "Vector Search",
    "eCommerce Search Optimization",
  ],
};

/* ===============================
   Metadata
================================ */
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: "Kubo Global",
  description:
    "Estrategia y tecnología para plataformas de búsqueda, eCommerce y operaciones digitales complejas.",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title: "Kubo Global — Tecnología y Estrategia",
    description:
      "Plataformas de búsqueda, eCommerce y transformación digital con enfoque a negocio.",
    url: "https://kubo-global.com",
    siteName: "Kubo Global",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kubo Global",
      },
    ],
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

/* ===============================
   Layout
================================ */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
          }}
        />
      </head>

      <body className="min-h-screen bg-white text-slate-900">
        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            <Header />

            <main className="w-full flex-1">{children}</main>

            <footer className="relative mt-16 border-t border-white/10 bg-[#071019] text-slate-200">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-[rgb(215_247_14_/_0.55)]" />

              <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
                <div className="max-w-md">
                  <div className="text-base font-semibold tracking-tight text-white">
                    Kubo Global
                  </div>

                  <p className="mt-3 text-sm text-slate-400">
                    Tecnología y estrategia.
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Estrategia, ejecución y tecnología conectadas por decisiones de producto.
                  </p>
                </div>

                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Explorar
                  </div>

                  <nav className="mt-4 flex flex-col gap-3 text-sm">
                    <a href="/services" className="transition hover:text-white">Qué hacemos</a>
                    <a href="/pmaas" className="transition hover:text-white">PMaaS</a>
                    <a href="/domains" className="transition hover:text-white">Dominios</a>
                    <a href="/search-platform" className="transition hover:text-white">Search Platform</a>
                    <a href="/contact" className="transition hover:text-white">Conversar</a>
                  </nav>
                </div>

                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Cómo trabajamos
                  </div>

                  <nav className="mt-4 flex flex-col gap-3 text-sm">
                    <a href="/model" className="transition hover:text-white">Modelo</a>
                    <a href="/approach" className="transition hover:text-white">Marco de Trabajo</a>
                    <a href="/demo" className="transition hover:text-white">Search Lab</a>
                  </nav>
                </div>

                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Contacto
                  </div>

                  <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
                    <a
                      href="mailto:contacto@kubo-global.com"
                      className="transition hover:text-white"
                    >
                      contacto@kubo-global.com
                    </a>

                    <a
                      href="https://www.linkedin.com/company/kubo-global"
                      target="_blank"
                      rel="noreferrer"
                      className="transition hover:text-white"
                    >
                      LinkedIn
                    </a>

                    <div>Mexico</div>

                    <a
                      href="/contact"
                      className="inline-flex w-fit items-center rounded-md border border-white/10 bg-white/5 px-4 py-2 font-medium text-white transition hover:border-[rgb(215_247_14_/_0.35)] hover:bg-white/10"
                    >
                      Conversar
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10">
                <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
                  <div>© {new Date().getFullYear()} Kubo Global</div>
                  <div>Para iniciativas donde el criterio sí cambia el resultado.</div>
                </div>
              </div>
            </footer>
          </div>

          <WhatsAppFloat phone="526674748224" />
        </AuthProvider>
      </body>
    </html>
  );
}