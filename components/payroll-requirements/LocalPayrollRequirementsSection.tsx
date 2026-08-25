"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

// Top Metrics inside the Workspace Widget
const WORKSPACE_STATS = [
  { count: "42", label: "CONFIGURED" },
  { count: "5", label: "NEEDS REVIEW" },
  { count: "3", label: "CHANGE DETECTED" },
  { count: "2", label: "FUTURE EFFECTIVE" },
];

// Requirement Items List
const REQUIREMENT_ITEMS = [
  {
    title: "Payroll calendar — Germany",
    subtitle: "Calendar · Owner: M. Weber",
    badge: "Configured",
    badgeClass: "bg-[#137333]/20 text-[#34A853] border border-[#34A853]/30",
  },
  {
    title: "Statutory deduction table — Brazil",
    subtitle: "Calculation · Evidence review due",
    badge: "Needs review",
    badgeClass: "bg-[#B06000]/20 text-[#FBBC04] border border-[#FBBC04]/30",
  },
  {
    title: "Payslip format — France",
    subtitle: "Documents · Effective Oct 2026",
    badge: "Future effective",
    badgeClass: "bg-[#EA4335]/20 text-[#F28B82] border border-[#F28B82]/30",
  },
  {
    title: "Approval delegation — Japan",
    subtitle: "Authority · Change detected",
    badge: "Change detected",
    badgeClass: "bg-[#B06000]/20 text-[#FBBC04] border border-[#FBBC04]/30",
  },
];

// Bottom Hero Stat Items
const HERO_STATS = [
  { value: "6", label: "Requirement dimensions tracked" },
  { value: "100%", label: "Changes effective-dated" },
  { value: "0", label: "Silent auto-activations" },
];

export default function LocalPayrollRequirementsSection() {
  return (
    <section className="w-full bg-[radial-gradient(circle_at_center,#123A5C_0%,#071C2E_50%,#050F1A_100%)]  py-20 px-6 lg:px-16 text-white font-sans antialiased">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Hero Content & Stats */}
        <div className="lg:col-span-6 space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#8FD0F2]">
              <span>/</span>
              <span>Local Payroll Requirements</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Preserve local payroll requirements without losing global control.
            </h2>

            <p className="text-sm sm:text-base text-[#B9CDDD]/80 leading-relaxed">
              Model payroll calendars, calculation context, deductions,
              documents, approvals, currencies and operating practices by
              jurisdiction &mdash; while keeping ownership, effective dates,
              evidence and change history visible in one control framework.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="px-6 py-3 rounded-full bg-[#52B2EC] text-[#051626] font-semibold text-sm hover:bg-[#52B2EC]/90 transition-colors shadow-sm"
            >
              Review a jurisdiction
            </a>
            <a
              href="#"
              className="px-6 py-3 rounded-full border border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              Book a demo
            </a>
          </div>

          {/* Stat Counter Grid */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
            {HERO_STATS.map((stat, index) => (
              <div key={index} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-[#8FD0F2]">
                  {stat.value}
                </div>
                <div className="text-xs text-[#B9CDDD]/70 leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Legal Footnote */}
          <div className="text-xs text-[#B9CDDD]/60">
            Configuration support is not legal advice.{" "}
            <a
              href="#"
              className="text-[#52B2EC] font-semibold inline-flex items-center gap-1 hover:underline"
            >
              See Compliance Workflows <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Right Column: Workspace UI Preview */}
        <div className="lg:col-span-6 space-y-4">
          {/* Main Dashboard Widget Card */}
          <div className="bg-[#0A2E4B] border border-white/10 rounded-2xl p-6 space-y-6 shadow-2xl">
            {/* Widget Top Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-xs bg-[#0281D3]" />
                <h3 className="text-base font-bold text-white">
                  Local Requirements Workspace
                </h3>
              </div>
              <span className="text-xs text-[#B9CDDD]/60 font-mono">
                v14 · as of Aug 2026
              </span>
            </div>

            {/* Stat Pills Grid */}
            <div className="grid grid-cols-4 gap-2 bg-[#FFFFFF0F] p-3 rounded-xl border border-white/5">
              {WORKSPACE_STATS.map((stat, index) => (
                <div key={index} className="space-y-0.5">
                  <div className="text-base sm:text-lg font-bold text-white">
                    {stat.count}
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-[#B9CDDD]/60 font-semibold uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Requirement Items List */}
            <div className="space-y-3">
              {REQUIREMENT_ITEMS.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#FFFFFF0F] border border-white/5 hover:border-white/10 transition-colors"
                >
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#B9CDDD]/60">{item.subtitle}</p>
                  </div>
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${item.badgeClass}`}
                  >
                    {item.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Two Media Cards */}
          <div className="grid grid-cols-2 gap-4">
            {/* Image Card 1 */}
            <div className="relative rounded-xl overflow-hidden h-28 border border-white/10 group">
              <img
                src="/images/payroll-requirements/regional-teams.png"
                alt="Regional teams, one workspace"
                className="w-full h-full object-cover block"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051626] via-transparent to-transparent flex items-end p-3">
                <span className="text-xs font-semibold text-white">
                  Regional teams, one workspace
                </span>
              </div>
            </div>

            {/* Image Card 2 */}
            <div className="relative rounded-xl overflow-hidden h-28 border border-white/10 group">
              <img
                src="/images/payroll-requirements/ownership-market.png"
                alt="Ownership, named per market"
                className="w-full h-full object-cover block"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051626] via-transparent to-transparent flex items-end p-3">
                <span className="text-xs font-semibold text-white">
                  Ownership, named per market
                </span>
              </div>
            </div>
          </div>

          {/* Evidence Owners Footer Box */}
          <div className="bg-[#FFFFFF0F] border border-white/10 rounded-xl p-4 flex items-center gap-4">
            <div className="flex -space-x-2 overflow-hidden shrink-0">
              <img
                className="inline-block object-cover"
                src="/images/payroll-requirements/avatar-1.png"
                alt="Owner 1"
              />
              <img
                className="inline-block object-cover"
                src="/images/payroll-requirements/avatar-2.png"
                alt="Owner 2"
              />
              <img
                className="inline-block object-cover"
                src="/images/payroll-requirements/avatar-3.png"
                alt="Owner 3"
              />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-white">
                Evidence Owners
              </div>
              <div className="text-xs text-[#B9CDDD]/70">
                Named per requirement
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
