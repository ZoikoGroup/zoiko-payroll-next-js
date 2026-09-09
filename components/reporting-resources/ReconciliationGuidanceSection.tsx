import Reveal from "../ui/Reveal";

const steps = [
  {
    number: "1",
    title: "Expected source",
    description: "The approved baseline used for comparison.",
  },
  {
    number: "2",
    title: "Observed source",
    description: "The actual result being checked, matched on scope and period.",
  },
  {
    number: "3",
    title: "Compare",
    description: "A deterministic, evidence-based match — never averaged or estimated.",
  },
  {
    number: "4",
    title: "Review and disposition",
    description: "Every difference is retained as history, with an authorized reviewer recording the outcome.",
  },
];

const statuses = ["Matched", "Difference found", "Pending source", "Needs review", "Resolved"];

export default function ReconciliationGuidanceSection() {
  return (
    <section className="bg-[#E9F0F8] py-16 sm:py-20" id="reconciliation">
      <div className="mx-auto w-full max-w-[1220px] px-4 sm:px-6 lg:px-8">
        {/* Top Header Row: Text on Left, 34.png Image on Right */}
        <Reveal>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Content Left */}
            <div className="flex flex-col gap-3.5">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-[#0A8FD0]">/</span>
                <span className="text-xs font-bold font-['Plus_Jakarta_Sans'] uppercase leading-5 tracking-wide text-[#0A8FD0]">
                  Reconciliation guidance
                </span>
              </div>

              <h2 className="text-3xl font-extrabold font-['Plus_Jakarta_Sans'] leading-9 text-[#0A2E4B] sm:text-4xl sm:leading-tight">
                A controlled comparison —<br />
                never a statutory sign-off.
              </h2>

              <p className="mt-2 max-w-[500px] text-xs sm:text-sm font-normal font-['Plus_Jakarta_Sans'] leading-6 text-[#5B646B]">
                Reconciliation compares an expected source against an<br />
                observed result for a stated scope. Differences are never<br />
                hidden — they&apos;re retained until an authorized disposition is<br />
                recorded.
              </p>
            </div>

            {/* Image Right */}
            <div className="overflow-hidden rounded-[20px] shadow-[0px_12px_34px_0px_rgba(10,46,75,0.12)]">
              <img
                src="34.png"
                alt="Reconciliation guidance"
                className="h-[360px] w-full rounded-[20px] object-cover"
              />
            </div>
          </div>
        </Reveal>

        {/* Numbered Steps */}
        <Reveal delay={80}>
          <div className="mx-auto mt-14 flex max-w-[700px] flex-col gap-6">
            {steps.map((step) => (
              <div key={step.number} className="flex items-start gap-3.5">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#0A2E4B] text-xs font-bold text-white">
                  {step.number}
                </span>
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-xs sm:text-sm font-bold font-['Plus_Jakarta_Sans'] leading-5 text-[#0A2E4B]">
                    {step.title}
                  </h3>
                  <p className="text-xs font-normal font-['Plus_Jakarta_Sans'] leading-5 text-[#5B646B]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Status Pills */}
        <Reveal delay={120}>
          <div className="mx-auto mt-10 flex max-w-[760px] flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {statuses.map((status) => (
              <span
                key={status}
                className="inline-flex h-8 items-center justify-center rounded-[20px] border border-[#DCE6EC] bg-white px-4 text-xs font-semibold font-['Plus_Jakarta_Sans'] leading-5 text-[#0A2E4B] shadow-[0px_1px_2px_0px_rgba(5,27,43,0.02)]"
              >
                {status}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Boundary Callout */}
        <Reveal delay={160}>
          <div className="mx-auto mt-10 max-w-[760px] rounded-xl border-l-4 border-sky-600 bg-white p-6 sm:px-8 sm:py-6 text-left shadow-[0px_2px_8px_0px_rgba(10,120,194,0.04)]">
            <p className="text-sm font-normal font-['Plus_Jakarta_Sans'] leading-6 text-sky-950">
              <span className="font-bold text-sky-950">Boundary:</span>{" "}
              Reconciliation is not automatically general-ledger close, bank reconciliation or statutory<br className="hidden sm:inline" />
              {" "}sign-off. A payment export does not prove funds settled. Task failing?{" "}
              <a href="#" className="font-bold text-sky-600 hover:underline">
                Help Center
              </a>
              . Suspect a live<br className="hidden sm:inline" />
              {" "}issue?{" "}
              <a href="#" className="font-bold text-sky-600 hover:underline">
                System Status
              </a>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
