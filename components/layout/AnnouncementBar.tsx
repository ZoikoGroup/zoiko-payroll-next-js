"use client";

import { useState } from "react";
import Link from "next/link";
import { CloseIcon } from "../ui/icons";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-brand-gradient text-white">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-2 text-xs sm:px-6 sm:text-sm lg:px-8">
        <button
          type="button"
          onClick={() => setVisible(false)}
          aria-label="Dismiss announcement"
          className="shrink-0 rounded-full p-1 text-white/80 transition-colors duration-200 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        >
          <CloseIcon className="h-3.5 w-3.5" />
        </button>

        <p className="min-w-0 flex-1 truncate text-center sm:text-left">
          <span className="mr-2 rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide sm:text-xs">
            New
          </span>
          A practical guide to managing payroll across multiple jurisdictions.{" "}
          <Link
            href="/resources"
            className="font-semibold underline decoration-white/40 underline-offset-4 transition-colors duration-200 hover:decoration-white"
          >
            Read the guide →
          </Link>
        </p>

        <div className="hidden shrink-0 items-center gap-4 text-white/85 sm:flex">
          <Link href="/resources/system-status" className="transition-colors duration-200 hover:text-white">
            System status
          </Link>
          <Link href="/resources/help-center" className="transition-colors duration-200 hover:text-white">
            Help Center
          </Link>
        </div>
      </div>
    </div>
  );
}
