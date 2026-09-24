"use client";

import React from "react";

export default function MediaPressPanel() {
  return (
    <div className="w-full bg-white px-4 py-8 sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto flex w-full max-w-[1116px] flex-col items-center gap-5">
        {/* Header */}
        <div className="flex w-full max-w-[680px] flex-col items-center gap-3.5">
          {/* Label */}
          <div className="flex w-full items-center justify-center gap-1.5">
            <div className="h-3.5 w-1.5 rounded-[2px] bg-[#0099e5]" />

            <div className="text-center font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#0099e5]">
              Press
            </div>
          </div>

          {/* Title */}
          <div className="flex w-full flex-col items-center">
            <h2 className="m-0 text-center font-['Inter'] text-2xl font-extrabold leading-8 text-[#103653] sm:text-3xl sm:leading-10">
              Media and press inquiries.
            </h2>
          </div>

          {/* Description */}
          <div className="w-full max-w-[600px]">
            <p className="m-0 text-center font-['Inter'] text-sm font-normal leading-6 text-[#4f4f4f] sm:text-base sm:leading-7">
              For journalists, analysts, and media professionals seeking
              approved
              <br className="hidden sm:block" />
              company information, interviews, commentary, or media resources.
            </p>
          </div>
        </div>

        {/* Top Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            className="rounded-lg bg-gradient-to-r from-[#38bdf8] to-[#0099e5] px-6 py-3 font-['Inter'] text-sm font-bold leading-6 text-white shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] transition-opacity hover:opacity-90"
          >
            Send press inquiry
          </button>

          <button
            type="button"
            className="rounded-lg border border-[#d9e1e7] bg-white px-6 py-3 font-['Inter'] text-sm font-bold leading-6 text-[#103653] transition-colors hover:bg-[#f5f8fb]"
          >
            Visit Newsroom
          </button>
        </div>

        {/* Press Inquiry Form */}
        <div className="w-full max-w-[700px] rounded-2xl border border-[#d9e1e7] bg-white px-6 py-7 shadow-[0px_12px_34px_0px_rgba(10,46,75,0.12)] sm:px-8 sm:pt-9 sm:pb-8">
          {/* Form Title */}
          <h3 className="m-0 font-['Inter'] text-lg font-extrabold leading-8 text-[#103653]">
            Press inquiry
          </h3>

          <div className="mt-1.5 flex flex-col">
            {/* Row 1 */}
            <div className="flex flex-col gap-3.5 sm:flex-row">
              {/* Name */}
              <div className="flex-1 pb-4">
                <label className="mb-1.5 block font-['Inter'] text-xs font-bold uppercase leading-5 tracking-tight text-[#103653]">
                  Name <span className="text-[#9d174d]">*</span>
                </label>

                <input
                  type="text"
                  className="h-10 w-full rounded-lg border border-[#d9e1e7] bg-white px-3.5 font-['Inter'] text-sm outline-none focus:border-[#0099e5]"
                />
              </div>

              {/* Work Email */}
              <div className="flex-1 pb-4">
                <label className="mb-1.5 block font-['Inter'] text-xs font-bold uppercase leading-5 tracking-tight text-[#103653]">
                  Work email <span className="text-[#9d174d]">*</span>
                </label>

                <input
                  type="email"
                  className="h-10 w-full rounded-lg border border-[#d9e1e7] bg-white px-3.5 font-['Inter'] text-sm outline-none focus:border-[#0099e5]"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col gap-3.5 sm:flex-row">
              {/* Publication */}
              <div className="flex-1 pb-4">
                <label className="mb-1.5 block font-['Inter'] text-xs font-bold uppercase leading-5 tracking-tight text-[#103653]">
                  Publication / organization{" "}
                  <span className="text-[#9d174d]">*</span>
                </label>

                <input
                  type="text"
                  className="h-10 w-full rounded-lg border border-[#d9e1e7] bg-white px-3.5 font-['Inter'] text-sm outline-none focus:border-[#0099e5]"
                />
              </div>

              {/* Role */}
              <div className="flex-1 pb-4">
                <label className="mb-1.5 block font-['Inter'] text-xs font-bold uppercase leading-5 tracking-tight text-[#103653]">
                  Role
                </label>

                <select
                  defaultValue=""
                  className="h-10 w-full rounded-lg border border-[#d9e1e7] bg-white px-3.5 font-['Inter'] text-sm text-[#103653] outline-none focus:border-[#0099e5]"
                >
                  <option value="" disabled>
                    Select…
                  </option>
                  <option value="journalist">Journalist</option>
                  <option value="analyst">Analyst</option>
                  <option value="editor">Editor</option>
                  <option value="producer">Producer</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex flex-col gap-3.5 sm:flex-row">
              {/* Inquiry Topic */}
              <div className="flex-1 pb-4">
                <label className="mb-1.5 block font-['Inter'] text-xs font-bold uppercase leading-5 tracking-tight text-[#103653]">
                  Inquiry topic <span className="text-[#9d174d]">*</span>
                </label>

                <select
                  defaultValue=""
                  className="h-10 w-full rounded-lg border border-[#d9e1e7] bg-white px-3.5 font-['Inter'] text-sm text-[#103653] outline-none focus:border-[#0099e5]"
                >
                  <option value="" disabled>
                    Select…
                  </option>
                  <option value="company">Company information</option>
                  <option value="product">Product</option>
                  <option value="interview">Interview</option>
                  <option value="commentary">Commentary</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Deadline */}
              <div className="flex-1 pb-4">
                <label className="mb-1.5 block font-['Inter'] text-xs font-bold uppercase leading-5 tracking-tight text-[#103653]">
                  Deadline
                </label>

                <input
                  type="text"
                  placeholder="Only if genuine editorial deadline"
                  className="h-10 w-full rounded-lg border border-[#d9e1e7] bg-white px-3.5 font-['Inter'] text-sm text-[#4f4f4f] placeholder:text-[#6f6f6f] outline-none focus:border-[#0099e5]"
                />
              </div>
            </div>

            {/* Message */}
            <div className="pb-2">
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

            {/* Embargo */}
            <div className="pt-4">
              <label className="mb-1.5 block font-['Inter'] text-xs font-bold uppercase leading-5 tracking-tight text-[#103653]">
                Embargo / confidential note
              </label>

              <input
                type="text"
                className="h-10 w-full rounded-lg border border-[#d9e1e7] bg-white px-3.5 font-['Inter'] text-sm outline-none focus:border-[#0099e5]"
              />
            </div>

            {/* Note */}
            <div className="py-4">
              <p className="m-0 font-['Inter'] text-xs font-normal leading-4 text-[#7c96aa]">
                Submission alone does not imply acceptance of an embargo or
                confidentiality request.
              </p>
            </div>

            {/* Submit */}
            <button
              type="button"
              className="w-full rounded-lg bg-gradient-to-r from-[#38bdf8] to-[#0099e5] p-3 font-['Arial'] text-sm font-bold text-white shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] transition-opacity hover:opacity-90"
            >
              Send press inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}