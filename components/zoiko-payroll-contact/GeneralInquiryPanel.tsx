"use client";

import React from "react";

export default function GeneralInquiryPanel() {
  return (
    <div className="w-full bg-white px-4 py-8 sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto flex w-full max-w-[1116px] flex-col items-center gap-7">
        {/* Header */}
        <div className="flex w-full max-w-[680px] flex-col items-center gap-3.5">
          {/* Label */}
          <div className="flex w-full items-center justify-center gap-1.5">
            <div className="h-3.5 w-1.5 rounded-[2px] bg-[#0099e5]" />

            <span className="text-center font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#0099e5]">
              General
            </span>
          </div>

          {/* Title */}
          <div className="flex w-full flex-col items-center">
            <h2 className="m-0 text-center font-['Inter'] text-2xl font-extrabold leading-8 text-[#103653] sm:text-3xl sm:leading-10">
              General inquiries.
            </h2>
          </div>

          {/* Description */}
          <div className="w-full max-w-[600px]">
            <p className="m-0 text-center font-['Inter'] text-sm font-normal leading-6 text-[#4f4f4f] sm:text-base sm:leading-7">
              For questions that do not fit sales, support, privacy, or press.
              Partnerships,
              <br className="hidden sm:block" />
              security/trust, careers and news topics route elsewhere.
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="w-full max-w-[700px] rounded-2xl border border-[#d9e1e7] bg-white px-6 py-7 shadow-[0px_12px_34px_0px_rgba(10,46,75,0.12)] sm:px-8 sm:py-8">
          {/* Form Heading */}
          <h3 className="m-0 font-['Inter'] text-lg font-extrabold leading-8 text-[#103653]">
            Send a general inquiry
          </h3>

          <div className="mt-1.5 flex flex-col">
            {/* Name + Email */}
            <div className="flex flex-col gap-3.5 sm:flex-row">
              {/* Name */}
              <div className="flex-1 pb-4">
                <label className="mb-1.5 block font-['Inter'] text-xs font-bold uppercase leading-5 tracking-tight text-[#103653]">
                  Name <span className="text-[#9d174d]">*</span>
                </label>

                <input
                  type="text"
                  className="h-10 w-full rounded-lg border border-[#d9e1e7] bg-white px-3.5 font-['Inter'] text-sm text-[#103653] outline-none focus:border-[#0099e5]"
                />
              </div>

              {/* Email */}
              <div className="flex-1 pb-4">
                <label className="mb-1.5 block font-['Inter'] text-xs font-bold uppercase leading-5 tracking-tight text-[#103653]">
                  Email <span className="text-[#9d174d]">*</span>
                </label>

                <input
                  type="email"
                  className="h-10 w-full rounded-lg border border-[#d9e1e7] bg-white px-3.5 font-['Inter'] text-sm text-[#103653] outline-none focus:border-[#0099e5]"
                />
              </div>
            </div>

            {/* Organization */}
            <div className="pb-4">
              <label className="mb-1.5 block font-['Inter'] text-xs font-bold uppercase leading-5 tracking-tight text-[#103653]">
                Organization
              </label>

              <input
                type="text"
                className="h-10 w-full rounded-lg border border-[#d9e1e7] bg-white px-3.5 font-['Inter'] text-sm text-[#103653] outline-none focus:border-[#0099e5]"
              />
            </div>

            {/* Topic */}
            <div className="pb-4 pt-4">
              <label className="mb-1.5 block font-['Inter'] text-xs font-bold uppercase leading-5 tracking-tight text-[#103653]">
                Topic <span className="text-[#9d174d]">*</span>
              </label>

              <select
                defaultValue=""
                className="h-10 w-full rounded-lg border border-[#d9e1e7] bg-white px-3.5 font-['Inter'] text-sm text-[#103653] outline-none focus:border-[#0099e5]"
              >
                <option value="" disabled>
                  Select…
                </option>
                <option value="partnerships">Partnerships</option>
                <option value="security">Security / Trust</option>
                <option value="careers">Careers</option>
                <option value="news">News</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div className="pb-6 pt-4">
              <label className="mb-1.5 block font-['Inter'] text-xs font-bold uppercase leading-5 tracking-tight text-[#103653]">
                Message <span className="text-[#9d174d]">*</span>
              </label>

              <textarea
                rows={4}
                maxLength={1500}
                placeholder="Max 1500 characters"
                className="min-h-[80px] w-full resize-none rounded-lg border border-[#d9e1e7] bg-white px-3.5 py-2.5 font-['Inter'] text-sm text-[#103653] placeholder:text-[#6f6f6f] outline-none focus:border-[#0099e5]"
              />
            </div>

            {/* Security Warning */}
            <div className="w-full rounded-[10px] bg-[#fff0df] px-3.5 py-3">
              <p className="m-0 font-['Inter'] text-xs font-normal leading-5 text-[#a65300]">
                Do not include payroll records, full tax or government ID
                numbers, bank or card details, passwords,
                <br className="hidden lg:block" />
                authentication codes, or other sensitive personal information.
              </p>
            </div>

            {/* Submit */}
            <button
              type="button"
              className="mt-4 w-full rounded-lg bg-gradient-to-r from-[#38bdf8] to-[#0099e5] p-3 font-['Arial'] text-sm font-bold text-white shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] transition-opacity hover:opacity-90"
            >
              Send general inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}