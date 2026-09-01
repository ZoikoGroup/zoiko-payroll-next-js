"use client";

import React from "react";

interface CapabilityRow {
  capability: string;
  status: "Supported" | "Validation req." | "Configurable" | "Not approved";
  details: string;
}

const capabilityData: CapabilityRow[] = [
  {
    capability: "Federated sign-in",
    status: "Supported",
    details: "SAML / OIDC",
  },
  {
    capability: "User provisioning",
    status: "Supported",
    details: "SCIM",
  },
  {
    capability: "Group provisioning",
    status: "Validation req.",
    details: "—",
  },
  {
    capability: "Attribute mapping",
    status: "Supported",
    details: "Minimum-necessary",
  },
  {
    capability: "Role / entitlement mapping",
    status: "Configurable",
    details: "Governed",
  },
  {
    capability: "JIT / first-login",
    status: "Not approved",
    details: "—",
  },
  {
    capability: "Deprovisioning",
    status: "Supported",
    details: "SCIM deactivate",
  },
  {
    capability: "Single logout / session",
    status: "Validation req.",
    details: "—",
  },
];

export default function CapabilityMatrixSection() {
  const getBadgeStyle = (status: CapabilityRow["status"]) => {
    switch (status) {
      case "Supported":
        return "bg-[#E6F4EA] text-[#137333]";
      case "Validation req.":
        return "bg-[#FEF7E0] text-[#B06000]";
      case "Configurable":
        return "bg-[#E8F0FE] text-[#1A73E8]";
      case "Not approved":
        return "bg-[#F1F3F4] text-[#5F6368]";
      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  const getDotStyle = (status: CapabilityRow["status"]) => {
    switch (status) {
      case "Supported":
        return "bg-[#137333]";
      case "Validation req.":
        return "bg-[#B06000]";
      case "Configurable":
        return "bg-[#1A73E8]";
      case "Not approved":
        return "bg-[#5F6368]";
      default:
        return "bg-slate-400";
    }
  };

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Centered Header Block */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
            <span className="w-4 h-[2px] bg-[#0A8FD0] inline-block" />
            <span>CAPABILITY MATRIX</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[#07243B] leading-tight">
            What identity integration actually connects
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Never called &quot;SSO + SCIM&quot; unless both capabilities are
            independently evidenced.
          </p>
        </div>

        {/* Browser Mockup Container */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-2xl overflow-hidden">
          {/* Window Bar / Top Bar */}
          <div className="bg-[#F8FAFC] px-6 py-3 border-b border-slate-100 flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            </div>
            <span className="text-[11px] text-slate-400 font-normal ml-2">
              Capability matrix — synthetic example
            </span>
          </div>

          {/* Capability Table */}
          <div className="p-6 sm:p-8">
            <div className="divide-y divide-slate-100">
              {capabilityData.map((row, idx) => (
                <div
                  key={idx}
                  className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/50 transition-colors rounded-lg px-2"
                >
                  {/* Capability Title */}
                  <span className="text-xs sm:text-sm font-bold text-[#07243B] sm:w-1/3">
                    {row.capability}
                  </span>

                  {/* Status Pill */}
                  <div className="sm:w-1/3 flex items-center">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold ${getBadgeStyle(
                        row.status,
                      )}`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${getDotStyle(
                          row.status,
                        )}`}
                      />
                      {row.status}
                    </span>
                  </div>

                  {/* Details / Standard */}
                  <span className="text-xs text-slate-400 font-normal sm:w-1/3 sm:text-right">
                    {row.details}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Callout Box */}
        <div className="bg-[#E6F0FA] p-4 sm:p-5 border-l-4 border-[#0A8FD0] shadow-xs text-center max-w-3xl mx-auto">
          <p className="text-xs text-slate-600 font-medium">
            Group and attribute mapping never silently create privilege —
            default roles stay minimal.
          </p>
        </div>
      </div>
    </section>
  );
}
