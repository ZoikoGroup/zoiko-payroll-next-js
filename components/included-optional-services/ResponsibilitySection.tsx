import Reveal from "../ui/Reveal";

const tableRows = [
  {
    domain: "Calendar & run coordination",
    responsibility: "Zoiko / provider where contracted",
    disclosure: "Who owns cutoffs and final approval",
  },
  {
    domain: "Pre-payroll validation",
    responsibility: "Zoiko / provider",
    disclosure: "Doesn't replace customer approval of material changes",
  },
  {
    domain: "Final approval",
    responsibility: "Customer, unless expressly delegated",
    disclosure: "Never implied automatic without contract",
  },
  {
    domain: "Close & service reporting",
    responsibility: "Zoiko / provider",
    disclosure: "Evidence package and reporting cadence",
  },
];

export default function ResponsibilitySection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
            {/* Left content */}
            <div className="lg:pt-24">
              <p className="inline-flex items-center gap-2.5 text-xs font-bold uppercase leading-5 tracking-wide text-[#0A78C3]">
                <span aria-hidden="true">/</span>
                Responsibility, not &quot;we handle everything&quot;
              </p>
              <h2 className="mt-5 text-3xl font-extrabold leading-9 text-[#082F49]">
                Managed Payroll Operations, task by<br />task.
              </h2>
              <p className="mt-5 max-w-lg text-base font-normal leading-6 text-slate-600">
                Every operational service names who owns each task — never a
                blanket promise.
              </p>
            </div>

            {/* Right image */}
            <div className="hidden lg:block">
              <div className="relative h-96 w-full overflow-hidden rounded-2xl shadow-[0px_8px_24px_rgba(8,47,73,0.08)]">
                <img
                  src="/hi.png"
                  alt="Managed Payroll Operations"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Table */}
        <Reveal delay={100} className="mt-[22px]">
          <div className="w-full">
            {/* Header */}
            <div className="relative h-6 w-full">
              <span className="absolute left-[12px] top-[1px] text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
                Task domain
              </span>
              <span className="absolute top-[1px] text-xs font-bold uppercase leading-4 tracking-wide text-slate-500" style={{ left: "25.6%" }}>
                Possible responsibility
              </span>
              <span className="absolute top-[1px] text-xs font-bold uppercase leading-4 tracking-wide text-slate-500" style={{ left: "calc(58.3% + 12px)" }}>
                Required disclosure
              </span>
            </div>

            {/* Rows */}
            {tableRows.map((row, i) => {
              const isLast = i === tableRows.length - 1;
              return (
                <div key={row.domain} className="flex h-[44px] w-full">
                  {/* Col 1 — Task domain */}
                  <div
                    className={`flex items-center bg-white pl-[12.5px] pr-3 border-l border-t border-[#DCE6EC] ${
                      i === 0 ? "rounded-tl-lg" : ""
                    } ${isLast ? "rounded-bl-lg border-b" : ""}`}
                    style={{ width: "24.5%" }}
                  >
                    <span className="text-xs font-bold leading-5 text-[#082F49]">
                      {row.domain}
                    </span>
                  </div>

                  {/* Col 2 — Possible responsibility */}
                  <div
                    className={`flex items-center bg-white border-t border-[#DCE6EC] pl-[12px] pr-3 ${
                      isLast ? "border-b" : ""
                    }`}
                    style={{ width: "33.8%" }}
                  >
                    <span className="text-xs font-normal leading-5 text-[#082F49]">
                      {row.responsibility}
                    </span>
                  </div>

                  {/* Col 3 — Required disclosure */}
                  <div
                    className={`flex flex-1 items-center bg-white border-r border-t border-[#DCE6EC] pl-[12px] pr-3 ${
                      i === 0 ? "rounded-tr-lg" : ""
                    } ${isLast ? "rounded-br-lg border-b" : ""}`}
                  >
                    <span className="text-xs font-normal leading-5 text-[#082F49]">
                      {row.disclosure}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
