import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  tone?: "dark" | "light";
  center?: boolean;
};

/** Slash rule + uppercase label used above every heading on the Resource Center page. */
export default function Eyebrow({ children, tone = "dark", center = false }: EyebrowProps) {
  const isLight = tone === "light";

  return (
    <p
      className={`flex items-center gap-3 text-xs font-bold uppercase leading-5 tracking-wider ${
        isLight ? "text-blue-300" : "text-sky-600"
      } ${center ? "justify-center" : ""}`}
    >
      <span
        className="inline-block h-3.5 w-1 shrink-0 -skew-x-12 rounded-sm bg-sky-600"
        aria-hidden="true"
      />
      {children}
    </p>
  );
}
