import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { ArrowRightIcon } from "../ui/icons";

const inputClass =
  "w-full bg-[#fff] rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-brand-dark placeholder:text-slate-400 transition-colors duration-200 focus:border-brand focus:outline-none";

export default function FinalCtaSection() {
  return (
    <section className="border-b border-[#DCE6EC]/20 bg-brand-dark py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <Reveal>
            <Eyebrow tone="light">Final conversion</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Bring greater clarity and control to your payroll operations.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slate-300">
              Tell us where your people work, how payroll operates today, and what your organization
              needs to improve. We will align the conversation to your workforce, operating markets,
              payroll model, and implementation requirements.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
              <Link
                href="/product"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-white underline decoration-white/40 underline-offset-4 transition-colors duration-200 hover:decoration-white"
              >
                Explore the platform
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/pricing"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-white underline decoration-white/40 underline-offset-4 transition-colors duration-200 hover:decoration-white"
              >
                Learn how pricing works
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100} className="rounded-2xl bg-[#F5F8FA] p-6 text-slate-900 sm:p-8">
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-slate-500">First name</label>
                  <input type="text" name="firstName" className={inputClass} />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-slate-500">Last name</label>
                  <input type="text" name="lastName" className={inputClass} />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-slate-500">Business email</label>
                <input type="email" name="email" className={inputClass} />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-slate-500">Organization</label>
                <input type="text" name="organization" className={inputClass} />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-slate-500">Primary operating country</label>
                  <select name="country" defaultValue="United States" className={inputClass}>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Germany</option>
                    <option>Singapore</option>
                    <option>Brazil</option>
                    <option>India</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-slate-500">Workforce range</label>
                  <select name="workforceRange" defaultValue="1–200" className={inputClass}>
                    <option>1–200</option>
                    <option>201–1,000</option>
                    <option>1,001–5,000</option>
                    <option>5,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-slate-500">
                  Number of payroll jurisdictions
                </label>
                <input type="text" name="jurisdictionCount" placeholder="e.g. 4" className={inputClass} />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-slate-500">Primary payroll objective</label>
                <select name="objective" defaultValue="Consolidate multi-jurisdiction payroll" className={inputClass}>
                  <option>Consolidate multi-jurisdiction payroll</option>
                  <option>Replace an existing payroll provider</option>
                  <option>Add structured approvals and controls</option>
                  <option>Evaluate Zoiko Payroll for a new market</option>
                </select>
              </div>

              <label className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-500">
                <input type="checkbox" name="updates" className="mt-0.5 h-4 w-4 rounded border-slate-300 text-brand focus:ring-brand" />
                Send me occasional product and jurisdiction updates. Optional — see our{" "}
                <Link href="/legal/privacy-notice" className="text-brand-dark underline hover:text-brand">
                  Privacy Notice
                </Link>
                .
              </label>

              <button
                type="submit"
                className="bg-brand-gradient w-full rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/40"
              >
                Book a tailored demonstration
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
