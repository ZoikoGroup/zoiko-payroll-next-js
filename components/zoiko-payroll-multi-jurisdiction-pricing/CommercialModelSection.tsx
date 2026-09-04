import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const layers = [
  {
    num: "1",
    title: "Plan capacity",
    description: "Licensed scale and maximum production jurisdiction allowance.",
    tag: "Recurring plan",
    tagBg: "bg-[#E3F0E7]",
    tagDot: "bg-[#2F7A52]",
    tagText: "text-[#3D9463]",
  },
  {
    num: "2",
    title: "Worker-month usage",
    description: "In-scope billable workers across licensed payroll units.",
    tag: "Recurring BWM",
    tagBg: "bg-[#E4F1FA]",
    tagDot: "bg-[#0A78C3]",
    tagText: "text-[#0A78C3]",
  },
  {
    num: "3",
    title: "Jurisdiction activation",
    description: "Work to make a new country or territory production-ready.",
    tag: "One-time",
    tagBg: "bg-[#F1EAD8]",
    tagDot: "bg-[#9C7A1F]",
    tagText: "text-[#9C7A1F]",
  },
  {
    num: "4",
    title: "Local recurring services",
    description:
      "Managed payroll, filings, remittances and premium local support.",
    tag: "Recurring add-on",
    tagBg: "bg-[#EAE6F7]",
    tagDot: "bg-[#5B4A9E]",
    tagText: "text-[#5B4A9E]",
  },
  {
    num: "5",
    title: "External / local costs",
    description:
      "Bank, authority, provider or FX pass-through costs where applicable.",
    tag: "Third-party",
    tagBg: "bg-[#EDF1F4]",
    tagDot: "bg-[#959595]",
    tagText: "text-[#959595]",
  },
];

export default function CommercialModelSection() {
  return (
    <section className="bg-[#F5F8FA] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Eyebrow>The commercial model</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold leading-9 text-[#082F49]">
                Five layers — never collapsed into one<br />country fee.
              </h2>
            </div>
            <div className="flex items-start justify-end pt-[65px] lg:justify-end">
              <p className="max-w-xs text-sm leading-5 text-[#5B6B7A]">
                Every jurisdiction-related charge is explainable<br />as one of these.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {layers.map((layer) => (
              <div
                key={layer.num}
                className="flex h-48 flex-col rounded-xl bg-white p-5 ring-1 ring-slate-200"
              >
                {/* Number badge */}
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-[#3A9AD6] to-[#0A78C3]">
                  <span className="text-xs font-extrabold text-white">
                    {layer.num}
                  </span>
                </span>

                {/* Title */}
                <h3 className="mt-4 text-sm font-extrabold leading-4 text-[#082F49]">
                  {layer.title}
                </h3>

                {/* Description */}
                <p className="mt-2 flex-1 text-xs leading-4 text-[#4E6172]">
                  {layer.description}
                </p>

                {/* Tag */}
                <span
                  className={`mt-3 inline-flex items-center gap-1.5 self-start rounded-full px-3 py-1 ${layer.tagBg}`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-[3px] ${layer.tagDot}`}
                  />
                  <span
                    className={`text-xs font-bold leading-4 ${layer.tagText}`}
                  >
                    {layer.tag}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
