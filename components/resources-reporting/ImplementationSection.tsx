import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const workstreams = [
  {
    title: "Report inventory",
    description: "Consumers, decisions and recurring reports.",
  },
  {
    title: "Metric dictionary",
    description: "Meaning, owner, source and known exclusions.",
  },
  {
    title: "Access matrix",
    description: "Who may view, export and audit.",
  },
  {
    title: "Validation",
    description: "Compare with approved sources — no universal accuracy claim.",
  },
  {
    title: "Operate",
    description: "Review stale definitions, permissions and unresolved variances.",
  },
];

export default function ImplementationSection() {
  return (
    <section className="border-t border-slate-200 bg-[#EEF2FF] py-14 sm:py-20">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <Reveal className="overflow-hidden rounded-[20px] shadow-[0px_12px_34px_0px_rgba(10,46,75,0.12)]">
          <img
            src="/images/resources-reporting/implementation.png"
            alt="A team planning their reporting implementation around a laptop"
            loading="lazy"
            className="h-72 w-full object-cover sm:h-96 lg:h-[645px]"
          />
        </Reveal>

        <Reveal delay={120}>
          <Eyebrow>Reporting implementation &amp; readiness</Eyebrow>
          <h2 className="mt-3.5 max-w-[440px] text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Five workstreams before you go live.
          </h2>

          <div className="mt-7">
            {workstreams.map((workstream, index) => (
              <div
                key={workstream.title}
                className={`flex gap-4 py-6 ${
                  index < workstreams.length - 1 ? "border-b border-slate-200" : ""
                }`}
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-2xl bg-brand-dark text-sm font-extrabold text-white">
                  {index + 1}
                </span>
                <div>
                  <p className="text-base font-bold leading-6 text-brand-dark">
                    {workstream.title}
                  </p>
                  <p className="mt-1 text-sm leading-5 text-slate-600">{workstream.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
