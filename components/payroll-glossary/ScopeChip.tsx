import type { TermScope } from "./terms";

/** Scope label shown on every term card — General, Product, Jurisdiction-sensitive or Global payroll. */
export default function ScopeChip({ scope }: { scope: TermScope }) {
  return (
    <span className="inline-flex shrink-0 items-center rounded-[20px] bg-slate-100 px-2 py-1 text-[10px] font-bold leading-4 text-slate-500">
      {scope}
    </span>
  );
}
