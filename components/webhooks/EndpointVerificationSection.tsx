"use client";

import React, { useState } from "react";
import { Check, Copy, CheckCheck } from "lucide-react";

interface ChecklistItem {
  label: string;
}

const checklistItems: ChecklistItem[] = [
  { label: "HTTPS endpoint reachable" },
  { label: "Challenge/verification completed" },
  { label: "Valid TLS certificate" },
  { label: "No unapproved redirects" },
];

const codeSnippet = `// Structural placeholder - see current
// approved contract for exact header
// names, algorithm and encoding.
const signature = request.headers['[approved-signature-header]'];
const verified = verify(payload, signature, secret);
if (!verified) { reject(); }`;

export default function EndpointVerificationSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="space-y-3">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
            <span className="w-4 h-[2px] bg-[#0A8FD0] inline-block" />
            <span>ENDPOINT VERIFICATION + SIGNING / AUTHENTICITY</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[#07243B] leading-tight">
            Verify authenticity before business processing always
          </h2>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Checklist Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-xs flex flex-col justify-between space-y-6">
            <h3 className="text-sm font-bold text-[#07243B]">
              Endpoint readiness checklist
            </h3>

            <div className="divide-y divide-slate-100 flex-1 flex flex-col justify-center">
              {checklistItems.map((item, idx) => (
                <div
                  key={idx}
                  className="py-3.5 flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-700"
                >
                  <div className="w-5 h-5 rounded-md bg-[#E6F4EA] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#137333] stroke-[2.5]" />
                  </div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Code Window */}
          <div className="lg:col-span-7 bg-[#07111E] rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl flex flex-col justify-start font-mono text-xs sm:text-sm text-slate-300 relative overflow-hidden">
            {/* Code Window Header */}
            <div className="flex items-center justify-between pb-4 text-[#FFFFFF80] text-xs border-b border-slate-800/80 mb-4">
              <span>verify_signature.example</span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer text-[11px]"
              >
                {copied ? (
                  <>
                    <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Snippet */}
            <pre className="leading-relaxed overflow-x-auto text-slate-300 space-y-1">
              <code>
                <span className="text-[#FFFFFF66]">
                  {"// Structural placeholder - see current\n"}
                  {"// approved contract for exact header\n"}
                  {"// names, algorithm and encoding.\n"}
                </span>
                <span className="text-[#38BDF8]">const</span>{" "}
                <span className="text-white">signature</span> ={" "}
                <span className="text-slate-300">request.headers[</span>
                <span className="text-emerald-400">
                  &apos;[approved-signature-header]&apos;
                </span>
                <span className="text-slate-300">];</span>
                {"\n"}
                <span className="text-[#38BDF8]">const</span>{" "}
                <span className="text-white">verified</span> ={" "}
                <span className="text-[#38BDF8]">verify</span>(payload,
                signature, secret);
                {"\n"}
                <span className="text-[#38BDF8]">if</span> (!verified) &#123;{" "}
                <span className="text-[#38BDF8]">reject</span>(); &#125;
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
