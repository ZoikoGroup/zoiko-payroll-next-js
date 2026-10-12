"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import {
  azIndex,
  azLetters,
  sitemapCategories,
  totalPageCount,
  type SitemapLink,
} from "./sitemapData";

/**
 * A card entry: a real link where the page is published, muted text where it
 * is still planned, so the index never sends anyone to a 404.
 */
function CardEntry({ link }: { link: SitemapLink }) {
  const className = link.featured
    ? "text-xs font-bold leading-5 text-sky-700 hover:text-sky-900"
    : "text-xs leading-5 text-gray-600 hover:text-sky-700";

  if (!link.href) {
    return (
      <span
        title="Page not yet published"
        className={`text-xs leading-5 text-slate-400 ${link.featured ? "font-bold" : ""}`}
      >
        {link.label}
      </span>
    );
  }

  return (
    <Link
      href={link.href}
      className={`${className} rounded-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700`}
    >
      {link.label}
    </Link>
  );
}

export default function SitemapExplorer() {
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();

  const filteredCategories = useMemo(() => {
    if (!normalizedQuery) return sitemapCategories;

    return sitemapCategories
      .map((category) => ({
        ...category,
        links: category.links.filter((link) =>
          link.label.toLowerCase().includes(normalizedQuery),
        ),
      }))
      .filter((category) => category.links.length > 0);
  }, [normalizedQuery]);

  const filteredAZ = useMemo(() => {
    if (!normalizedQuery) return azIndex;
    return azIndex.filter((entry) =>
      entry.name.toLowerCase().includes(normalizedQuery),
    );
  }, [normalizedQuery]);

  const activeLetters = useMemo(
    () => new Set(filteredAZ.map((entry) => entry.letter)),
    [filteredAZ],
  );

  // The first entry under each letter carries that letter's anchor and marker.
  const letterAnchors = useMemo(() => {
    const seen = new Set<string>();
    const anchors = new Set<number>();

    filteredAZ.forEach((entry, index) => {
      if (!seen.has(entry.letter)) {
        seen.add(entry.letter);
        anchors.add(index);
      }
    });

    return anchors;
  }, [filteredAZ]);

  return (
    <div className="mx-auto w-full max-w-[1180px] px-4 pb-16 sm:px-8">
      {/* Search */}
      <form
        role="search"
        onSubmit={(event) => event.preventDefault()}
        className="mt-8 flex max-w-[520px] items-center gap-2 rounded-[10px] border border-slate-200 bg-white p-1.5"
      >
        <label htmlFor="sitemap-search" className="sr-only">
          Find a page
        </label>
        <input
          id="sitemap-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Find a page — e.g. pricing, glossary, security"
          className="min-w-0 flex-1 rounded-lg px-3 py-2 text-sm text-sky-950 placeholder:text-neutral-500 focus:outline-none"
        />
        <button
          type="submit"
          className="shrink-0 rounded-lg bg-gradient-to-r from-[#2C8FD1] to-[#0B4C78] px-7 py-2.5 text-sm font-bold text-white transition-all hover:from-[#2680bd] hover:to-[#093d61] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
        >
          Find
        </button>
      </form>

      <p aria-live="polite" className="mt-3 text-xs leading-5 text-slate-500">
        {normalizedQuery
          ? `${filteredAZ.length} of ${totalPageCount} pages match “${query.trim()}”`
          : `${totalPageCount} public pages indexed · grouped the same way the site navigation is`}
      </p>

      {/* Category jump chips */}
      <nav aria-label="Sitemap categories" className="mt-6">
        <ul className="flex flex-wrap gap-2">
          {sitemapCategories.map((category) => (
            <li key={category.id}>
              <Link
                href={`#${category.id}`}
                className="inline-flex h-8 items-center rounded-full border border-slate-200 bg-slate-100 px-3.5 text-xs font-bold leading-5 text-sky-950 transition-colors hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
              >
                {category.title}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#a-z-index"
              className="inline-flex h-8 items-center rounded-full border border-slate-200 bg-slate-100 px-3.5 text-xs font-bold leading-5 text-sky-950 transition-colors hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
            >
              A–Z index
            </Link>
          </li>
        </ul>
      </nav>

      {/* Category cards */}
      {filteredCategories.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCategories.map((category) => (
            <section
              key={category.id}
              id={category.id}
              aria-labelledby={`${category.id}-heading`}
              className="scroll-mt-24 rounded-xl border border-slate-200 bg-white p-6"
            >
              <h2
                id={`${category.id}-heading`}
                className="border-b border-slate-200 pb-3.5 text-base font-bold leading-6 tracking-tight text-sky-950"
              >
                {category.title}
              </h2>

              <ul className="mt-4 space-y-3">
                {category.links.map((link) => (
                  <li key={`${category.id}-${link.label}`}>
                    <CardEntry link={link} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      ) : (
        <p className="mt-8 rounded-xl border border-slate-200 bg-slate-100 px-5 py-6 text-sm leading-5 text-gray-600">
          No pages match “{query.trim()}”. Try a shorter word, or browse the
          categories above.
        </p>
      )}

      {/* A–Z index */}
      <section
        id="a-z-index"
        aria-labelledby="a-z-index-heading"
        className="mt-14 scroll-mt-24 border-t border-slate-200 pt-10"
      >
        <h2
          id="a-z-index-heading"
          className="text-xl font-bold leading-8 tracking-wide text-sky-950"
        >
          A–Z page index
        </h2>
        <p className="mt-2 text-sm leading-5 text-gray-600">
          Every public page, alphabetically. Duplicate names across sections use
          a qualifier so each link is unambiguous.
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {azLetters.map((letter) => {
            const isActive = activeLetters.has(letter);
            return (
              <li key={letter}>
                {isActive ? (
                  <Link
                    href={`#letter-${letter}`}
                    className="flex size-7 items-center justify-center rounded-md border border-slate-200 bg-slate-100 text-xs font-bold text-sky-950 transition-colors hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
                  >
                    {letter}
                  </Link>
                ) : (
                  <span className="flex size-7 items-center justify-center rounded-md border border-slate-100 bg-white text-xs font-bold text-slate-300">
                    {letter}
                  </span>
                )}
              </li>
            );
          })}
        </ul>

        {/* One list flowed into CSS columns: the browser balances the columns
            at every width, and the markup stays a single ordered A→Z list. */}
        <ul className="mt-8 columns-1 gap-x-10 sm:columns-2 lg:columns-3">
          {filteredAZ.map((entry, index) => {
            const isFirstOfLetter = letterAnchors.has(index);

            return (
              <li
                key={`${entry.name}-${entry.href ?? "planned"}`}
                id={isFirstOfLetter ? `letter-${entry.letter}` : undefined}
                className="flex break-inside-avoid scroll-mt-24 items-baseline gap-3 pb-3"
              >
                <span
                  aria-hidden={!isFirstOfLetter}
                  className={`w-3 shrink-0 text-xs font-bold leading-5 ${
                    isFirstOfLetter ? "text-sky-700" : "text-transparent"
                  }`}
                >
                  {entry.letter}
                </span>

                {entry.href ? (
                  <Link
                    href={entry.href}
                    className="rounded-sm text-xs leading-5 text-gray-600 transition-colors hover:text-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
                  >
                    {entry.name}
                  </Link>
                ) : (
                  <span
                    title="Page not yet published"
                    className="text-xs leading-5 text-slate-400"
                  >
                    {entry.name}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
