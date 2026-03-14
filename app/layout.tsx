import "./globals.css";
import type { Metadata } from "next";
import { Header } from "./components/Header";

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
  sameAs: [
    "https://www.linkedin.com/company/kubo-global"
  ],
  areaServed: "MX"
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Francisco Ortega",
  jobTitle: "Enterprise Search Platform",
  worksFor: {
    "@type": "Organization",
    name: "Kubo Global",
    url: baseUrl
  },
  url: baseUrl,
  sameAs: [
    "https://www.linkedin.com/in/jose-francisco-ortega-leyva"
  ],
  knowsAbout: [
    "Apache Solr",
    "Enterprise Search",
    "Search Architecture",
    "Semantic Search",
    "eCommerce Search",
    "Lucidworks Fusion"
  ]
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
    url: baseUrl
  },
  description:
    "Consultoría especializada en plataformas de búsqueda empresarial, Apache Solr, eCommerce search y arquitecturas modernas de search.",
  areaServed: {
    "@type": "Country",
    name: "Mexico"
  },
  about: [
    "Apache Solr",
    "Lucidworks",
    "Enterprise Search",
    "Semantic Search",
    "Vector Search",
    "eCommerce Search Optimization"
  ]
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

  {/* Organization */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
    }}
  />

  {/* Person */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
    }}
  />

  {/* Service */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
    }}
  />

</head>

      <body className="min-h-screen bg-white text-slate-900">
        <Header />

        <main className="w-full">{children}</main>

        <footer className="relative mt-12 bg-white">
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