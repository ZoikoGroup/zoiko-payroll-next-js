import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  tone?: "dark" | "light";
  center?: boolean;
  className?: string;
};

/** Slanted brand slash + uppercase label used above every heading on the finance-teams page. */
export default function Eyebrow({
  children,
  tone = "dark",
  center = false,
  className = "",
}: EyebrowProps) {
  const isLight = tone === "light";

  return (
    <p
      className={`inline-flex items-center gap-2.5 text-xs font-bold uppercase leading-4 tracking-[0.12em] ${
        isLight ? "text-blue-400" : "text-sky-600"
      } ${center ? "justify-center" : ""} ${className}`}
    >
      <span
        className={`inline-block h-3.5 w-1.5 shrink-0 -skew-x-12 rounded-xs ${
          isLight ? "bg-sky-600" : "bg-sky-600"
        }`}
        aria-hidden="true"
      />
      {children}
    </p>
  );
}
