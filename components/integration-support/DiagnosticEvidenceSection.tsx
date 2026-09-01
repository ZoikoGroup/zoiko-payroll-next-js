"use client";

import React, { useState } from "react";
import { Lock } from "lucide-react";

interface MetadataTag {
  label: string;
  value: string;
}

const metadataTags: MetadataTag[] = [
  { label: "Category", value: "Finance/ERP" },
  { label: "Provider ID", value: "erp-sap-04" },
  { label: "Environment", value: "Production" },
  { label: "Issue type", value: "Delivery" },
  { label: "Safe ID", value: "corr-88213-04" },
  { label: "Journey source", value: "System Status" },
];

export default function DiagnosticEvidenceSection() {
  const [selectedTag, setSelectedTag] = useState<string>("Category");

  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Block */}
        <div className="space-y-3">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
            <span className="text-[#0A8FD0] font-bold">/</span>
            <span>CONTEXT REUSE + SAFE DIAGNOSTIC EVIDENCE</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-[27px] font-extrabold tracking-tight text-[#07243B] leading-tight">
            Only allowlisted metadata ever travels with your case.
          </h2>
        </div>

        {/* Allowlisted Metadata Tags Row */}
        <div className="flex flex-wrap items-center gap-2.5 pt-2">
          {metadataTags.map((tag) => {
            const isSelected = tag.label === selectedTag;
            return (
              <button
                key={tag.label}
                onClick={() => setSelectedTag(tag.label)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-white text-[#0A3050] border border-slate-300 shadow-2xs font-bold"
                    : "bg-white border border-slate-200/80 text-slate-600 hover:border-slate-300 hover:text-slate-900 shadow-2xs"
                }`}
              >
                <span className="text-[#0A3050] font-normal">
                  {tag.label}:{" "}
                </span>
                <span className="text-[#0A3050]">{tag.value}</span>
              </button>
            );
          })}
        </div>

        {/* Secure Diagnostic Bundle Box */}
        <div className="bg-[#F4F8FB] border border-dashed border-[#E2E9F1] rounded-3xl p-8 sm:p-12 text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-[#07243B]">
            <Lock className="w-4 h-4 text-slate-500 shrink-0" />
            <span>Secure Diagnostic Bundle</span>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 mx-auto leading-relaxed">
            Deeper evidence — with classification, redaction, access scope,
            retention and audit controls — is only attached through the secure
            evidence workflow, never through this public page.
          </p>
        </div>
      </div>
    </section>
  );
}
