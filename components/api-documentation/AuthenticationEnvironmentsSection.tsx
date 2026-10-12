"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

interface ConceptCard {
  title: string;
  description: string;
}

const concepts: ConceptCard[] = [
  {
    title: "Workforce SSO",
    description:
      "Identity-provider sign-in for people — not an API credential.",
  },
  {
    title: "Developer credentials",
    description: "Provisioned through the approved developer credential flow.",
  },
  {
    title: "API authentication",
    description: "Confirms the calling client's identity for each request.",
  },
  {
    title: "Resource authorization",
    description:
      "Confirms the authenticated client may access the specific resource.",
  },
];

interface EnvironmentPill {
  label: string;
  url: string;
}

const environments: EnvironmentPill[] = [
  { label: "Production", url: "api.zoikopayroll.com" },
  { label: "Sandbox", url: "sandbox.api.zoikopayroll.com" },
];

export default function AuthenticationEnvironmentsSection() {
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Centered Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
            <span className="text-base leading-none">/</span>
            <span>AUTHENTICATION & ENVIRONMENTS</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-[34px] font-bold tracking-tight text-[#07243B] leading-tight">
            Four distinct concepts — never blurred into one
          </h2>
        </div>

        {/* 4 Cards Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {concepts.map((concept, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-2 flex flex-col justify-start"
            >
              <h3 className="text-sm font-bold text-[#0F172A]">
                {concept.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {concept.description}
              </p>
            </div>
          ))}
        </div>

        {/* Callout / Warning Box with Left Accent Bar */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 border-l-4 border-l-[#0A8FD0] rounded-xl border border-slate-200/80 shadow-xs relative overflow-hidden flex items-start">
          {/* Left Cyan Accent Bar */}

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-2 sm:pl-3">
            <strong className="font-bold text-[#0F172A]">
              Authentication is not authorization.
            </strong>{" "}
            Workforce SSO is never API authentication. Scopes are
            operation-specific and least-privilege first — real credentials are
            never displayed, and credential TTL/expiry/rotation mechanics are
            shown only from approved source documentation.
          </p>
        </div>

        {/* Bottom Environment Base URL Pills & Note */}
        <div className="space-y-4 text-center">
          {/* Pills Row */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {environments.map((env, idx) => {
              const fullText = `${env.label} — ${env.url}`;
              const isCopied = copiedUrl === env.url;

              return (
                <button
                  key={idx}
                  onClick={() => handleCopy(env.url)}
                  className="bg-white hover:bg-slate-50 border border-slate-200/80 rounded-full px-5 py-2.5 text-xs font-medium text-slate-700 shadow-xs transition-colors flex items-center gap-2 cursor-pointer group"
                  title="Click to copy URL"
                >
                  <span>
                    <strong className="font-semibold text-[#0F172A]">
                      {env.label}
                    </strong>{" "}
                    — {env.url}
                  </span>
                  {isCopied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Subtitle / Footer Note */}
          <p className="text-[11px] text-slate-400 font-normal">
            Base URLs are copyable as text. Environment-unavailable states are
            hidden, not fabricated.
          </p>
        </div>
      </div>
    </section>
  );
}
