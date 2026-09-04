import React from "react";

const steps = [
  {
    number: 1,
    title: "Detect",
    tag: "Change candidate",
    items: [
      "Created from approved source/owner input",
      "Never auto-activated",
    ],
    dark: false,
  },
  {
    number: 2,
    title: "Assess",
    tag: "Applicability review",
    items: [
      "Affected entities/groups/modules identified",
      "Local SME/legal/compliance assesses applicability",
    ],
    dark: false,
  },
  {
    number: 3,
    title: "Configure",
    tag: "Versioned mapping",
    items: [
      "Proposed configuration/workflow mapping created",
    ],
    dark: false,
  },
  {
    number: 4,
    title: "Validate",
    tag: "Test evidence",
    items: [
      "Synthetic/test/parallel checks where applicable",
      "Evidence, variance and defects recorded",
    ],
    dark: false,
  },
  {
    number: 5,
    title: "Approve",
    tag: "Authorized decision",
    items: [
      "Authorized roles approve/reject with rationale",
    ],
    dark: false,
  },
  {
    number: 6,
    title: "Activate",
    tag: "Effective date",
    items: [
      "Approved version becomes current on effective date",
      "First affected cycle monitored",
    ],
    dark: false,
  },
  {
    number: 7,
    title: "Monitor",
    tag: "Ongoing evidence",
    items: [
      "Exceptions and reconciliation issues surfaced",
      "Evidence refresh needs tracked",
    ],
    dark: true,
  },
];

export default function EffectiveDatedChangeControlSection() {
  return (
    <section className="w-full px-6 sm:px-12 md:px-28 py-20 bg-slate-50 flex flex-col justify-center items-center">
      <div className="w-full max-w-[1200px] flex flex-col justify-start items-start gap-12">
        
        {/* Header Section */}
        <div className="w-full max-w-[680px] flex flex-col justify-start items-start gap-3.5">
          <div className="flex items-center">
            <span className="text-sky-600 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wider">
              / EFFECTIVE-DATED CHANGE CONTROL
            </span>
          </div>
          <div className="flex flex-col justify-start items-start">
            <h2 className="text-slate-950 text-2xl sm:text-3xl font-extrabold font-['Inter'] leading-snug sm:leading-10">
              Future change never silently<br />
              overwrites current payroll behavior.
            </h2>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="w-full relative py-6">
          {/* Vertical center line matching Figma */}
          <div className="absolute left-1/2 top-10 bottom-10 w-0.5 -translate-x-1/2 bg-sky-200/80" />

          <div className="w-full flex flex-col gap-10">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={step.number}
                  className="w-full relative flex items-center min-h-[112px]"
                >
                  {/* Left Column / Card */}
                  <div className={`w-1/2 flex ${isLeft ? "justify-end pr-14" : "justify-start"}`}>
                    {isLeft && (
                      <div className={`w-80 p-5 rounded-2xl flex flex-col gap-3 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] outline outline-1 outline-offset-[-1px] transition-all ${
                        step.dark 
                          ? "bg-sky-600 outline-sky-500 text-white shadow-lg" 
                          : "bg-white outline-slate-200 text-slate-950"
                      }`}>
                        <div className="flex items-center justify-between">
                          <span className={`text-base font-extrabold font-['Inter'] ${step.dark ? "text-white" : "text-sky-950"}`}>
                            {step.title}
                          </span>
                          <span className={`px-2.5 py-1 rounded-full text-xs font-bold font-['Inter'] ${
                            step.dark ? "bg-white/20 text-white" : "bg-sky-100 text-sky-800"
                          }`}>
                            {step.tag}
                          </span>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          {step.items.map((item, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <span className={`text-xs font-extrabold mt-0.5 ${step.dark ? "text-white" : "text-sky-600"}`}>✓</span>
                              <span className={`text-xs leading-relaxed font-['Inter'] ${step.dark ? "text-white/90" : "text-slate-600"}`}>
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Center Node Badge */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10">
                    <div className={`size-11 rounded-full flex items-center justify-center font-bold text-base font-['Inter'] shadow-md ${
                      step.dark 
                        ? "bg-sky-950 text-white outline outline-4 outline-slate-50" 
                        : "bg-white text-sky-950 outline outline-4 outline-slate-50 border border-sky-200"
                    }`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Right Column / Card */}
                  <div className={`w-1/2 flex ${!isLeft ? "justify-start pl-14" : "justify-end"}`}>
                    {!isLeft && (
                      <div className={`w-80 p-5 rounded-2xl flex flex-col gap-3 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] outline outline-1 outline-offset-[-1px] transition-all ${
                        step.dark 
                          ? "bg-sky-600 outline-sky-500 text-white shadow-lg" 
                          : "bg-white outline-slate-200 text-slate-950"
                      }`}>
                        <div className="flex items-center justify-between">
                          <span className={`text-base font-extrabold font-['Inter'] ${step.dark ? "text-white" : "text-sky-950"}`}>
                            {step.title}
                          </span>
                          <span className={`px-2.5 py-1 rounded-full text-xs font-bold font-['Inter'] ${
                            step.dark ? "bg-white/20 text-white" : "bg-sky-100 text-sky-800"
                          }`}>
                            {step.tag}
                          </span>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          {step.items.map((item, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <span className={`text-xs font-extrabold mt-0.5 ${step.dark ? "text-white" : "text-sky-600"}`}>✓</span>
                              <span className={`text-xs leading-relaxed font-['Inter'] ${step.dark ? "text-white/90" : "text-slate-600"}`}>
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}