"use client";

import { signIn } from "next-auth/react";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

type AuthModalProps = {
  open: boolean;
  onClose: () => void;
};

function GoogleIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      <path fill="#4285F4" d="M21.805 10.023H12.24v3.955h5.518c-.238 1.273-.955 2.351-2.03 3.073v2.55h3.285c1.923-1.771 3.032-4.381 3.032-7.49 0-.695-.062-1.365-.24-2.088Z" />
      <path fill="#34A853" d="M12.24 22c2.73 0 5.02-.895 6.693-2.425l-3.285-2.55c-.91.61-2.074.973-3.408.973-2.62 0-4.84-1.77-5.635-4.148H3.218v2.63A10.1 10.1 0 0 0 12.24 22Z" />
      <path fill="#FBBC05" d="M6.605 13.85A6.05 6.05 0 0 1 6.29 12c0-.643.11-1.268.315-1.85V7.52H3.218A10.1 10.1 0 0 0 2.16 12c0 1.618.388 3.15 1.058 4.48l3.387-2.63Z" />
      <path fill="#EA4335" d="M12.24 6.002c1.485 0 2.818.51 3.865 1.51l2.9-2.9C17.255 2.98 14.965 2 12.24 2 8.29 2 4.88 4.268 3.218 7.52l3.387 2.63c.795-2.382 3.015-4.148 5.635-4.148Z" />
    </svg>
  );
}

export default function AuthModal({ open, onClose }: AuthModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
      window.removeEventListener("keydown", handleEsc);
    };
  }, [open, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 z-[9999]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="auth-modal-title"
        >
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-[3px]"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="flex min-h-screen items-center justify-center p-6 sm:p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.985, y: 6 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-md rounded-2xl border border-slate-200 bg-white shadow-2xl"
            >
              <div className="flex items-start justify-between border-b border-slate-200 px-6 py-5">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
                    Private access
                  </p>
                  <h2
                    id="auth-modal-title"
                    className="mt-1 text-2xl font-semibold tracking-tight text-slate-900"
                  >
                    Sign in
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Cerrar"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-5 px-6 py-6">
                <p className="text-sm leading-6 text-slate-600">
                  Continue with Google to access private demos and restricted Kubo experiences.
                </p>

                <button
                  type="button"
                  onClick={() => signIn("google", { callbackUrl: "/demo" })}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                >
                  <GoogleIcon />
                  Continue with Google
                </button>

                <p className="text-xs text-slate-400">
                  Authorized accounts only.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}