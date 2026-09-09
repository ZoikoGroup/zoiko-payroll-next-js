import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  tone?: "dark" | "light";
  center?: boolean;
  className?: string;
};

/**
 * Small divider line + uppercase label used above every section heading,
 * matching the design system (sky line + tracking-widest label).
 */
export default function Eyebrow({
  children,
  tone = "dark",
  center = false,
  className = "",
}: EyebrowProps) {
  const isLight = tone === "light";

  return (
    <div
      className={`inline-flex items-center gap-2 ${
        center ? "justify-center" : "justify-start"
      } ${className}`}
    >
      <span className={`h-px w-4 ${isLight ? "bg-blue-300" : "bg-sky-600"}`} />
      <span
        className={`text-xs font-semibold uppercase leading-4 tracking-widest ${
          isLight ? "text-blue-300" : "text-sky-600"
        }`}
      >
        {children}
      </span>
    </div>
  );
}