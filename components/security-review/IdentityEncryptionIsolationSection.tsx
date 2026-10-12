"use client";

import React from "react";

interface IsolationCategory {
  title: string;
  items: string[];
}

const isolationCategories: IsolationCategory[] = [
  {
    title: "Identity & access",
    items: [
      "Verified authentication & MFA by plan/product scope",
      "Enterprise SSO shown only where verified",
      "Role- and scope-based authorization by tenant/entity",
      "Logged, need-to-know privileged access",
    ],
  },
  {
    title: "Encryption, keys & secrets",
    items: [
      "Verified transport-protection standard where approved",
      "Verified storage-protection standard where approved",
      "Centralized secrets handling — no locations disclosed",
      "Customer-managed keys shown only if entitled & verified",
    ],
  },
  {
    title: "Tenant & environment isolation",
    items: [
      "Access constrained by authenticated tenant context",
      "Permissions scoped to authorized legal entities",
      "Production data never copied to test/demo without control",
      "Support access is authorized, logged and purpose-bound",
    ],
  },
];

export default function IdentityEncryptionIsolationSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#EFF4F7] text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header Block with Right-aligned Subtext */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3">
            {/* Eyebrow Label with slanted dark slash and #0A78C3 text */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
                <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">/</span>
                IDENTITY, ENCRYPTION & ISOLATION
              </span>
            </div>

            {/* Title (31px) */}
            <h2 className="text-[38px] font-extrabold text-[#07243B] tracking-tight leading-tight max-w-2xl">
              Precise, scoped language — never absolute claims.
            </h2>
          </div>

          {/* Right Subtext */}
          <p className="text-xs text-slate-400 font-medium pb-1 max-w-xs md:text-right">
            No "military-grade" or "unbreakable" claims — ever.
          </p>
        </div>

        {/* 3-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {isolationCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-6 hover:border-slate-300 transition-colors"
            >
              {/* Category Title */}
              <h3 className="text-sm sm:text-base font-bold text-[#07243B]">
                {category.title}
              </h3>

              {/* List Items separated by dashed/subtle lines */}
              <div className="space-y-1 flex-1 flex flex-col">
                {category.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="pb-3.5 border-b border-slate-100 last:border-none last:pb-0"
                  >
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}