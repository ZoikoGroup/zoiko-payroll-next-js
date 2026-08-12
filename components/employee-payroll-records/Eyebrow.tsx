import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
};

/** Slanted gradient mark + uppercase sky label used across the employee payroll records page. */
export default function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <p
      className={`inline-flex items-center gap-2.5 text-xs uppercase tracking-wider text-sky-700 ${className}`}
    >
      <span
        className="inline-block h-3.5 w-1 shrink-0 -skew-x-12 rounded-[1px] bg-linear-to-b from-blue-400 via-sky-600 to-sky-950"
        aria-hidden="true"
      />
      {children}
    </p>
  );
}
