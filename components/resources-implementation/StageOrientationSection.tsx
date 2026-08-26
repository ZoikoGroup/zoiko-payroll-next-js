"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const stages = [
  {
    number: "01",
    label: "Discover",
    heading:
      "Discover / scope — what populations, payroll groups, jurisdictions, systems, roles, constraints and success evidence are in scope?",
    description:
      "This stage frames what belongs in the implementation before any configuration begins.",
    authority: "Primary authority: Product Implementation / GP Implementation & Migration",
  },
  {
    number: "02",
    label: "Configure",
    heading: "Configure — what approved configuration expresses the target operating model?",
    description:
      "Configuration decisions are recorded with scope and version so later evidence stays attributable.",
    authority: "Primary authority: Product Implementation / Product Documentation",
  },
  {
    number: "03",
    label: "Prepare",
    heading: "Prepare / migrate — what data, history and artifacts move, and how are they mapped?",
    description:
      "Source inventory, minimization, mapping, effective dates, validation and reconciliation belong here.",
    authority: "Primary authority: Product Implementation / GP Implementation & Migration",
  },
  {
    number: "04",
    label: "Validate",
    heading: "Validate — what evidence shows configuration and calculation behave as expected?",
    description:
      "Evidence is collected against approved expectations; it is never automatic certification.",
    authority: "Primary authority: Product Implementation",
  },
  {
    number: "05",
    label: "Parallel test",
    heading: "Parallel test — how does the target compare with the source over a defined period?",
    description:
      "A controlled comparison with variance kept visible, reasoned and resolved before launch.",
    authority: "Primary authority: Product Implementation",
  },
  {
    number: "06",
    label: "Launch",
    heading: "Launch / cutover — what must be known and approved before go-live?",
    description:
      "Scope, validation evidence, open blockers, owners, support path and rollback conditions.",
    authority: "Primary authority: implementation / customer governance model",
  },
  {
    number: "07",
    label: "Stabilize",
    heading: "Stabilize — how is the first live cycle reviewed and handed to steady state?",
    description:
      "First-cycle health, open issues, training and post-launch change all continue after go-live.",
    authority: "Primary authority: Product Implementation / Support",
  },
];

export default function StageOrientationSection() {
  const [active, setActive] = useState(0);
  const stage = stages[active];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Implementation stage orientation</Eyebrow>
          <h2 className="mt-3.5 max-w-[640px] text-2xl font-bold leading-tight tracking-tight text-[#0A2E4B] sm:text-3xl sm:leading-10">
            Learning stages, not a project state machine
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-6 overflow-hidden rounded-xl border border-slate-200">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7">
            {stages.map((item, index) => {
              const isActive = index === active;

              return (
                <button
                  key={item.number}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-pressed={isActive}
                  className={`flex flex-col items-center gap-0.5 border-b border-r border-slate-200 px-3 pb-3.5 pt-3 text-center transition-colors duration-200 ${
                    isActive ? "bg-brand-gradient" : "bg-white hover:bg-slate-50"
                  }`}
                >
                  <span
                    className={`text-[9.5px] font-bold leading-4 ${
                      isActive ? "text-white/80" : "text-slate-500"
                    }`}
                  >
                    {item.number}
                  </span>
                  <span
                    className={`text-xs font-bold leading-4 ${
                      isActive ? "text-white" : "text-slate-500"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-2.5 rounded-xl border border-slate-200 bg-white px-5 pb-8 pt-5">
          <p className="text-sm font-bold leading-5 text-[#0A2E4B]">{stage.heading}</p>
          <p className="mt-1 text-xs leading-5 text-gray-600">{stage.description}</p>
          <p className="mt-1.5 text-xs font-bold leading-4 text-sky-700">{stage.authority}</p>
        </div>

        <div className="mt-2.5 rounded-[10px] border border-orange-200 bg-orange-100 px-4 py-3.5">
          <p className="text-xs leading-5 text-yellow-800">
            <span className="font-bold text-yellow-900">Stage law:</span> these labels organize
            public learning. They are not a customer project state machine and never display
            &quot;you are 65% complete&quot; unless a separately authenticated implementation product
            defines that state.
          </p>
        </div>
      </div>
    </section>
  );
}
