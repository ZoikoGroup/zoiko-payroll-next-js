'use client';

import React from 'react';
import Link from 'next/link';

export default function JurisdictionQuickView() {
  const checklistItems = [
    {
      icon: encodeURI('/SVG (29).png'),
      text: 'Capability matrix shown as Available / Conditions / Not offered — text first, never color-only.',
    },
    {
      icon: encodeURI('/SVG (30).png'),
      text: 'Coverage reviewed date shown in visible text, not implied real-time advice.',
    },
    {
      icon: encodeURI('/SVG (31).png'),
      text: 'Direct links to the Country Guide and Local Payroll Requirements, when published.',
    },
  ];

  const matrixData = [
    {
      capability: 'Payroll processing',
      status: 'Conditions',
      statusType: 'conditions',
      delivery: 'Connected',
    },
    {
      capability: 'Statutory filing',
      status: 'Conditions',
      statusType: 'conditions',
      delivery: 'Partner',
    },
    {
      capability: 'Employee payments',
      status: 'Not offered',
      statusType: 'not-offered',
      delivery: '—',
    },
    {
      capability: 'Payslips',
      status: 'Available',
      statusType: 'available',
      delivery: 'Connected',
    },
    {
      capability: 'Year-end',
      status: 'Conditions',
      statusType: 'conditions',
      delivery: 'Partner',
    },
  ];

  return (
    <section
      className="w-full min-h-[680px] px-6 sm:px-12 lg:px-40 py-20 bg-cover bg-center bg-no-repeat flex justify-center items-center font-['Segoe_UI',sans-serif]"
      style={{ backgroundImage: `url(${encodeURI('/flag.png')})` }}
    >
      <div className="w-full max-w-[1116px] flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
        
        {/* ================= LEFT COLUMN: DETAILS & CHECKLIST ================= */}
        <div className="w-full lg:w-[634px] flex flex-col justify-start items-start gap-6">
          
          {/* Top Kicker / Badge */}
          <div className="flex items-center gap-2">
            <span className="text-[#0066CC] text-xs font-bold tracking-wider uppercase">
              / JURISDICTION QUICK VIEW
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[#0A1626] text-2xl sm:text-[28px] font-bold leading-tight">
            See full detail without leaving the directory.
          </h2>

          {/* Subtext - exactly 3 lines */}
          <p className="text-[#2C3E50] text-base font-normal leading-6">
            Selecting &quot;View jurisdiction&quot; opens a quick-view drawer with the complete capability matrix, delivery model per capability, and links to deeper local content — without losing your place in the results.
          </p>

          {/* 3 Checklist Items */}
          <div className="w-full flex flex-col gap-3 pt-2">
            {checklistItems.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <img
                  src={item.icon}
                  alt="Check icon"
                  className="w-4 h-4 object-contain mt-0.5 shrink-0"
                />
                <span className="text-[#04212B] text-sm font-normal leading-snug">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* ================= RIGHT COLUMN: DRAWER MOCKUP CARD ================= */}
        <div className="w-full lg:w-[384px] bg-white rounded-2xl shadow-[0px_10px_34px_0px_rgba(10,22,38,0.10)] outline outline-1 outline-offset-[-1px] outline-[#DFE1E6] flex flex-col justify-between overflow-hidden">
          
          {/* Drawer Top Header */}
          <div className="px-5 py-4 border-b border-[#E2E8F0] flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-[#0A1626] text-base font-bold leading-tight">
                Germany
              </span>
              <span className="text-[#64748B] text-xs font-normal">
                DE · Country · Europe
              </span>
            </div>
            <button
              type="button"
              className="w-6 h-6 bg-[#F4F5F7] hover:bg-[#E2E8F0] rounded-md flex justify-center items-center text-[#334155] text-xs font-bold transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Drawer Body */}
          <div className="p-5 flex flex-col gap-4">
            
            {/* Explanatory Callout Box */}
            <div className="px-3.5 py-3 bg-[#F4F5F7] rounded-[10px] text-[#2C3E50] text-xs font-normal leading-relaxed">
              Payroll calculation and payslip generation are available through connected payroll. Statutory filing and payments require additional confirmation of scope.
            </div>

            {/* Matrix Table */}
            <div className="w-full flex flex-col">
              {/* Table Header */}
              <div className="flex justify-between items-center pb-2 border-b border-[#DFE1E6] text-[#64748B] text-[11px] font-bold uppercase tracking-wider">
                <div className="w-36">Capability</div>
                <div className="w-28">Status</div>
                <div className="w-20 text-left">Delivery</div>
              </div>

              {/* Table Rows */}
              {matrixData.map((row, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-2.5 border-b border-[#F1F5F9] text-xs"
                >
                  {/* Capability */}
                  <div className="w-36 text-[#2C3E50] font-bold">
                    {row.capability}
                  </div>

                  {/* Status Badge */}
                  <div className="w-28 flex items-center">
                    {row.statusType === 'conditions' && (
                      <span className="px-2.5 py-[5px] bg-[#FFF4E5] text-[#854D0E] rounded-[999px] text-xs font-bold inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-[3px] bg-[#E65100]" />
                        Conditions
                      </span>
                    )}

                    {row.statusType === 'available' && (
                      <span className="px-2.5 py-[5px] bg-[#E6F4EA] text-[#0D652D] rounded-[999px] text-xs font-bold inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-[3px] bg-[#16A34A]" />
                        Available
                      </span>
                    )}

                    {row.statusType === 'not-offered' && (
                      <span className="px-2.5 py-[5px] bg-[#F1F5F9] text-[#334155] rounded-[999px] text-xs font-bold inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-[3px] bg-[#64748B]" />
                        Not offered
                      </span>
                    )}
                  </div>

                  {/* Delivery Model */}
                  <div className="w-20 text-left text-[#0A1626] font-bold">
                    {row.delivery}
                  </div>
                </div>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-col gap-1.5 pt-1">
              <Link
                href="#"
                className="text-[#0066CC] hover:underline text-xs font-bold"
              >
                → Germany country guide
              </Link>
              <Link
                href="#"
                className="text-[#0066CC] hover:underline text-xs font-bold"
              >
                → How partner-supported payroll works
              </Link>
            </div>

            {/* Bottom Action Buttons */}
            <div className="flex items-center gap-2.5 pt-2">
              <button
                type="button"
                className="flex-1 py-2 px-3 bg-white hover:bg-slate-50 text-[#0A1626] text-xs font-bold rounded-lg outline outline-1 outline-offset-[-1px] outline-[#DFE1E6] transition-colors"
              >
                Add to comparison
              </button>
              <button
                type="button"
                className="flex-1 py-2 px-3 bg-[linear-gradient(80deg,#1B81E2_0%,#0A4773_100%)] hover:opacity-95 text-white text-xs font-bold rounded-lg shadow-[0px_4px_14px_0px_rgba(12,71,115,0.28)] transition-opacity"
              >
                Discuss this jurisdiction
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}