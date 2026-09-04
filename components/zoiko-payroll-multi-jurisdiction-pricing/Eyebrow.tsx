import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  tone?: "dark" | "light";
  center?: boolean;
  className?: string;
};

/** Slanted brand slash + uppercase label used above every section heading. */
export default function Eyebrow({
  children,
  tone = "dark",
  center = false,
  className = "",
}: EyebrowProps) {
  const isLight = tone === "light";

  return (
    <p
      className={`inline-flex items-center gap-1 text-xs font-bold uppercase leading-5 tracking-wide ${
        isLight ? "text-[#3A9AD6]" : "text-[#0A78C3]"
      } ${center ? "justify-center" : ""} ${className}`}
    >
      <span className="text-xs font-bold" aria-hidden="true">/</span>
      {children}
    </p>
  );
}
