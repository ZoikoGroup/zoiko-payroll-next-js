import Reveal from "../ui/Reveal";

const fields = [
  { label: "Jurisdictions", value: "1–2" },
  { label: "Legal entities", value: "1–5" },
  { label: "Workforce range", value: "Under 1,000" },
  { label: "Primary objective", value: "Executive oversight" },
];

export default function FindYourSolutionSection() {
  return (
    <section className="bg-white pt-16 sm:pt-24">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          {/* Left Column (Image) */}
          <Reveal className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
            <div className="relative h-[260px] w-full overflow-hidden rounded-2xl sm:h-[320px] lg:h-[400px]">
              <img
                src="/images/business-leaders/find-your-solution.png"
                alt="Business leader deciding between solution paths"
                loading="lazy"
                className="size-full object-cover"
              />
            </div>
          </Reveal>

          {/* Right Column (Text) */}
          <Reveal delay={120} className="w-full">
            <p className="mb-2.5 text-[13px] font-bold tracking-[0.06em] text-[#2F6FED] uppercase">
              Find Your Solution
            </p>
            <h2 className="text-[1.65rem] leading-[1.15] font-extrabold tracking-tight text-[#08132B] lg:text-[26.5px]">
              Four questions — no hidden scoring
            </h2>
            <p className="mt-3.5 text-[14px] leading-[1.6] text-[#3A4356]">
              No sensitive profiling, no fake urgency — just the objective
              closest to yours.
            </p>
          </Reveal>
        </div>

        {/* Field Cards */}
        <Reveal delay={200}>
          <div className="mt-16 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {fields.map((field) => (
              <div
                key={field.label}
                className="rounded-xl border border-[#E6E9F0] bg-white p-[18px]"
              >
                <p className="text-[11.5px] font-bold tracking-[0.035em] text-[#6B7488] uppercase">
                  {field.label}
                </p>
                <div className="mt-2.5 w-full rounded-[7px] border border-[#E6E9F0] bg-[#EFEFEF] py-2.5 pl-3.5 pr-6">
                  <p className="text-[13px] text-[#3A4356]">{field.value}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
