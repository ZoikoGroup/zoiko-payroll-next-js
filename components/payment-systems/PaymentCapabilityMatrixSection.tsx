"use client";

import React from "react";

interface MatrixRow {
  capability: string;
  sandboxRail: "Supported" | "Conditional" | "Not supported";
  globalWire: "Supported" | "Conditional" | "Not supported";
  regionalInstant: "Supported" | "Conditional" | "Not supported";
}

const matrixData: MatrixRow[] = [
  {
    capability: "Batch handoff",
    sandboxRail: "Supported",
    globalWire: "Supported",
    regionalInstant: "Supported",
  },
  {
    capability: "Individual instruction",
    sandboxRail: "Supported",
    globalWire: "Supported",
    regionalInstant: "Conditional",
  },
  {
    capability: "Domestic bank payment",
    sandboxRail: "Supported",
    globalWire: "Conditional",
    regionalInstant: "Supported",
  },
  {
    capability: "Cross-border / multi-currency",
    sandboxRail: "Not supported",
    globalWire: "Supported",
    regionalInstant: "Not supported",
  },
  {
    capability: "Cancellation before processing",
    sandboxRail: "Supported",
    globalWire: "Conditional",
    regionalInstant: "Conditional",
  },
  {
    capability: "Recall / reversal",
    sandboxRail: "Conditional",
    globalWire: "Supported",
    regionalInstant: "Not supported",
  },
  {
    capability: "Return / reject feedback",
    sandboxRail: "Supported",
    globalWire: "Supported",
    regionalInstant: "Supported",
  },
  {
    capability: "Settlement reporting",
    sandboxRail: "Supported",
    globalWire: "Conditional",
    regionalInstant: "Supported",
  },
];

export default function PaymentCapabilityMatrixSection() {
  const renderStatus = (
    status: "Supported" | "Conditional" | "Not supported",
  ) => {
    switch (status) {
      case "Supported":
        return <span className="font-bold text-[#0F172A]">Supported</span>;
      case "Conditional":
        return <span className="font-bold text-slate-700">Conditional</span>;
      case "Not supported":
        return (
          <span className="text-slate-400 font-normal">Not supported</span>
        );
    }
  };

  return (
    <section className="w-full bg-[#f5f8fa] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
              <span className="text-base leading-none">/</span>
              <span>WHAT CONNECTS</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[#0F172A] leading-tight">
              The payment capability matrix
            </h2>
          </div>

          {/* Subtext */}
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xs">
            Every capability is state-driven and evidence-backed. Provider
            acknowledgement is not the same thing as financial success.
          </p>
        </div>

        {/* Matrix Table Container */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse min-w-[650px]">
              <thead>
                <tr className="bg-[#0A1E30] text-white font-bold tracking-wider uppercase text-[10px]">
                  <th scope="col" className="py-4 px-6 sm:px-8 font-bold">
                    CAPABILITY
                  </th>
                  <th scope="col" className="py-4 px-6 font-bold">
                    SANDBOX RAIL (US · ACH)
                  </th>
                  <th scope="col" className="py-4 px-6 font-bold">
                    GLOBAL WIRE PARTNER
                  </th>
                  <th scope="col" className="py-4 px-6 sm:px-8 font-bold">
                    REGIONAL INSTANT RAIL
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {matrixData.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="py-4 px-6 sm:px-8 font-bold text-[#0F172A]">
                      {row.capability}
                    </td>
                    <td className="py-4 px-6">
                      {renderStatus(row.sandboxRail)}
                    </td>
                    <td className="py-4 px-6">
                      {renderStatus(row.globalWire)}
                    </td>
                    <td className="py-4 px-6 sm:px-8">
                      {renderStatus(row.regionalInstant)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footnote Label */}
        <p className="text-[11px] text-slate-400 text-center sm:text-left">
          Country, currency, rail and funding combinations must be confirmed by
          current evidence for your specific configuration — this matrix
          illustrates the pattern, not a guarantee for every account.
        </p>
      </div>
    </section>
  );
}
