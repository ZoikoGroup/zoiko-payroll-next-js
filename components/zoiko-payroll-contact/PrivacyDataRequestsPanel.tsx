"use client";

import React from "react";

export default function PrivacyDataRequestsPanel() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 md:px-10 lg:px-14 lg:py-16">
      <div className="mx-auto flex w-full max-w-[1116px] flex-col items-center gap-7">
        {/* Header */}
        <div className="flex w-full max-w-[680px] flex-col items-center gap-3.5">
          {/* Label */}
          <div className="flex w-full items-center justify-center gap-1.5">
            <div className="h-3.5 w-1.5 rounded-[2px] bg-[#0099e5]" />

            <span className="font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#0099e5]">
              Privacy
            </span>
          </div>

          {/* Title */}
          <div className="flex w-full flex-col items-center">
            <h2 className="m-0 text-center font-['Inter'] text-2xl font-extrabold leading-8 text-[#103653] sm:text-3xl sm:leading-10">
              Privacy and data requests.
            </h2>
          </div>

          {/* Description */}
          <div className="w-full max-w-[600px]">
            <p className="m-0 text-center font-['Inter'] text-sm font-normal leading-6 text-[#4f687a] sm:text-base sm:leading-7">
              Select the request type and provide the minimum information
              needed.
              <br className="hidden sm:block" />
              Identity verification may be required before certain requests
              are completed.
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="w-full max-w-[700px] rounded-2xl border border-[#dfe5e9] bg-white p-6 shadow-[0px_12px_34px_0px_rgba(10,46,75,0.12)] sm:p-8">
          {/* Form Title */}
          <div className="mb-5">
            <h3 className="m-0 font-['Inter'] text-lg font-extrabold leading-8 text-[#103653]">
              Start a privacy request
            </h3>
          </div>

          <form className="flex flex-col gap-4">
            {/* Request Type */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="privacy-request-type"
                className="font-['Inter'] text-xs font-bold uppercase leading-5 tracking-tight text-[#164967]"
              >
                Request type <span className="text-[#9f1239]">*</span>
              </label>

              <select
                id="privacy-request-type"
                name="requestType"
                required
                defaultValue=""
                className="h-10 w-full appearance-none rounded-lg border border-[#dfe5e9] bg-white px-4 font-['Inter'] text-sm font-normal leading-4 text-[#103653] outline-none focus:border-[#0099e5] focus:ring-1 focus:ring-[#0099e5]"
              >
                <option value="" disabled>
                  Select…
                </option>
                <option value="access">Access my data</option>
                <option value="deletion">Delete my data</option>
                <option value="correction">Correct my data</option>
                <option value="portability">Data portability</option>
                <option value="restriction">Restrict processing</option>
                <option value="other">Other privacy request</option>
              </select>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5 pt-0.5">
              <label
                htmlFor="privacy-email"
                className="font-['Inter'] text-xs font-bold uppercase leading-5 tracking-tight text-[#164967]"
              >
                Email <span className="text-[#9f1239]">*</span>
              </label>

              <input
                id="privacy-email"
                name="email"
                type="email"
                required
                className="h-10 w-full rounded-lg border border-[#dfe5e9] bg-white px-3.5 font-['Inter'] text-sm text-[#103653] outline-none focus:border-[#0099e5] focus:ring-1 focus:ring-[#0099e5]"
              />
            </div>

            {/* Country / Jurisdiction */}
            <div className="flex flex-col gap-1.5 pt-0.5">
              <label
                htmlFor="privacy-country"
                className="font-['Inter'] text-xs font-bold uppercase leading-5 tracking-tight text-[#164967]"
              >
                Country / jurisdiction{" "}
                <span className="text-[#9f1239]">*</span>
              </label>

              <input
                id="privacy-country"
                name="country"
                type="text"
                required
                placeholder="Used to determine the applicable workflow"
                className="h-10 w-full rounded-lg border border-[#dfe5e9] bg-white px-3.5 font-['Inter'] text-sm text-[#103653] placeholder:text-[#6b7280] outline-none focus:border-[#0099e5] focus:ring-1 focus:ring-[#0099e5]"
              />
            </div>

            {/* Organization / Employer */}
            <div className="flex flex-col gap-1.5 pt-0.5">
              <label
                htmlFor="privacy-organization"
                className="font-['Inter'] text-xs font-bold uppercase leading-5 tracking-tight text-[#164967]"
              >
                Organization / employer
              </label>

              <input
                id="privacy-organization"
                name="organization"
                type="text"
                placeholder="Only if needed to locate records"
                className="h-10 w-full rounded-lg border border-[#dfe5e9] bg-white px-3.5 font-['Inter'] text-sm text-[#103653] placeholder:text-[#6b7280] outline-none focus:border-[#0099e5] focus:ring-1 focus:ring-[#0099e5]"
              />
            </div>

            {/* Request Details */}
            <div className="flex flex-col gap-1.5 pt-0.5 pb-2">
              <label
                htmlFor="privacy-details"
                className="font-['Inter'] text-xs font-bold uppercase leading-5 tracking-tight text-[#164967]"
              >
                Request details <span className="text-[#9f1239]">*</span>
              </label>

              <textarea
                id="privacy-details"
                name="details"
                required
                rows={4}
                className="min-h-[80px] w-full resize-none rounded-lg border border-[#dfe5e9] bg-white px-3.5 py-2.5 font-['Inter'] text-sm text-[#103653] outline-none focus:border-[#0099e5] focus:ring-1 focus:ring-[#0099e5]"
              />
            </div>

            {/* Warning */}
            <div className="rounded-[10px] bg-[#fff3d9] px-3.5 py-3">
              <p className="m-0 font-['Inter'] text-xs font-normal leading-5 text-[#995b00]">
                Do not include passwords, full tax IDs, bank details, or
                unnecessary sensitive documents. If identity verification is
                required, we&apos;ll follow up through a secure method — never
                a public upload.
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-[#62c7ee] to-[#0099e5] p-3 text-center font-['Inter'] text-sm font-bold text-white shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] transition-opacity hover:opacity-90"
            >
              Submit privacy request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}