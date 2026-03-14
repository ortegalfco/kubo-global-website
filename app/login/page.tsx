"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-semibold text-slate-900">
          Acceso privado
        </h1>

        <p className="mt-3 text-sm text-slate-600">
          Inicia sesión con Google para acceder al demo privado.
        </p>

        <button
          onClick={() => signIn("google", { callbackUrl: "/demo" })}
          className="mt-6 w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:opacity-90"
        >
          Entrar con Google
        </button>
      </div>
    </main>
  );
}