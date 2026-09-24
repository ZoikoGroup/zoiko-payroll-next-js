"use client";

import React, { useMemo, useState } from "react";

type Notice = {
  notice: string;
  category: string;
  scope: string;
  status: "Current" | "Superseded";
  effective: string;
  authority: string;
  action: string;
};

const notices: Notice[] = [
  {
    notice: "Trademark and Brand Notice",
    category: "IP",
    scope: "All Zoiko Payroll properties",
    status: "Current",
    effective: "Jan 2026",
    authority: "Brand Guidelines",
    action: "Read notice",
  },
  {
    notice: "Operator Disclosure",
    category: "Operator & corporate",
    scope: "Global",
    status: "Current",
    effective: "Mar 2026",
    authority: "Terms of Use",
    action: "Read notice",
  },
  {
    notice: "Open-Source Attribution Notice",
    category: "Third-party",
    scope: "Product platform",
    status: "Current",
    effective: "Feb 2026",
    authority: "N/A",
    action: "Read notice",
  },
  {
    notice: "Illustrative Content Notice",
    category: "Product & service",
    scope: "Marketing & product pages",
    status: "Current",
    effective: "Jan 2026",
    authority: "Terms of Use",
    action: "Read notice",
  },
  {
    notice: "Prior Regional Notice (EU)",
    category: "Regional",
    scope: "EU/EEA",
    status: "Superseded",
    effective: "Superseded Jun 2025",
    authority: "Privacy Notice",
    action: "View record",
  },
];

const filters = [
  "All categories",
  "Operator & corporate",
  "Intellectual property",
  "Third-party",
  "Regional",
  "Current only",
];

const NoticeRegistry = () => {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All categories");

  const filteredNotices = useMemo(() => {
    const query = search.trim().toLowerCase();

    return notices.filter((notice) => {
      const matchesSearch =
        !query ||
        notice.notice.toLowerCase().includes(query) ||
        notice.category.toLowerCase().includes(query) ||
        notice.scope.toLowerCase().includes(query) ||
        notice.authority.toLowerCase().includes(query);

      let matchesFilter = true;

      if (activeFilter === "Current only") {
        matchesFilter = notice.status === "Current";
      } else if (activeFilter !== "All categories") {
        matchesFilter =
          notice.category.toLowerCase() === activeFilter.toLowerCase();
      }

      return matchesSearch && matchesFilter;
    });
  }, [search, activeFilter]);

  return (
    <section className="w-full bg-[#EAF0F5] px-5 sm:px-8 md:px-12 lg:px-14 py-14 sm:py-16 lg:py-20">
      <div className="w-full max-w-[1320px] mx-auto px-0 sm:px-6 md:px-12 lg:px-24 flex flex-col items-center gap-4">

        {/* Header */}
        <div className="w-full max-w-[680px] flex flex-col items-start gap-4">

          {/* Label */}
          <div className="w-full flex justify-center items-center gap-1.5">
            <div className="h-5 py-[3px] flex flex-col justify-center items-center">
              <div className="w-1.5 h-3.5 bg-[#0A8FD0] rounded-xs" />
            </div>

            <div className="text-center text-[#0A8FD0] text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wider">
              Published notices registry
            </div>
          </div>

          {/* Heading */}
          <div className="w-full flex flex-col items-center">
            <h2 className="text-center text-[#0A2E4B] text-2xl sm:text-3xl font-extrabold font-['Inter'] leading-9 sm:leading-10">
              Every record shows its scope, status and
              <br className="hidden sm:block" />
              authority relation.
            </h2>
          </div>
        </div>

        {/* Search + Filters */}
        <div className="w-full max-w-[1000px] px-4 sm:px-5 pt-6 sm:pt-8 pb-5 bg-white rounded-2xl border border-[#DCE6ED] shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] flex flex-col gap-3.5">

          {/* Search */}
          <div className="w-full flex flex-col sm:flex-row items-stretch gap-2">
            <div className="flex-1 min-w-0 px-3.5 py-3.5 bg-white rounded-lg border border-[#DCE6ED] overflow-hidden">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by notice title or summary"
                className="
                  w-full
                  bg-transparent
                  outline-none
                  text-[#2F4658]
                  text-sm
                  font-normal
                  font-['Inter']
                  placeholder:text-[#6D7B86]
                "
              />
            </div>

            <button
              type="button"
              className="
                px-6
                py-3
                bg-gradient-to-r
                from-[#159BD7]
                to-[#075B8D]
                rounded-lg
                shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)]
                flex
                justify-center
                items-center
                shrink-0
                text-white
                text-sm
                font-bold
                font-['Inter']
                leading-6
                hover:opacity-90
                transition-opacity
              "
            >
              Search
            </button>
          </div>

          {/* Filters */}
          <div className="w-full flex items-center gap-2 flex-wrap">
            {filters.map((filter) => {
              const active = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`
                    px-3.5
                    py-1.5
                    rounded-lg
                    text-xs
                    font-semibold
                    font-['Inter']
                    leading-5
                    transition-colors
                    ${
                      active
                        ? "bg-[#0A2E4B] text-white"
                        : "bg-[#EAF0F5] text-[#40586A] hover:bg-[#DCE6ED]"
                    }
                  `}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Registry Table */}
        <div className="w-full pt-3 overflow-hidden">
          <div className="w-full bg-white rounded-2xl border border-[#DCE6ED] overflow-hidden">

            {/* Horizontal scroll only when required */}
            <div className="w-full overflow-x-auto">
              <div className="min-w-[1116px]">

                {/* Table Header */}
                <div className="grid grid-cols-[224px_160px_192px_112px_160px_144px_112px]">
                  <TableHeader>Notice</TableHeader>
                  <TableHeader>Category</TableHeader>
                  <TableHeader>Scope</TableHeader>
                  <TableHeader>Status</TableHeader>
                  <TableHeader>Effective</TableHeader>
                  <TableHeader>Authority relation</TableHeader>
                  <TableHeader>Action</TableHeader>
                </div>

                {/* Table Rows */}
                {filteredNotices.length > 0 ? (
                  filteredNotices.map((notice) => (
                    <div
                      key={notice.notice}
                      className="grid grid-cols-[224px_160px_192px_112px_160px_144px_112px]"
                    >
                      <TableCell>
                        {notice.notice}
                      </TableCell>

                      <TableCell>
                        {notice.category}
                      </TableCell>

                      <TableCell>
                        {notice.scope}
                      </TableCell>

                      <TableCell>
                        <StatusBadge status={notice.status} />
                      </TableCell>

                      <TableCell>
                        {notice.effective}
                      </TableCell>

                      <TableCell>
                        {notice.authority}
                      </TableCell>

                      <TableCell>
                        <button
                          type="button"
                          className="text-[#0A8FD0] text-xs font-bold font-['Inter'] leading-5 hover:underline"
                        >
                          {notice.action}
                        </button>
                      </TableCell>
                    </div>
                  ))
                ) : (
                  <div className="px-6 py-10 text-center text-[#587387] text-sm font-['Inter']">
                    No notices match the selected filters.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="w-full flex flex-col items-center">
          <p className="text-center text-[#587387] text-xs font-normal font-['Inter'] leading-5">
            Illustrative registry rows for this design template. A source-stale
            record is never marked current — it is suppressed or shown with an
            explicit currentness warning.
          </p>
        </div>
      </div>
    </section>
  );
};

/* --------------------------------
   Table Header
--------------------------------- */

const TableHeader = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="px-3.5 py-3 bg-[#EAF0F5] flex items-center">
      <div className="text-[#40586A] text-[10px] font-bold font-['Inter'] uppercase leading-4">
        {children}
      </div>
    </div>
  );
};

/* --------------------------------
   Table Cell
--------------------------------- */

const TableCell = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="min-h-[68px] px-3.5 py-3 border-t border-[#DCE6ED] flex items-center">
      <div className="text-[#0A2E4B] text-xs font-normal font-['Inter'] leading-5">
        {children}
      </div>
    </div>
  );
};

/* --------------------------------
   Status Badge
--------------------------------- */

const StatusBadge = ({
  status,
}: {
  status: Notice["status"];
}) => {
  const isCurrent = status === "Current";

  return (
    <span
      className={`
        inline-flex
        items-center
        px-2
        py-px
        rounded-full
        text-[10px]
        font-extrabold
        font-['Inter']
        uppercase
        leading-4
        tracking-tight
        whitespace-nowrap
        ${
          isCurrent
            ? "bg-[#E4F1E8] text-[#198754]"
            : "bg-[#EAF0F5] text-[#587387]"
        }
      `}
    >
      {status}
    </span>
  );
};

export default NoticeRegistry;