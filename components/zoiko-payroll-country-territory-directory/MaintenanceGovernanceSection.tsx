"use client";

import Reveal from "@/components/ui/Reveal";
import { Check, Info } from "lucide-react";

const governancePoints = [
  "Every record has a named internal owner accountable for accuracy.",
  "Status changes require approved evidence — never inferred from control design alone.",
  'Records past their review deadline surface as "Verification required," not a silent "Available."',
];

export default function MaintenanceGovernanceSection() {
  return (
    <section className="w-full max-w-full min-w-0 overflow-hidden bg-[#F5F8FA] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-[1240px] min-w-0">
        {/* Top Two Column Grid */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Text Column */}
          <div className="lg:col-span-7">
            <Reveal>
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0A78C2]">
                  / HOW AVAILABILITY IS MAINTAINED
                </span>
                <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#082F49] sm:text-3xl lg:text-[34px]">
                  Every record is owned, evidenced and re-checked.
                </h2>
                <p className="mt-4 text-xs font-normal leading-relaxed text-slate-600 sm:text-sm sm:leading-relaxed">
                  This directory reflects a governed registry, not a marketing claim. Each record has an accountable owner and a scheduled review — status is downgraded automatically when evidence goes stale.
                </p>

                {/* Checklist */}
                <div className="mt-6 space-y-3.5">
                  {governancePoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#0A78C2]/10 text-[#0A78C2]">
                        <Check className="h-3 w-3 stroke-[2.5]" aria-hidden="true" />
                      </div>
                      <p className="text-xs text-slate-600 sm:text-sm">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5">
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-md sm:rounded-3xl">
                <img
                  src="/images/zoiko-payroll-country-territory-directory/ctd2.png"
                  alt="City rooftop with light trails showing governed global connectivity"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom Callout Box */}
        <Reveal delay={150}>
          <div className="mt-10 rounded-2xl border border-[#BCE1F5] bg-[#E8F4FA] p-4.5 sm:p-5">
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#0A78C2]" aria-hidden="true" />
              <div>
                <p className="text-xs font-bold text-[#082F49] sm:text-sm">
                  No marketing shortcuts.
                </p>
                <p className="mt-0.5 text-xs leading-relaxed text-slate-600">
                  Terms like &quot;Coming soon,&quot; &quot;Guaranteed,&quot; or &quot;Global coverage&quot; are never used unless Product, Legal and Commercial owners have explicitly approved the exact claim and evidence.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
