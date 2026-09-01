"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

interface StatusBadge {
  id: string;
  label: string;
  bgColor: string;
  textColor: string;
  borderColor?: string;
}

const statusBadges: StatusBadge[] = [
  {
    id: "current",
    label: "Current",
    bgColor: "bg-[#E6F4EA]",
    textColor: "text-[#137333]",
  },
  {
    id: "beta",
    label: "Beta",
    bgColor: "bg-white",
    textColor: "text-slate-700",
    borderColor: "border-slate-300",
  },
  {
    id: "deprecated",
    label: "Deprecated",
    bgColor: "bg-[#FEF7E0]",
    textColor: "text-[#B06000]",
  },
  {
    id: "sunset",
    label: "Sunset",
    bgColor: "bg-[#FCE8E6]",
    textColor: "text-[#C5221F]",
  },
  {
    id: "internal",
    label: "Internal",
    bgColor: "bg-white",
    textColor: "text-slate-700",
    borderColor: "border-slate-300",
  },
];

type Language = "curl" | "javascript" | "python";

const codeSnippets: Record<Language, string> = {
  curl: `curl -X POST "https://api.zoikopayroll.com/v1/deductions" \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Idempotency-Key: YOUR_IDEMPOTENCY_KEY" \\
  -d '{"worker_id": "wrk_example", "amount": "50.00"}'`,
  javascript: `const response = await fetch("https://api.zoikopayroll.com/v1/deductions", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_ACCESS_TOKEN",
    "Idempotency-Key": "YOUR_IDEMPOTENCY_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    worker_id: "wrk_example",
    amount: "50.00"
  })
});
const data = await response.json();`,
  python: `import requests

url = "https://api.zoikopayroll.com/v1/deductions"
headers = {
    "Authorization": "Bearer YOUR_ACCESS_TOKEN",
    "Idempotency-Key": "YOUR_IDEMPOTENCY_KEY",
    "Content-Type": "application/json"
}
payload = {
    "worker_id": "wrk_example",
    "amount": "50.00"
}

response = requests.post(url, headers=headers, json=payload)`,
};

export default function VersioningCodeExamplesSection() {
  const [activeBadge, setActiveBadge] = useState<string>("deprecated");
  const [activeLang, setActiveLang] = useState<Language>("curl");
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
            <span className="text-base leading-none">/</span>
            <span>VERSIONING & CODE EXAMPLES</span>
          </div>

          {/* Main Section Title */}
          <h2 className="text-3xl sm:text-[34px] font-bold tracking-tight text-[#07243B] leading-tight">
            Deprecated stays discoverable until the approved retirement date
          </h2>
        </div>

        {/* Status Badges Row */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {statusBadges.map((badge) => {
            const isActive = activeBadge === badge.id;
            return (
              <button
                key={badge.id}
                onClick={() => setActiveBadge(badge.id)}
                className={`px-5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
                  badge.bgColor
                } ${badge.textColor} ${
                  badge.borderColor || "border-transparent"
                }`}
              >
                {badge.label}
              </button>
            );
          })}
        </div>

        {/* Code Snippet Card */}
        <div className="bg-[#091725] text-white rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
          {/* Language Tabs & Copy Action */}
          <div className="flex items-center justify-between px-6 pt-4 pb-2 border-b border-slate-800/60">
            <div className="flex items-center gap-6 text-xs font-medium">
              <button
                onClick={() => setActiveLang("curl")}
                className={`transition-colors cursor-pointer py-1 ${
                  activeLang === "curl"
                    ? "text-white font-semibold border-b-2 border-[#0A8FD0]"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                cURL
              </button>
              <button
                onClick={() => setActiveLang("javascript")}
                className={`transition-colors cursor-pointer py-1 ${
                  activeLang === "javascript"
                    ? "text-white font-semibold border-b-2 border-[#0A8FD0]"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                JavaScript
              </button>
              <button
                onClick={() => setActiveLang("python")}
                className={`transition-colors cursor-pointer py-1 ${
                  activeLang === "python"
                    ? "text-white font-semibold border-b-2 border-[#0A8FD0]"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Python
              </button>
            </div>

            <button
              onClick={handleCopy}
              className="p-1.5 rounded-lg bg-slate-800/60 hover:bg-slate-700/80 text-slate-300 transition-colors border border-slate-700/50 cursor-pointer"
              title="Copy snippet"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-slate-400" />
              )}
            </button>
          </div>

          {/* Code Window Content */}
          <div className="p-6 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto space-y-3">
            <p className="text-slate-500 font-sans text-[11px]">
              // Example generated from current API contract at build time
            </p>
            <pre className="text-slate-200">
              <code>{codeSnippets[activeLang]}</code>
            </pre>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-[11px] text-slate-400 font-normal">
          Placeholders only — never real credentials. Stale examples are
          automatically suppressed or downgraded.
        </p>
      </div>
    </section>
  );
}
