"use client";

import React, { useState } from "react";
import {
  Users,
  CreditCard,
  Clock,
  Building2,
  Lock,
  Cog,
  Bell,
  HelpCircle,
} from "lucide-react";

interface CategoryCard {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const integrationAreas: CategoryCard[] = [
  {
    id: "hris",
    label: "HRIS / HCM",
    icon: <Users className="w-5 h-5 text-[#38A5E4]" />,
  },
  {
    id: "finance",
    label: "Finance / ERP",
    icon: <CreditCard className="w-5 h-5 text-[#38A5E4]" />,
  },
  {
    id: "time",
    label: "Time & Attendance",
    icon: <Clock className="w-5 h-5 text-[#38A5E4]" />,
  },
  {
    id: "payments",
    label: "Payments",
    icon: <Building2 className="w-5 h-5 text-[#38A5E4]" />,
  },
  {
    id: "identity",
    label: "Identity & Access",
    icon: <Lock className="w-5 h-5 text-[#38A5E4]" />,
  },
  { id: "api", label: "API", icon: <Cog className="w-5 h-5 text-[#38A5E4]" /> },
  {
    id: "webhooks",
    label: "Webhooks",
    icon: <Bell className="w-5 h-5 text-[#38A5E4]" />,
  },
  {
    id: "other",
    label: "Other / Unknown",
    icon: <HelpCircle className="w-5 h-5 text-[#38A5E4]" />,
  },
];

const issueTypes = [
  "Connection",
  "Authentication",
  "Mapping",
  "Delivery",
  "Status",
  "Data mismatch",
  "Reconciliation",
  "Version",
  "Setup",
  "Other",
];

export default function SecurityDiversionSection() {
  const [selectedArea, setSelectedArea] = useState<string>("finance");
  const [selectedIssue, setSelectedIssue] = useState<string>("Delivery");

  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Block */}
        <div className="space-y-3">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
            <span className="text-[#0A8FD0] font-bold">/</span>
            <span>SECURITY DIVERSION + AREA / ISSUE SELECTION</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[#07243B] leading-tight">
            Security concerns never go through general intake
          </h2>
        </div>

        {/* Security Red Diversion Box */}
        <div className="bg-[#FBE8E8] border border-[#F3C9C9] rounded-[16px] p-6 sm:p-8 space-y-4">
          <div className="space-y-1">
            <p className="font-bold text-[#B23B3B] text-sm sm:text-base flex items-center gap-2">
              <span>⚠️</span>
              <span>
                Suspect credential exposure, a compromised key, or account
                takeover?
              </span>
            </p>
            <p className="text-xs sm:text-sm text-[#B23B3B] leading-relaxed">
              Route directly to the secure security workflow. Normal
              authentication failures stay in Integration Support unless
              compromise is suspected.
            </p>
          </div>

          <div>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-xs font-semibold text-[#07243B] shadow-2xs transition-colors"
            >
              <span>Report a security concern</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Step Indicator Pills */}
        <div className="flex items-center gap-2 pt-2 text-xs font-semibold">
          <span className="px-4 py-2 rounded-xl bg-white text-slate-500 border border-slate-200/80 shadow-2xs">
            1. Security?
          </span>
          <span className="px-4 py-2 rounded-xl bg-[#07243B] text-white shadow-xs">
            2. Integration area
          </span>
          <span className="px-4 py-2 rounded-xl bg-white text-slate-500 border border-slate-200/80 shadow-2xs">
            3. Issue type
          </span>
        </div>

        {/* 4x2 Integration Area Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {integrationAreas.map((area) => {
            const isSelected = area.id === selectedArea;
            return (
              <button
                key={area.id}
                onClick={() => setSelectedArea(area.id)}
                className={`p-5 rounded-2xl border transition-all text-center flex flex-col items-center justify-center gap-3 cursor-pointer ${
                  isSelected
                    ? "bg-white border-[#0A8FD0] shadow-md ring-1 ring-[#0A8FD0]"
                    : "bg-white border-slate-200/80 hover:border-slate-300 shadow-2xs"
                }`}
              >
                <div>{area.icon}</div>
                <span className="text-xs font-bold text-[#07243B]">
                  {area.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Office Image Banner with Status Overlay */}
        <div className="relative aspect-[21/9] sm:aspect-[36/9] w-full rounded-3xl overflow-hidden shadow-xl border border-slate-200/80">
          <img
            src="/images/footer-integrations/45.png"
            alt="Integration team triaging issues"
            className="w-full h-full object-cover"
          />

          {/* Top-left Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-md text-[11px] font-bold text-[#07243B] shadow-xs">
              Triage in progress
            </span>
          </div>

          {/* Bottom-right Badge */}
          <div className="absolute bottom-4 right-4">
            <span className="px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-md text-[11px] font-bold text-[#07243B] shadow-xs">
              Area confirmed — Finance/ERP
            </span>
          </div>
        </div>

        {/* Issue Type Pills Selector */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {issueTypes.map((type) => {
            const isSelected = type === selectedIssue;
            return (
              <button
                key={type}
                onClick={() => setSelectedIssue(type)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-white text-[#07243B] border border-slate-300 shadow-xs font-bold"
                    : "bg-white/80 border border-slate-200 text-slate-600 hover:bg-white hover:text-slate-900"
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
