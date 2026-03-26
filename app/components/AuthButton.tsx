"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { LogIn, LogOut, Shield, LayoutDashboard } from "lucide-react";
import { useState } from "react";
import AuthModal from "./AuthModal";

type AuthButtonProps = {
  mobile?: boolean;
  dark?: boolean;
};

export default function AuthButton({
  mobile = false,
  dark = true,
}: AuthButtonProps) {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);

  const baseClass = mobile
    ? "inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-semibold transition"
    : "inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition";
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
          <LayoutDashboard size={16} />
          Ir al demo
        </Link>

        <button
          type="button"
          onClick={() => signOut({ callbackUrl: "/" })}
          className={[
            baseClass,
            dark
              ? "bg-slate-900 text-white hover:ring-2 hover:ring-[rgb(215_247_14_/_0.35)]"
              : "border border-white/20 bg-white/15 text-white backdrop-blur hover:bg-white/20",
          ].join(" ")}
        >
          <LogOut size={16} />
          Cerrar sesión
        </button>
      </div>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={[
          baseClass,
          dark
            ? "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50"
            : "border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/20",
        ].join(" ")}
      >
        {dark ? <Shield size={16} className="opacity-80" /> : <LogIn size={16} className="opacity-80" />}
        Acceso
      </button>

      <AuthModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}