import React from "react";
import Link from "next/link";
import SectionShell from "./SectionShell";

export default function AgreementStatusSection() {
  return (
    <SectionShell
      id="agreement-status"
      title="Your organization's agreement status"
    >
      <div className="rounded-xl border border-slate-200 bg-slate-100 p-6">
        <p className="text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
          Requires sign-in &amp; organization match
        </p>

        <p className="mt-3 text-sm leading-5 text-gray-600">
          Viewing your organization&apos;s signed copy, current contract status
          and applicable version requires authentication and matches your
          account&apos;s organization. This page cannot show or infer that
          status while signed out.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/sign-in"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#2C8FD1] to-[#0B4C78] px-6 py-3 text-sm font-bold text-white shadow-sm transition-all hover:from-[#2680bd] hover:to-[#093d61] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
          >
            Sign in to check agreement status
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-sky-950 transition-colors hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
          >
            Contact your account team
          </Link>
        </div>

        <p className="mt-6 text-xs leading-5 text-gray-600">
          If your organization&apos;s agreement cannot be found, that does not
          mean no contract exists — contact your account team rather than
          assuming these public standard terms apply by default.
        </p>
      </div>
    </SectionShell>
  );
}
