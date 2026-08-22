import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

/** The directory is the entry point only — each downstream page owns its own truth. */
const chain = [
  { label: "Directory", detail: "Search, browse, identity, routing", owner: true },
  { label: "Market education & terminology" },
  { label: "Operational context & configuration" },
  { label: "Rollout planning & cutover" },
  { label: "Current availability & service boundaries" },
];

export default function HandoffsSection() {
  return (
    <section className="relative overflow-hidden bg-[#0B1A33] py-20">
      <img
        src="/images/country-territory-directory/handoffs-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#0B1A33]/85" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow tone="light">Geography, naming &amp; authority handoffs</Eyebrow>
          <h2 className="mt-3 text-2xl font-extrabold leading-8 sm:text-3xl sm:leading-9 text-white">
            Directory routes. It never becomes the source of payroll truth
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-6 text-white/70">
            Countries, territories and governed subnational scopes stay distinct — territories are
            never silently collapsed into parent-country claims.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <ol className="flex flex-col overflow-hidden rounded-2xl bg-white lg:flex-row">
            {chain.map((item, index) => (
              <li
                key={item.label}
                className={`flex flex-1 items-center gap-3 px-5 py-4 ${
                  item.owner ? "bg-[#0B1A33]" : ""
                } ${index < chain.length - 1 ? "border-b border-slate-200 lg:border-b-0" : ""}`}
              >
                <span className="flex-1">
                  <span
                    className={`block text-sm leading-5 ${
                      item.owner
                        ? "text-center font-bold text-white"
                        : "text-center text-xs text-gray-700"
                    }`}
                  >
                    {item.label}
                  </span>
                  {item.detail ? (
                    <span className="mt-0.5 block text-center text-xs leading-4 text-white/60">
                      {item.detail}
                    </span>
                  ) : null}
                </span>
                {/* The chain reads top-to-bottom on phones, so the arrow only appears
                    once the row is horizontal. */}
                {index < chain.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className={`hidden shrink-0 lg:inline ${
                      item.owner ? "text-white/60" : "text-slate-400"
                    }`}
                  >
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
