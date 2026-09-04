"use client";

import React from "react";

interface ReleaseStep {
  number: string;
  title: string;
  description: string;
}

const releaseSteps: ReleaseStep[] = [
  {
    number: "1",
    title: "Requirements",
    description: "Security & privacy review",
  },
  {
    number: "2",
    title: "Design",
    description: "Threat / risk review",
  },
  {
    number: "3",
    title: "Development",
    description: "Standards & secrets controls",
  },
  {
    number: "4",
    title: "Peer review",
    description: "Risk-based code review",
  },
  {
    number: "5",
    title: "Testing",
    description: "Automated & manual security testing",
  },
  {
    number: "6",
    title: "Release",
    description: "Controlled CI/CD & approvals",
  },
  {
    number: "7",
    title: "Post-release",
    description: "Monitoring & vulnerability intake",
  },
];

export default function SecureDevelopmentSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F8FA] text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
              <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                /
              </span>
              SECURE DEVELOPMENT & VULNERABILITY MANAGEMENT
            </span>
          </div>

          {/* Title (31px) */}
          <h2 className="text-3xl sm:text-4xl lg:text-[31px] font-extrabold text-[#07243B] tracking-tight leading-tight max-w-xl">
            Security built into every release.
          </h2>
        </div>

        {/* Dark Blue Container Card */}
        <div className="bg-[#082F49] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden space-y-12">
          {/* Step-by-Step Flow Line & Nodes (Desktop Grid / Horizontal Line simulation) */}
          <div className="relative">
            {/* Connecting horizontal line for desktop */}
            <div className="hidden lg:block absolute top-6 left-12 right-12 h-0.5 bg-slate-700 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8 relative z-10">
              {releaseSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center space-y-3"
                >
                  {/* Step Number Circle */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold shadow-md transition-all ${
                      step.number === "7"
                        ? "bg-gradient-to-r from-[#2C90D0] to-[#117DC5] text-white shadow-[#2A87C8]/30"
                        : "bg-[#FFFFFF14] text-slate-300 border border-[#FFFFFF59]"
                    }`}
                  >
                    {step.number}
                  </div>

                  {/* Step Title & Subtitle */}
                  <div className="space-y-1">
                    <h3 className="text-xs sm:text-sm font-bold text-white tracking-wide">
                      {step.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Footer Note inside the Dark Box */}
          <div className="pt-6 border-t border-slate-800">
            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed max-w-3xl">
              Automated scanning, dependency monitoring, penetration testing and
              a governed remediation process run continuously — detailed
              findings, exploit paths and scan outputs are never publicly
              indexed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
