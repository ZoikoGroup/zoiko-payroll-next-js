import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const leftItems = [
  {
    title: "What is implemented?",
    description:
      "Approved jurisdiction, entity and payroll-group scope, configuration, workflows, roles, integrations, data migration, validation, operating procedures and handoff.",
  },
  {
    title: "What is migrated?",
    description:
      "Only approved data, history and artifacts needed for the target operating model — according to purpose, retention, access and source-of-record rules.",
  },
  {
    title: "What starts the program?",
    description:
      "A qualified opportunity or approved initiative, plus a current availability review, sponsor, preliminary scope and discovery authorization.",
  },
  {
    title: "What ends the program?",
    description:
      "Stabilization exit criteria are met, operational owners accept responsibility, material blockers are resolved or accepted, evidence is sufficiently complete, and recurring governance is established.",
  },
];

const humanItems = [
  "Scope acceptance",
  "Local interpretation",
  "Risk and exception acceptance",
  "Tolerance decisions",
  "GO / HOLD / ROLLBACK",
  "Communications and operational ownership",
];

export default function OperatingModelSection() {
  return (
    <section className="bg-white px-7 py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 h-5">
              <span className="text-[#0A8FD0] text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wider">
                / What implementation &amp; migration means
              </span>
            </div>
            <h2 className="pt-3.5 text-[#0A2E4B] text-3xl font-extrabold font-['Inter'] leading-10 whitespace-nowrap">
              The operating model, before any conversion happens
            </h2>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 flex overflow-hidden rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200">
            {/* Left side */}
            <div className="flex-1 bg-neutral-100 p-9">
              {leftItems.map((item, i) => (
                <div
                  key={item.title}
                  className={`flex flex-col gap-1 ${
                    i > 0 ? "mt-5" : ""
                  }`}
                >
                  <div className="relative flex items-start gap-3.5">
                    <span className="mt-[5px] inline-block h-1.5 w-1.5 shrink-0 rounded-[3px] bg-sky-600" />
                    <h3 className="text-sm font-bold leading-5 text-sky-950">
                      {item.title}
                    </h3>
                  </div>
                  <p className="pl-5 text-sm leading-5 text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right side */}
            <div className="flex flex-1 flex-col bg-[#0A2E4B] px-9 pb-12 pt-9">
              <h3 className="text-lg font-extrabold leading-6 text-white">
                What remains human
              </h3>
              {humanItems.map((item, i) => (
                <div
                  key={item}
                  className={`py-2.5 ${
                    i < humanItems.length - 1 ? "border-b border-white/10" : ""
                  }`}
                >
                  <span className="text-sm leading-5 text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
              <div className="mt-4 rounded-[10px] bg-[#F0B496]/15 p-3.5 outline outline-1 outline-offset-[-1px] outline-[#F0B496]/40">
                <span className="text-xs font-bold leading-5 text-[#F0CBB8]">
                  We do not promise:
                </span>
                <span className="text-xs leading-5 text-[#F0CBB8]">
                  {" "}
                  a universal timeline, zero disruption, automatic legal
                  compliance, every-market support, perfect source data, or one
                  migration pattern for every customer.
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}