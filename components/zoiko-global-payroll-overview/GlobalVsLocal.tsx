import Image from "next/image";

const globalItems = ["Lifecycle & status vocabulary", "Access patterns and roles", "Evidence, versioning, audit fields", "Reporting definitions"];
const localItems = ["Calculations and local rules", "Entity ownership and approvers", "Calendars and currencies", "Records and service model"];

export default function GlobalVsLocal() {
  return (
    <section className="w-full px-8 py-20 bg-white font-['Inter']">
      <div className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-8">
        {/* Section header */}
        <div className="pt-[1.63px] flex flex-col items-start gap-2">
          <div className="w-52 h-5 relative">
            <div className="absolute left-[0px] top-[-1px] text-sky-700 text-xs font-bold uppercase leading-5 tracking-wide">
              / Global vs Local Control
            </div>
          </div>
          <div className="pt-3.5 text-sky-950 text-4xl font-extrabold leading-10">
            What&apos;s standardized globally. What stays local
          </div>
          <div className="text-slate-600 text-base leading-6">
            One consistent operating model doesn&apos;t mean one rulebook. Zoiko separates what can<br />be shared everywhere from what has to remain specific to each market.
          </div>
        </div>

        {/* Large card: image LEFT, content RIGHT */}
        <div className="w-full bg-white rounded-2xl shadow-[0px_8px_24px_0px_rgba(8,47,73,0.06)] shadow-[0px_1px_2px_0px_rgba(8,47,73,0.04)] outline outline-1 outline-offset-[-1px] outline-slate-100 overflow-hidden">
          <div className="flex flex-col md:flex-row items-stretch">
            {/* Image on LEFT (40%) */}
            <div className="w-full md:w-[40%] bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center min-h-[280px]">
              <Image src="/mus.png" alt="Global vs Local" width={472} height={400} loading="eager" className="w-full h-full object-cover" style={{ width: '100%', height: '100%' }} />
            </div>

            {/* Content panel on RIGHT (60%) */}
            <div className="w-full md:w-[60%] p-9 bg-white flex flex-col justify-center">
              {/* Two columns */}
              <div className="w-full rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-100 flex overflow-hidden">
                {/* Global */}
                <div className="flex-1 px-5 py-5 border-r border-slate-100 flex flex-col gap-2.5">
                  <div className="text-sky-700 text-xs font-extrabold uppercase leading-4 tracking-wide">Standardize Globally</div>
                  <div className="flex flex-col gap-2">
                    {globalItems.map((item) => (
                      <div key={item} className="pl-3.5 relative">
                        <span className="absolute left-0 top-0 text-gray-400 text-sm leading-5">–</span>
                        <span className="text-slate-600 text-sm leading-5">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Local */}
                <div className="flex-1 px-5 py-5 flex flex-col gap-2.5">
                  <div className="text-green-700 text-xs font-extrabold uppercase leading-4 tracking-wide">Configure Locally</div>
                  <div className="flex flex-col gap-2">
                    {localItems.map((item) => (
                      <div key={item} className="pl-3.5 relative">
                        <span className="absolute left-0 top-0 text-gray-400 text-sm leading-5">–</span>
                        <span className="text-slate-600 text-sm leading-5">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Evidence separately */}
              <div className="px-5 pt-5 pb-7 border-t border-slate-100 flex flex-col gap-2.5">
                <div className="text-gray-400 text-xs font-extrabold uppercase leading-4 tracking-wide">Evidence Separately</div>
                <div className="pl-3.5 relative">
                  <span className="absolute left-0 top-0 text-gray-400 text-sm leading-5">–</span>
                  <span className="text-slate-600 text-sm leading-5">
                    Current availability is tracked and disclosed per jurisdiction — never assumed
                    <br />
                    or implied by the global model.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
