import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  tone?: "dark" | "light";
  center?: boolean;
  className?: string;
};

/** Dash + uppercase label used across the implementation page. */
export default function Eyebrow({ children, tone = "dark", center = false, className = "" }: EyebrowProps) {
  const isLight = tone === "light";

  return (
    <p
      className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${
        isLight ? "text-blue-300" : "text-slate-600"
      } ${center ? "justify-center" : ""} ${className}`}
    >
      <span
        className={`inline-block h-0.5 w-4 shrink-0 rounded-xs ${isLight ? "bg-blue-300" : "bg-blue-600"}`}
        aria-hidden="true"
      />
      {children}
    </p>
  );
}
