import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  tone?: "dark" | "light" | "blue";
  className?: string;
};

export default function Eyebrow({ children, tone = "dark", className = "" }: EyebrowProps) {
  return (
    <p
      className={`inline-flex items-center font-jakarta text-xs font-bold uppercase leading-5 tracking-wider ${className}`}
    >
      / {children}
    </p>
  );
}
