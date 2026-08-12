import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const states = [
  { label: "Queued", dot: "bg-slate-400" },
  { label: "Processing", dot: "bg-blue-500" },
  { label: "Succeeded", dot: "bg-green-500" },
  { label: "Partial failure", dot: "bg-amber-500" },
  { label: "Failed", dot: "bg-red-500" },
];

const activityMeta = [
  { label: "Start time", value: "09:12:04 UTC" },
  { label: "Complete time", value: "09:12:41 UTC" },
  { label: "Contract / mapping", value: "v1.9" },
  { label: "Reconciliation", value: "Pending review" },
];

const counters = [
  { value: "482", label: "Attempted", valueClass: "text-white" },
  { value: "461", label: "Succeeded", valueClass: "text-emerald-400" },
  { value: "17", label: "Failed", valueClass: "text-red-400" },
  { value: "4", label: "Skipped", valueClass: "text-white" },
];

export default function RuntimeSection() {
  return (
    <section className="border-b border-slate-200 bg-[#F6F8FC] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Runtime monitoring &amp; recovery</Eyebrow>
          <h2 className="mt-3.5 text-3xl font-extrabold leading-10 text-slate-900">
            Partial failure is always visible — never hidden inside &ldquo;success.&rdquo;
          </h2>
          <p className="mt-3.5 text-base leading-6 text-gray-700">
            Retry targets eligible failed records only. Reconciliation compares permitted source, sent
            and accepted outcomes.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {states.map((state) => (
            <div
              key={state.label}
              className="rounded-xl border border-slate-200 bg-white px-4 py-4 text-center"
            >
              <span className={`mx-auto block h-2 w-2 rounded-full ${state.dot}`} aria-hidden="true" />
              <p className="mt-2 text-xs font-semibold text-slate-900">{state.label}</p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={140} className="mt-6 overflow-hidden rounded-2xl bg-slate-900 p-6 sm:p-8">
          <p className="text-xs text-white/60">
            Activity ID: act_9f21c4e0 · Connection: Finance · ERP Postings · Direction: Outbound
          </p>

          <div className="mt-4 grid grid-cols-2 gap-4 border-b border-white/10 pb-5 lg:grid-cols-4">
            {activityMeta.map((item) => (
              <div key={item.label}>
                <p className="text-xs text-white/50">{item.label}</p>
                <p className="mt-1 text-sm text-white">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 py-6 lg:grid-cols-4">
            {counters.map((counter, index) => (
              <div
                key={counter.label}
                className={`text-center ${index < 3 ? "lg:border-r lg:border-white/10" : ""}`}
              >
                <p className={`text-2xl font-bold ${counter.valueClass}`}>{counter.value}</p>
                <p className="mt-1 text-xs text-white/50">{counter.label}</p>
              </div>
            ))}
          </div>

          <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-xs text-red-200">
            error_code: MAPPING_FIELD_MISSING — 17 records missing required field &ldquo;cost_center&rdquo;.
            Owner: finance-team. Retry eligible after correction.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
