"use client";

import React from "react";

export default function RolesContextSection() {
  return (
    <section id="roles-context" className="scroll-mt-8 space-y-6">
      {/* Title & Introduction */}
      <div className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
          Entities, roles & context
        </h2>
        <p className="text-[14.5px] text-[#5B646B] leading-relaxed max-w-3xl">
          This notice uses the approved legal entity name(s) and privacy contact
          on record. Terms like controller, processor, <br /> service provider or
          business are used only where approved for that specific context —
          never applied universally across website, marketing, service, support
          and payroll activity.
        </p>
      </div>

      {/* Cards Container */}
      <div className="space-y-4">
        {/* Card 1: Zoiko-controlled processing */}
        <div className="bg-[#E9F0F8] rounded-2xl p-6 space-y-2">
          <h3 className="text-sm font-bold text-[#0F172A] tracking-tight">
            Zoiko-controlled processing
          </h3>
          <p className="text-[12.5px] text-[#5B646B] leading-relaxed">
            Covers website visitors, business contacts and Zoiko's own
            account/service administration, where Zoiko determines the purpose
            and means of processing.
          </p>
        </div>

        {/* Card 2: Customer-directed processing */}
        <div className="bg-[#E9F0F8] border border-[#DBEAFE] rounded-2xl p-6 space-y-2">
          <h3 className="text-sm font-bold text-[#0F172A] tracking-tight">
            Customer-directed processing
          </h3>
          <p className="text-xs text-[#5B646B] leading-relaxed">
            Covers payroll and workforce data that a customer instructs Zoiko
            Payroll to process on their behalf under an approved Data Processing
            Agreement (DPA). This notice explains the relationship; it does not
            itself prove a DPA is executed for any given customer.
          </p>
        </div>
      </div>
    </section>
  );
}
