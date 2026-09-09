import Reveal from "../ui/Reveal";

const workstreams = [
  {
    number: "1",
    title: "Report inventory",
    description: "Consumers, decisions and recurring reports.",
  },
  {
    number: "2",
    title: "Metric dictionary",
    description: "Meaning, owner, source and known exclusions.",
  },
  {
    number: "3",
    title: "Access matrix",
    description: "Who may view, export and audit.",
  },
  {
    number: "4",
    title: "Validation",
    description: "Compare with approved sources — no universal accuracy claim.",
  },
  {
    number: "5",
    title: "Operate",
    description: "Review stale definitions, permissions and unresolved variances.",
  },
];

export default function ImplementationReadinessSection() {
  return (
    <section className="bg-[#E9F0F8] py-16 sm:py-20">
      <div className="mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:items-start">
            {/* Left Image Column */}
            <div className="w-full shrink-0 lg:w-[508px]">
              <div className="relative overflow-hidden rounded-[20px] shadow-[0px_12px_34px_0px_rgba(10,46,75,0.12)]">
                <img
                  src="ho.png"
                  alt="Team planning reporting implementation"
                  className="h-auto w-full object-cover lg:h-[645px] lg:w-[508px]"
                />
              </div>
            </div>

            {/* Right Workstreams Column */}
            <div className="flex flex-1 flex-col">
              {/* Eyebrow Tag */}
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-[#0A8FD0]">/</span>
                <span className="text-xs font-bold font-['Plus_Jakarta_Sans'] uppercase leading-5 tracking-wide text-[#0A8FD0]">
                  Reporting implementation &amp; readiness
                </span>
              </div>

              {/* Title */}
              <h2 className="mt-3 text-3xl font-extrabold leading-10 text-[#0A2E4B] sm:text-4xl font-['Plus_Jakarta_Sans']">
                Five workstreams before
                <br />
                you go live.
              </h2>

              {/* Workstream Steps */}
              <div className="mt-6 flex flex-col">
                {workstreams.map((item, index) => {
                  const isLast = index === workstreams.length - 1;
                  return (
                    <div
                      key={item.number}
                      className={`flex items-start gap-4 py-4 ${
                        !isLast ? "border-b border-[#E1E8F0]" : ""
                      }`}
                    >
                      {/* Step Badge */}
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#0A2E4B]">
                        <span className="text-sm font-extrabold text-white font-['Plus_Jakarta_Sans']">
                          {item.number}
                        </span>
                      </div>

                      {/* Step Text */}
                      <div className="flex flex-col gap-0.5 pt-1">
                        <h3 className="text-base font-bold leading-6 text-[#0A2E4B] font-['Plus_Jakarta_Sans']">
                          {item.title}
                        </h3>
                        <p className="text-sm font-normal leading-5 text-[#5B646B] font-['Plus_Jakarta_Sans']">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}