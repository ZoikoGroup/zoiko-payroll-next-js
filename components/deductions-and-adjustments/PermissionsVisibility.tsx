import React from "react";
import Image from "next/image";

const permissions = [
  "View — authorized roles only",
  "Create — permission-gated",
  "Edit — editable states only",
  "Correct — where supported",
];

const tableRows = [
  {
    action: "View sensitive values",
    behavior: "Field-level, per approved access policy",
  },
  {
    action: "Validate",
    behavior: "System or user role, per product contract",
  },
  {
    action: "Approve / finalize",
    behavior: "Only via actual Payroll Approvals integration",
  },
  {
    action: "History",
    behavior: "Read-only unless source states otherwise",
  },
  {
    action: "Export",
    behavior: "No UI until explicitly approved",
  },
];

export default function PermissionsVisibility() {
  return (
    <section className="w-full bg-[#EAF3FB] px-6 py-20 sm:px-10 lg:px-14">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-8">

        {/* =========================
            TOP CONTENT
        ========================== */}
        <div className="flex w-full max-w-[1320px] flex-col items-center gap-10 px-0 lg:flex-row lg:items-center lg:gap-14 lg:px-24">

          {/* LEFT CONTENT */}
          <div className="flex w-full flex-1 flex-col items-start gap-3.5">

            {/* Section label */}
            <div className="relative flex h-5 items-center">
              <div className="h-3.5 w-1.5 rounded-[2px] bg-[#0A8FD0]" />

              <div className="ml-[6px] font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#0A8FD0]">
                Permissions &amp; visibility
              </div>
            </div>

            {/* Heading */}
            <div className="pt-[1px]">
              <h2 className="font-['Inter'] text-3xl font-extrabold leading-10 text-[#0A2E4B]">
                Every action is boundary-
                <br />
                checked, never assumed.
              </h2>
            </div>

            {/* Description */}
            <div className="pt-[1px]">
              <p className="font-['Inter'] text-base font-normal leading-7 text-[#526B7F]">
                Approval and finalization are never assumed here — they&apos;re
                <br className="hidden sm:block" />
                delegated to Payroll Approvals only where an actual integration
                <br className="hidden sm:block" />
                exists.
              </p>
            </div>

            {/* Permission pills */}
            <div className="mt-1 grid w-full max-w-[500px] grid-cols-1 gap-2 sm:grid-cols-2">

              {permissions.map((permission) => (
                <div
                  key={permission}
                  className="inline-flex min-h-10 items-center justify-center rounded-full border border-[#D8E1E8] bg-white px-4 py-2"
                >
                  <span className="whitespace-nowrap font-['Inter'] text-xs font-semibold leading-5 text-[#183F5A]">
                    {permission}
                  </span>
                </div>
              ))}

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[380px] w-full flex-1 overflow-hidden rounded-[20px] shadow-[0px_12px_34px_0px_rgba(10,46,75,0.12)]">
            <Image
              src="/images/deductions-and-adjustments/image1.png"
              alt="Permissions and visibility"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 528px"
            />
          </div>
        </div>

        {/* =========================
            TABLE
        ========================== */}
        <div className="w-full max-w-[1116px] overflow-hidden rounded-2xl border border-[#D8E1E8] bg-white">

          {/* TABLE HEADER */}
          <div className="grid grid-cols-[34%_66%]">

            <div className="bg-[#EAF3FB] px-4 py-3">
              <div className="font-['Inter'] text-xs font-bold uppercase leading-4 text-[#183F5A]">
                Action
              </div>
            </div>

            <div className="bg-[#0A2E4B] px-4 py-3">
              <div className="font-['Inter'] text-xs font-bold uppercase leading-4 text-white">
                UI behavior
              </div>
            </div>
          </div>

          {/* TABLE BODY */}
          <div className="flex flex-col">
            {tableRows.map((row, index) => (
              <div
                key={row.action}
                className={`grid grid-cols-[34%_66%] ${
                  index !== tableRows.length - 1
                    ? "border-b border-[#D8E1E8]"
                    : ""
                }`}
              >
                {/* ACTION */}
                <div
                  className={`bg-[#EAF3FB] px-4 py-3 ${
                    index !== tableRows.length - 1
                      ? "border-b border-[#D8E1E8]"
                      : ""
                  }`}
                >
                  <div className="font-['Inter'] text-xs font-bold leading-5 text-[#0A2E4B]">
                    {row.action}
                  </div>
                </div>

                {/* UI BEHAVIOR */}
                <div className="bg-white px-4 py-3">
                  <div className="font-['Inter'] text-xs font-normal leading-5 text-[#0A2E4B]">
                    {row.behavior}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}