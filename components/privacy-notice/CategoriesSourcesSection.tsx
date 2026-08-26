"use client";

import React from "react";

export default function CategoriesSourcesSection() {
  return (
    <section id="categories-sources" className="scroll-mt-8 space-y-6">
      {/* Divider */}
      <div className="border-t border-slate-100 pt-8">
        {/* Title & Introduction */}
        <div className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
            Data categories & sources
          </h2>
          <p className="text-[14.5px] text-[#5B646B] leading-relaxed max-w-3xl">
            The categories below use approved category wording only. No live
            employee fields or real personal data appear in this template.
          </p>
        </div>
      </div>

      {/* 2x2 Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card 1: Identity & contact */}
        <div className="bg-[#E9F0F8] rounded-2xl p-6 space-y-2">
          <h3 className="text-sm font-bold text-[#0F172A] tracking-tight">
            Identity & contact
          </h3>
          <p className="text-[12.5px] text-[#5B646B] leading-relaxed">
            Approved identity and business/contact categories, collected
            directly or from an approved indirect source.
          </p>
        </div>

        {/* Card 2: Employment & payroll */}
        <div className="bg-[#E9F0F8] border border-[#DBEAFE] rounded-2xl p-6 space-y-2">
          <h3 className="text-sm font-bold text-[#0F172A] tracking-tight">
            Employment & payroll
          </h3>
          <p className="text-[12.5px] text-[#5B646B] leading-relaxed">
            Source-approved workforce categories relevant to customer-directed
            payroll processing only.
          </p>
        </div>

        {/* Card 3: Financial & tax/statutory */}
        <div className="bg-[#E9F0F8] border border-[#DBEAFE] rounded-2xl p-6 space-y-2">
          <h3 className="text-sm font-bold text-[#0F172A] tracking-tight">
            Financial & tax/statutory
          </h3>
          <p className="text-[12.5px] text-[#5B646B] leading-relaxed">
            Included only where the approved source defines financial or
            statutory categories for a given context.
          </p>
        </div>

        {/* Card 4: Account & usage */}
        <div className="bg-[#E9F0F8] border border-[#DBEAFE] rounded-2xl p-6 space-y-2">
          <h3 className="text-sm font-bold text-[#0F172A] tracking-tight">
            Account & usage
          </h3>
          <p className="text-[12.5px] text-[#5B646B] leading-relaxed">
            Approved account, device, audit, log or usage categories tied to
            product and service operation.
          </p>
        </div>
      </div>

      {/* Footer Note */}
      <p className="text-xs text-[#94A3B8] leading-relaxed">
        Sources are limited to approved direct and indirect source categories on
        record — this notice never infers or implies data brokerage.
      </p>
    </section>
  );
}
