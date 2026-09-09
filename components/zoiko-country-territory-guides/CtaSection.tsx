"use client";

import React, { useState } from "react";

export default function ConfirmPayrollRequirements() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jurisdiction: "United States",
    workforceRange: "1–200",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8 lg:px-14 font-['Inter',sans-serif]">
      {/* Outer Container */}
      <div
        className="max-w-[1328px] mx-auto rounded-3xl bg-[#082F49] bg-cover bg-center bg-no-repeat px-8 sm:px-14 lg:px-20 py-14 lg:py-16 text-white shadow-xl overflow-hidden"
        style={{ backgroundImage: `url('/fi.png')` }}
      >
        <div className="max-w-[1115px] mx-auto w-full flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-[60px]">
          
          {/* ================= LEFT SECTION ================= */}
          <div className="w-full lg:max-w-[460px] flex flex-col gap-3.5 text-white">
            {/* Heading: Break after "payroll" */}
            <h2 className="text-white text-3xl font-bold font-['Inter'] leading-tight">
              Ready to confirm your payroll<br />
              requirements?
            </h2>

            {/* Description: Break after "implementation" */}
            <p className="text-white/72 text-base font-normal font-['Inter'] leading-6">
              Review current Zoiko Payroll coverage and implementation<br />
              requirements for your entities, worker population and payroll scope.
            </p>
          </div>

          {/* ================= RIGHT SECTION: FORM CARD ================= */}
          <form
            onSubmit={handleSubmit}
            className="w-full lg:w-[460px] bg-white rounded-2xl p-6 sm:p-7 flex flex-col gap-3.5 text-[#0E2A47] shadow-lg shrink-0"
          >
            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-[#0E2A47] text-xs font-bold">
                  First name
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="w-full h-10 px-3 bg-white rounded-lg border border-[#C9DAE8] text-sm text-[#0E2A47] placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#0A78C3]"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[#0E2A47] text-xs font-bold">
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className="w-full h-10 px-3 bg-white rounded-lg border border-[#C9DAE8] text-sm text-[#0E2A47] placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#0A78C3]"
                />
              </div>
            </div>

            {/* Business Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[#0E2A47] text-xs font-bold">
                Business email
              </label>
              <input
                type="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full h-10 px-3 bg-white rounded-lg border border-[#C9DAE8] text-sm text-[#0E2A47] placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#0A78C3]"
              />
            </div>

            {/* Jurisdiction of Interest & Workforce Range */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-[#0E2A47] text-xs font-bold">
                  Jurisdiction of interest
                </label>
                <input
                  type="text"
                  value={formData.jurisdiction}
                  onChange={(e) =>
                    setFormData({ ...formData, jurisdiction: e.target.value })
                  }
                  className="w-full h-10 px-3 bg-white rounded-lg border border-[#C9DAE8] text-sm text-[#0E2A47] focus:outline-none focus:ring-1 focus:ring-[#0A78C3]"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[#0E2A47] text-xs font-bold">
                  Workforce range
                </label>
                <input
                  type="text"
                  value={formData.workforceRange}
                  onChange={(e) =>
                    setFormData({ ...formData, workforceRange: e.target.value })
                  }
                  className="w-full h-10 px-3 bg-white rounded-lg border border-[#C9DAE8] text-sm text-[#0E2A47] focus:outline-none focus:ring-1 focus:ring-[#0A78C3]"
                />
              </div>
            </div>

            {/* Disclaimer Note */}
            <p className="text-[#566B80] text-xs font-normal pt-0.5">
              Do not submit employee-level payroll data in this inquiry.
            </p>

            {/* Button matching Figma 1:1 */}
            <button
              type="submit"
              className="w-full h-11 bg-[linear-gradient(72deg,rgba(79,169,222,1)_0%,rgba(10,120,194,1)_50%,rgba(8,47,73,1)_100%)] rounded-lg text-white text-sm font-bold font-['Arial',sans-serif] flex items-center justify-center hover:opacity-95 transition-opacity shadow-md outline outline-1 outline-offset-[-1px] outline-transparent"
            >
              Check jurisdiction coverage
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}