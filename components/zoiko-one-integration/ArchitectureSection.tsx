import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const payrollDomain = [
  "Payroll runs & calculations",
  "Approval state",
  "Payroll records & versions",
  "Payroll reporting",
];

const connectionLayer = [
  "Service identity & scopes",
  "Field mappings & version",
  "Events / API transport",
  "Observability & audit evidence",
];

const capabilities = [
  "Identity & access",
  "Workforce / HR context",
  "Time / operational inputs",
  "Finance mapping",
];

export default function ArchitectureSection() {
  return (
    <section className="border-t border-slate-200 bg-[#F5F8FA] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-4xl">
          <Eyebrow>Interoperability architecture</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold leading-9 text-sky-950">
            Payroll stays authoritative. The connection layer stays visible
          </h2>
          <p className="mt-4 text-base leading-6 text-slate-600">
            Payroll runs, calculations, approval state, records and reporting are owned by Zoiko Payroll.
            Nothing about that changes when a connection is enabled.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-8">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="grid grid-cols-1 items-stretch lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
              <div className="bg-sky-950 p-6">
                <p className="font-mono text-xs uppercase leading-4 tracking-wider text-sky-300">
                  Zoiko payroll domain
                </p>
                <div className="mt-4 space-y-2.5">
                  {payrollDomain.map((item) => (
                    <p
                      key={item}
                      className="rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center py-3 lg:px-2" aria-hidden="true">
                <span className="text-lg text-slate-400">⇄</span>
              </div>

              <div className="p-6">
                <p className="font-mono text-xs uppercase leading-4 tracking-wider text-sky-700">
                  Connection layer
                </p>
                <div className="mt-4 space-y-2.5">
                  {connectionLayer.map((item) => (
                    <p
                      key={item}
                      className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-sky-950"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center py-3 lg:px-2" aria-hidden="true">
                <span className="text-lg text-slate-400">⇄</span>
              </div>

              <div className="p-6">
                <p className="font-mono text-xs uppercase leading-4 tracking-wider text-sky-700">
                  Approved Zoiko capabilities
                </p>
                <div className="mt-4 space-y-2.5">
                  {capabilities.map((item) => (
                    <p
                      key={item}
                      className="rounded-lg border border-slate-200 bg-[#EFF5FB] px-4 py-2.5 text-sm text-sky-950"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-4 text-xs leading-5 text-slate-600">
            Ownership is shown at the object and field level — for example, &ldquo;legal entity&rdquo; is
            authoritative in payroll, &ldquo;worker profile&rdquo; may be authoritative upstream. There is
            never one universal source of truth claimed across products.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
