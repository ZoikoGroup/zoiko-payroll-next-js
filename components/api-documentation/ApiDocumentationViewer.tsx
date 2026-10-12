"use client";

import React, { useState } from "react";
import { Lock, ArrowRight } from "lucide-react";

interface ResourceItem {
  id: string;
  label: string;
  isExternal?: boolean;
}

const resources: ResourceItem[] = [
  { id: "workers", label: "Workers" },
  { id: "payroll-runs", label: "Payroll Runs" },
  { id: "payslips", label: "Payslips" },
  { id: "deductions", label: "Deductions" },
  { id: "reports", label: "Reports" },
  { id: "webhooks", label: "Webhooks", isExternal: true },
];

export default function ApiDocumentationViewer() {
  const [activeResource, setActiveResource] = useState<string>("workers");
  const [activeTab, setActiveTab] = useState<"example" | "schema" | "errors">(
    "example",
  );

  return (
    <div className="w-full bg-[#EDF4FA] py-16 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="w-full max-w-6xl bg-[#091725] text-white rounded-3xl overflow-hidden shadow-2xl border border-slate-800/80 flex flex-col md:flex-row">
        {/* Sidebar Left */}
        <div className="w-full md:w-56 bg-[#07111D] p-6 flex flex-col space-y-4 shrink-0 border-b md:border-b-0 md:border-r border-slate-800/60">
          <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
            RESOURCES
          </div>
          <nav className="flex flex-col space-y-1">
            {resources.map((item) => {
              const isActive = activeResource === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveResource(item.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors flex items-center justify-between cursor-pointer ${
                    isActive
                      ? "bg-[#162D42] text-white"
                      : "text-slate-400 hover:text-slate-200 hover:bg-[#0E2033]"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.isExternal && (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Content Right */}
        <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-6">
            {/* Header: Method Badge + Endpoint + Version Tag */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="bg-[#123E61] text-[#38BDF8] text-[11px] font-bold px-3 py-1 rounded-md tracking-wider">
                  GET
                </span>
                <span className="font-mono text-xs sm:text-sm font-semibold text-slate-100">
                  /v1/workers/&#123;worker_id&#125;
                </span>
              </div>
              <span className="bg-slate-800/80 text-slate-400 text-[10px] font-medium px-2.5 py-1 rounded-full border border-slate-700/60">
                v1 · CURRENT
              </span>
            </div>

            {/* Sub Tabs: Example | Schema | Errors */}
            <div className="flex items-center gap-6 border-b border-slate-800/80 pb-3 text-xs font-medium">
              <button
                onClick={() => setActiveTab("example")}
                className={`transition-colors cursor-pointer ${
                  activeTab === "example"
                    ? "text-white font-semibold"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Example
              </button>
              <button
                onClick={() => setActiveTab("schema")}
                className={`transition-colors cursor-pointer ${
                  activeTab === "schema"
                    ? "text-white font-semibold"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Schema
              </button>
              <button
                onClick={() => setActiveTab("errors")}
                className={`transition-colors cursor-pointer ${
                  activeTab === "errors"
                    ? "text-white font-semibold"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Errors
              </button>
            </div>

            {/* Code Block Window */}
            <div className="bg-[#0C1E2F] border border-slate-800 rounded-2xl p-4 sm:p-5 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto space-y-2">
              <p className="text-slate-500 font-sans text-[11px]">
                // Example generated from current API contract at build time
              </p>
              <div className="space-y-1">
                <div>
                  <span className="text-sky-400">curl</span> -X GET{" "}
                  <span className="text-emerald-400">
                    &quot;https://api.zoikopayroll.com/v1/workers/&#123;worker_id&#125;&quot;
                  </span>{" "}
                  \
                </div>
                <div className="pl-4">
                  -H{" "}
                  <span className="text-emerald-400">
                    &quot;Authorization: Bearer YOUR_ACCESS_TOKEN&quot;
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Metadata */}
          <div className="flex items-center gap-2 text-[11px] text-slate-400">
            <Lock className="w-3 h-3 text-amber-400/90 shrink-0" />
            <span>
              Requires:{" "}
              <strong className="text-slate-200 font-mono">workers:read</strong>{" "}
              scope · Documented public version
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
