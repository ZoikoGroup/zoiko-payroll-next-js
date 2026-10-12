import React from "react";

/**
 * Small uppercase kicker with the leading accent bar used throughout the DPA
 * page. `centered` matches the design's centred sections.
 */
export function Eyebrow({
  children,
  centered = false,
  tone = "sky",
}: {
  children: React.ReactNode;
  centered?: boolean;
  tone?: "sky" | "light";
}) {
  return (
    <p
      className={`flex items-center gap-2.5 text-xs font-bold uppercase leading-5 tracking-wider ${
        tone === "light" ? "text-blue-300" : "text-sky-600"
      } ${centered ? "justify-center" : ""}`}
    >
      <span
        aria-hidden="true"
        className={`h-3.5 w-1.5 shrink-0 rounded-sm ${
          tone === "light" ? "bg-blue-300" : "bg-sky-600"
        }`}
      />
      {children}
    </p>
  );
}

/** White card with the sky left rule, used for every boundary note. */
export function Callout({
  children,
  centered = false,
}: {
  children: React.ReactNode;
  centered?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border border-l-4 border-slate-200 border-l-sky-600 bg-white px-6 py-6 sm:px-8 ${
        centered ? "text-center" : ""
      }`}
    >
      <p className="text-sm leading-6 text-sky-950">{children}</p>
    </div>
  );
}

/** Section band. `tinted` paints the indigo-50 background from the design. */
export function Band({
  id,
  tinted = false,
  children,
  labelledBy,
}: {
  id?: string;
  tinted?: boolean;
  children: React.ReactNode;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`w-full scroll-mt-24 ${tinted ? "bg-indigo-50" : "bg-white"}`}
    >
      <div className="mx-auto w-full max-w-[1140px] px-4 py-16 sm:px-8 lg:py-20">
        {children}
      </div>
    </section>
  );
}
