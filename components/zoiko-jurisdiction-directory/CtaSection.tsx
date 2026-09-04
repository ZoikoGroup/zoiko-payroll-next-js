"use client";

export default function CtaSection() {
  return (
    <section className="mx-[84px] rounded-3xl bg-slate-900 px-20 py-16">
      <div className="max-w-[1117px] flex items-center gap-10">
        {/* Left: description */}
        <div className="flex flex-1 flex-col gap-3.5 pb-6">
          <h2 className="text-3xl font-bold leading-10 text-white">
            Need to confirm your exact payroll footprint?
          </h2>
          <p className="max-w-[480px] text-base leading-6 text-white/72">
            Tell us the jurisdictions, entities, worker population, current payroll model and
            required services. Please don&apos;t send employee-level payroll data in your first
            inquiry.
          </p>
          <div className="pt-3">
            <a
              href="#"
              className="text-sm font-bold text-white underline"
            >
              Explore country and territory guides →
            </a>
          </div>
        </div>

        {/* Right: form */}
        <div className="w-[460px] flex flex-col gap-3 rounded-2xl bg-white p-6">
          <p className="text-base font-bold text-slate-900">
            Check jurisdiction availability
          </p>
          <div className="flex gap-3 pt-1">
            <div className="flex flex-1 flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-700">First name</label>
              <div className="rounded-lg bg-slate-50 px-3 py-2.5 outline outline-1 outline-offset-[-1px] outline-slate-200">
                <span className="text-sm text-brand">Jordan</span>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-700">Last name</label>
              <div className="rounded-lg bg-slate-50 px-3 py-2.5 outline outline-1 outline-offset-[-1px] outline-slate-200">
                <span className="text-sm text-brand">Reyes</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-700">Business email</label>
            <div className="rounded-lg bg-slate-50 px-3 py-2.5 outline outline-1 outline-offset-[-1px] outline-slate-200">
              <span className="text-sm text-brand">jordan@company.com</span>
            </div>
          </div>
          <div className="flex gap-3 pb-1.5">
            <div className="flex flex-1 flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-700">
                Primary operating jurisdiction
              </label>
              <div className="rounded-lg bg-slate-50 px-3 py-2.5 outline outline-1 outline-offset-[-1px] outline-slate-200">
                <span className="text-sm text-brand">United States</span>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-700">Workforce range</label>
              <div className="rounded-lg bg-slate-50 px-3 py-2.5 outline outline-1 outline-offset-[-1px] outline-slate-200">
                <span className="text-sm text-brand">1–200</span>
              </div>
            </div>
          </div>
          <button className="rounded-[10px] bg-brand-gradient px-5 py-3 text-base font-bold text-white shadow-[0px_4px_14px_rgba(12,71,115,0.28)] outline outline-1 outline-offset-[-1px] outline-black/0">
            Book a tailored demonstration
          </button>
        </div>
      </div>
    </section>
  );
}
