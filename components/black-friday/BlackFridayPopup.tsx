"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Calendar, X } from "lucide-react";
import Countdown, { CAMPAIGN_END } from "./Countdown";

const STORAGE_KEY = "zoiko-bf-2026-popup-dismissed";
const OPEN_DELAY_MS = 1200;
const CLOSE_ANIM_MS = 220;

function wasDismissed() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function rememberDismissed() {
  try {
    sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    /* storage unavailable (private mode etc.) — popup simply may reappear */
  }
}

/**
 * Site-wide Black Friday promo. Opens shortly after the first page load,
 * once per browser session, never on /black-friday itself and never after
 * the campaign has ended.
 */
export default function BlackFridayPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  // Decide whether to show (client only).
  useEffect(() => {
    if (pathname?.startsWith("/black-friday")) {
      setOpen(false); // e.g. after the CTA navigates there
      return;
    }
    if (Date.now() > CAMPAIGN_END || wasDismissed()) return;
    const id = setTimeout(() => {
      lastFocus.current = document.activeElement as HTMLElement | null;
      setOpen(true);
    }, OPEN_DELAY_MS);
    return () => clearTimeout(id);
  }, [pathname]);

  const close = useCallback(() => {
    rememberDismissed();
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
      lastFocus.current?.focus?.();
    }, CLOSE_ANIM_MS);
  }, []);

  // Escape to close, lock page scroll, focus the dialog.
  useEffect(() => {
    if (!open) return;
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* backdrop */}
      <div
        aria-hidden
        onClick={close}
        className={`absolute inset-0 bg-[#020b16]/75 backdrop-blur-sm ${closing ? "bf-fade-out" : "bf-fade-in"}`}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="bf-popup-title"
        aria-describedby="bf-popup-desc"
        className={`relative isolate w-full max-w-[760px] max-h-[calc(100vh-2rem)] overflow-y-auto overflow-x-hidden rounded-2xl border border-white/10 bg-[#071a2e] text-white shadow-[0_40px_120px_-20px_rgba(34,211,238,0.35)] ${
          closing ? "bf-pop-out" : "bf-pop-in"
        }`}
      >
        {/* cyan top edge */}
        <span aria-hidden className="absolute inset-x-0 top-0 z-20 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-600" />

        <button
          ref={closeBtn}
          type="button"
          onClick={close}
          aria-label="Close Black Friday offer"
          className="absolute right-3 top-3 z-20 rounded-full bg-white/10 p-2 text-white/80 transition hover:bg-white/20 hover:text-white focus-visible:outline-2 focus-visible:outline-cyan-400"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="grid md:grid-cols-[1fr_1.1fr]">
          {/* LEFT — the big number */}
          <div className="relative overflow-hidden bg-[radial-gradient(ellipse_at_30%_20%,rgba(37,99,235,0.55),transparent_60%),linear-gradient(150deg,#0b2a47_0%,#061626_100%)] px-7 pb-8 pt-10 md:py-12">
            {/* ribbons */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
              <div className="absolute -left-10 top-6 w-[160%] -rotate-[16deg] overflow-hidden bg-cyan-400 py-1">
                <div className="animate-marquee flex w-max whitespace-nowrap text-[11px] font-extrabold tracking-[0.2em] text-[#06223a]">
                  <span className="pr-4">BLACK FRIDAY ✦ 2026 ✦ CYBER MONDAY ✦ BLACK FRIDAY ✦ 2026 ✦ CYBER MONDAY ✦</span>
                  <span className="pr-4">BLACK FRIDAY ✦ 2026 ✦ CYBER MONDAY ✦ BLACK FRIDAY ✦ 2026 ✦ CYBER MONDAY ✦</span>
                </div>
              </div>
              <div className="absolute -left-10 bottom-10 w-[160%] -rotate-[16deg] overflow-hidden border-y border-cyan-400/40 py-1">
                <div className="animate-marquee flex w-max whitespace-nowrap text-[11px] font-extrabold tracking-[0.2em] text-cyan-300/60 [animation-direction:reverse]">
                  <span className="pr-4">MORE CONTROL ✦ PAYROLL COMPLEXITY ✦ MORE CONTROL ✦ PAYROLL COMPLEXITY ✦</span>
                  <span className="pr-4">MORE CONTROL ✦ PAYROLL COMPLEXITY ✦ MORE CONTROL ✦ PAYROLL COMPLEXITY ✦</span>
                </div>
              </div>
              <span className="bf-glow absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/25 blur-3xl" />
            </div>

            <div className="relative flex h-full flex-col justify-center pt-10 md:pt-6">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/50 bg-[#071a2e]/70 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-cyan-300 backdrop-blur">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
                Black Friday 2026
              </span>
              <p className="mt-3 flex items-start leading-none" aria-label="25% off">
                <span className="bg-gradient-to-b from-white to-cyan-200 bg-clip-text text-[104px] font-black tracking-[-0.05em] text-transparent sm:text-[128px]">
                  25
                </span>
                <span className="ml-1 mt-3 flex flex-col">
                  <span className="text-5xl font-extrabold text-cyan-400 sm:text-6xl">%</span>
                  <span className="mt-1 text-3xl font-extrabold sm:text-4xl">
                    OFF<span className="text-cyan-400">*</span>
                  </span>
                </span>
              </p>
              <p className="mt-1 text-sm leading-5 text-slate-300">
                Eligible annual platform licensing for the first 12 months.
              </p>
            </div>
          </div>

          {/* RIGHT — message, countdown, CTA */}
          <div className="flex flex-col px-7 py-8 md:py-10">
            <span className="w-fit rounded-sm bg-amber-400 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#1c1300]">
              Proposed · Pending approval
            </span>
            <h2
              id="bf-popup-title"
              className="mt-4 text-[28px] font-extrabold uppercase leading-[1.05] tracking-[-0.03em] sm:text-[32px]"
            >
              Payroll complexity.
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                More control.
              </span>
            </h2>
            <p id="bf-popup-desc" className="mt-3 text-[15px] leading-6 text-slate-300">
              Take control of complex payroll operations with a platform built for global organisations and local
              requirements.
            </p>

            <p className="mt-4 inline-flex w-fit items-center gap-2 border-l-2 border-cyan-400 bg-white/[0.05] py-2 pl-3 pr-4 text-xs text-slate-300">
              <Calendar className="h-3.5 w-3.5 text-cyan-400" />
              <strong className="font-semibold text-white">27 – 30 November 2026</strong>· Black Friday to Cyber Monday
            </p>

            <div className="mt-5">
              <Countdown />
            </div>

            <Link
              href="/black-friday"
              onClick={rememberDismissed}
              className="bf-shine relative mt-6 flex items-center justify-center gap-2 overflow-hidden rounded-md bg-cyan-400 px-6 py-4 text-base font-bold text-[#06223a] shadow-[0_8px_28px_rgba(34,211,238,0.45)] transition-colors hover:bg-cyan-300"
            >
              Claim Your Black Friday Offer <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={close}
              className="mt-3 text-center text-sm font-medium text-slate-400 underline-offset-4 transition hover:text-white hover:underline"
            >
              Maybe later
            </button>

            <p className="mt-4 text-[11px] leading-4 text-slate-500">
              *For new accounts. Excludes statutory charges, payroll processing pass-through and bureau services. Terms
              apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
