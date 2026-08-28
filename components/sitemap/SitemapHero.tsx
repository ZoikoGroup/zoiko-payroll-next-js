import React from "react";

export default function SitemapHero() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1180px] px-4 pt-10 sm:px-8">
        <p className="text-xs font-bold uppercase leading-5 tracking-wide text-sky-700">
          Sitemap
        </p>

        <h1 className="mt-2 text-2xl font-bold leading-9 text-sky-950 sm:text-3xl">
          Sitemap
        </h1>

        <p className="mt-5 max-w-[820px] rounded-[10px] border border-slate-200 bg-slate-100 px-5 py-4 text-sm leading-5 text-sky-950">
          <span className="font-bold">What this page is:</span> a complete,
          human-readable index of Zoiko Payroll&apos;s public pages, organized
          the same way our navigation is — so you can find any page by name,
          category or first letter without needing search. This index reflects
          our public site structure, not internal folders or admin tools.
        </p>
      </div>
    </section>
  );
}
