import React from "react";
import Link from "next/link";
import SectionShell from "./SectionShell";

export default function FormalNoticeDeliverySection() {
  return (
    <SectionShell id="formal-notice" title="Formal notice delivery">
      <div className="rounded-xl border border-slate-200 bg-slate-100 p-5">
        <p className="text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
          Route via Legal
        </p>
        <p className="mt-2.5 text-sm leading-5 text-gray-600">
          Formal legal notices, service of process and similar communications
          must use the approved Legal route rather than general contact
          channels. Visit{" "}
          <Link
            href="/contact"
            className="font-bold text-sky-700 underline hover:text-sky-900"
          >
            Contact
          </Link>{" "}
          and choose the Legal-notice route, or your applicable customer
          agreement, for current instructions.
        </p>
      </div>
    </SectionShell>
  );
}
