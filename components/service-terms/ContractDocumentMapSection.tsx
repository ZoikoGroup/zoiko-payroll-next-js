import React from "react";
import SectionShell from "./SectionShell";

interface MapNode {
  label: string;
  current?: boolean;
}

const documentChain: MapNode[] = [
  { label: "Order Form / Purchase Agreement" },
  { label: "Zoiko Payroll Service Terms", current: true },
  { label: "Data Processing Addendum" },
  { label: "Acceptable Use Policy" },
];

export default function ContractDocumentMapSection() {
  return (
    <SectionShell
      id="document-map"
      title="Contract document map"
      intro="How this document relates to other agreements that may apply to your account."
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        {/* An ordered list, so the incorporation chain still reads in sequence
            for screen readers and when the row stacks on small screens. */}
        <ol className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          {documentChain.map((node, index) => (
            <React.Fragment key={node.label}>
              {index > 0 ? (
                <li
                  aria-hidden="true"
                  className="flex shrink-0 items-center justify-center text-base leading-6 text-slate-500"
                >
                  <span className="sm:hidden">↓</span>
                  <span className="hidden sm:inline">→</span>
                </li>
              ) : null}

              <li
                className={`flex flex-1 items-center justify-center rounded-lg px-4 py-3.5 text-center text-xs font-bold leading-5 ${
                  node.current
                    ? "bg-gradient-to-r from-[#2C8FD1] to-[#0B4C78] text-white"
                    : "border border-slate-200 bg-slate-100 text-sky-950"
                }`}
                aria-current={node.current ? "page" : undefined}
              >
                {node.label}
              </li>
            </React.Fragment>
          ))}
        </ol>

        <p className="mt-6 text-xs leading-5 text-slate-500">
          This map shows typical incorporation relationships. It does not
          establish precedence for your specific account — precedence is set by
          your executed agreement, not by this diagram.
        </p>
      </div>
    </SectionShell>
  );
}
