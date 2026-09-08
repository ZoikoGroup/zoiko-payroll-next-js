import React from "react";

/** Blue dot + label sitting above every section heading on this page. */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-1.5 w-1.5 rounded-[3px] bg-blue-400" />
      <span className="text-sm font-semibold tracking-tight text-blue-600">
        {children}
      </span>
    </div>
  );
}

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  body?: string;
}

export function SectionHeading({ eyebrow, title, body }: SectionHeadingProps) {
  return (
    <div className="flex max-w-2xl flex-col items-center gap-5 text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {body ? (
        <p className="text-base leading-7 text-slate-500">{body}</p>
      ) : null}
    </div>
  );
}

/** White card with the soft border used across the feature grids. */
export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white ${className}`}
    >
      {children}
    </div>
  );
}

/** Rounded tile holding a blue icon, with the Figma's subtle gradient wash. */
export function IconTile({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-blue-600/10 to-blue-400/10 text-blue-600">
      {children}
    </div>
  );
}
