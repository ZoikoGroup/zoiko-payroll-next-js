import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
  tone?: "dark" | "light";
};

export default function Eyebrow({ children, className = "", tone = "dark" }: EyebrowProps) {
  const isLight = tone === "light";
  return (
    <div className={`relative h-5 ${className}`}>
      <span className={`absolute left-0 -top-px text-xs font-bold uppercase leading-5 tracking-wide ${isLight ? "text-azure-76" : "text-azure-40"}`}>
        {children}
      </span>
    </div>
  );
}