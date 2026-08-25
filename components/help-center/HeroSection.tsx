import Reveal from "../ui/Reveal";
import { InfoIcon, SearchIcon, ChevronDownIcon } from "../ui/icons";

export default function HeroSection() {
  return (
    <section className="bg-footer-gradient border-b border-[#DCE6EC] py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Help Center</h1>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Resolve payroll questions and reach the right support path.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-8">
          <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-lg sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search a question, task name or error code..."
                className="w-full py-3.5 pl-11 pr-3 text-sm text-brand-dark placeholder:text-slate-400 focus:outline-none"
              />
            </div>
            <button
              type="button"
              className="flex shrink-0 items-center gap-1.5 border-t border-slate-100 px-4 py-3 text-sm font-medium text-slate-500 transition-colors duration-200 hover:text-brand-dark sm:border-l sm:border-t-0"
            >
              All areas
              <ChevronDownIcon className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              className="bg-brand-gradient shrink-0 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
            >
              Search
            </button>
          </div>
        </Reveal>

        <Reveal delay={160} className="mt-4 flex items-center justify-center gap-1.5 text-xs text-slate-400">
          <InfoIcon className="h-3.5 w-3.5 shrink-0" />
          Do not enter passwords, one-time codes, bank details, employee payroll data, API keys or other
          secrets.
        </Reveal>
      </div>
    </section>
  );
}
