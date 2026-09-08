import React from "react";

/** Small square dot + uppercase label used above each section heading. */
export function Eyebrow({
  children,
  tone = "sky",
}: {
  children: React.ReactNode;
  tone?: "sky" | "blue";
}) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={`h-1.5 w-1.5 rounded-sm ${
          tone === "blue" ? "bg-blue-400" : "bg-sky-500"
        }`}
      />
      <span
        className={`text-xs font-bold uppercase tracking-wide ${
          tone === "blue" ? "text-blue-400" : "text-sky-500"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  centered?: boolean;
}) {
  return (
    <div
      className={`flex max-w-2xl flex-col gap-3 ${
        centered ? "items-center text-center" : "items-start"
      }`}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {body ? (
        <p className="text-base leading-6 text-gray-500">{body}</p>
      ) : null}
    </div>
  );
}
