import type { ReactNode } from "react";

/**
 * White card with a brand check, a bold title and a supporting line — the
 * repeating unit in the operating-reality, timing-law and integrations grids.
 */
export default function CheckCard({
  title,
  children,
}: {
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-5 py-4">
      <div className="flex items-center gap-2">
        <span className="text-sm font-black leading-5 text-sky-600" aria-hidden="true">
          ✓
        </span>
        <h3 className="text-sm font-bold leading-5 text-sky-950">{title}</h3>
      </div>
      {children ? (
        <p className="mt-1.5 text-xs leading-5 text-gray-600">{children}</p>
      ) : null}
    </div>
  );
}
