"use client";

export default function CoverageDefinitions() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 xl:px-40 py-20">
      <div className="max-w-[1116px] mx-auto flex flex-col gap-6">

        {/* Section header */}
        <div className="max-w-[660px] flex flex-col gap-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#0A78C3] font-['Segoe_UI']">
            <span>/</span>
            <span>COVERAGE DEFINITIONS</span>
          </div>
          <h2 className="pt-[1.20px] text-3xl font-bold leading-9 text-[#082F49] font-['Segoe_UI']">
            Understand a badge before you trust it.
          </h2>
        </div>

        {/* Three definition cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

          {/* Card 1: Capability Availability */}
          <div className="flex flex-col gap-6 rounded-xl bg-white p-6 pt-6 pb-11 shadow-[0px_1px_8px_rgba(10,22,38,0.05),0px_1px_2px_rgba(10,22,38,0.04)] outline outline-1 outline-offset-[-1px] outline-[#DCE6EC]">
            <div className="flex items-center gap-2 pr-2">
              <img src="/Background (71).png" alt="Capability availability" className="h-9 w-9 object-contain flex-shrink-0" />
              <div className="flex-1 py-2">
                <h3 className="text-base font-bold text-[#082F49] font-['Segoe_UI']">Capability availability</h3>
              </div>
            </div>

            <div className="flex flex-col">
              {/* Available */}
              <div className="flex items-center justify-between py-2 min-h-[52px]">
                <div className="inline-flex items-center gap-1.5 rounded-[999px] bg-[#E3F0E7] px-2.5 py-[5px]">
                  <span className="h-1.5 w-1.5 rounded-[3px] bg-[#2F7A52]" />
                  <span className="text-xs font-bold text-[#2F7A52] font-['Segoe_UI']">Available</span>
                </div>
                <div className="w-[190px] text-sm font-normal leading-4 text-[#4E6172] font-['Segoe_UI']">
                  Commercially available under<br />
                  defined product and service.
                </div>
              </div>

              {/* Conditions */}
              <div className="flex items-center justify-between border-t border-[#E8EEF2] py-2 min-h-[64px]">
                <div className="inline-flex items-center gap-1.5 rounded-[999px] bg-[#F1EAD8] px-2.5 py-[5px]">
                  <span className="h-1.5 w-1.5 rounded-[3px] bg-[#9C7A1F]" />
                  <span className="text-xs font-bold text-[#9C7A1F] font-['Segoe_UI']">Conditions</span>
                </div>
                <div className="w-[190px] text-sm font-normal leading-4 text-[#4E6172] font-['Segoe_UI']">
                  Available only for defined<br />
                  entity types, worker<br />
                  scenarios, or plans.
                </div>
              </div>

              {/* Not offered */}
              <div className="flex items-center justify-between border-t border-[#E8EEF2] py-2 min-h-[52px]">
                <div className="inline-flex items-center gap-1.5 rounded-[999px] bg-[#EDF1F4] px-2.5 py-[5px]">
                  <span className="h-1.5 w-1.5 rounded-[3px] bg-[#959595]" />
                  <span className="text-xs font-bold text-[#7C8CA0] font-['Segoe_UI']">Not offered</span>
                </div>
                <div className="w-[190px] text-sm font-normal leading-4 text-[#4E6172] font-['Segoe_UI']">
                  Not currently offered for the<br />
                  selected scope.
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Delivery Model */}
          <div className="flex flex-col gap-6 rounded-xl bg-white p-6 pt-6 pb-11 shadow-[0px_1px_8px_rgba(10,22,38,0.05),0px_1px_2px_rgba(10,22,38,0.04)] outline outline-1 outline-offset-[-1px] outline-[#DCE6EC]">
            <div className="flex items-center gap-2 pr-2">
              <img src="/Background (72).png" alt="Delivery model" className="h-9 w-9 object-contain flex-shrink-0" />
              <div className="flex-1 py-2">
                <h3 className="text-base font-bold text-[#082F49] font-['Segoe_UI']">Delivery model</h3>
              </div>
            </div>

            <div className="flex flex-col">
              {/* Zoiko Payroll */}
              <div className="flex items-center justify-between py-2 min-h-[52px]">
                <div className="inline-flex items-center rounded-[999px] bg-white px-2.5 py-[5px] outline outline-1 outline-offset-[-1px] outline-[#DCE6EC]">
                  <span className="text-xs font-bold text-[#082F49] font-['Segoe_UI']">Zoiko Payroll</span>
                </div>
                <div className="w-[210px] text-sm font-normal leading-4 text-[#4E6172] font-['Segoe_UI']">
                  Delivered directly through an<br />
                  approved Zoiko Payroll operating.
                </div>
              </div>

              {/* Connected */}
              <div className="flex items-center justify-between border-t border-slate-200 py-2 min-h-[52px]">
                <div className="inline-flex items-center rounded-[999px] bg-white px-2.5 py-[5px] outline outline-1 outline-offset-[-1px] outline-[#DCE6EC]">
                  <span className="text-xs font-bold text-[#082F49] font-['Segoe_UI']">Connected</span>
                </div>
                <div className="w-[210px] text-sm font-normal leading-4 text-[#4E6172] font-['Segoe_UI']">
                  Zoiko Payroll connects to an<br />
                  approved external payroll system.
                </div>
              </div>

              {/* Partner */}
              <div className="flex items-center justify-between border-t border-slate-200 py-2 min-h-[52px]">
                <div className="inline-flex items-center gap-1.5 rounded-[999px] bg-[#FCE8E8] px-2.5 py-[5px]">
                  <span className="h-1.5 w-1.5 rounded-[3px] bg-[#E53E3E]" />
                  <span className="text-xs font-bold text-[#C53030] font-['Segoe_UI']">Partner</span>
                </div>
                <div className="w-52 text-sm font-normal leading-4 text-[#4E6172] font-['Segoe_UI']">
                  An approved local or global<br />
                  partner performs defined services.
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Content Availability */}
          <div className="flex flex-col gap-6 rounded-xl bg-white p-6 pt-6 pb-11 shadow-[0px_1px_8px_rgba(10,22,38,0.05),0px_1px_2px_rgba(10,22,38,0.04)] outline outline-1 outline-offset-[-1px] outline-[#DCE6EC]">
            <div className="flex items-center gap-2 pr-2">
              <img src="/Background (73).png" alt="Content availability" className="h-9 w-9 object-contain flex-shrink-0" />
              <div className="flex-1 py-2">
                <h3 className="text-base font-bold text-[#082F49] font-['Segoe_UI']">Content availability</h3>
              </div>
            </div>

            <div className="flex flex-col">
              {/* Guide available */}
              <div className="flex items-center justify-between py-2 min-h-[64px]">
                <div className="inline-flex items-center rounded-[999px] bg-white px-2.5 py-[5px] outline outline-1 outline-offset-[-1px] outline-[#DCE6EC]">
                  <span className="text-xs font-bold text-[#082F49] font-['Segoe_UI']">Guide available</span>
                </div>
                <div className="w-[176px] text-sm font-normal leading-4 text-[#4E6172] font-['Segoe_UI']">
                  A reviewed local payroll<br />
                  guide is published for this<br />
                  jurisdiction.
                </div>
              </div>

              {/* Requirements */}
              <div className="flex items-center justify-between border-t border-slate-200 py-2 min-h-[64px]">
                <div className="inline-flex items-center rounded-[999px] bg-white px-2.5 py-[5px] outline outline-1 outline-offset-[-1px] outline-[#DCE6EC]">
                  <span className="text-xs font-bold text-[#082F49] font-['Segoe_UI']">Requirements</span>
                </div>
                <div className="w-[176px] text-sm font-normal leading-4 text-[#4E6172] font-['Segoe_UI']">
                  Implementation-level<br />
                  local requirements<br />
                  documentation exists.
                </div>
              </div>

              <div className="h-12 py-2" />
            </div>
          </div>

        </div>

        {/* Important distinction callout banner */}
        <div className="w-[1116px] h-[103px] rounded-xl bg-[#F5F8FA] px-[22px] py-[19px] outline outline-1 outline-offset-[-1px] outline-[#D8E2E8] flex items-center gap-3.5">
          <div className="self-stretch py-px flex items-start">
            <div className="w-1 self-stretch rounded-[3px] bg-[#0A78C3]" />
          </div>
          <div className="flex-1 flex flex-col justify-start items-start gap-[3.3px]">
            <h4 className="text-sm font-bold text-[#082F49] font-['Segoe_UI']">
              Important distinction
            </h4>
            <p className="text-sm font-normal leading-5 text-[#4E6172] font-['Segoe_UI']">
              <span className="inline-block xl:whitespace-nowrap">
                &quot;Guide available&quot; and &quot;payroll available&quot; are independent states. A jurisdiction may have educational content before commercial service launches, or a commercial service may
              </span>
              <br />
              <span>exist before a full public guide is published.</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}



