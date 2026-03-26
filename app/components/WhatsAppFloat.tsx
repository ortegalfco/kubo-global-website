"use client";

import { usePathname } from "next/navigation";

type WhatsAppFloatProps = {
  phone?: string;
};

export function WhatsAppFloat({
  phone = "526674748224",
}: WhatsAppFloatProps) {
  const pathname = usePathname();

  // Oculta el botón en la página de contacto
  if (pathname === "/contact") return null;

  const getMessageByPath = (path: string) => {
    if (path.startsWith("/search")) {
      return "Hola, me interesa conocer más sobre las capacidades de Search & AI de Kubo Global.";
    }

    if (path.startsWith("/services")) {
      return "Hola, me gustaría conversar sobre servicios de consultoría y ejecución con Kubo Global.";
    }

    if (path.startsWith("/approach")) {
      return "Hola, me interesa entender mejor el approach de trabajo de Kubo Global.";
    }
        if (path.startsWith("/pmaas")) {
      return "Hola, quiero conocer más sobre los PMaasS  de Kubo Global.";
    }

    if (path.startsWith("/domains")) {
      return "Hola, quiero conocer más sobre los dominios y capacidades de Kubo Global.";
    }

    if (path.startsWith("/model")) {
      return "Hola, me interesa conocer más sobre el modelo de intervención de Kubo Global.";
    }

    return "Hola, me interesa conocer más sobre las capacidades de Kubo Global.";
  };

  const message = getMessageByPath(pathname);
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="
        fixed bottom-5 right-2 z-[70]
        inline-flex h-13 w-13 items-center justify-center
        rounded-full shadow-lg
        transition-transform duration-200
        hover:scale-105 active:scale-95
        md:bottom-6 md:right-6
      "
    >
      <span className="sr-only">Contactar por WhatsApp</span>

      <div
        className="
          flex h-full w-full items-center justify-center
          rounded-full bg-[#25D366]
          ring-1 ring-black/10
          shadow-[0_10px_30px_rgba(0,0,0,0.22)]
        "
      >
        <svg
          viewBox="0 0 32 32"
          className="h-7 w-7 md:h-8 md:w-8"
          aria-hidden="true"
          fill="currentColor"
        >
          <path
            className="fill-white"
            d="M19.11 17.24c-.29-.15-1.69-.83-1.95-.92-.26-.1-.45-.15-.64.15-.19.29-.74.92-.91 1.11-.17.2-.34.22-.63.08-.29-.15-1.23-.45-2.34-1.43-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.49.1-.2.05-.37-.02-.51-.08-.15-.64-1.55-.88-2.13-.23-.55-.47-.48-.64-.49h-.55c-.2 0-.51.08-.77.37-.26.29-1 1-.99 2.43 0 1.43 1.03 2.81 1.18 3 .15.2 2.03 3.11 5.02 4.23.71.31 1.27.49 1.7.62.71.23 1.35.2 1.86.12.57-.09 1.69-.69 1.93-1.36.24-.66.24-1.23.17-1.36-.07-.12-.26-.2-.55-.34Z"
          />
          <path
            className="fill-white"
            d="M16.02 3.2c-7.07 0-12.8 5.72-12.8 12.78 0 2.26.59 4.46 1.72 6.39L3.1 28.8l6.59-1.72a12.8 12.8 0 0 0 6.33 1.61h.01c7.06 0 12.79-5.73 12.79-12.79 0-3.42-1.33-6.63-3.75-9.04A12.7 12.7 0 0 0 16.02 3.2Zm0 23.33h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.91 1.02 1.04-3.81-.25-.39a10.55 10.55 0 0 1-1.63-5.64c0-5.83 4.74-10.58 10.57-10.58 2.82 0 5.48 1.1 7.47 3.1a10.5 10.5 0 0 1 3.09 7.47c0 5.83-4.74 10.57-10.57 10.57Z"
          />
        </svg>
      </div>
    </a>
  );
}