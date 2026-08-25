import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { AlertTriangleIcon, LinkIcon, PrinterIcon, ArrowRightIcon } from "../ui/icons";

const applicability = [
  "Role: Approver / Finance Controller",
  "Plan: Enterprise",
  "Platform: Web",
  "Effective: Aug 12, 2026",
];

const metadata = [
  { label: "Release ID", value: "REL-2026-114" },
  { label: "Published", value: "Aug 12, 2026" },
  { label: "Revision", value: "Rev. 1" },
  { label: "State", value: "Released" },
  { label: "Last verified", value: "Aug 12, 2026" },
];

export default function ReleaseDetailSection() {
  return (
    <section className="border-t border-[#DCE6EC] bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-[640px]">
          <Eyebrow>Release note detail + applicability</Eyebrow>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-tight sm:text-3xl tracking-tight text-brand-dark">
            The strongest trust artifact on the page
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
          <Reveal delay={100} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 bg-[#EAF1F6] px-5 py-3">
              <span className="text-xs font-semibold text-slate-600">REL-2026-114 · Approvals</span>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 transition-colors duration-200 hover:text-brand-dark"
                >
                  <LinkIcon className="h-3.5 w-3.5" />
                  Copy link
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 transition-colors duration-200 hover:text-brand-dark"
                >
                  <PrinterIcon className="h-3.5 w-3.5" />
                  Print
                </button>
              </div>
            </div>

            <p className="flex items-center gap-2 bg-[#F7EBCF] px-5 py-3 text-sm font-bold text-[#A6650F]">
              <AlertTriangleIcon className="h-4 w-4 shrink-0" />
              Action required
            </p>

            <div className="px-6 py-6">
              <h3 className="text-xl font-bold text-brand-dark">
                Payroll Approval Delegation — Expanded Scope
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Delegated approvers can now act on multi-entity payroll cycles when explicitly
                granted by an account owner.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 rounded-lg bg-[#EAF3FA] px-4 py-3">
                {applicability.map((item, index) => (
                  <span key={item} className="flex items-center gap-3 text-xs font-semibold text-brand-dark">
                    {index > 0 ? (
                      <span aria-hidden="true" className="text-slate-400">
                        ·
                      </span>
                    ) : null}
                    {item}
                  </span>
                ))}
              </div>

              <h4 className="mt-6 text-sm font-bold text-brand-dark">What changed</h4>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Previously, delegation was limited to a single entity per approver. Delegation can
                now span multiple entities within one grant.
              </p>

              <div className="mt-5 rounded-r-lg border-l-4 border-brand bg-[#EAF3FA] px-5 py-4">
                <p className="text-sm leading-6 text-slate-700">
                  <span className="font-bold text-brand-dark">Action:</span> Payroll Administrators
                  must re-confirm existing delegation grants before Sep 1, 2026 using the current
                  Approvals configuration guide.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={160} className="h-fit rounded-2xl border border-slate-200 bg-white shadow-sm">
            <dl className="divide-y divide-slate-100">
              {metadata.map((item) => (
                <div key={item.label} className="flex items-center justify-between gap-4 px-5 py-3">
                  <dt className="text-xs text-slate-500">{item.label}</dt>
                  <dd className="text-xs font-bold text-brand-dark">{item.value}</dd>
                </div>
              ))}
            </dl>

            <div className="border-t border-slate-100 px-5 py-4">
              <Link
                href="/payroll-approvals"
                className="group inline-flex items-center gap-1.5 text-sm font-bold text-brand transition-colors duration-200 hover:text-brand-dark"
              >
                Open current Approvals guide
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
