"use client";

import React from "react";
import { ArrowRight, AlertTriangle } from "lucide-react";

interface MfaIssue {
  title: string;
  description: string;
  supportLink: string;
}

const mfaIssues: MfaIssue[] = [
  {
    title: "Code not arriving",
    description: "Check delivery method and request a new code.",
    supportLink: "#",
  },
  {
    title: "Lost or replaced phone",
    description: "Recover verification through an approved alternate method.",
    supportLink: "#",
  },
  {
    title: "Authenticator app unavailable",
    description: "Use a backup method or approved recovery route.",
    supportLink: "#",
  },
  {
    title: "Changed phone number",
    description: "Update your verification method securely once signed in.",
    supportLink: "#",
  },
  {
    title: "Too many attempts",
    description: "Rate protection is active — wait or use approved recovery.",
    supportLink: "#",
  },
  {
    title: "Employer SSO MFA",
    description: "Your employer's identity provider owns this.",
    supportLink: "#",
  },
];

export default function MfaVerificationHelpSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-[1px] text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>MFA & VERIFICATION HELP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-[1px] text-[#07243B] leading-tight">
            Choose the issue closest to yours
          </h2>
        </div>

        {/* Card List Container */}
        <div className="bg-white rounded-3xl max-w-4xl mx-auto border border-slate-200/80 shadow-2xs divide-y divide-slate-100 overflow-hidden">
          {mfaIssues.map((issue, index) => (
            <div
              key={index}
              className="p-6 sm:px-8 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/60 transition-colors"
            >
              {/* Text Content */}
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-bold text-[#07243B] tracking-[1px]">
                  {issue.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium tracking-[1px]">
                  {issue.description}
                </p>
              </div>

              {/* Action Link */}
              <a
                href={issue.supportLink}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0A8FD0] hover:underline shrink-0 pt-1 sm:pt-0"
              >
                <span className="tracking-[1px]">Contact support</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Suspicious MFA Warning Callout */}
        <div className="relative bg-white rounded-2xl border-l-4 border-l-[#A14842] border border-slate-200/80 p-6 sm:p-7 shadow-2xs overflow-hidden flex items-start gap-3">
          {/* Red Accent Bar */}

          <div className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-600 leading-relaxed tracking-[1px]">
            <span className="inline-flex items-center gap-1.5 font-bold text-[#07243B] shrink-0">
              <AlertTriangle className="w-4 h-4 text-[#07243B]" />
              Suspicious MFA prompt?
            </span>
            <span>
              If you received a verification prompt you didn&apos;t request, do
              not approve it. Secure your account and report suspicious activity
              immediately.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
