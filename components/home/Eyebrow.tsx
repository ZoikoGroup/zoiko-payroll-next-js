import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  tone?: "brand" | "light";
  center?: boolean;
  className?: string;
};

export default function Eyebrow({ children, tone = "brand", center = false, className = "" }: EyebrowProps) {
  const textClass = tone === "light" ? "text-brand-light" : "text-brand";

  return (
    <p
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${textClass} ${
        center ? "justify-center" : ""
      } ${className}`}
    >
      <span className={`inline-block h-3 w-[3px] shrink-0 -skew-x-12 ${tone === "light" ? "bg-brand-light" : "bg-brand"}`} aria-hidden="true" />
      {children}
    </p>
  );
}
