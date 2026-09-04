'use client';

import React from 'react';
import Link from 'next/link';

export default function SubJurisdictions() {
  const directoryFeatures = [
    'Commercial capability availability',
    'Delivery model and coverage conditions',
    'Reviewed date and specialist routing',
  ];

  const guideFeatures = [
    'Payroll concepts and local context',
    'Key taxes and contributions, descriptively',
    'Links back to current availability',
  ];

  return (
    <section className="w-full bg-white py-20 px-6 sm:px-12 lg:px-40 flex justify-center items-center font-['Segoe_UI',sans-serif]">
      <div className="w-full max-w-[1116px] flex flex-col justify-start items-start gap-8">
        
        {/* ================= HEADER ================= */}
        <div className="w-full max-w-[660px] flex flex-col justify-start items-start gap-3">
          
          {/* Kicker with Slash */}
          <div className="flex items-center gap-1.5">
            <span className="text-[#0066CC] text-xs font-bold tracking-wide uppercase">
              / WHERE TRUTH LIVES
            </span>
          </div>

          {/* Heading - exactly 2 lines with <br /> after "truth" */}
          <h2 className="text-[#0A1626] text-3xl font-bold leading-9">
            Coverage truth belongs here. Educational truth<br />
            belongs to the guide.
          </h2>

          {/* Subtext - exactly 2 lines with <br /> after "links" */}
          <p className="text-[#2C3E50] text-base font-normal leading-6">
            The directory and the country guide answer different questions — every jurisdiction record links<br />
            to both so you never confuse commercial availability with background reading.
          </p>
        </div>

        {/* ================= TWO CARDS SIDE-BY-SIDE ================= */}
        <div className="w-full flex flex-col md:flex-row justify-center items-stretch gap-5">
          
          {/* Card 1: Jurisdiction Directory */}
          <div className="flex-1 p-6 bg-white rounded-2xl shadow-[0px_1px_8px_0px_rgba(10,22,38,0.05),0px_1px_2px_0px_rgba(10,22,38,0.04)] outline outline-1 outline-offset-[-1px] outline-[#DFE1E6] flex flex-col justify-between items-start gap-4">
            <div className="w-full flex flex-col gap-2.5">
              <span className="text-[#0066CC] text-xs font-bold uppercase tracking-wide">
                Jurisdiction directory
              </span>
              <h3 className="text-[#0A1626] text-lg font-bold leading-snug">
                What can Zoiko Payroll support here, right now?
              </h3>
              <p className="text-[#2C3E50] text-sm font-normal leading-5">
                The commercial coverage registry — capability status, delivery model and conditions, kept current and effective-dated.
              </p>

              {/* Checklist */}
              <div className="flex flex-col gap-2 pt-1.5 pb-2">
                {directoryFeatures.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <svg
                      className="w-3.5 h-3.5 text-[#0066CC] shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#2C3E50] text-xs font-normal">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Badge: You're here */}
            <div className="px-3.5 py-2 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-[#DFE1E6] text-[#0A1626] text-sm font-bold select-none">
              You&apos;re here
            </div>
          </div>

          {/* Card 2: Country & Territory Guide */}
          <div className="flex-1 p-6 bg-white rounded-2xl shadow-[0px_1px_8px_0px_rgba(10,22,38,0.05),0px_1px_2px_0px_rgba(10,22,38,0.04)] outline outline-1 outline-offset-[-1px] outline-[#DFE1E6] flex flex-col justify-between items-start gap-4">
            <div className="w-full flex flex-col gap-2.5">
              <span className="text-[#0066CC] text-xs font-bold uppercase tracking-wide">
                Country &amp; territory guide
              </span>
              <h3 className="text-[#0A1626] text-lg font-bold leading-snug">
                What should I know about payroll in this market?
              </h3>
              <p className="text-[#2C3E50] text-sm font-normal leading-5">
                Local payroll concepts, terminology, typical cycles and key obligations at a descriptive, educational level.
              </p>

              {/* Checklist */}
              <div className="flex flex-col gap-2 pt-1.5 pb-2">
                {guideFeatures.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <svg
                      className="w-3.5 h-3.5 text-[#0066CC] shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#2C3E50] text-xs font-normal">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button: Explore country guides → */}
            <Link
              href="#"
              className="px-4 py-2 bg-[linear-gradient(81deg,#1B81E2_0%,#0B4F82_100%)] hover:opacity-95 text-white text-sm font-bold rounded-lg shadow-[0px_4px_14px_0px_rgba(12,71,115,0.28)] transition-all inline-flex justify-center items-center"
            >
              Explore country guides →
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
