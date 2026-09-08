import React from "react";
import Link from "next/link";

export default function ExistingCustomerBand() {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-[20px] border border-neutral-200 bg-white px-6 py-7 sm:px-9 sm:py-8 lg:flex-row lg:items-center">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-extrabold text-slate-900">
            Already a Zoiko Payroll customer?
          </h2>
          <p className="max-w-lg text-sm leading-6 text-gray-500">
            If you need account or support assistance, use your customer support
            route instead of requesting a sales demo.
          </p>
        </div>
        <Link
          href="/resources/help-center"
          className="shrink-0 rounded-[999px] border border-neutral-200 px-6 py-3.5 text-base font-bold text-slate-900 transition-colors hover:border-sky-600"
        >
          Go to customer support
        </Link>
      </div>
    </section>
  );
}
