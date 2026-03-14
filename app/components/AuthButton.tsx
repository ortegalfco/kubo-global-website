"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

type AuthButtonProps = {
  mobile?: boolean;
  dark?: boolean;
};

export default function AuthButton({
  mobile = false,
  dark = true,
}: AuthButtonProps) {
  const { data: session, status } = useSession();

  const baseClass = mobile
    ? "inline-flex w-full items-center justify-center rounded-md px-4 py-3 text-sm font-semibold transition"
    : "inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold transition";

  if (status === "loading") {
    return (
      <span className={dark ? "text-sm text-slate-500" : "text-sm text-white/75"}>
        Cargando...
      </span>
    );
  }

  if (session?.user?.email) {
    return (
      <div className={mobile ? "flex w-full flex-col gap-2" : "flex items-center gap-2"}>
        <Link
          href="/demo"
          className={[
            baseClass,
            dark
              ? "border border-slate-300 text-slate-800 hover:bg-slate-50"
              : "border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/15",
          ].join(" ")}
        >
          Ir al demo
        </Link>

        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className={[
            baseClass,
            dark
              ? "bg-slate-900 text-white hover:ring-2 hover:ring-[rgb(215_247_14_/_0.35)]"
              : "bg-white/15 text-white border border-white/20 backdrop-blur hover:bg-white/20",
          ].join(" ")}
        >
          Cerrar sesión
        </button>
      </div>
    );
  }

  return (
    <Link
      href="/login"
      className={[
        baseClass,
        dark
          ? "bg-slate-900 text-white hover:ring-2 hover:ring-[rgb(215_247_14_/_0.35)]"
          : "bg-white/15 text-white border border-white/20 backdrop-blur hover:bg-white/20",
      ].join(" ")}
    >
      Entrar
    </Link>
  );
}