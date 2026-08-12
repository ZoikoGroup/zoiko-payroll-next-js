import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import StageMock from "./StageMock";
import { implementationStages } from "./stages-data";

export default function StagesSection() {
  return (
    <>
      <section className="bg-white pt-20 pb-4 sm:pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <Eyebrow>How it&rsquo;s structured</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold leading-9 tracking-tight text-slate-900">
              Seven stages. Each one ends with a gate, not a guess
            </h2>
            <p className="mt-3 text-base leading-6 text-slate-600">
              Payroll migrations fail quietly — a mismatched deduction, a missed filing deadline, an
              approval chain nobody tested. Zoiko Payroll&rsquo;s implementation program is built to
              surface those problems before they reach a real pay cycle, with a named owner and an exit
              condition at every stage.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white pb-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {implementationStages.map((stage) => (
            <Reveal key={stage.number} className="border-b border-slate-200 py-11">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-extrabold tracking-wide text-blue-600">
                    STAGE {stage.number}
                  </p>
                  <h3 className="mt-1.5 text-2xl font-extrabold text-slate-900">{stage.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1.25 text-xs font-semibold text-slate-600">
                    Owner: {stage.owner}
                  </span>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1.25 text-xs font-semibold text-slate-600">
                    {stage.duration}
                  </span>
                </div>
              </div>

              <p className="mt-4 max-w-155 text-base leading-6 text-slate-600">
                {stage.description}
              </p>

              <div className="mt-6 grid grid-cols-1 items-start gap-7 lg:grid-cols-2">
                <ul className="space-y-2.5">
                  {stage.checklist.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 rounded-[10px] border border-slate-200 bg-slate-50 px-3.5 py-3.5"
                    >
                      <span
                        className="mt-0.5 h-4 w-4 shrink-0 rounded-[5px] border border-indigo-200 bg-indigo-100"
                        aria-hidden="true"
                      />
                      <span className="text-sm leading-5 text-slate-900">{item}</span>
                    </li>
                  ))}
                </ul>

                <StageMock mock={stage.mock} />
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 rounded-xl border border-[#CBD9FA] bg-[#E8EEFF] px-4 pt-5 pb-4">
                <div className="max-w-130">
                  <p className="text-xs font-bold uppercase tracking-wide text-blue-800">Exit criteria</p>
                  <p className="mt-1 text-sm leading-5 text-slate-900">{stage.exit.criteria}</p>
                </div>
                <div className="w-32 text-right">
                  <p className="text-xs text-slate-600">Owner</p>
                  <p className="text-xs font-bold text-slate-900">{stage.exit.owner}</p>
                </div>
                <div className="w-16 text-right">
                  <p className="text-xs text-slate-600">Duration</p>
                  <p className="text-xs font-bold text-slate-900">{stage.exit.duration}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
