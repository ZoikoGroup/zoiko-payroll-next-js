"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";

interface PayloadField {
  key: string;
  value: string;
}

const payloadFields: PayloadField[] = [
  { key: "event_id", value: "evt_synthetic_9f21c4e0" },
  { key: "event_type", value: "payroll_run.completed" },
  { key: "event_version", value: "2" },
  { key: "occurred_at", value: "2026-08-15T09:41:00Z" },
  { key: "resource", value: "run_synthetic_002" },
  { key: "correlation_id", value: "corr_synthetic_881" },
];

export default function EventEnvelopePayloadSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyPayload = () => {
    const payloadObject = payloadFields.reduce(
      (acc, curr) => {
        acc[curr.key] = curr.value;
        return acc;
      },
      {} as Record<string, string>,
    );

    navigator.clipboard.writeText(JSON.stringify(payloadObject, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="space-y-3">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#2F6FED] uppercase">
            <span className="w-4 h-[2px] bg-[#2F6FED] inline-block" />
            <span>EVENT ENVELOPE + PAYLOAD CONTRACT</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[#07243B] leading-tight">
            Version-aware. Synthetic examples only
          </h2>
        </div>

        {/* Payload Table Card */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
          {/* Top Bar Header */}
          <div className="px-6 py-4 bg-[#FBFCFE] border-b border-slate-100 flex items-center justify-between">
            <h3 className="text-xs sm:text-sm font-bold text-[#07243B] font-mono">
              payroll_run.completed — v2
            </h3>
            <button
              onClick={handleCopyPayload}
              className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-[11px] font-mono text-slate-500 hover:text-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-600" />
                  <span className="text-emerald-600">copied</span>
                </>
              ) : (
                <span>copy payload →</span>
              )}
            </button>
          </div>

          {/* Payload Field Rows */}
          <div className="divide-y divide-slate-100 font-mono text-xs sm:text-sm">
            {payloadFields.map((field, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 sm:grid-cols-12 px-6 py-3.5 hover:bg-slate-50/50 transition-colors"
              >
                <div className="sm:col-span-4 text-[#2F6FED] font-medium py-0.5">
                  {field.key}
                </div>
                <div className="sm:col-span-8 text-slate-600 py-0.5">
                  {field.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
