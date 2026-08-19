import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  tone?: "dark" | "light";
  center?: boolean;
  className?: string;
};

/** Thin brand bar + uppercase label used above every heading on the hr-teams page. */
export default function Eyebrow({
  children,
  tone = "dark",
  center = false,
  className = "",
}: EyebrowProps) {
  const isLight = tone === "light";

  return (
    <p
      className={`inline-flex items-center gap-2 text-xs font-bold uppercase leading-4 tracking-wide ${
        isLight ? "text-sky-300" : "text-sky-700"
      } ${center ? "justify-center" : ""} ${className}`}
    >
      <span
        className={`inline-block h-3.5 w-[3px] shrink-0 rounded-[1px] ${
          isLight ? "bg-sky-300" : "bg-blue-500"
        }`}
        aria-hidden="true"
      />
      {children}
    </p>
  );
}
