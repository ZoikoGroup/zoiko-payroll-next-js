import type { ReactNode } from "react";

/** Shared section wrapper width: matches the 1116px content column in the designs. */
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1116px] px-4 sm:px-6 lg:px-0 ${className}`}>{children}</div>;
}

/** Small uppercase label with the slanted accent bar ("/ SECTION NAME"). */
export function Eyebrow({
  children,
  tone = "blue",
  centered = false,
}: {
  children: ReactNode;
  tone?: "blue" | "cyan";
  centered?: boolean;
}) {
  const color = tone === "cyan" ? "text-cyan-400" : "text-blue-600";
  const bar = tone === "cyan" ? "bg-cyan-400" : "bg-blue-600";
  return (
    <p
      className={`flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.14em] ${color} ${
        centered ? "justify-center" : ""
      }`}
    >
      <span aria-hidden className={`inline-block h-4 w-[5px] -skew-x-[18deg] ${bar}`} />
      {children}
    </p>
  );
}

/** Large display heading used across sections. */
export function Heading({
  children,
  tone = "dark",
  className = "",
  as: Tag = "h2",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
  as?: "h1" | "h2";
}) {
  const color = tone === "light" ? "text-white" : "text-[#0c3556]";
  return (
    <Tag
      className={`text-3xl font-extrabold leading-[1.2] tracking-[-0.03em] sm:text-[40px] sm:leading-[48px] ${color} ${className}`}
    >
      {children}
    </Tag>
  );
}

/** Rounded square holding a section icon. */
export function IconTile({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  return (
    <span
      className={`flex h-12 w-12 items-center justify-center rounded-lg ${
        tone === "dark" ? "h-11 w-11 bg-cyan-400/10 text-cyan-400" : "bg-blue-50 text-[#0f5f6e]"
      }`}
    >
      {children}
    </span>
  );
}
