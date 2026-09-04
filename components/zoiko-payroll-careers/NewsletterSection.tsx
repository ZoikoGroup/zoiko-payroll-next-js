import Reveal from "../ui/Reveal";

export default function NewsletterSection() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-gray-50 px-10 py-7 sm:flex-row">
            <div>
              <p className="text-base font-bold text-cyan-950">
                Get payroll governance insights in your inbox
              </p>
              <p className="mt-1 text-xs text-gray-400">
                One email a month. No recruiting spam.
              </p>
            </div>
            <div className="flex items-center gap-2.5">
              <input
                type="email"
                placeholder="name@company.com"
                className="w-56 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-xs font-medium text-[#757575] placeholder:text-[#757575] placeholder:font-medium outline-none"
              />
              <button className="inline-flex items-center justify-center rounded-lg bg-linear-to-b from-sky-600 to-sky-900 px-5 py-3 text-sm font-bold text-white shadow-[0px_6px_16px_0px_rgba(9,60,115,0.25)] transition-all duration-200 hover:-translate-y-0.5">
                Subscribe
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}