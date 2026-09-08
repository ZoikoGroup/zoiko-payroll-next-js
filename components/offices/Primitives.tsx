import React from "react";

/** Short rule + uppercase label above every section heading. */
export function Eyebrow({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <span
        className={`h-0.5 w-5 ${dark ? "bg-blue-300" : "bg-[#0A78C3]"}`}
      />
      <span
        className={`text-xs font-bold uppercase leading-5 tracking-wider ${
          dark ? "text-blue-300" : "text-[#0A78C3]"
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
  dark = false,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  dark?: boolean;
}) {
  return (
    <div className="flex max-w-3xl flex-col items-center gap-3.5 text-center">
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2
        className={`text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl md:text-4xl ${
          dark ? "text-white" : "text-[#0B192C]"
        }`}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={`text-sm leading-7 sm:text-base ${
            dark ? "text-slate-300" : "text-[#64748B]"
          }`}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}

/** Blue-tinted note used beneath several sections. */
export function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-3xl rounded-md border-l-4 border-l-[#0A78C3] bg-[#E7EDFD] p-4 sm:p-5">
      <p className="text-sm leading-6 text-[#334155] sm:text-base">
        {children}
      </p>
    </div>
  );
}

/** Dark primary / light secondary utility buttons used on office cards. */
export function ActionButton({
  children,
  variant = "secondary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "disabled";
}) {
  if (variant === "disabled") {
    return (
      <span className="cursor-not-allowed rounded-lg border border-[#E2E8F0] bg-slate-100 px-3.5 py-2 text-xs font-bold text-slate-400">
        {children}
      </span>
    );
  }
  return (
    <button
      type="button"
      className={`cursor-pointer rounded-lg px-3.5 py-2 text-xs font-bold transition-colors ${
        variant === "primary"
          ? "border border-[#0B2437] bg-[#0B2437] text-white hover:bg-[#14324d]"
          : "border border-[#E2E8F0] bg-white text-[#0F172A] hover:border-[#0A78C3]"
      }`}
    >
      {children}
    </button>
  );
}
