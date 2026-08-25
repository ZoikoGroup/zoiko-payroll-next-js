import Reveal from "../ui/Reveal";
import ArrowLink from "../ui/ArrowLink";
import Eyebrow from "../home/Eyebrow";

export default function ServiceStatusSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Service-health interruption</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-brand-dark sm:text-3xl">
            System Status owns current and historical service health
          </h2>
        </Reveal>

        <Reveal
          delay={80}
          className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6 sm:flex-row sm:items-center"
        >
          <div className="flex items-start gap-3">
            <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500" />
            <div>
              <p className="text-sm font-semibold text-brand-dark">All systems operational</p>
              <p className="mt-1 text-sm text-slate-600">No active incidents affecting your search.</p>
            </div>
          </div>
          <ArrowLink
            href="/resources/system-status"
            className="shrink-0 rounded-lg border border-slate-200 bg-white px-4 py-2 shadow-sm hover:border-brand/30"
          >
            Check System Status
          </ArrowLink>
        </Reveal>
      </div>
    </section>
  );
}
