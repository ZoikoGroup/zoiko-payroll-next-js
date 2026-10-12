"use client";

import React, { useEffect, useRef, useState } from "react";

type Row = {
  reference: string;
  context: string;
  type: string;
  value: string;
  effective: string;
  status: "Active" | "Pending review" | "Validation failed";
  validation: string;
  updated: string;
};

const rows: Row[] = [
  {
    reference: "DA-2214",
    context: "Worker A — Pay Group 1",
    type: "Recurring",
    value: "—120.00",
    effective: "Sep 1, 2026",
    status: "Active",
    validation: "Passed",
    updated: "2h ago",
  },
  {
    reference: "DA-2219",
    context: "Worker B — Pay Group 1",
    type: "One-time",
    value: "+85.00",
    effective: "Aug 30, 2026",
    status: "Pending review",
    validation: "Running",
    updated: "1d ago",
  },
  {
    reference: "DA-2201-C",
    context: "Worker C — Pay Group 2",
    type: "Corrective",
    value: "—45.00",
    effective: "Aug 24, 2026",
    status: "Validation failed",
    validation: "Failed",
    updated: "3d ago",
  },
];

const filters = [
  "All types",
  "Recurring",
  "One-time",
  "Corrective",
  "Validation failed",
];

export default function ProductUI() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#F7F9FB] px-0 py-14 pb-20"
    >
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-4 px-6 md:px-12 lg:px-24">
        {/* =====================================================
            HEADING
        ====================================================== */}
        <div
          className={`flex w-full max-w-[680px] flex-col items-start gap-4 transition-all duration-700 ease-out ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          {/* Eyebrow */}
          <div className="flex w-full items-center justify-center gap-1.5">
            <div className="flex h-5 flex-col items-center justify-center py-[3px]">
              <div className="h-3.5 w-1.5 rounded-[2px] bg-[#1687C9]" />
            </div>

            <div className="text-center font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#1687C9]">
              Product UI showcase
            </div>
          </div>

          {/* Heading */}
          <div className="flex w-full flex-col items-center pb-[0.58px]">
            <h2 className="m-0 text-center font-['Inter'] text-3xl font-extrabold leading-10 text-[#0A2E4B]">
              A credible synthetic workspace — never
              <br className="hidden md:block" />
              live data.
            </h2>
          </div>
        </div>

        {/* =====================================================
            PRODUCT UI
        ====================================================== */}
        <div
          className={`group mt-0 flex w-full max-w-[1040px] flex-col items-start gap-2.5 overflow-hidden rounded-2xl bg-[#0A2E4B] px-5 pb-5 pt-8 shadow-[0px_12px_34px_0px_rgba(10,46,75,0.12)] transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-[0px_18px_42px_rgba(10,46,75,0.18)] ${
            visible
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-10 scale-[0.98] opacity-0"
          }`}
          style={{
            transitionDelay: "180ms",
          }}
        >
          {/* =================================================
              TOP BAR
          ================================================== */}
          <div className="flex w-full items-center justify-between">
            {/* Title */}
            <div className="relative h-6 w-52 shrink-0">
              <div className="absolute left-0 top-[7px] h-2 w-2 rounded-[2px] bg-[#1687C9]" />

              <div className="absolute left-4 top-[-1px] whitespace-nowrap font-['Inter'] text-sm font-bold leading-6 text-white">
                Deductions and Adjustments
              </div>
            </div>

            {/* New change */}
            <button
              type="button"
              className="rounded-[20px] bg-white/[0.10] px-2.5 py-1 font-['Inter'] text-xs font-bold leading-4 text-[#B8E5FF] transition-all duration-300 hover:bg-white/[0.16] hover:text-white"
            >
              + New change
            </button>
          </div>

          {/* =================================================
              STAT CARDS
          ================================================== */}
          <div className="flex w-full items-start justify-center gap-2 pt-[3px]">
            <StatCard value="12" label="ACTIVE" delay="250ms" visible={visible} />
            <StatCard
              value="3"
              label="PENDING REVIEW"
              delay="300ms"
              visible={visible}
            />
            <StatCard
              value="1"
              label="VALIDATION FAILED"
              delay="350ms"
              visible={visible}
            />
            <StatCard
              value="2"
              label="CORRECTIVE"
              delay="400ms"
              visible={visible}
            />
          </div>

          {/* =================================================
              SPECIMEN NOTE
          ================================================== */}
          <div className="flex w-full flex-col items-center pb-[0.8px]">
            <div className="text-center font-['Inter'] text-xs font-normal leading-4 text-[#8DAFC5]">
              Specimen counts — illustrative only.
            </div>
          </div>

          {/* =================================================
              FILTERS
          ================================================== */}
          <div className="flex w-full flex-wrap items-start gap-2.5 pt-2">
            {filters.map((filter, index) => (
              <button
                key={filter}
                type="button"
                className={`rounded-lg px-3.5 py-1.5 font-['Inter'] text-xs font-semibold leading-5 transition-all duration-300 ${
                  index === 0
                    ? "bg-[#0A2E4B] text-white ring-1 ring-white/5 hover:bg-[#123D5D]"
                    : "bg-[#F0F3F6] text-[#123D5D] hover:-translate-y-0.5 hover:bg-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* =================================================
              TABLE
          ================================================== */}
          <div className="w-full overflow-x-auto pt-[5px]">
            <div className="min-w-[1000px] overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-[112px_208px_96px_144px_128px_160px_96px_80px]">
                <TableHeader>Reference</TableHeader>
                <TableHeader>Context</TableHeader>
                <TableHeader>Type</TableHeader>
                <TableHeader>Value (specimen)</TableHeader>
                <TableHeader>Effective</TableHeader>
                <TableHeader>Status</TableHeader>
                <TableHeader>Validation</TableHeader>
                <TableHeader>Updated</TableHeader>
              </div>

              {/* Table Rows */}
              <div className="flex flex-col">
                {rows.map((row, index) => (
                  <div
                    key={row.reference}
                    className={`grid grid-cols-[112px_208px_96px_144px_128px_160px_96px_80px] transition-colors duration-300 hover:bg-white/[0.045] ${
                      index !== rows.length - 1
                        ? "border-b border-white/[0.08]"
                        : ""
                    }`}
                  >
                    <TableCell>{row.reference}</TableCell>
                    <TableCell>{row.context}</TableCell>
                    <TableCell>{row.type}</TableCell>
                    <TableCell>{row.value}</TableCell>
                    <TableCell>{row.effective}</TableCell>

                    <TableCell>
                      <StatusBadge status={row.status} />
                    </TableCell>

                    <TableCell>{row.validation}</TableCell>
                    <TableCell>{row.updated}</TableCell>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            DISCLAIMER
        ====================================================== */}
        <div
          className={`flex w-full flex-col items-center transition-all duration-700 ease-out ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
          style={{
            transitionDelay: "650ms",
          }}
        >
          <div className="text-center font-['Inter'] text-xs font-normal leading-5 text-[#71889A]">
            Illustrative specimen data — never real employee identifiers or
            payroll amounts. Selecting a row opens a detail drawer with
            summary, timing, validation detail, history and any related
            correction.
          </div>
        </div>
      </div>

      {/* =====================================================
          RESPONSIVE STYLES
      ====================================================== */}
      <style jsx>{`
        @media (max-width: 767px) {
          section {
            padding-top: 48px;
            padding-bottom: 64px;
          }

          h2 {
            font-size: 28px;
            line-height: 36px;
          }
        }

        @media (max-width: 480px) {
          h2 {
            font-size: 25px;
            line-height: 33px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ============================================================
   STAT CARD
============================================================ */

function StatCard({
  value,
  label,
  delay,
  visible,
}: {
  value: string;
  label: string;
  delay: string;
  visible: boolean;
}) {
  return (
    <div
      className={`group/stat flex min-w-0 flex-1 flex-col items-start gap-0.5 rounded-lg bg-white/[0.06] px-2 pb-2.5 pt-2 transition-all duration-500 hover:bg-white/[0.10] ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0"
      }`}
      style={{
        transitionDelay: delay,
      }}
    >
      <div className="flex w-full flex-col items-start pb-[0.8px]">
        <div className="w-full font-['Inter'] text-lg font-extrabold leading-7 text-white">
          {value}
        </div>
      </div>

      <div className="flex w-full flex-col items-start">
        <div className="w-full whitespace-nowrap font-['Inter'] text-[10px] font-semibold leading-4 tracking-tight text-[#8BB7D1]">
          {label}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   TABLE HEADER
============================================================ */

function TableHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-white/[0.10] px-3 py-2">
      <div className="whitespace-nowrap font-['Inter'] text-[9.5px] font-bold uppercase leading-4 text-[#8DAFC5]">
        {children}
      </div>
    </div>
  );
}

/* ============================================================
   TABLE CELL
============================================================ */

function TableCell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-white/[0.08] px-3 py-2.5">
      <div className="whitespace-nowrap font-['Inter'] text-xs font-normal leading-5 text-[#C7D8E4]">
        {children}
      </div>
    </div>
  );
}

/* ============================================================
   STATUS BADGE
============================================================ */

function StatusBadge({
  status,
}: {
  status: Row["status"];
}) {
  if (status === "Active") {
    return (
      <span className="inline-flex rounded-[20px] bg-[#E6F3EA] px-2 py-px font-['Inter'] text-xs font-bold leading-4 text-[#36805A]">
        Active
      </span>
    );
  }

  if (status === "Pending review") {
    return (
      <span className="inline-flex rounded-[20px] bg-[#FFF0CC] px-2 py-px font-['Inter'] text-xs font-bold leading-4 text-[#A56B00]">
        Pending review
      </span>
    );
  }

  return (
    <span className="inline-flex rounded-[20px] bg-[#F5DCDD] px-2 py-px font-['Inter'] text-xs font-bold leading-4 text-[#8B2028]">
      Validation failed
    </span>
  );
}