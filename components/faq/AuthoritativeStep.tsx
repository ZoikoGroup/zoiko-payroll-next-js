"use client";

import Reveal from "../ui/Reveal";
import Eyebrow from "../payroll-guides/Eyebrow";
import Link from "next/link";

const footerLinks = [
  "Resource Center",
  "Help Center",
  "System Status",
  "Release Notes",
  "Jurisdiction Guides",
  "Global Payroll",
  "Implementation",
  "Security and Trust",
  "Reporting",
];

export default function AuthoritativeStep() {
  return (
    <section className="bg-[#0A2E4B] border-t border-slate-200 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <Eyebrow className="text-[#9FC7E3]">Need the next authoritative step?</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold font-jakarta text-white leading-9">
              Use the answer to learn. Use the source that owns<br className="hidden sm:inline" /> the decision.
            </h2>
            <p className="mt-6 max-w-[640px] mx-auto text-base font-jakarta text-[#B9CDDD] leading-6">
              Search or browse FAQ answers, then move to Product Documentation for current
              product behavior, Jurisdiction Guides for market-specific education, Help Center for
              support, System Status for service health, or Implementation when a controlled
              rollout needs deeper planning.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-gradient-to-r from-[#4FA9DE] to-[#155A8A] px-6 text-sm font-bold font-jakarta text-white shadow-[0px_1px_2px_rgba(10,46,75,0.06)] transition-all duration-200 hover:-translate-y-0.5"
            >
              Search the FAQ
            </Link>
            <Link
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-white/30 px-6 text-sm font-bold font-jakarta text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Visit Product Documentation
            </Link>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-16 border-t border-white/10 pt-8">
            <div className="flex flex-wrap items-center justify-center gap-6">
              {footerLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs font-jakarta text-[#9FC7E3] hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
