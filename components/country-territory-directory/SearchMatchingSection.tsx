import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import StatusPill from "./StatusPill";

const steps = [
  { number: "01", label: "Normalize" },
  { number: "02", label: "Match" },
  { number: "03", label: "Disambiguate" },
  { number: "04", label: "Resolve" },
  { number: "05", label: "Render" },
  { number: "06", label: "No match" },
];

const suggestions = ["Congo", "Democratic Republic of the Congo"];

export default function SearchMatchingSection() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Search canonicalization &amp; disambiguation</Eyebrow>
          <h2 className="mt-3 max-w-4xl text-2xl font-extrabold leading-8 sm:text-3xl sm:leading-9 text-slate-900">
            Accurate location matching with clear disambiguation, resolution, and safe handling of
            unknown results
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-6 text-gray-700">
            Canonical names, ISO codes and approved aliases match first; conservative typo tolerance
            applies only after exact matches.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-7">
          {/* gap-px over a slate ground keeps the dividers correct at every column count. */}
          <ol className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-3 lg:grid-cols-6">
            {steps.map((step) => (
              <li key={step.number} className="bg-white px-3.5 py-4 text-center">
                <p className="font-code text-xs font-bold leading-4 text-blue-600">{step.number}</p>
                <p className="mt-2 text-xs font-bold leading-5 text-slate-900">{step.label}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="mt-7 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Reveal>
            <div className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <h3 className="border-b border-slate-200 bg-gray-50 px-4 py-3.5 text-xs font-bold leading-5 text-slate-900">
                Ambiguous result — &quot;Georgia&quot;
              </h3>
              <div className="px-4 py-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 py-2">
                  <span className="flex flex-wrap items-baseline gap-1.5">
                    <span className="text-xs leading-5 text-slate-900">Georgia</span>
                    <span className="font-code text-xs leading-4 text-slate-500">
                      Country · Caucasus
                    </span>
                  </span>
                  <StatusPill state="available" label="Available" />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 py-2">
                  <span className="flex flex-wrap items-baseline gap-1.5">
                    <span className="text-xs leading-5 text-slate-900">Georgia, US</span>
                    <span className="font-code text-xs leading-4 text-slate-500">
                      State · North America
                    </span>
                  </span>
                  <StatusPill state="na" label="Not applicable" />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <h3 className="border-b border-slate-200 bg-gray-50 px-4 py-3.5 text-xs font-bold leading-5 text-slate-900">
                No-match state
              </h3>
              <div className="px-5 py-8 text-center">
                <p className="font-code text-xs leading-5 text-slate-500">&quot;Kongoo&quot;</p>
                <p className="mt-2.5 text-xs leading-5 text-slate-500">
                  No exact match found. Did you mean:
                </p>
                <ul className="mt-3 flex flex-wrap justify-center gap-2">
                  {suggestions.map((suggestion) => (
                    <li
                      key={suggestion}
                      className="rounded-2xl bg-indigo-50 px-3 py-1 text-xs font-semibold leading-5 text-blue-600"
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
