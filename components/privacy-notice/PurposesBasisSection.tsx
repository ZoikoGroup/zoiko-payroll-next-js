"use client";

import React from "react";

export default function PurposesBasisSection() {
  return (
    <section id="purposes-basis" className="scroll-mt-8 space-y-6">
      {/* Divider */}
      <div className="border-t border-slate-100 pt-8">
        {/* Title & Introduction */}
        <div className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
            Purposes, basis & the payroll/service boundary
          </h2>
          <p className="text-[14.5px] text-[#5B646B] leading-relaxed max-w-3xl">
            Every purpose shown is an approved record linked to specific
            categories and context — there is no generic catch-all purpose.
            Legal basis or authority is shown only where required and
            source-backed for that jurisdiction and context.
          </p>
        </div>
      </div>

      {/* Bullet Points List */}
      <ul className="space-y-3 pl-1 text-[13.5px] text-[#5B646B] leading-relaxed">
        <li className="flex items-start gap-2.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#5B646B] shrink-0 mt-2" />
          <span>
            Customer-directed payroll/service processing is kept visually and
            textually distinct from Zoiko-controlled processing.
          </span>
        </li>
        <li className="flex items-start gap-2.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#5B646B] shrink-0 mt-2" />
          <span>
            Basis is never inferred from a visitor's IP address, plan tier or
            assumed persona.
          </span>
        </li>
        <li className="flex items-start gap-2.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#5B646B] shrink-0 mt-2" />
          <span>
            Where applicable, the Data Processing Agreement or Service Terms
            provide contractual processing context — availability of this public
            notice does not by itself prove a DPA has been executed for any
            customer.
          </span>
        </li>
      </ul>
    </section>
  );
}
