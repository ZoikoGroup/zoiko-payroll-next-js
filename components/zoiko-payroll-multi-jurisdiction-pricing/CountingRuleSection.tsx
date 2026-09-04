import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const rows = [
  {
    layer: "Country / territory",
    examples: "United Kingdom, United States, India",
    implication: "Typically the primary jurisdiction unit",
  },
  {
    layer: "State / province / region",
    examples: "California, Ontario, New South Wales",
    implication:
      "Doesn\u2019t auto-consume capacity, but can add filing/tax complexity",
  },
  {
    layer: "Local / municipal",
    examples: "City or county payroll tax overlay",
    implication: "Can add local configuration complexity",
  },
  {
    layer: "Non-production / sandbox",
    examples: "Testing or demo setup",
    implication: "Never consumes production capacity",
  },
];

export default function CountingRuleSection() {
  return (
    <section className="bg-[#F5F8FA] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Eyebrow>Counting rule</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold leading-9 text-[#082F49]">
                What counts as a production jurisdiction?
              </h2>
            </div>
            <div className="flex items-start justify-end pt-[65px] lg:justify-end">
              <p className="max-w-xs text-sm leading-5 text-[#5B6B7A]">
                The controlled catalog definition is authoritative<br />— never a
                second web-only rule.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-12">
          <div className="w-full">
            {/* Table header */}
            <div className="relative h-7 w-full">
              <span className="absolute left-[14px] top-[1px] text-xs font-bold uppercase leading-4 tracking-wide text-[#5B6B7A]">
                Geographic layer
              </span>
              <span className="absolute top-[1px] text-xs font-bold uppercase leading-4 tracking-wide text-[#5B6B7A]" style={{ left: "23.4%" }}>
                Examples
              </span>
              <span className="absolute top-[1px] text-xs font-bold uppercase leading-4 tracking-wide text-[#5B6B7A]" style={{ left: "52.2%" }}>
                Commercial implication
              </span>
            </div>

            {/* Table rows */}
            {rows.map((row, i) => {
              const isLast = i === rows.length - 1;
              return (
                <div key={row.layer} className="flex h-12 w-full">
                  {/* Column 1: Geographic layer */}
                  <div
                    className={`flex items-center bg-white pl-[14.5px] pr-3 border-l border-t border-[#DCE6EC] ${
                      i === 0 ? "rounded-tl-[10px]" : ""
                    } ${isLast ? "rounded-bl-[10px] border-b" : ""}`}
                    style={{ width: "22.5%" }}
                  >
                    <span className="text-sm font-bold leading-5 text-[#082F49]">
                      {row.layer}
                    </span>
                  </div>

                  {/* Column 2: Examples */}
                  <div
                    className={`flex items-center bg-white border-t border-[#DCE6EC] pl-[14px] pr-3 ${
                      isLast ? "border-b" : ""
                    }`}
                    style={{ width: "28.1%" }}
                  >
                    <span className="text-sm font-normal leading-5 text-[#082F49]">
                      {row.examples}
                    </span>
                  </div>

                  {/* Column 3: Commercial implication */}
                  <div
                    className={`flex-1 flex items-center bg-white border-r border-t border-[#DCE6EC] pl-[14px] pr-3 ${
                      i === 0 ? "rounded-tr-[10px]" : ""
                    } ${isLast ? "rounded-br-[10px] border-b" : ""}`}
                  >
                    <span className="text-sm font-normal leading-5 text-[#082F49]">
                      {row.implication}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
