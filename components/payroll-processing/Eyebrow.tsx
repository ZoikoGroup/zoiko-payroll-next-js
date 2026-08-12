import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
};

/** Short dash + uppercase label used above every heading on the payroll processing page. */
export default function Eyebrow({ children, tone = "dark", className = "" }: EyebrowProps) {
  const isLight = tone === "light";

  return (
    <p
      className={`inline-flex items-center gap-2 text-xs font-bold uppercase leading-5 tracking-wide ${
        isLight ? "text-blue-300" : "text-blue-600"
      } ${className}`}
    >
      <span
        className={`inline-block h-0.5 w-4 shrink-0 ${isLight ? "bg-blue-500" : "bg-blue-600"}`}
        aria-hidden="true"
      />
      {children}
    </p>
  );
}
