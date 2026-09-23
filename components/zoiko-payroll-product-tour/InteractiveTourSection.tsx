"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import {
  FileText,
  Calculator,
  CheckCircle,
  Scissors,
  Users,
  BarChart3,
  ArrowRight,
  ArrowLeft,
  Info,
  CheckCircle2,
  AlertTriangle,
  Clock,
} from "lucide-react";

interface StepInfo {
  id: number;
  title: string;
  icon: any;
  aboutTitle: string;
  aboutDescription: string;
  aboutFootnote: string;
}

const steps: StepInfo[] = [
  {
    id: 1,
    title: "Preparation & Inputs",
    icon: FileText,
    aboutTitle: "About this step",
    aboutDescription:
      "Gross-to-net is ready before you move forward. Inputs, source status, and exceptions stay visible in one review path.",
    aboutFootnote:
      "Configurations, regional rules & data fields are set in payroll group master data.",
  },
  {
    id: 2,
    title: "Calculation Review",
    icon: Calculator,
    aboutTitle: "Calculation Verification",
    aboutDescription:
      "Automated gross-to-net engine calculates statutory deductions, employer taxes, and net pay with variance thresholds.",
    aboutFootnote:
      "Variance markers highlight unexpected shifts compared to the previous payroll cycle.",
  },
  {
    id: 3,
    title: "Payroll Approvals",
    icon: CheckCircle,
    aboutTitle: "Multi-tier Sign-off",
    aboutDescription:
      "Enforce segregation of duties with customized approval paths, audit logs, and status controls before final disbursement.",
    aboutFootnote:
      "Sign-offs are permanently timestamped and cryptographically logged for audit compliance.",
  },
  {
    id: 4,
    title: "Deductions & Adjustments",
    icon: Scissors,
    aboutTitle: "Deductions Control",
    aboutDescription:
      "Inspect recurring statutory withholdings, one-time reimbursements, and retro corrections under strict audit scrutiny.",
    aboutFootnote:
      "Adjustments are linked to specific supporting documents and approval rationales.",
  },
  {
    id: 5,
    title: "Employee Records",
    icon: Users,
    aboutTitle: "Digital Payslips & Records",
    aboutDescription:
      "Simulate employee payroll snapshots, itemized payslip statements, and historical payout ledgers across entities.",
    aboutFootnote:
      "Employee access complies with local privacy requirements and data residency laws.",
  },
  {
    id: 6,
    title: "Reporting & Analytics",
    icon: BarChart3,
    aboutTitle: "Statutory & General Ledger",
    aboutDescription:
      "Generate bank transmission files, tax authority remittance summaries, and reconciled general ledger journal entries.",
    aboutFootnote:
      "Exports are generated in standard formats including SEPA, BACS, NACHA, and ERP connectors.",
  },
];

export default function InteractiveTourSection() {
  const [activeStep, setActiveStep] = useState(1);

  const handleNext = () => {
    setActiveStep((prev) => (prev < 6 ? prev + 1 : 1));
  };

  const handlePrev = () => {
    setActiveStep((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const currentStepData = steps[activeStep - 1];

  return (
    <section id="interactive-tour" className="w-full bg-[#F4F8FB] px-4 py-6 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        {/* Desktop Header (Hidden on Mobile) */}
        <Reveal>
          <div className="hidden text-center sm:block">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0A78C2]">
              | INTERACTIVE TOUR
            </span>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#082F49] sm:text-3xl md:text-[34px]">
              Six representative workflows, one guided experience.
            </h2>
          </div>
        </Reveal>

        {/* Mobile View of Guided Tour (sm:hidden) */}
        <div className="sm:hidden">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-[#091E2E] shadow-xl text-white">
              {/* Top Bar */}
              <div className="flex items-center justify-between border-b border-slate-800/90 px-3.5 py-2.5">
                <span className="text-[11px] font-bold text-white">Guided Product Tour</span>
                
                {/* Progress Bar */}
                <div className="h-1 w-20 overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-[#38BDF8] transition-all duration-300"
                    style={{ width: `${(activeStep / 6) * 100}%` }}
                  />
                </div>

                <span className="font-mono text-[10px] text-slate-400">
                  Step {activeStep} of 6 · {Math.round((activeStep / 6) * 100)}%
                </span>
              </div>

              {/* 6 Step Circles (Centered Vertically) */}
              <div className="flex flex-col items-center gap-1.5 py-4">
                {[1, 2, 3, 4, 5, 6].map((num) => {
                  const isActive = num === activeStep;
                  return (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setActiveStep(num)}
                      className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold transition-all ${
                        isActive
                          ? "bg-[#0284C7] text-white shadow-sm ring-2 ring-[#38BDF8]/40"
                          : "bg-[#16364D] text-slate-400 hover:text-white"
                      }`}
                    >
                      {num}
                    </button>
                  );
                })}
              </div>

              {/* Content for Active Step */}
              <div className="px-3.5">
                {/* Run Period Subtitle */}
                <div className="text-[11px] font-medium text-slate-300">
                  Payroll Run — September 2026 — Example Entity (synthetic)
                </div>

                {/* 5 Metric Summary Boxes in a row */}
                <div className="mt-3 grid grid-cols-5 gap-1">
                  <div className="rounded-lg border border-slate-800 bg-[#0D2437] p-1 text-center">
                    <div className="text-xs font-bold text-white">142</div>
                    <div className="text-[7.5px] font-mono uppercase text-slate-400">EMPLOYEES</div>
                  </div>
                  <div className="rounded-lg border border-slate-800 bg-[#0D2437] p-1 text-center">
                    <div className="text-xs font-bold text-white">€412K</div>
                    <div className="text-[7.5px] font-mono uppercase text-slate-400">GROSS PAY</div>
                  </div>
                  <div className="rounded-lg border border-slate-800 bg-[#0D2437] p-1 text-center">
                    <div className="text-xs font-bold text-white">€68K</div>
                    <div className="text-[7.5px] font-mono uppercase text-slate-400">DEDUCTIONS</div>
                  </div>
                  <div className="rounded-lg border border-slate-800 bg-[#0D2437] p-1 text-center">
                    <div className="text-xs font-bold text-white">€79K</div>
                    <div className="text-[7.5px] font-mono uppercase text-slate-400">TAXES</div>
                  </div>
                  <div className="rounded-lg border border-slate-800 bg-[#0D2437] p-1 text-center">
                    <div className="text-xs font-bold text-white">€265K</div>
                    <div className="text-[7.5px] font-mono uppercase text-slate-400">NET PAY</div>
                  </div>
                </div>

                {/* Table */}
                <div className="mt-4">
                  <div className="grid grid-cols-3 border-b border-slate-800 pb-1.5 text-[9px] font-mono uppercase text-slate-400">
                    <span>EMPLOYEE</span>
                    <span>STATUS</span>
                    <span className="text-right">VARIANCE</span>
                  </div>
                  <div className="divide-y divide-slate-800/60 text-[11px]">
                    <div className="grid grid-cols-3 py-2 text-slate-200">
                      <span className="truncate">Employee 0042</span>
                      <span className="text-slate-300">Ready</span>
                      <span className="text-right font-mono text-emerald-400">+2.1%</span>
                    </div>
                    <div className="grid grid-cols-3 py-2 text-slate-200">
                      <span className="truncate">Employee 0118</span>
                      <span className="text-amber-400">Needs review</span>
                      <span className="text-right font-mono text-amber-400">+14.6%</span>
                    </div>
                    <div className="grid grid-cols-3 py-2 text-slate-200">
                      <span className="truncate">Employee 0203</span>
                      <span className="text-slate-300">Ready</span>
                      <span className="text-right font-mono text-slate-400">0.0%</span>
                    </div>
                  </div>
                </div>

                {/* What to Notice Box */}
                <div className="mt-4 pb-4">
                  <div className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    WHAT TO NOTICE
                  </div>
                  <p className="mt-1 text-[11px] leading-relaxed text-slate-300">
                    Employee 0118 shows a variance flag — review before approval.
                  </p>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[#38BDF8] transition-colors hover:text-white"
                  >
                    <span>Next step</span>
                    <span aria-hidden="true">&rarr;</span>
                  </button>
                </div>
              </div>

              {/* Bottom Disclaimer */}
              <div className="border-t border-slate-800/80 bg-[#071926] px-4 py-2 text-center text-[9px] text-slate-400">
                Synthetic data — illustrative product preview, not a live account.
              </div>
            </div>
          </Reveal>
        </div>

        {/* Desktop Guided Tour Card Container (Hidden on Mobile) */}
        <Reveal delay={100} className="hidden sm:block">
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xl sm:rounded-3xl">
            {/* Top Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 bg-[#0B1E2E] px-5 py-3 sm:px-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-white sm:text-sm">
                  Guided Product Tour
                </span>
                <span className="font-mono text-xs text-slate-400">
                  Step {activeStep} of 6
                </span>
              </div>

              {/* Progress bar */}
              <div className="hidden items-center gap-3 sm:flex">
                <div className="h-1.5 w-36 overflow-hidden rounded-full bg-slate-700 md:w-56">
                  <div
                    className="h-full rounded-full bg-[#38BDF8] transition-all duration-300"
                    style={{ width: `${(activeStep / 6) * 100}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="rounded-full border border-slate-700 bg-slate-800/90 px-2.5 py-0.5 font-mono text-[11px] font-medium text-slate-300">
                  Synthetic data
                </span>
                <span className="text-[11px] text-slate-400">Standard View</span>
              </div>
            </div>

            {/* Tour Body */}
            <div className="flex flex-col lg:flex-row">
              {/* Left Sidebar Steps Navigation */}
              <div className="w-full shrink-0 border-b border-slate-200 bg-[#F8FAFC] p-3 sm:p-4 lg:w-64 lg:border-b-0 lg:border-r">
                <div className="flex flex-row gap-1.5 overflow-x-auto pb-1 lg:flex-col lg:gap-2 lg:overflow-visible lg:pb-0">
                  {steps.map((step) => {
                    const isActive = step.id === activeStep;
                    return (
                      <button
                        key={step.id}
                        type="button"
                        onClick={() => setActiveStep(step.id)}
                        className={`flex min-w-[180px] items-center gap-3 rounded-xl px-3 py-2.5 text-left text-xs transition-all sm:text-sm lg:min-w-0 ${
                          isActive
                            ? "border border-slate-200/90 bg-white font-bold text-[#0A78C2] shadow-sm"
                            : "font-medium text-slate-600 hover:bg-slate-200/60 hover:text-slate-900"
                        }`}
                      >
                        <span
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                            isActive
                              ? "bg-[#0A78C2] text-white"
                              : "bg-slate-200 text-slate-600"
                          }`}
                        >
                          {step.id}
                        </span>
                        <span className="truncate">{step.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Center Dashboard & Right Panel */}
              <div className="flex flex-1 flex-col p-4 sm:p-6 lg:p-7">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                  {/* Center Main Stage (Step Content) */}
                  <div className="lg:col-span-8">
                    {activeStep === 1 && <Step1Preparation />}
                    {activeStep === 2 && <Step2Calculation />}
                    {activeStep === 3 && <Step3Approvals />}
                    {activeStep === 4 && <Step4Deductions />}
                    {activeStep === 5 && <Step5Records />}
                    {activeStep === 6 && <Step6Reporting />}
                  </div>

                  {/* Right Panel: About this step + Navigation buttons */}
                  <div className="flex flex-col justify-between rounded-xl border border-slate-200/90 bg-[#F8FAFC] p-5 lg:col-span-4">
                    <div>
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#0A78C2]">
                        {currentStepData.aboutTitle}
                      </span>
                      <p className="mt-3 text-xs leading-relaxed text-slate-700 sm:text-sm">
                        {currentStepData.aboutDescription}
                      </p>
                      <div className="mt-4 border-t border-slate-200/70 pt-3">
                        <p className="text-[11px] leading-normal text-slate-400">
                          {currentStepData.aboutFootnote}
                        </p>
                      </div>
                    </div>

                    {/* Step Action Buttons */}
                    <div className="mt-6 flex items-center justify-end gap-2.5 pt-4">
                      <button
                        type="button"
                        onClick={handlePrev}
                        disabled={activeStep === 1}
                        className={`inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 transition-all ${
                          activeStep === 1
                            ? "cursor-not-allowed opacity-40"
                            : "hover:border-slate-400 hover:bg-slate-50"
                        }`}
                      >
                        <ArrowLeft className="h-3.5 w-3.5" />
                        Back
                      </button>

                      <button
                        type="button"
                        onClick={handleNext}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-[#0A78C2] px-4 py-2 text-xs font-bold text-white transition-all hover:bg-[#0863A0] active:translate-y-0.5"
                      >
                        {activeStep === 6 ? "Restart" : "Next"}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// STEP 1 CONTENT: Preparation & Inputs (Matches design screenshot)
// -------------------------------------------------------------
function Step1Preparation() {
  return (
    <div className="space-y-5">
      {/* Top Metadata Strip */}
      <div className="rounded-xl border border-slate-200 bg-[#F1F5F9]/80 p-3.5 sm:p-4">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div>
            <span className="block font-mono text-[10px] font-semibold uppercase text-slate-400">
              Run Period
            </span>
            <span className="text-xs font-bold text-slate-800">
              Sep 2026 — Bi-weekly
            </span>
          </div>
          <div>
            <span className="block font-mono text-[10px] font-semibold uppercase text-slate-400">
              Pay Group
            </span>
            <span className="text-xs font-bold text-slate-800">
              Europe Entity — P01
            </span>
          </div>
          <div>
            <span className="block font-mono text-[10px] font-semibold uppercase text-slate-400">
              Period
            </span>
            <span className="text-xs font-bold text-slate-800">
              Sep 1 – Sep 15
            </span>
          </div>
          <div>
            <span className="block font-mono text-[10px] font-semibold uppercase text-slate-400">
              Processing Date
            </span>
            <span className="text-xs font-bold text-slate-800">
              Sep 15, 2026
            </span>
          </div>
          <div>
            <span className="block font-mono text-[10px] font-semibold uppercase text-slate-400">
              Entity
            </span>
            <span className="text-xs font-bold text-slate-800">
              Example Entity B.V.
            </span>
          </div>
          <div>
            <span className="block font-mono text-[10px] font-semibold uppercase text-slate-400">
              Currency
            </span>
            <span className="text-xs font-bold text-slate-800">EUR</span>
          </div>
          <div>
            <span className="block font-mono text-[10px] font-semibold uppercase text-slate-400">
              Status
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-600">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              Cycle in progress
            </span>
          </div>
          <div>
            <span className="block font-mono text-[10px] font-semibold uppercase text-slate-400">
              Starting Headcount
            </span>
            <span className="text-xs font-bold text-slate-800">142</span>
          </div>
        </div>
      </div>

      {/* 4 Summary Stats */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-xl border border-slate-200/90 bg-white p-3.5 text-center shadow-xs">
          <div className="text-xl font-extrabold text-[#082F49]">142</div>
          <div className="mt-0.5 text-[11px] text-slate-500">Active in payroll</div>
        </div>
        <div className="rounded-xl border border-slate-200/90 bg-white p-3.5 text-center shadow-xs">
          <div className="text-xl font-extrabold text-[#082F49]">126</div>
          <div className="mt-0.5 text-[11px] text-slate-500">Inputs received</div>
        </div>
        <div className="rounded-xl border border-slate-200/90 bg-white p-3.5 text-center shadow-xs">
          <div className="text-xl font-extrabold text-[#082F49]">14</div>
          <div className="mt-0.5 text-[11px] text-slate-500">Awaiting review</div>
        </div>
        <div className="rounded-xl border border-slate-200/90 bg-white p-3.5 text-center shadow-xs">
          <div className="text-xl font-extrabold text-amber-600">2</div>
          <div className="mt-0.5 text-[11px] text-slate-500">Exceptions</div>
        </div>
      </div>

      {/* Input Overview Table */}
      <div>
        <div className="text-xs font-bold text-slate-700">Input overview</div>
        <div className="mt-2 overflow-x-auto rounded-lg border border-slate-200">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#F8FAFC] font-mono text-[10px] uppercase text-slate-400">
              <tr>
                <th className="px-3 py-2 font-medium">Source</th>
                <th className="px-3 py-2 font-medium">Type</th>
                <th className="px-3 py-2 font-medium">Last Sync</th>
                <th className="px-3 py-2 font-medium">Records</th>
                <th className="px-3 py-2 font-medium">Status</th>
                <th className="px-3 py-2 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white text-slate-700">
              <tr>
                <td className="px-3 py-2.5 font-medium">HR System Connector</td>
                <td className="px-3 py-2.5 text-slate-500">Summary</td>
                <td className="px-3 py-2.5 text-slate-400">2h ago</td>
                <td className="px-3 py-2.5 font-semibold">142</td>
                <td className="px-3 py-2.5">
                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 border border-emerald-200">
                    Received
                  </span>
                </td>
                <td className="px-3 py-2.5 text-right font-medium text-[#0A78C2] hover:underline cursor-pointer">
                  View
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2.5 font-medium">Time System Connector</td>
                <td className="px-3 py-2.5 text-slate-500">Variable pay</td>
                <td className="px-3 py-2.5 text-slate-400">4h ago</td>
                <td className="px-3 py-2.5 font-semibold">138</td>
                <td className="px-3 py-2.5">
                  <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-700 border border-amber-200">
                    Partial
                  </span>
                </td>
                <td className="px-3 py-2.5 text-right font-medium text-[#0A78C2] hover:underline cursor-pointer">
                  View
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2.5 font-medium">Manual entry</td>
                <td className="px-3 py-2.5 text-slate-500">One-time adjustment</td>
                <td className="px-3 py-2.5 text-slate-400">10m ago</td>
                <td className="px-3 py-2.5 font-semibold">6</td>
                <td className="px-3 py-2.5">
                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 border border-emerald-200">
                    Received
                  </span>
                </td>
                <td className="px-3 py-2.5 text-right font-medium text-[#0A78C2] hover:underline cursor-pointer">
                  View
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Exceptions Requiring Review */}
      <div>
        <div className="text-xs font-bold text-slate-700">
          Exceptions requiring review
        </div>
        <div className="mt-2 overflow-x-auto rounded-lg border border-slate-200">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#F8FAFC] font-mono text-[10px] uppercase text-slate-400">
              <tr>
                <th className="px-3 py-2 font-medium">Exception ID</th>
                <th className="px-3 py-2 font-medium">Category</th>
                <th className="px-3 py-2 font-medium">Severity</th>
                <th className="px-3 py-2 font-medium">Owner</th>
                <th className="px-3 py-2 font-medium text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white text-slate-700">
              <tr>
                <td className="px-3 py-2 font-mono font-medium text-[#0A78C2]">
                  EX-1042
                </td>
                <td className="px-3 py-2">Missing hour</td>
                <td className="px-3 py-2">
                  <span className="rounded bg-amber-100 px-1.5 py-0.5 font-mono text-[10px] font-bold text-amber-800">
                    P2
                  </span>
                </td>
                <td className="px-3 py-2 text-slate-600">Payroll Ops</td>
                <td className="px-3 py-2 text-right font-medium text-amber-600">
                  Open
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-mono font-medium text-[#0A78C2]">
                  EX-1044
                </td>
                <td className="px-3 py-2">Bonus mismatch</td>
                <td className="px-3 py-2">
                  <span className="rounded bg-red-100 px-1.5 py-0.5 font-mono text-[10px] font-bold text-red-800">
                    P1
                  </span>
                </td>
                <td className="px-3 py-2 text-slate-600">Payroll Ops</td>
                <td className="px-3 py-2 text-right font-medium text-amber-600">
                  Open
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// STEP 2: Calculation Review
// -------------------------------------------------------------
function Step2Calculation() {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-slate-200 bg-[#F1F5F9]/80 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-xs font-bold text-slate-800">
              Calculation Simulation · Gross to Net
            </h4>
            <p className="text-[11px] text-slate-500">
              Automated rules executed against 142 employee records
            </p>
          </div>
          <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-800">
            Calculated
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-xl border border-slate-200 bg-white p-3.5 text-center">
          <div className="text-xs text-slate-400">Total Gross Pay</div>
          <div className="mt-1 text-lg font-extrabold text-slate-800">
            €548,220.00
          </div>
          <span className="text-[10px] font-medium text-emerald-600">
            +1.4% vs last cycle
          </span>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-3.5 text-center">
          <div className="text-xs text-slate-400">Taxes & Deductions</div>
          <div className="mt-1 text-lg font-extrabold text-slate-800">
            €164,466.00
          </div>
          <span className="text-[10px] font-medium text-slate-400">
            Statutory withholding
          </span>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-3.5 text-center">
          <div className="text-xs text-slate-400">Total Net Disbursement</div>
          <div className="mt-1 text-lg font-extrabold text-[#0A78C2]">
            €383,754.00
          </div>
          <span className="text-[10px] font-medium text-emerald-600">
            142 payslips ready
          </span>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <h5 className="text-xs font-bold text-slate-700">Variance Highlights</h5>
        <div className="mt-2 divide-y divide-slate-100 text-xs">
          <div className="flex items-center justify-between py-2">
            <span>Base Salaries</span>
            <span className="font-mono font-semibold">€492,000.00 (Normal)</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span>Overtime & Shift Differentials</span>
            <span className="font-mono font-semibold text-amber-600">
              €18,220.00 (+12% flagged)
            </span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span>One-Time Adjustments</span>
            <span className="font-mono font-semibold">€38,000.00 (Approved)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// STEP 3: Approvals
// -------------------------------------------------------------
function Step3Approvals() {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-slate-200 bg-[#F1F5F9]/80 p-4">
        <h4 className="text-xs font-bold text-slate-800">Approval Workflow</h4>
        <p className="text-[11px] text-slate-500">
          Enforce sequential sign-offs across finance and compliance leads
        </p>
      </div>

      <div className="space-y-2.5">
        <div className="flex items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50/50 p-3.5">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
            <div>
              <div className="text-xs font-bold text-slate-800">
                1. Local Payroll Specialist Sign-off
              </div>
              <div className="text-[11px] text-slate-500">
                Completed by Elena Rostova · Aug 04, 11:20
              </div>
            </div>
          </div>
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-bold text-emerald-800">
            Approved
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-blue-200 bg-blue-50/50 p-3.5">
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-[#0A78C2]" />
            <div>
              <div className="text-xs font-bold text-slate-800">
                2. Finance Controller Review
              </div>
              <div className="text-[11px] text-slate-500">
                Pending review by Marcus Vance · Due in 4 hours
              </div>
            </div>
          </div>
          <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[11px] font-bold text-[#0A78C2]">
            Ready for review
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50/70 p-3.5 opacity-70">
          <div className="flex items-center gap-3">
            <div className="h-5 w-5 rounded-full border-2 border-slate-300" />
            <div>
              <div className="text-xs font-bold text-slate-700">
                3. Final Disbursement Release
              </div>
              <div className="text-[11px] text-slate-400">
                Awaiting predecessor sign-offs
              </div>
            </div>
          </div>
          <span className="text-[11px] font-semibold text-slate-400">Queued</span>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// STEP 4: Deductions & Adjustments
// -------------------------------------------------------------
function Step4Deductions() {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-slate-200 bg-[#F1F5F9]/80 p-4">
        <h4 className="text-xs font-bold text-slate-800">
          Deductions & Adjustment Schedules
        </h4>
        <p className="text-[11px] text-slate-500">
          Inspect statutory pension schemes, healthcare, and tax deductions
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="w-full text-left text-xs">
          <thead className="bg-[#F8FAFC] font-mono text-[10px] uppercase text-slate-400">
            <tr>
              <th className="px-3 py-2">Deduction Type</th>
              <th className="px-3 py-2">Category</th>
              <th className="px-3 py-2">Applies To</th>
              <th className="px-3 py-2">Total Amount</th>
              <th className="px-3 py-2 text-right">Audit Flag</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            <tr>
              <td className="px-3 py-2.5 font-medium">State Pension Fund</td>
              <td className="px-3 py-2.5 text-slate-500">Statutory Pre-tax</td>
              <td className="px-3 py-2.5">142 employees</td>
              <td className="px-3 py-2.5 font-mono font-semibold">€44,120.00</td>
              <td className="px-3 py-2.5 text-right text-emerald-600">Verified</td>
            </tr>
            <tr>
              <td className="px-3 py-2.5 font-medium">Private Health Coverage</td>
              <td className="px-3 py-2.5 text-slate-500">Voluntary Benefit</td>
              <td className="px-3 py-2.5">118 employees</td>
              <td className="px-3 py-2.5 font-mono font-semibold">€18,650.00</td>
              <td className="px-3 py-2.5 text-right text-emerald-600">Verified</td>
            </tr>
            <tr>
              <td className="px-3 py-2.5 font-medium">Retro Salary Adjustment</td>
              <td className="px-3 py-2.5 text-amber-600">One-time Retro</td>
              <td className="px-3 py-2.5">3 employees</td>
              <td className="px-3 py-2.5 font-mono font-semibold">€2,450.00</td>
              <td className="px-3 py-2.5 text-right text-blue-600">Logged</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// STEP 5: Employee Records
// -------------------------------------------------------------
function Step5Records() {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-slate-200 bg-[#F1F5F9]/80 p-4">
        <h4 className="text-xs font-bold text-slate-800">
          Simulated Employee Payroll Records
        </h4>
        <p className="text-[11px] text-slate-500">
          Itemized payslip breakdown and audit-ready history
        </p>
      </div>

      <div className="divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white">
        <div className="flex items-center justify-between p-3.5">
          <div>
            <span className="font-mono text-[10px] text-slate-400">EMP-9021</span>
            <div className="text-xs font-bold text-slate-800">
              Johannes van Dijk
            </div>
            <div className="text-[11px] text-slate-500">
              Senior Software Engineer · Amsterdam, NL
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs font-mono font-bold text-slate-800">
              €4,820.00 Net
            </span>
            <div className="text-[10px] text-emerald-600">PDF Ready</div>
          </div>
        </div>

        <div className="flex items-center justify-between p-3.5">
          <div>
            <span className="font-mono text-[10px] text-slate-400">EMP-9022</span>
            <div className="text-xs font-bold text-slate-800">
              Sophie Dupont
            </div>
            <div className="text-[11px] text-slate-500">
              Operations Lead · Paris, FR
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs font-mono font-bold text-slate-800">
              €4,350.00 Net
            </span>
            <div className="text-[10px] text-emerald-600">PDF Ready</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// STEP 6: Reporting & Analytics
// -------------------------------------------------------------
function Step6Reporting() {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-slate-200 bg-[#F1F5F9]/80 p-4">
        <h4 className="text-xs font-bold text-slate-800">
          Payroll Summary & Export Artifacts
        </h4>
        <p className="text-[11px] text-slate-500">
          Audit packages, bank disbursement vectors, and ERP integrations
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-slate-200 bg-white p-3.5">
          <div className="text-xs font-bold text-slate-800">SEPA ISO 20022 XML</div>
          <div className="mt-1 text-[11px] text-slate-500">
            Validated against banking rails
          </div>
          <span className="mt-2 inline-block rounded bg-blue-50 px-2 py-0.5 text-[10px] font-bold text-[#0A78C2]">
            Ready to dispatch
          </span>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-3.5">
          <div className="text-xs font-bold text-slate-800">Tax Remittance File</div>
          <div className="mt-1 text-[11px] text-slate-500">
            Jurisdiction statutory package
          </div>
          <span className="mt-2 inline-block rounded bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
            Reconciled
          </span>
        </div>
      </div>
    </div>
  );
}
