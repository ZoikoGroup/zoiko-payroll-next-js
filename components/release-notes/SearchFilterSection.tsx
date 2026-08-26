import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { SearchIcon, ChevronDownIcon } from "../ui/icons";

const filters = [
  "Product area",
  "Change type",
  "Impact / action",
  "Audience",
  "Lifecycle state",
  "Year / month",
];

export default function SearchFilterSection() {
  return (
    <section className="border-t border-[#DCE6EC] bg-[#F8FAFC] py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
          <Reveal className="max-w-[640px]">
            <Eyebrow>Search + filter workspace</Eyebrow>
            <h2 className="mt-3.5 text-2xl font-extrabold leading-tight sm:text-3xl tracking-tight text-brand-dark">
              The main utility — familiar archive patterns, no invented answers
            </h2>
          </Reveal>

          <Reveal delay={100} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <img
              src="/images/release-notes/search-filter.png"
              alt="A team filtering the release archive together"
              loading="lazy"
              className="h-44 w-full object-cover"
            />
            <div className="px-5 pb-5 pt-4">
              <p className="text-sm font-extrabold text-brand-dark">Filter, don&apos;t guess</p>
              <p className="mt-0.5 text-xs leading-5 text-slate-600">
                Active filters stay visible — nothing is silently relaxed.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160} className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-2.5 sm:flex-row">
            <div className="relative flex-1">
              <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search title, summary, release ID or approved alias"
                className="w-full rounded-[10px] border border-slate-200 py-3 pl-11 pr-4 text-sm text-brand-dark placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-light"
              />
            </div>
            <button
              type="button"
              className="shrink-0 rounded-lg bg-brand-gradient px-5 py-3 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:brightness-110"
            >
              Search
            </button>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-bold text-brand-dark transition-colors duration-200 hover:border-brand/30"
            >
              All filters
            </button>
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-[#EEF2FF] px-3.5 py-1.5 text-xs font-semibold text-brand-dark transition-colors duration-200 hover:border-brand/30"
              >
                {filter}
                <ChevronDownIcon className="h-3 w-3" />
              </button>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-3.5">
            <p className="text-xs text-slate-400">Sorted by: Newest published — 114 verified releases</p>
            <p className="text-xs text-slate-400">
              No verified release notes match these filters?{" "}
              <button type="button" className="font-bold text-brand transition-colors duration-200 hover:text-brand-dark">
                Clear all
              </button>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
