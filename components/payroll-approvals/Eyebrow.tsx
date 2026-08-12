import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
};

/** Slanted gradient mark + uppercase mono label used across the payroll approvals page. */
export default function Eyebrow({ children, tone = "dark", className = "" }: EyebrowProps) {
  const isLight = tone === "light";

  return (
    <p
      className={`inline-flex items-center gap-2.5 font-mono text-xs uppercase leading-4 tracking-wider ${
        isLight ? "text-blue-300" : "text-sky-700"
      } ${className}`}
    >
      <span
        className={`inline-block h-3.5 w-1 shrink-0 -skew-x-12 rounded-[1px] ${
          isLight ? "bg-blue-300" : "bg-linear-to-b from-blue-400 via-sky-600 to-sky-950"
        }`}
        aria-hidden="true"
      />
      {children}
    </p>
  );
}
