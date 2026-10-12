"use client";

import React from "react";

export type CountryCode = "US" | "GB" | "DE" | "CA";

/**
 * Inline SVG flags. Windows renders regional-indicator emoji (🇺🇸) as plain
 * letters, so the emoji route can't match the design on every platform.
 */
const flags: Record<CountryCode, { title: string; paths: React.ReactNode }> = {
  US: {
    title: "United States",
    paths: (
      <>
        <rect width="20" height="14" fill="#fff" />
        {[0, 2, 4, 6, 8, 10, 12].map((y) => (
          <rect key={y} y={y} width="20" height="1.08" fill="#B22234" />
        ))}
        <rect width="8.6" height="7.54" fill="#3C3B6E" />
      </>
    ),
  },
  GB: {
    title: "United Kingdom",
    paths: (
      <>
        <rect width="20" height="14" fill="#012169" />
        <path d="M0 0l20 14M20 0L0 14" stroke="#fff" strokeWidth="2.8" />
        <path d="M0 0l20 14M20 0L0 14" stroke="#C8102E" strokeWidth="1.6" />
        <path d="M10 0v14M0 7h20" stroke="#fff" strokeWidth="4.6" />
        <path d="M10 0v14M0 7h20" stroke="#C8102E" strokeWidth="2.8" />
      </>
    ),
  },
  DE: {
    title: "Germany",
    paths: (
      <>
        <rect width="20" height="4.67" fill="#000" />
        <rect y="4.67" width="20" height="4.66" fill="#DD0000" />
        <rect y="9.33" width="20" height="4.67" fill="#FFCE00" />
      </>
    ),
  },
  CA: {
    title: "Canada",
    paths: (
      <>
        <rect width="20" height="14" fill="#fff" />
        <rect width="5" height="14" fill="#D80621" />
        <rect x="15" width="5" height="14" fill="#D80621" />
        <path
          d="M10 3.1l.72 1.44.68-.2-.5 1.78 1.6-.9-.28 1.08 1.4-.2-.5.86 1.1.62-1.44.7.28.68-1.6-.2.1.9-1.16-.9-.4 2.14h-.5l-.4-2.14-1.16.9.1-.9-1.6.2.28-.68-1.44-.7 1.1-.62-.5-.86 1.4.2-.28-1.08 1.6.9-.5-1.78.68.2L10 3.1z"
          fill="#D80621"
        />
      </>
    ),
  },
};

export default function CountryFlag({
  code,
  className = "",
}: {
  code: CountryCode;
  className?: string;
}) {
  const flag = flags[code];

  return (
    <svg
      viewBox="0 0 20 14"
      role="img"
      aria-label={flag.title}
      className={`shrink-0 rounded-[2px] ring-1 ring-black/10 ${className}`}
    >
      {flag.paths}
    </svg>
  );
}
