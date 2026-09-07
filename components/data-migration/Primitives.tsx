import React from "react";

/**
 * Small dot + label used above every section heading on this page.
 * Blue on light grounds; light on the photo-backed dark sections.
 */
export function Eyebrow({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={`h-1.5 w-1.5 rounded-[3px] ${
          dark ? "bg-slate-200" : "bg-blue-600"
        }`}
      />
      <span
        className={`text-sm font-semibold ${
          dark ? "text-slate-200" : "text-blue-600"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  body?: string;
  /** Renders light-on-dark for the photo-backed sections. */
  dark?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className="flex max-w-3xl flex-col items-center gap-4 text-center">
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2
        className={`text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={`text-base leading-8 ${
            dark ? "text-slate-300" : "text-slate-700"
          }`}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}

/** White card shell shared by the strategy, governance and security grids. */
export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-[0px_8px_24px_-8px_rgba(15,23,42,0.10)] ${className}`}
    >
      {children}
    </div>
  );
}

export function IconTile({
  children,
  tint = "bg-blue-600/10 text-blue-600",
}: {
  children: React.ReactNode;
  tint?: string;
}) {
  return (
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tint}`}
    >
      {children}
    </div>
  );
}
