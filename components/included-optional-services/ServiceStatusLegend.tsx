import Reveal from "../ui/Reveal";

const statuses = [
  { label: "Included", dot: "bg-[#2F7A52]", bg: "bg-[#E3F0E7]", text: "text-[#3D9463]" },
  { label: "Included with allowance", dot: "bg-[#0A78C3]", bg: "bg-[#E4F1FA]", text: "text-[#0A78C3]" },
  { label: "Optional", dot: "bg-[#9C7A1F]", bg: "bg-[#F1EAD8]", text: "text-[#9C7A1F]" },
  { label: "Contracted", dot: "bg-[#5B4A9E]", bg: "bg-[#EAE6F7]", text: "text-[#5B4A9E]" },
  { label: "Jurisdiction dependent", dot: "bg-[#959595]", bg: "bg-[#EDF1F4]", text: "text-[#7C8CA0]" },
  { label: "Not available", dot: "bg-[#959595]", bg: "bg-[#EDF1F4]", text: "text-[#7C8CA0]", opacity: "opacity-70" },
];

export default function ServiceStatusLegend() {
  return (
    <section className="bg-slate-100 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="inline-flex items-center gap-2.5 text-xs font-bold uppercase leading-5 tracking-wide text-[#0A78C3]">
                <span aria-hidden="true">/</span>
                Service status legend
              </p>
              <h2 className="mt-5 text-3xl font-extrabold leading-9 text-[#082F49]">
                The same six states, used everywhere.
              </h2>
            </div>
                     <div className="flex items-start justify-end pt-[65px] lg:justify-end">
              <p className="w-max font-light text-sm leading-5 text-[#5B6B7A]">
                Text + icon always — never color alone.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-8">
          <div className="flex flex-wrap gap-3">
            {statuses.map((s) => (
              <span
                key={s.label}
                className={`inline-flex h-9 items-center gap-3.5 rounded-[20px] px-3.5 ${s.bg} ${s.opacity ?? ""}`}
              >
                <span className={`h-1.5 w-1.5 shrink-0 rounded-[3px] ${s.dot}`} />
                <span className={`text-xs font-bold leading-5 ${s.text}`}>
                  {s.label}
                </span>
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
