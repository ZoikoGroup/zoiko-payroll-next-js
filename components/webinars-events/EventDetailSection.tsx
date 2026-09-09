import Reveal from "../ui/Reveal";

const agendaItems = [
  { time: "15:00", title: "Welcome & platform overview", detail: "Introduction and session goals." },
  { time: "15:10", title: "Live product walkthrough", detail: "Core payroll workflows in practice." },
  { time: "15:35", title: "Live Q&A", detail: "Open floor for questions." },
  { time: "15:55", title: "Wrap-up & next steps", detail: "Resources and follow-up." },
];

const attendees = ["Payroll administrators", "Finance and approvers", "Implementation leads"];

const outcomes = ["Understand the full payroll cycle", "Identify readiness gaps early"];

const detailPills = ["Captions confirmed", "Registration required", "No capacity limit disclosed"];

export default function EventDetailSection() {
  return (
    <section className="w-full bg-white py-20">
      <Reveal className="mx-auto flex max-w-[1320px] flex-col items-center gap-3 px-6 md:px-24">
        {/* Header */}
        <div className="flex max-w-[680px] flex-col items-start gap-4">
          <div className="flex w-full items-center justify-center gap-1.5">
            <span className="h-3.5 w-1.5 rounded-xs bg-sky-600" />
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-sky-600">
              Event detail experience
            </span>
          </div>
          <h2 className="w-full text-center text-3xl font-extrabold leading-10 text-sky-950">
            Everything you need to decide, in one place
          </h2>
        </div>

        {/* Agenda + audience columns */}
        <div className="flex w-full flex-col items-stretch gap-5 pt-4 lg:flex-row">
          {/* Agenda card */}
          <div className="flex-1 rounded-xl bg-white px-4 pt-4 pb-5 outline outline-1 outline-offset-[-1px] outline-slate-200">
            <h3 className="pb-3 text-sm font-bold leading-6 text-sky-950">Agenda</h3>
            <ul>
              {agendaItems.map((item, index) => (
                <li
                  key={item.time}
                  className={`flex items-start gap-4 py-3.5 ${
                    index < agendaItems.length - 1 ? "border-b border-slate-200" : ""
                  }`}
                >
                  <span className="min-w-16 text-xs font-bold leading-5 text-sky-600">
                    {item.time}
                  </span>
                  <span className="flex flex-col items-start gap-0.5">
                    <span className="text-xs font-bold leading-5 text-sky-950">
                      {item.title}
                    </span>
                    <span className="text-xs font-normal leading-5 text-gray-400">
                      {item.detail}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Audience + outcomes card */}
          <div className="flex-1 rounded-xl bg-white px-4 pt-4 pb-11 outline outline-1 outline-offset-[-1px] outline-slate-200">
            <h3 className="pb-3 text-sm font-bold leading-6 text-sky-950">
              Who should attend
            </h3>
            <ul>
              {attendees.map((person, index) => (
                <li
                  key={person}
                  className={`py-2.5 text-xs font-semibold leading-5 text-sky-950 ${
                    index < attendees.length - 1 ? "border-b border-slate-200" : ""
                  }`}
                >
                  {person}
                </li>
              ))}
            </ul>
            <h3 className="pb-3 pt-4 text-sm font-bold leading-6 text-sky-950">
              Learning outcomes
            </h3>
            <ul>
              {outcomes.map((outcome, index) => (
                <li
                  key={outcome}
                  className={`py-2.5 text-xs font-semibold leading-5 text-sky-950 ${
                    index < outcomes.length - 1 ? "border-b border-slate-200" : ""
                  }`}
                >
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Detail pills */}
        <div className="flex flex-wrap items-start justify-center gap-2.5 pt-3">
          {detailPills.map((pill) => (
            <span
              key={pill}
              className="rounded-[20px] bg-white px-4 py-2 text-xs font-semibold leading-5 text-sky-950 outline outline-1 outline-offset-[-1px] outline-slate-200"
            >
              {pill}
            </span>
          ))}
        </div>

        <p className="text-center text-xs font-normal leading-5 text-gray-400">
          Privacy notice, related resources and authority handoffs are shown on
          the full event page.
        </p>
      </Reveal>
    </section>
  );
}
