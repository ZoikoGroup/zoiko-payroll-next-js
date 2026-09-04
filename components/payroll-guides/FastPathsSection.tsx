import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const rows = [
  {
    question: "\"How do I configure/use this in Zoiko Payroll?\"",
    destination: "Product Documentation",
    behavior: "No demo CTA interposed",
  },
  {
    question: "\"Something is not working\"",
    destination: "Help Center",
    behavior: "Support first",
  },
  {
    question: "\"Is the service down?\"",
    destination: "System Status",
    behavior: "Status first",
  },
  {
    question: "\"What changed?\"",
    destination: "Release Notes",
    behavior: "Release evidence first",
  },
  {
    question: "\"I want to improve our process\"",
    destination: "Relevant guide + Product Documentation",
    behavior: "Optional adoption links; no forced sales",
  },
  {
    question: "\"We are expanding/migrating\"",
    destination: "Implementation / Global Payroll",
    behavior: "Demo contextual after scope guidance",
  },
  {
    question: "\"We need security/procurement evidence\"",
    destination: "Security and Trust",
    behavior: "Sales only where real procurement help is needed",
  },
];

export default function FastPathsSection() {
  return (
    <section className="bg-indigo-50 border-t border-slate-200 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow className="text-[#0A8FD0]">Existing-customer fast paths</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold font-jakarta text-[#0A2E4B] leading-9">
            Get to the operational destination — no forced<br />sales detour.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 overflow-hidden rounded-2xl bg-white outline outline-1 outline-offset-[-1px] outline-slate-200">
            <div className="h-40 w-full bg-[#E1EEF9] overflow-hidden">
              <img src="/sup.png" alt="" className="h-full w-full object-cover" />
            </div>

            {/* Table header */}
            <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-slate-200">
              <div className="bg-indigo-50 px-4 py-3">
                <p className="text-xs font-bold font-jakarta uppercase text-[#0A2E4B] leading-4">
                  What you&apos;re asking
                </p>
              </div>
              <div className="bg-indigo-50 px-4 py-3 border-t sm:border-t-0 sm:border-l border-slate-200">
                <p className="text-xs font-bold font-jakarta uppercase text-[#0A2E4B] leading-4">
                  Preferred destination
                </p>
              </div>
              <div className="bg-indigo-50 px-4 py-3 border-t sm:border-t-0 sm:border-l border-slate-200">
                <p className="text-xs font-bold font-jakarta uppercase text-[#0A2E4B] leading-4">
                  Commercial behavior
                </p>
              </div>
            </div>

            {/* Table rows */}
            {rows.map((row, i) => (
              <div
                key={row.question}
                className={`grid grid-cols-1 sm:grid-cols-3 ${i > 0 ? "border-t border-slate-200" : ""}`}
              >
                <div className="px-4 py-3.5">
                  <p className="text-sm font-jakarta text-[#0A2E4B] leading-5">{row.question}</p>
                </div>
                <div className="px-4 py-3.5 border-t sm:border-t-0 sm:border-l border-slate-200">
                  <p className="text-sm font-jakarta text-[#0A2E4B] leading-5">{row.destination}</p>
                </div>
                <div className="px-4 py-3.5 border-t sm:border-t-0 sm:border-l border-slate-200">
                  <p className="text-sm font-bold font-jakarta text-[#0A8FD0] leading-5">{row.behavior}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}