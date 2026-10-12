"use client";

import React from "react";

interface Step {
  title: string;
  description: string;
  isActive?: boolean;
}

const recoverySteps: Step[] = [
  {
    title: "Start",
    description: "You request password recovery.",
  },
  {
    title: "Neutral confirmation",
    description: "Same message shown, whether or not an account exists.",
    isActive: true,
  },
  {
    title: "Link sent (if eligible)",
    description: "Sent only to your verified contact method.",
  },
  {
    title: "Reset complete",
    description: "Sign in with your new password.",
  },
];

const issueTags = [
  "Expired reset link",
  "Account locked",
  "Repeated login failure",
  "Unknown email/username",
  "Browser/session issue",
  "Persistent technical error",
];

export default function PasswordRecoverySection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>PASSWORD RECOVERY & SIGN-IN TROUBLE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#07243B] leading-tight">
            A neutral response — every time
          </h2>

          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
            Whether or not an account exists, the confirmation message is
            identical. Account existence is never revealed before approved
            verification.
          </p>
        </div>

        {/* Vertical Stepper Timeline */}
        <div className="max-w-md mx-auto relative pl-6 space-y-8">
          {/* Vertical Connecting Line */}
          <div className="absolute left-[9px] top-3 bottom-3 w-[2px] bg-slate-200" />

          {recoverySteps.map((step, index) => (
            <div key={index} className="relative flex items-start gap-4">
              {/* Stepper Node Indicator */}
              <div
                className={`absolute -left-[24px] top-1 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                  step.isActive
                    ? "border-[#0A8FD0] bg-[#0A8FD0]"
                    : "border-slate-300 bg-white"
                }`}
              >
                {step.isActive && (
                  <div className="w-2 h-2 rounded-full" />
                )}
              </div>

              {/* Step Content */}
              <div className="space-y-0.5">
                <h3
                  className={`text-sm font-bold ${
                    step.isActive ? "text-[#07243B]" : "text-slate-700"
                  }`}
                >
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 font-medium leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Issue Filter Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mx-auto pt-4">
          {issueTags.map((tag, idx) => (
            <button
              key={idx}
              type="button"
              className="bg-white hover:bg-slate-50 text-[#07243B] text-xs font-semibold px-4 py-2 rounded-full border border-slate-200/80 shadow-2xs transition-all"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
