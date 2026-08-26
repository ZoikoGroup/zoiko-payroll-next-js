"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const lifecycle = ["Prepare", "Calculate", "Validate", "Review", "Approve", "Complete"];

const productAreas = [
  "Payroll Processing",
  "Payroll Approvals",
  "Deductions & Adjustments",
  "Employee Payroll Records",
  "Reporting & Analytics",
  "Integrations",
  "Security & Trust",
  "Implementation",
  "Global Payroll",
];

const roles = ["Payroll teams", "Finance teams", "HR teams", "Business leaders", "Employees"];

export default function BrowseSection() {
  const [activeStage, setActiveStage] = useState(0);
  const [activeArea, setActiveArea] = useState<string | null>(null);
  const [activeRole, setActiveRole] = useState<string | null>(null);

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Browse by payroll lifecycle</Eyebrow>
          <h2 className="mt-3.5 max-w-[620px] text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Follow the run from prepare to complete.
          </h2>
        </Reveal>

        <Reveal
          delay={100}
          className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 sm:grid-cols-3 lg:grid-cols-6"
        >
          {lifecycle.map((stage, index) => {
            const isActive = activeStage === index;
            return (
              <button
                key={stage}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveStage(index)}
                className={`px-3 py-4 text-center transition-colors duration-200 ${
                  isActive ? "bg-brand-gradient" : "bg-white hover:bg-slate-50"
                }`}
              >
                <span
                  className={`block text-[10px] font-bold leading-4 ${
                    isActive ? "text-white/80" : "text-slate-500"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={`mt-1 block text-xs font-bold leading-4 ${
                    isActive ? "text-white" : "text-slate-500"
                  }`}
                >
                  {stage}
                </span>
              </button>
            );
          })}
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-5 max-w-[600px] text-xs leading-5 text-slate-600">
            A video may map to one or more stages — the lifecycle describes Zoiko Payroll workflow
            context, not jurisdiction-specific statutory order.
          </p>
        </Reveal>

        <Reveal delay={160} className="mt-12">
          <Eyebrow>Browse by product area</Eyebrow>
          <div className="mt-5 flex flex-wrap gap-3">
            {productAreas.map((area) => {
              const isActive = activeArea === area;
              return (
                <button
                  key={area}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveArea(isActive ? null : area)}
                  className={`rounded-[20px] border px-4 py-2.5 text-xs font-bold leading-5 transition-colors duration-200 ${
                    isActive
                      ? "border-brand bg-brand text-white"
                      : "border-slate-200 bg-white text-brand-dark hover:border-brand/40"
                  }`}
                >
                  {area}
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-12">
          <Eyebrow>Browse by role</Eyebrow>
          <div className="mt-5 flex flex-wrap gap-3">
            {roles.map((role) => {
              const isActive = activeRole === role;
              return (
                <button
                  key={role}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveRole(isActive ? null : role)}
                  className={`rounded-[20px] border px-4 py-2.5 text-xs font-bold leading-5 transition-colors duration-200 ${
                    isActive
                      ? "border-brand bg-brand text-white"
                      : "border-slate-200 bg-white text-brand-dark hover:border-brand/40"
                  }`}
                >
                  {role}
                </button>
              );
            })}
          </div>

          <p className="mt-5 max-w-[640px] text-xs leading-5 text-slate-600">
            Role filters are recognition aids, not authorization or entitlement controls — a public
            video never proves that a viewer has access to the shown control.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
