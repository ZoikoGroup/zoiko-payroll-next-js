import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const layers = [
  {
    num: "1",
    title: "Plan capacity",
    description: (
      <>
        Licensed scale and maximum<br />
        production jurisdiction<br />
        allowance.
      </>
    ),
    badge: "Recurring plan",
    badgeBg: "bg-gray-200",
    badgeDot: "bg-green-600",
    badgeText: "text-green-700",
  },
  {
    num: "2",
    title: "Worker-month usage",
    description: (
      <>
        In-scope billable workers<br />
        across licensed payroll units.
      </>
    ),
    badge: "Recurring BWM",
    badgeBg: "bg-sky-100",
    badgeDot: "bg-blue-500",
    badgeText: "text-sky-600",
  },
  {
    num: "3",
    title: "Jurisdiction activation",
    description: (
      <>
        Work to make a new country or<br />
        territory production-ready.
      </>
    ),
    badge: "One-time",
    badgeBg: "bg-orange-100",
    badgeDot: "bg-yellow-600",
    badgeText: "text-yellow-700",
  },
  {
    num: "4",
    title: "Local recurring services",
    description: (
      <>
        Managed payroll, filings,<br />
        remittances and premium local<br />
        support.
      </>
    ),
    badge: "Recurring add-on",
    badgeBg: "bg-violet-100",
    badgeDot: "bg-indigo-500",
    badgeText: "text-indigo-800",
  },
  {
    num: "5",
    title: "External / local costs",
    description: (
      <>
        Bank, authority, provider or FX<br />
        pass-through costs where<br />
        applicable.
      </>
    ),
    badge: "Third-party",
    badgeBg: "bg-[#EDF1F4]",
    badgeDot: "bg-slate-400",
    badgeText: "text-gray-500",
  },
];

export default function CommercialModelSection() {
  return (
    <section className="bg-[#F5F8FA] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Left heading area */}
            <div className="lg:col-span-2">
              <Eyebrow>The commercial model</Eyebrow>
              <h2 className="mt-5 font-['Inter'] text-3xl font-extrabold leading-9 text-sky-950">
                Five layers — never collapsed into one<br />country fee.
              </h2>
            </div>

            {/* Right note — pt-[40px] = eyebrow height (20px) + mt-5 gap (20px)
                This aligns the note's top exactly with the heading's top on desktop.
                On mobile it stacks naturally (pt-2). */}
         {/* Right note — lg:pt-[65px] aligns with 2nd line of the heading */}
<div className="flex items-start pt-2 lg:pt-[65px]">
  <p className="w-80 h-9 font-['Inter'] text-sm font-normal leading-5 text-slate-500">
    Every jurisdiction-related charge is explainable<br />as one of these.
  </p>
</div>
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-14">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {layers.map((layer) => (
              <div
                key={layer.num}
                className="flex h-48 flex-col rounded-xl bg-[#FFFFFF] p-[17px] outline outline-1 outline-offset-[-1px] outline-[#DCE6EC]"
              >
                {/* Number badge */}
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-sky-600">
                  <span className="font-['Inter'] text-xs font-extrabold leading-4 text-white">
                    {layer.num}
                  </span>
                </div>

                {/* Title */}
                <div className="mt-[19px] font-['Inter'] text-sm font-extrabold leading-4 text-sky-950">
                  {layer.title}
                </div>

                {/* Description */}
                <p className="mt-[5px] font-['Inter'] text-xs font-normal leading-4 text-slate-600">
                  {layer.description}
                </p>

                {/* Badge */}
                <div className={`mt-auto flex w-fit items-center gap-2 rounded-[20px] px-3 py-1.5 ${layer.badgeBg}`}>
                  <span className={`h-1.5 w-1.5 shrink-0 rounded-[3px] ${layer.badgeDot}`} />
                  <span className={`font-['Inter'] text-xs font-bold leading-4 ${layer.badgeText}`}>
                    {layer.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}