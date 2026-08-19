import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  tone?: "dark" | "light";
  center?: boolean;
  className?: string;
};

/** Slanted brand slash + uppercase label used above every heading on the mid-market page. */
export default function Eyebrow({
  children,
  tone = "dark",
  center = false,
  className = "",
}: EyebrowProps) {
  const isLight = tone === "light";

  return (
    <p
      className={`inline-flex items-center gap-2.5 text-xs font-bold uppercase leading-5 tracking-wide ${
        isLight ? "text-blue-300" : "text-sky-600"
      } ${center ? "justify-center" : ""} ${className}`}
    >
      <span
        className={`inline-block h-3.5 w-1.5 shrink-0 -skew-x-12 rounded-xs ${
          isLight ? "bg-blue-300" : "bg-blue-500"
        }`}
        aria-hidden="true"
      />
      {children}
    </p>
  );
}
