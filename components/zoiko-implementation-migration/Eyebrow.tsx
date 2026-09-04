import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  tone?: "dark" | "light";
  center?: boolean;
  className?: string;
};

export default function Eyebrow({ children, tone = "dark", center = false, className = "" }: EyebrowProps) {
  const isLight = tone === "light";

  return (
    <p
      className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${
        isLight ? "text-blue-300" : "text-sky-600"
      } ${center ? "justify-center" : ""} ${className}`}
    >
      <span
        className={`inline-block h-3.5 w-1.5 shrink-0 rounded-xs ${
          isLight ? "bg-blue-300" : "bg-sky-600"
        }`}
        aria-hidden="true"
      />
      {children}
    </p>
  );
}
