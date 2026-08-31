"use client";

import React from "react";
import { Clock, RefreshCw } from "lucide-react";

interface TimelineStageProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TimelineStage: React.FC<TimelineStageProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center text-center space-y-4 px-4">
      {/* Icon Circle */}
      <div className="w-12 h-12 rounded-full bg-[#E1EEF9] text-[#0A8FD0] flex items-center justify-center shadow-2xs">
        {icon}
      </div>

      {/* Stage Title */}
      <h3 className="text-base font-bold text-[#0F172A]">{title}</h3>

      {/* Stage Description */}
      <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
        {description}
      </p>
    </div>
  );
};

export default function ApprovalFinalizationSection() {
  return (
    <section className="w-full bg-[#F4F8FC] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-4">
          {/* Eyebrow Label: #0A8FD0 */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
            <span className="text-base leading-none">/</span>
            <span>APPROVAL, FINALIZATION & CORRECTIONS</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[#0F172A] leading-tight max-w-3xl mx-auto">
            Reopening finalized time triggers revalidation — never silent reuse
          </h2>

          {/* Subtitle Description */}
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Source approval state and provenance are stored where available.
            Approval and finalization/lock are treated as separate facts —
            reopening finalized time invalidates or makes prior
            payroll-readiness stale.
          </p>
        </div>

        {/* 3-Column Timeline Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          <TimelineStage
            icon={<Clock className="w-5 h-5" />}
            title="Before cutoff"
            description="Validate the new version and supersede the prior one according to policy."
          />

          <TimelineStage
            icon={<Clock className="w-5 h-5" />}
            title="After cutoff"
            description="Routes to payroll review before any downstream application."
          />

          <TimelineStage
            icon={<RefreshCw className="w-5 h-5" />}
            title="After close"
            description="Requires a governed adjustment or retro path — never a silent edit."
          />
        </div>

        {/* Bottom Banner Callout with Blue Left Accent Line */}
        <div className="relative border-l-4 border-[#0A8FD0] bg-white rounded-xl p-6 sm:p-8 shadow-xs mt-6">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            <span className="font-bold text-[#0F172A]">Immutable lineage.</span>{" "}
            Original, replacement, rejected and superseded states are all
            preserved — corrections never erase accepted evidence. Void or
            delete requires explicit semantics; absence alone is never
            sufficient, and duplicate resend never duplicates application.
          </p>
        </div>
      </div>
    </section>
  );
}
