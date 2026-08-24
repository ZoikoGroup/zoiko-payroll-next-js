import type { ReactNode } from "react";

/** Short blue rule + uppercase label used above every heading on the Payroll Glossary page. */
export default function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-2.5 text-xs font-bold uppercase leading-5 tracking-wide text-sky-700">
      <span className="inline-block h-3.5 w-[3px] shrink-0 rounded-[1px] bg-blue-500" aria-hidden="true" />
      {children}
    </p>
  );
}
