"use client";

import React from "react";

const statusItems = [
  {
    label: "Verified active incident",
    bg: "bg-pink-100",
    text: "text-pink-800",
    border: "outline-pink-100",
  },
  {
    label: "Verified maintenance",
    bg: "bg-color-orange-88",
    text: "text-color-orange-37",
    border: "outline-color-orange-88",
  },
  {
    label: "Status could not be verified",
    bg: "bg-[#E9F0F8]",
    text: "text-color-azure-18-2",
    border: "outline-color-grey-91-6",
  },
  {
    label: "Confirmed operational",
    bg: "bg-color-grey-91-8",
    text: "text-color-spring-green-33-2",
    border: "outline-color-grey-91-8",
  },
];

export default function KnownIssuesStatus() {
  return (
    <section className="w-full bg-[#E9F0F8] px-4 py-14 sm:px-6 md:px-10 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-4 lg:px-24">
        {/* Heading */}
        <div className="flex w-full max-w-[680px] flex-col items-center gap-4">
          {/* Label */}
          <div className="flex w-full items-center justify-center gap-1.5">
            <div className="flex h-5 items-center justify-center py-[3px]">
              <div className="h-3.5 w-1.5 rounded-[2px] bg-[#0099e5]" />
            </div>

            <span className="text-center font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#0099e5]">
              Known issues &amp; status
            </span>
          </div>

          {/* Title */}
          <div className="flex w-full flex-col items-center pb-[0.58px]">
            <h2 className="m-0 text-center font-['Inter'] text-2xl font-extrabold leading-8 text-[#103653] sm:text-3xl sm:leading-10">
              &quot;All operational&quot; is never assumed — only
              <br className="hidden sm:block" />
              stated when confirmed.
            </h2>
          </div>
        </div>

        {/* Status Pills */}
        <div className="flex w-full flex-wrap items-center justify-center gap-2.5 pt-2">
          {statusItems.map((item) => (
            <div
              key={item.label}
              className={`rounded-[20px] px-3.5 py-1.5 outline outline-1 outline-offset-[-1px] ${item.bg} ${item.border}`}
            >
              <span
                className={`font-['Inter'] text-xs font-bold leading-5 ${item.text}`}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="flex w-full flex-col items-center">
          <p className="m-0 max-w-[1000px] text-center font-['Inter'] text-xs font-normal leading-5 text-[#536b7c]">
            A help article may suggest checking System Status — it never
            declares an outage independently. Historical issues are always
            clearly distinguished from current state.
          </p>
        </div>
      </div>
    </section>
  );
}