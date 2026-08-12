import Reveal from "../ui/Reveal";

const fields = ["Organization", "Operating jurisdictions", "Current payroll setup"];

export default function CtaSection() {
  return (
    <section className="bg-white pb-20 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-slate-900 p-8 sm:p-12">
            <div
              className="absolute inset-0 bg-radial-[at_85%_-20%] from-blue-900 via-slate-900 to-slate-900"
              aria-hidden="true"
            />

            <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  Ready to scope your migration?
                </h2>
                <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
                  Tell us your entities, jurisdictions and current payroll setup. We&rsquo;ll come back
                  with a realistic stage-by-stage timeline and a named implementation lead — not a
                  generic quote.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <span className="rounded-lg bg-white px-4 py-2.5 text-center text-sm font-semibold text-slate-900">
                    Book a scoping call
                  </span>
                  <span className="rounded-lg border border-white/30 px-4 py-2.5 text-center text-sm font-semibold text-white">
                    Talk to an implementation specialist
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                {fields.map((field) => (
                  <div key={field} className="mb-4">
                    <label className="block text-xs text-slate-300" htmlFor={field}>
                      {field}
                    </label>
                    <input
                      id={field}
                      name={field}
                      type="text"
                      className="mt-1.5 h-9 w-full rounded-md border border-white/15 bg-white/5 px-3 text-sm text-white outline-none focus:border-blue-400"
                    />
                  </div>
                ))}
                <span className="mt-2 block rounded-md bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white">
                  Request implementation timeline
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
