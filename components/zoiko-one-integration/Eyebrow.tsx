import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  tone?: "dark" | "light";
  center?: boolean;
  className?: string;
};

/** Slanted brand slash + mono uppercase label used above every heading on this page. */
export default function Eyebrow({
  children,
  tone = "dark",
  center = false,
  className = "",
}: EyebrowProps) {
  const isLight = tone === "light";

  return (
    <p
      className={`inline-flex items-center gap-2.5 font-mono text-xs uppercase leading-5 tracking-wider ${
        isLight ? "text-sky-300" : "text-sky-700"
      } ${center ? "justify-center" : ""} ${className}`}
    >
      <span
        className={`inline-block h-3.5 w-1.5 shrink-0 -skew-x-12 rounded-[1px] ${
          isLight ? "bg-sky-400" : "bg-brand-gradient"
        }`}
        aria-hidden="true"
      />
      {children}
    </p>
  );
}
