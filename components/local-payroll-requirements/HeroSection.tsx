import Reveal from "../ui/Reveal";

const stats = [
  { value: "6", label: "Requirement dimensions tracked" },
  { value: "100%", label: "Changes effective-dated" },
  { value: "0", label: "Silent auto-activations" },
];

const workspaceItems = [
  { name: "Payroll calendar — Germany", meta: "Calendar · Owner: M. Weber", status: "Configured", statusStyle: "bg-emerald-300/20 text-green-300" },
  { name: "Statutory deduction table — Brazil", meta: "Calculation · Evidence review due", status: "Needs review", statusStyle: "bg-orange-300/20 text-orange-200" },
  { name: "Payslip format — France", meta: "Documents · Effective Oct 2026", status: "Future effective", statusStyle: "bg-red-400/20 text-red-300" },
  { name: "Approval delegation — Japan", meta: "Authority · Change detected", status: "Change detected", statusStyle: "bg-orange-300/20 text-orange-200" },
];

const counters = [
  { value: "42", label: "CONFIGURED" },
  { value: "5", label: "NEEDS REVIEW" },
  { value: "3", label: "CHANGE DETECTED" },
  { value: "2", label: "FUTURE EFFECTIVE" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#050F1A] py-10">
      {/* Radial glows */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_0%,#123A5C_0%,#071C2E_45%,#050F1A_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-20 h-[543px] w-[864px] bg-[radial-gradient(circle,rgba(56,189,248,0.2)_0%,transparent_70%)] blur-[5px]"
        aria-hidden="true"
      />
      <div
        className="absolute -left-36 top-[389px] h-[621px] w-[1008px] bg-[radial-gradient(circle,rgba(34,211,238,0.3)_0%,transparent_70%)] blur-[5px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left Column */}
          <Reveal>
            <div className="w-60 text-blue-300 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wider">
              / Local payroll requirements
            </div>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl sm:leading-[51.52px]">
              Preserve local payroll <br />
              requirements without <br />
              losing global control.
            </h1>

            <div className="mt-6 w-[480px] max-w-[480px] flex flex-col justify-start items-start">
              <div className="text-slate-300 text-base font-normal font-['Inter'] leading-6">
                Model payroll calendars, calculation context, deductions,<br />
                documents, approvals, currencies and operating practices<br />
                by jurisdiction — while keeping ownership, effective dates,<br />
                evidence and change history visible in one control<br />
                framework.
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="rounded-[30px] bg-blue-300 px-5 py-2.5 text-center text-sm font-extrabold text-sky-950 transition hover:bg-blue-200"
              >
                Review a jurisdiction
              </button>
              <button
                type="button"
                className="rounded-[30px] border border-white/30 px-5 py-2.5 text-center text-sm font-bold text-white transition hover:bg-white/10"
              >
                Book a demo
              </button>
            </div>

            <div className="mt-8 flex gap-10">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5">
                  <span className="text-2xl font-extrabold leading-10 text-blue-300">
                    {stat.value}
                  </span>
                  <span className="text-xs leading-5 text-slate-400">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <span className="text-xs text-blue-300">
                Configuration support is not legal advice.{" "}
              </span>
              <a
                href="#compliance-workflows"
                className="text-xs font-bold text-blue-300 hover:underline"
              >
                See Compliance Workflows →
              </a>
            </div>
          </Reveal>

          {/* Right Column / Workspace UI Mockup */}
          <Reveal delay={120}>
            <div className="flex flex-col gap-3.5">
              {/* Workspace card */}
              <div className="rounded-2xl bg-sky-950 p-5 shadow-[0px_8px_24px_rgba(10,46,75,0.08)] outline outline-1 outline-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-xs bg-sky-600" />
                    <span className="text-sm font-bold text-white">
                      Local Requirements Workspace
                    </span>
                  </div>
                  <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-bold text-blue-200">
                    v14 · as of Aug 2026
                  </span>
                </div>

                {/* Counters */}
                <div className="mt-3 flex gap-2">
                  {counters.map((c) => (
                    <div
                      key={c.label}
                      className="flex flex-1 flex-col gap-0.5 rounded-lg bg-white/5 px-2 py-2.5"
                    >
                      <span className="text-lg font-extrabold leading-7 text-white">
                        {c.value}
                      </span>
                      <span className="text-[10px] font-semibold tracking-tight text-slate-400">
                        {c.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Items */}
                <div className="mt-3.5 flex flex-col gap-2">
                  {workspaceItems.map((item) => {
                    const isGermany = item.name.includes("Germany");
                    return (
                      <div
                        key={item.name}
                        className={`flex items-center justify-between rounded-[10px] px-3 py-2.5 outline outline-1 outline-offset-[-1px] ${
                          isGermany
                            ? "bg-[#FFFFFF0D] outline-[#FFFFFF14]"
                            : "bg-white/5 outline-white/10"
                        }`}
                      >
                        <div>
                          <span className="block text-xs font-bold text-blue-100">
                            {item.name}
                          </span>
                          <span className="block text-xs text-slate-400">
                            {item.meta}
                          </span>
                        </div>
                        <span
                          className={`rounded-full px-2 py-[3px] text-xs font-bold ${item.statusStyle}`}
                        >
                          {item.status}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom feature cards with 12.png and 13.png */}
              <div className="flex gap-3">
                <div className="relative flex-1 h-24 overflow-hidden rounded-xl bg-slate-900 outline outline-1 outline-offset-[-1px] outline-white/10">
                  <img
                    src="/12.png"
                    alt="Regional teams, one workspace"
                    className="absolute inset-0 h-full w-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <div className="relative flex h-full flex-col justify-end px-3 py-3">
                    <span className="text-xs font-bold text-white">
                      Regional teams, one workspace
                    </span>
                  </div>
                </div>
                <div className="relative flex-1 h-24 overflow-hidden rounded-xl bg-slate-900 outline outline-1 outline-offset-[-1px] outline-white/10">
                  <img
                    src="/13.png"
                    alt="Ownership, named per market"
                    className="absolute inset-0 h-full w-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <div className="relative flex h-full flex-col justify-end px-3 py-3">
                    <span className="text-xs font-bold text-white">
                      Ownership, named per market
                    </span>
                  </div>
                </div>
              </div>

              {/* Evidence owners card with abc.png */}
              <div className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 outline outline-1 outline-offset-[-1px] outline-white/10">
                <img
                  src="/abc.png"
                  alt="Evidence owners"
                  className="h-7 w-auto object-contain"
                />
                <div>
                  <span className="block text-xs font-semibold tracking-wider text-slate-400">
                    EVIDENCE OWNERS
                  </span>
                  <span className="block text-xs font-bold text-white">
                    Named per requirement
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}