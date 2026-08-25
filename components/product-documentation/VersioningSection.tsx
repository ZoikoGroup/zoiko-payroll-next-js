import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const statuses = [
  { label: "Draft", tone: "bg-white border-slate-200 text-slate-600" },
  { label: "In Review", tone: "bg-white border-slate-200 text-slate-600" },
  { label: "Approved", tone: "bg-white border-slate-200 text-slate-600" },
  { label: "Published — Current", tone: "bg-emerald-50 border-emerald-100 text-emerald-700" },
  { label: "Published — Prior", tone: "bg-white border-slate-200 text-slate-600" },
  { label: "Stale / Needs Verification", tone: "bg-amber-50 border-amber-100 text-amber-700" },
  { label: "Superseded", tone: "bg-rose-50 border-rose-100 text-rose-700" },
  { label: "Deprecated", tone: "bg-white border-slate-200 text-slate-600" },
  { label: "Archived", tone: "bg-white border-slate-200 text-slate-600" },
  { label: "Withdrawn", tone: "bg-rose-50 border-rose-100 text-rose-700" },
  { label: "Removed", tone: "bg-white border-slate-200 text-slate-600" },
  { label: "+ redirect record", tone: "bg-white border-dashed border-slate-200 text-slate-400" },
];

export default function VersioningSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Versioning, freshness & corrections</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Status changes get visible treatment — never a quiet timestamp.
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {statuses.map((status) => (
            <span
              key={status.label}
              className={`rounded-lg border px-3 py-2.5 text-center text-xs font-medium ${status.tone} ${
                status.label === "+ redirect record" ? "italic" : ""
              }`}
            >
              {status.label}
            </span>
          ))}
        </Reveal>

        <Reveal delay={160} className="mt-6 rounded-lg border-l-4 border-brand bg-brand/5 py-3 pl-4 pr-3 text-sm leading-relaxed text-slate-700">
          <span className="font-semibold text-brand-dark">Recently changed:</span> Documentation
          distinguishes a <span className="font-semibold text-brand-dark">product-driven change</span>{" "}
          (linked to a Release Notes entry) from a{" "}
          <span className="font-semibold text-brand-dark">documentation correction</span> (linked to a
          versioned correction record) — never presented as the same event.
        </Reveal>
      </div>
    </section>
  );
}
