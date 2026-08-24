import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const owns = [
  {
    title: "What this page owns",
    body: "Resource discovery, search, task routing, freshness visibility and authority-aware links across the full Zoiko Payroll knowledge ecosystem.",
  },
  {
    title: "What it can summarize",
    body: "A resource's purpose, audience, topic, reviewed date and authority type — enough to decide whether to open it.",
  },
  {
    title: "What starts and ends a search",
    body: "A query or task selection starts discovery; opening the authoritative destination — not this page — ends it.",
  },
];

const elsewhere = [
  "Product configuration & behavior",
  "Active incidents & service health",
  "Market availability & local rules",
  "Legal, tax or compliance interpretation",
  "Security evidence & certifications",
  "Implementation commitments",
];

export default function AuthorityBoundarySection() {
  return (
    <section className="border-t border-slate-200 bg-[#DFEAF3] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>The map, not every territory</Eyebrow>
          <h2 className="mt-3 max-w-3xl text-2xl font-extrabold leading-8 text-sky-950 sm:text-3xl sm:leading-10">
            Resource Center indexes and routes. It doesn&apos;t replace the authority it points to.
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 lg:grid-cols-2">
            <div className="bg-white p-7 sm:p-9">
              <ul className="space-y-8">
                {owns.map((item) => (
                  <li key={item.title} className="flex gap-3.5">
                    <span
                      className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-sky-600"
                      aria-hidden="true"
                    />
                    <span>
                      <span className="block text-sm font-bold leading-5 text-sky-950">
                        {item.title}
                      </span>
                      <span className="mt-1.5 block text-sm leading-5 text-gray-600">
                        {item.body}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-sky-950 p-7 sm:p-9">
              <h3 className="text-lg font-extrabold leading-6 text-white">
                What stays authoritative elsewhere
              </h3>
              <ul className="mt-5">
                {elsewhere.map((item, index) => (
                  <li
                    key={item}
                    className={`py-3 text-sm leading-5 text-slate-200 ${
                      index < elsewhere.length - 1 ? "border-b border-white/10" : ""
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-7 rounded-[10px] border border-rose-300/25 bg-rose-300/10 px-4 py-4 text-xs leading-5 text-rose-200">
                <span className="font-bold">Locked principle:</span> Resource Center must not
                silently become the canonical answer for any of the above. Each destination remains
                authoritative for its own subject.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
