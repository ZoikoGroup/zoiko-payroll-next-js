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
  title: string;
  body?: string;
  /** Light-on-dark treatment for the photo-backed sections. */
  dark?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
      <div className="flex items-center gap-2">
        <span
          className={`h-1.5 w-1.5 rounded-[3px] ${
            dark ? "bg-blue-300" : "bg-blue-400"
          }`}
        />
        <span
          className={`text-sm font-semibold tracking-tight ${
            dark ? "text-blue-300" : "text-blue-600"
          }`}
        >
          {eyebrow}
        </span>
      </div>
      <h2
        className={`text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={`text-base leading-7 ${
            dark ? "text-slate-300" : "text-slate-500"
          }`}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border border-slate-200 bg-white ${className}`}>
      {children}
    </div>
  );
}

/** Rounded tile holding a blue icon, with the Figma's gradient wash. */
export function IconTile({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-blue-600/10 to-blue-400/15 text-blue-600">
      {children}
    </div>
  );
}
