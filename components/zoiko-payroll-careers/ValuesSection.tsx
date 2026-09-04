import Reveal from "../ui/Reveal";

const values = [
  {
    title: "Evidence over promises",
    description: (
      <>
        We back what we say with
        <br />
        records, not reassurance. If it isn't
        <br />
        verifiable, we don't ship it.
      </>
    ),
    icon: "/Background (66).png",
  },
  {
    title: "Local precision, global consistency",
    description: (
      <>
        One operating model, honoring
        <br />
        every jurisdiction's own rules.
        <br />
        Neither gets compromised for
        <br />
        the other.
      </>
    ),
    icon: "/Background (67).png",
  },
  {
    title: "We own the outcome",
    description: (
      <>
        Clear ownership at every stage of
        <br />
        every workflow. No hand-waving
        <br />
        when something needs fixing.
      </>
    ),
    icon: "/Background (68).png",
  },
  {
    title: "Data deserves protection",
    description: (
      <>
        Payroll data is sensitive by default.
        <br />
        We treat access and retention as a
        <br />
        design constraint, not an
        <br />
        afterthought.
      </>
    ),
    icon: "/Background (69).png",
  },
];

export default function ValuesSection() {
  return (
    <section className="bg-[#F9FAFB] py-20">
      <div className="mx-auto max-w-[1096px] px-4 sm:px-6 lg:px-0">
        <Reveal>
          <h2 className="text-3xl font-extrabold text-[#0B2A3E]">Our values</h2>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="w-full lg:w-[262px] min-h-[263px] rounded-2xl border border-[#E2E9EE] bg-[#FFFFFF] px-6 pt-6 pb-[67.11px] flex flex-col justify-start items-start gap-2.5"
              >
                {/* Icon Box */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-[10px] bg-[#1A83C8]">
                  <img
                    src={value.icon}
                    alt={value.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Title Box */}
                <div className="w-full h-11 pt-2 flex flex-col justify-start items-start">
                  <h3 className="text-base font-bold leading-tight text-[#0B2A3E]">
                    {value.title}
                  </h3>
                </div>

                {/* Description with #5A6B78 text color */}
                <div className="w-full flex flex-col justify-start items-start">
                  <p className="text-xs font-normal leading-5 text-[#5A6B78]">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}