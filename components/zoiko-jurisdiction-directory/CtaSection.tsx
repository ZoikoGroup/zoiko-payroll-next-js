'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function PayrollFootprintCTA() {
  const [formData, setFormData] = useState({
    firstName: 'Jordan',
    lastName: 'Reyes',
    email: 'jordan@company.com',
    jurisdiction: 'United States',
    workforceRange: '1–200',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-8 lg:px-16 flex justify-center items-center font-['Segoe_UI',sans-serif]">
      <div
        className="w-full max-w-[1272px] px-8 sm:px-14 lg:px-20 py-16 rounded-3xl bg-cover bg-center bg-no-repeat shadow-lg flex flex-col lg:flex-row justify-between items-center gap-10 overflow-hidden"
        style={{ backgroundImage: `url(${encodeURI('/ff.png')})` }}
      >
        
        {/* ================= LEFT COLUMN: HEADING & DETAILS ================= */}
        <div className="flex-1 flex flex-col justify-start items-start gap-4 text-white">
          
          {/* Title */}
          <h2 className="text-3xl sm:text-[32px] font-bold leading-10 text-white">
            Need to confirm your exact payroll footprint?
          </h2>

          {/* Description - exactly 3 lines */}
          <p className="text-white/80 text-base font-normal leading-6 pt-1 max-w-[480px]">
            Tell us the jurisdictions, entities, worker population, current payroll<br />
            model and required services. Please don&apos;t send employee-level payroll<br />
            data in your first inquiry.
          </p>

          {/* Link */}
          <div className="pt-3">
            <Link
              href="#"
              className="text-white text-sm font-bold underline hover:text-white/90 transition-colors"
            >
              Explore country and territory guides →
            </Link>
          </div>

        </div>

        {/* ================= RIGHT COLUMN: INTERACTIVE FORM CARD ================= */}
        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-[460px] p-6 sm:p-7 bg-white rounded-2xl shadow-xl flex flex-col justify-start items-start gap-3.5 shrink-0"
        >
          {/* Form Header */}
          <h3 className="text-[#0A1626] text-base font-bold">
            Check jurisdiction availability
          </h3>

          {/* Row 1: First Name & Last Name */}
          <div className="w-full flex gap-3">
            
            {/* First Name */}
            <div className="flex-1 flex flex-col gap-1.5">
              <label className="text-[#334155] text-xs font-bold">
                First name
              </label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#DFE1E6] rounded-lg text-sm text-[#0A1626] focus:outline-none focus:border-[#0066CC] transition-colors"
                placeholder="First name"
                required
              />
            </div>

            {/* Last Name */}
            <div className="flex-1 flex flex-col gap-1.5">
              <label className="text-[#334155] text-xs font-bold">
                Last name
              </label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#DFE1E6] rounded-lg text-sm text-[#0A1626] focus:outline-none focus:border-[#0066CC] transition-colors"
                placeholder="Last name"
                required
              />
            </div>

          </div>

          {/* Row 2: Business Email */}
          <div className="w-full flex flex-col gap-1.5">
            <label className="text-[#334155] text-xs font-bold">
              Business email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#DFE1E6] rounded-lg text-sm text-[#0A1626] focus:outline-none focus:border-[#0066CC] transition-colors"
              placeholder="name@company.com"
              required
            />
          </div>

          {/* Row 3: Primary Operating Jurisdiction & Workforce Range */}
          <div className="w-full flex gap-3">
            
            {/* Primary Jurisdiction */}
            <div className="flex-1 flex flex-col gap-1.5">
              <label className="text-[#334155] text-xs font-bold leading-tight">
                Primary operating jurisdiction
              </label>
              <input
                type="text"
                value={formData.jurisdiction}
                onChange={(e) =>
                  setFormData({ ...formData, jurisdiction: e.target.value })
                }
                className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#DFE1E6] rounded-lg text-sm text-[#0A1626] focus:outline-none focus:border-[#0066CC] transition-colors"
                placeholder="e.g. United States"
                required
              />
            </div>

            {/* Workforce Range */}
            <div className="flex-1 flex flex-col gap-1.5">
              <label className="text-[#334155] text-xs font-bold">
                Workforce range
              </label>
              <input
                type="text"
                value={formData.workforceRange}
                onChange={(e) =>
                  setFormData({ ...formData, workforceRange: e.target.value })
                }
                className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#DFE1E6] rounded-lg text-sm text-[#0A1626] focus:outline-none focus:border-[#0066CC] transition-colors"
                placeholder="1–200"
                required
              />
            </div>

          </div>

          {/* Submit Button with exact 84deg linear gradient (color/azure/54 2 to color/azure/25 3) */}
          <button
            type="submit"
            className="w-full mt-2 py-3 px-5 bg-[linear-gradient(84deg,#1B81E2_0%,#0B4F82_100%)] hover:opacity-95 text-white text-base font-bold rounded-[10px] shadow-[0px_4px_14px_0px_rgba(12,71,115,0.28)] transition-all cursor-pointer text-center"
          >
            Book a tailored demonstration
          </button>

        </form>

      </div>
    </section>
  );
}