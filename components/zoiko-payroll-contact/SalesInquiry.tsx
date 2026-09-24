"use client";

import React from "react";

export default function SalesInquiry() {
  return (
    <section className="w-full bg-[#eef3f7] px-4 py-14 sm:px-6 md:px-10 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1116px] flex-col items-center gap-4">
        {/* Heading */}
        <div className="flex w-full max-w-[680px] flex-col items-center gap-3.5">
          {/* Label */}
          <div className="flex w-full items-center justify-center gap-1.5">
            <div className="flex h-5 items-center justify-center py-[3px]">
              <div className="h-3.5 w-1.5 rounded-[2px] bg-[#0099e5]" />
            </div>

            <span className="text-center font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#0099e5]">
              Sales
            </span>
          </div>

          {/* Title */}
          <div className="flex w-full flex-col items-center">
            <h2 className="m-0 text-center font-['Inter'] text-2xl font-extrabold leading-8 text-[#103653] sm:text-3xl sm:leading-10">
              Talk to Zoiko Payroll sales.
            </h2>
          </div>

          {/* Description */}
          <div className="w-full max-w-[600px]">
            <p className="m-0 text-center font-['Inter'] text-sm font-normal leading-6 text-[#636f78] sm:text-base sm:leading-7">
              Tell us what you&apos;re evaluating, or book a demo to see how
              Zoiko Payroll
              <br className="hidden sm:block" />
              can support controlled payroll operations.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex w-full flex-wrap items-center justify-center gap-3 pt-1.5">
          <button
            type="button"
            className="rounded-lg bg-gradient-to-r from-[#0099e5] to-[#006fae] px-6 py-3 font-['Inter'] text-sm font-bold leading-6 text-white shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] transition-opacity duration-200 hover:opacity-90"
          >
            Book a demo
          </button>

          <button
            type="button"
            className="rounded-lg border border-[#d9e1e7] bg-white px-6 py-3 font-['Inter'] text-sm font-bold leading-6 text-[#103653] transition-opacity duration-200 hover:opacity-70"
          >
            Send a sales inquiry
          </button>
        </div>

        {/* Topic Pills */}
        <div className="flex w-full flex-wrap items-center justify-center gap-2.5">
          {["Pricing", "Global Payroll", "Product Tour", "Trust and Security"].map(
            (topic) => (
              <button
                key={topic}
                type="button"
                className="rounded-[20px] border border-[#d9e1e7] bg-white px-4 py-2 font-['Inter'] text-xs font-semibold leading-5 text-[#315b77] transition-colors duration-200 hover:border-[#0099e5] hover:text-[#0099e5]"
              >
                {topic}
              </button>
            ),
          )}
        </div>

        {/* Sales Inquiry Form */}
        <div className="mt-4 flex w-full max-w-[760px] flex-col items-start gap-1.5 rounded-2xl border border-[#d9e1e7] bg-white px-5 py-8 shadow-[0px_12px_34px_0px_rgba(10,46,75,0.12)] sm:px-8 sm:pt-12 sm:pb-8">
          {/* Form Heading */}
          <div className="w-full">
            <h3 className="m-0 font-['Inter'] text-lg font-extrabold leading-8 text-[#103653]">
              Send a sales inquiry
            </h3>
          </div>

          {/* Form Description */}
          <div className="w-full">
            <p className="m-0 font-['Inter'] text-xs font-normal leading-5 text-[#7c96aa]">
              We collect enough context to route and prepare — never more than
              needed.
            </p>
          </div>

          {/* Form */}
          <form className="w-full pt-4">
            {/* First Name + Last Name */}
            <div className="grid w-full grid-cols-1 gap-3.5 sm:grid-cols-2">
              {/* First Name */}
              <div className="flex w-full flex-col gap-1.5 pb-4">
                <label
                  htmlFor="firstName"
                  className="font-['Inter'] text-xs font-bold uppercase leading-5 tracking-tight text-[#315b77]"
                >
                  First name <span className="text-pink-800">*</span>
                </label>

                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  className="h-10 w-full rounded-lg border border-[#d9e1e7] bg-white px-3.5 font-['Inter'] text-sm text-[#103653] outline-none focus:border-[#0099e5]"
                />
              </div>

              {/* Last Name */}
              <div className="flex w-full flex-col gap-1.5 pb-4">
                <label
                  htmlFor="lastName"
                  className="font-['Inter'] text-xs font-bold uppercase leading-5 tracking-tight text-[#315b77]"
                >
                  Last name <span className="text-pink-800">*</span>
                </label>

                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  className="h-10 w-full rounded-lg border border-[#d9e1e7] bg-white px-3.5 font-['Inter'] text-sm text-[#103653] outline-none focus:border-[#0099e5]"
                />
              </div>
            </div>

            {/* Work Email */}
            <div className="flex w-full flex-col gap-1.5">
              <label
                htmlFor="workEmail"
                className="font-['Inter'] text-xs font-bold uppercase leading-5 tracking-tight text-[#315b77]"
              >
                Work email <span className="text-pink-800">*</span>
              </label>

              <input
                id="workEmail"
                name="workEmail"
                type="email"
                placeholder="you@company.com"
                className="h-10 w-full rounded-lg border border-[#d9e1e7] bg-white px-3.5 font-['Inter'] text-sm text-[#103653] outline-none placeholder:text-[#636f78] focus:border-[#0099e5]"
              />
            </div>

            {/* Company */}
            <div className="flex w-full flex-col gap-1.5 pt-4">
              <label
                htmlFor="company"
                className="font-['Inter'] text-xs font-bold uppercase leading-5 tracking-tight text-[#315b77]"
              >
                Company <span className="text-pink-800">*</span>
              </label>

              <input
                id="company"
                name="company"
                type="text"
                className="h-10 w-full rounded-lg border border-[#d9e1e7] bg-white px-3.5 font-['Inter'] text-sm text-[#103653] outline-none focus:border-[#0099e5]"
              />
            </div>

            {/* Job Role + Country */}
            <div className="grid w-full grid-cols-1 gap-3.5 pt-4 sm:grid-cols-2">
              {/* Job Role */}
              <div className="flex w-full flex-col gap-1.5 pb-4">
                <label
                  htmlFor="jobRole"
                  className="font-['Inter'] text-xs font-bold uppercase leading-5 tracking-tight text-[#315b77]"
                >
                  Job role / function
                </label>

                <select
                  id="jobRole"
                  name="jobRole"
                  defaultValue=""
                  className="h-10 w-full rounded-lg border border-[#d9e1e7] bg-white px-4 font-['Inter'] text-sm text-[#103653] outline-none focus:border-[#0099e5]"
                >
                  <option value="" disabled>
                    Select…
                  </option>
                  <option value="hr">HR</option>
                  <option value="payroll">Payroll</option>
                  <option value="finance">Finance</option>
                  <option value="operations">Operations</option>
                  <option value="management">Management</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Country */}
              <div className="flex w-full flex-col gap-1.5 pb-4">
                <label
                  htmlFor="country"
                  className="font-['Inter'] text-xs font-bold uppercase leading-5 tracking-tight text-[#315b77]"
                >
                  Country / primary market{" "}
                  <span className="text-pink-800">*</span>
                </label>

                <input
                  id="country"
                  name="country"
                  type="text"
                  placeholder="Start typing a country"
                  className="h-10 w-full rounded-lg border border-[#d9e1e7] bg-white px-3.5 font-['Inter'] text-sm text-[#103653] outline-none placeholder:text-[#636f78] focus:border-[#0099e5]"
                />
              </div>
            </div>

            {/* Discussion */}
            <div className="flex w-full flex-col gap-1.5">
              <label
                htmlFor="discussion"
                className="font-['Inter'] text-xs font-bold uppercase leading-5 tracking-tight text-[#315b77]"
              >
                What would you like to discuss?{" "}
                <span className="text-pink-800">*</span>
              </label>

              <select
                id="discussion"
                name="discussion"
                defaultValue=""
                className="h-10 w-full rounded-lg border border-[#d9e1e7] bg-white px-4 font-['Inter'] text-sm text-[#103653] outline-none focus:border-[#0099e5]"
              >
                <option value="" disabled>
                  Select…
                </option>
                <option value="pricing">Pricing</option>
                <option value="global-payroll">Global Payroll</option>
                <option value="product-tour">Product Tour</option>
                <option value="trust-security">
                  Trust and Security
                </option>
              </select>
            </div>

            {/* Message */}
            <div className="flex w-full flex-col gap-1.5 pt-4 pb-6">
              <label
                htmlFor="message"
                className="font-['Inter'] text-xs font-bold uppercase leading-5 tracking-tight text-[#315b77]"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={4}
                maxLength={1000}
                placeholder="Optional context (max 1000 characters)"
                className="min-h-20 w-full resize-none rounded-lg border border-[#d9e1e7] bg-white px-3.5 py-2.5 font-['Inter'] text-sm text-[#103653] outline-none placeholder:text-[#636f78] focus:border-[#0099e5]"
              />
            </div>

            {/* Security Warning */}
            <div className="w-full rounded-[10px] bg-[#fcebc7] px-3.5 py-3">
              <p className="m-0 font-['Inter'] text-xs font-normal leading-5 text-[#8a5b12]">
                Do not include payroll records, full tax or government ID
                numbers, bank or card details, passwords, authentication codes,
                or other sensitive personal information. If supporting
                documents are needed, the appropriate team will provide a
                secure follow-up method.
              </p>
            </div>

            {/* Checkbox */}
            <div className="flex w-full items-start gap-2.5 pt-4 pb-5">
              <input
                id="updates"
                name="updates"
                type="checkbox"
                className="mt-0.5 size-4 shrink-0 rounded border-[#636f78] accent-[#0099e5]"
              />

              <label
                htmlFor="updates"
                className="font-['Inter'] text-xs font-normal leading-5 text-[#636f78]"
              >
                Send me occasional Zoiko Payroll product and event updates
                (optional).
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-[#0099e5] to-[#006fae] p-3 font-['Inter'] text-sm font-bold leading-6 text-white shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] transition-opacity duration-200 hover:opacity-90"
            >
              Send sales inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}