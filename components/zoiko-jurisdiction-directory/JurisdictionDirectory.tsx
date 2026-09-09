'use client';

import React, { useState } from 'react';
import Link from 'next/link';

type StatusColor = 'green' | 'orange' | 'blue';

interface CapabilityStatus {
  name: string;
  status: StatusColor;
}

interface Jurisdiction {
  id: string;
  code: string;
  name: string;
  region: string;
  subJurisdictionNote?: string;
  deliveryModels: {
    label: string;
    variant: 'default' | 'partner' | 'connected';
  }[];
  capabilities: CapabilityStatus[];
  hasGuide: boolean;
  hasRequirements: boolean;
  reviewedDate: string;
}

const jurisdictionsData: Jurisdiction[] = [
  {
    id: 'us',
    code: 'US',
    name: 'United States',
    region: 'Americas',
    subJurisdictionNote: '50 states apply · View sub-jurisdictions →',
    deliveryModels: [
      { label: 'Zoiko Payroll', variant: 'default' },
      { label: 'Partner-supported (filing)', variant: 'default' },
    ],
    capabilities: [
      { name: 'Payroll processing', status: 'green' },
      { name: 'Payslips', status: 'green' },
      { name: 'Filing & reporting', status: 'orange' },
      { name: 'Payments', status: 'green' },
      { name: 'Year-end', status: 'orange' },
    ],
    hasGuide: true,
    hasRequirements: true,
    reviewedDate: 'Jul 2026',
  },
  {
    id: 'gb',
    code: 'GB',
    name: 'United Kingdom',
    region: 'Europe',
    deliveryModels: [{ label: 'Zoiko Payroll', variant: 'default' }],
    capabilities: [
      { name: 'Payroll processing', status: 'green' },
      { name: 'Payslips', status: 'green' },
      { name: 'Filing & reporting', status: 'green' },
      { name: 'Payments', status: 'green' },
      { name: 'Year-end', status: 'green' },
    ],
    hasGuide: true,
    hasRequirements: true,
    reviewedDate: 'Aug 2026',
  },
  {
    id: 'de',
    code: 'DE',
    name: 'Germany',
    region: 'Europe',
    deliveryModels: [{ label: 'Connected payroll', variant: 'connected' }],
    capabilities: [
      { name: 'Payroll processing', status: 'orange' },
      { name: 'Payslips', status: 'green' },
      { name: 'Filing & reporting', status: 'orange' },
      { name: 'Payments', status: 'blue' },
      { name: 'Year-end', status: 'orange' },
    ],
    hasGuide: true,
    hasRequirements: false,
    reviewedDate: 'Jun 2026',
  },
  {
    id: 'sg',
    code: 'SG',
    name: 'Singapore',
    region: 'Asia-Pacific',
    deliveryModels: [{ label: 'Zoiko Payroll', variant: 'default' }],
    capabilities: [
      { name: 'Payroll processing', status: 'green' },
      { name: 'Payslips', status: 'green' },
      { name: 'Filing & reporting', status: 'green' },
      { name: 'Payments', status: 'green' },
      { name: 'Year-end', status: 'blue' },
    ],
    hasGuide: true,
    hasRequirements: true,
    reviewedDate: 'Aug 2026',
  },
  {
    id: 'br',
    code: 'BR',
    name: 'Brazil',
    region: 'Americas',
    deliveryModels: [{ label: 'Partner-supported', variant: 'partner' }],
    capabilities: [
      { name: 'Payroll processing', status: 'orange' },
      { name: 'Payslips', status: 'orange' },
      { name: 'Filing & reporting', status: 'orange' },
      { name: 'Payments', status: 'blue' },
      { name: 'Year-end', status: 'blue' },
    ],
    hasGuide: true,
    hasRequirements: false,
    reviewedDate: 'May 2026',
  },
  {
    id: 'in',
    code: 'IN',
    name: 'India',
    region: 'Asia-Pacific',
    subJurisdictionNote: 'State professional tax applies · View sub-jurisdictions →',
    deliveryModels: [
      { label: 'Zoiko Payroll', variant: 'default' },
      { label: 'Partner-supported (filing)', variant: 'default' },
    ],
    capabilities: [
      { name: 'Payroll processing', status: 'green' },
      { name: 'Payslips', status: 'green' },
      { name: 'Filing & reporting', status: 'orange' },
      { name: 'Payments', status: 'orange' },
      { name: 'Year-end', status: 'blue' },
    ],
    hasGuide: true,
    hasRequirements: true,
    reviewedDate: 'Jul 2026',
  },
];

export default function JurisdictionDirectory() {
  const [selectedJurisdictions, setSelectedJurisdictions] = useState<string[]>([]);
  const [selectedRegion, setSelectedRegion] = useState('All');

  const toggleCompare = (id: string) => {
    setSelectedJurisdictions((prev) => {
      if (prev.includes(id)) return prev.filter((item) => item !== id);
      if (prev.length >= 4) return prev;
      return [...prev, id];
    });
  };

  // ✅ Fixed colors + rounded-[3px] applied in JSX
  const getDotColor = (status: StatusColor) => {
    switch (status) {
      case 'green':  return 'bg-[#16A34A]';
      case 'orange': return 'bg-[#E65100]';
      case 'blue':   return 'bg-[#64748B]';
      default:       return 'bg-gray-400';
    }
  };

  return (
    <div className="w-full min-h-screen py-10 px-4 sm:px-8 lg:pl-40 lg:pr-24 font-['Segoe_UI',-apple-system,BlinkMacSystemFont,sans-serif] text-[#0A1626]">
      <div className="max-w-[1114px] mx-auto bg-white p-6 rounded-2xl shadow-sm border border-[#E2E8F0] flex flex-col gap-4">

        {/* ================= FILTER BAR ================= */}
        <div className="w-full p-3.5 bg-white rounded-xl shadow-[0px_1px_4px_rgba(10,22,38,0.05)] border border-[#E2E8F0] flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2.5">

            {/* Region — active, globe icon */}
            <button
              type="button"
              className="px-3.5 py-1.5 bg-[#F0F5FF] text-[#0052CC] text-sm font-semibold rounded-lg border border-[#B3D4FF] hover:bg-[#E0EDFF] transition-colors flex items-center gap-1.5"
            >
              <img src={encodeURI('/SVG (27).png')} alt="Region" className="w-3.5 h-3.5 object-contain" />
              <span>Region: {selectedRegion} ▾</span>
            </button>

            {/* Delivery model — □ icon */}
            <button
              type="button"
              className="px-3.5 py-1.5 bg-white text-[#0A1626] text-sm font-semibold rounded-lg border border-[#E2E8F0] hover:bg-slate-50 transition-colors flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 text-[#64748B] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="3" strokeWidth="2" />
              </svg>
              Delivery model ▾
            </button>

            {/* Capabilities — ✓ icon */}
            <button
              type="button"
              className="px-3.5 py-1.5 bg-white text-[#0A1626] text-sm font-semibold rounded-lg border border-[#E2E8F0] hover:bg-slate-50 transition-colors flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 text-[#64748B] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
              Capabilities ▾
            </button>

            {/* Guide available & Jurisdiction type — no icon */}
            {['Guide available ▾', 'Jurisdiction type ▾'].map((filter) => (
              <button
                key={filter}
                type="button"
                className="px-3.5 py-1.5 bg-white text-[#0A1626] text-sm font-semibold rounded-lg border border-[#E2E8F0] hover:bg-slate-50 transition-colors"
              >
                {filter}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => { setSelectedRegion('All'); setSelectedJurisdictions([]); }}
            className="text-[#0052CC] hover:text-[#003D99] text-sm font-semibold transition-colors ml-auto"
          >
            Clear all
          </button>
        </div>

        {/* ================= RESULTS HEADER ================= */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1 pb-1">
          <div className="flex items-baseline gap-2">
            <span className="text-[#0A1626] text-base font-bold">48 jurisdictions</span>
            <span className="text-[#64748B] text-xs font-normal">Coverage may vary by capability and service scope.</span>
          </div>
          <div className="flex items-center gap-2.5">
            <button type="button" className="px-3.5 py-1.5 bg-white text-[#0A1626] text-xs font-bold rounded-lg border border-[#E2E8F0] hover:bg-slate-50 transition-colors">
              Compare selected ({selectedJurisdictions.length}/4)
            </button>
            <button type="button" className="px-3.5 py-1.5 bg-white text-[#0A1626] text-xs font-bold rounded-lg border border-[#E2E8F0] hover:bg-slate-50 transition-colors flex items-center gap-1">
              Sort: A–Z ▾
            </button>
          </div>
        </div>

        {/* ================= JURISDICTION CARDS ================= */}
        <div className="flex flex-col gap-3">
          {jurisdictionsData.map((item) => {
            const isCompared = selectedJurisdictions.includes(item.id);

            return (
              <div
                key={item.id}
                className="w-full px-5 py-5 bg-white rounded-xl shadow-[0px_1px_3px_rgba(10,22,38,0.04)] border border-[#E2E8F0] hover:border-[#CBD5E1] transition-all flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5"
              >

                {/* 1. Country info */}
                <div className="flex items-start gap-3.5 min-w-[220px]">
                  <div className="w-9 h-9 bg-[#F1F5F9] rounded-lg flex items-center justify-center font-bold text-xs text-[#0F172A] tracking-wider shrink-0 border border-[#E2E8F0]">
                    {item.code}
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-base font-bold text-[#0A1626] leading-tight">{item.name}</h4>
                    <span className="text-xs text-[#64748B] mt-0.5">Country · {item.region}</span>
                    {item.subJurisdictionNote && (
                      <Link href="#" className="text-xs text-[#0052CC] hover:underline font-semibold mt-1 leading-snug max-w-[160px]">
                        {item.subJurisdictionNote}
                      </Link>
                    )}
                  </div>
                </div>

                {/* 2. Delivery Models + Capabilities */}
                <div className="flex-1 flex flex-col gap-2.5 w-full">

                  {/* Delivery model — plain text, only partner gets pill */}
                  <div className="flex flex-wrap items-center gap-4">
                    {item.deliveryModels.map((badge, idx) =>
                      badge.variant === 'partner' ? (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-xs font-bold bg-[#FEE2E2] text-[#DC2626] border border-[#FECACA] flex items-center gap-1.5"
                        >
                          {/* ✅ rounded-[3px] square dot */}
                          <span className="w-1.5 h-1.5 rounded-[3px] bg-[#DC2626]" />
                          {badge.label}
                        </span>
                      ) : (
                        <span key={idx} className="text-sm font-medium text-[#0A1626]">
                          {badge.label}
                        </span>
                      )
                    )}
                  </div>

                  {/* ✅ Capability chips — rounded-[3px] dots, fixed colors */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {item.capabilities.map((cap) => (
                      <span
                        key={cap.name}
                        className="px-2.5 py-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-md text-xs font-semibold text-[#4E6172] flex items-center gap-1.5"
                      >
                        <span className={`w-1.5 h-1.5 rounded-[3px] ${getDotColor(cap.status)}`} />
                        {cap.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 3. Guide / Date / Compare / View */}
                <div className="flex flex-col items-start lg:items-end gap-2 shrink-0 min-w-[200px] w-full lg:w-auto pt-2 lg:pt-0 border-t lg:border-t-0 border-[#F1F5F9]">

                  <div className="flex items-center gap-3 text-xs font-bold text-[#0052CC]">
                    {item.hasGuide && <Link href="#" className="hover:underline">Guide</Link>}
                    {item.hasRequirements && <Link href="#" className="hover:underline">Requirements</Link>}
                  </div>

                  <span className="text-xs text-[#64748B]">Coverage reviewed {item.reviewedDate}</span>

                  <div className="flex items-center gap-3 mt-1">
                    <label className="flex items-center gap-1.5 cursor-pointer text-xs font-bold text-[#1E293B] select-none">
                      {/* ✅ accent-[#0052CC] — blue checkbox when checked */}
                      <input
                        type="checkbox"
                        checked={isCompared}
                        onChange={() => toggleCompare(item.id)}
                        className="w-3.5 h-3.5 rounded cursor-pointer accent-[#0052CC]"
                      />
                      <span>Compare</span>
                    </label>
                    <Link
                      href={`/jurisdiction/${item.id}`}
                      className="px-3.5 py-1.5 bg-white text-[#0A1626] text-xs font-bold rounded-lg border border-[#E2E8F0] hover:bg-slate-50 hover:border-slate-300 transition-colors shadow-sm"
                    >
                      View jurisdiction
                    </Link>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}