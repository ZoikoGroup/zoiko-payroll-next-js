import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  tone?: "dark" | "light";
  center?: boolean;
  className?: string;
};

/** Thin rule + wide-tracked label used above headings on the growing-businesses page. */
export default function Eyebrow({
  children,
  tone = "dark",
  center = false,
  className = "",
}: EyebrowProps) {
  const isLight = tone === "light";

  return (
    <p
      className={`inline-flex items-center gap-2.5 text-xs uppercase leading-4 tracking-[0.18em] ${
        isLight ? "text-blue-300" : "text-blue-600"
      } ${center ? "justify-center" : ""} ${className}`}
    >
      <span
        className={`inline-block h-px w-5 shrink-0 ${isLight ? "bg-blue-300" : "bg-blue-600"}`}
        aria-hidden="true"
      />
      {children}
    </p>
  );
}
