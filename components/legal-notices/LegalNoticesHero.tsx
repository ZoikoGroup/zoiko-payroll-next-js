import React from "react";

export default function LegalNoticesHero() {
  return (
    <section className="w-full border-b border-slate-200">
      <div
        className="relative w-full overflow-hidden bg-slate-900 bg-cover bg-center py-14"
        style={{ backgroundImage: "url('/images/legal-notices/legal-notices-hero.png')" }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-900/20"
        />

        <div className="relative z-10 mx-auto w-full max-w-[964px] px-4 sm:px-6">
          <p className="text-xs font-bold uppercase leading-5 tracking-wide text-sky-300">
            Legal &amp; Governance · Document 09 of 10
          </p>
          <h1 className="mt-1 text-2xl font-bold leading-8 text-white">
            Legal Notices
          </h1>
        </div>
      </div>
    </section>
  );
}
