import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { ShieldIcon, CheckSquareIcon, PulseIcon, ScalesIcon } from "../ui/icons";

const layers = [
  {
    icon: ShieldIcon,
    title: "Product control",
    description:
      "What the product can currently enforce or expose — role scoping, approval separation, configuration limits.",
    owner: "Product Security and Trust",
  },
  {
    icon: CheckSquareIcon,
    title: "Evidence / assurance",
    description:
      "What artifact, assessment, report, test result or governed record supports a scoped statement.",
    owner: "Assurance team",
  },
  {
    icon: PulseIcon,
    title: "Current operational status",
    description:
      "What is happening now or historically with service health, incidents or scheduled maintenance.",
    owner: "System Status",
  },
  {
    icon: ScalesIcon,
    title: "Contractual commitment",
    description:
      "What Zoiko and the customer are legally committed to, for an approved and specific scope.",
    owner: "Legal / Procurement",
  },
];

const distinctions = [
  ["Product control", "evidence"],
  ["Evidence", "live status"],
  ["Live status", "contractual commitment"],
  ["Contractual commitment", "universal product behavior"],
];

const evidenceStates = [
  { label: "Current", tone: "green" },
  { label: "Review Due", tone: "amber" },
  { label: "Under Review", tone: "amber" },
  { label: "Superseded", tone: "grey" },
  { label: "Withdrawn", tone: "grey" },
  { label: "Restricted", tone: "grey" },
  { label: "Unavailable", tone: "grey" },
];

const accessClasses = [
  { label: "Public", tone: "light" },
  { label: "Public on Request", tone: "light" },
  { label: "Restricted", tone: "grey" },
  { label: "NDA / Contract", tone: "grey" },
  { label: "Customer Only", tone: "light" },
  { label: "Not Public", tone: "grey" },
];

const toneClasses: Record<string, string> = {
  green: "bg-emerald-50 text-emerald-600",
  amber: "bg-orange-100 text-yellow-700",
  grey: "bg-slate-100 text-slate-700",
  light: "bg-[#F8FAFC] text-slate-700 border border-slate-200",
};

export default function TrustModelSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-2 lg:gap-10">
          <Reveal>
            <Eyebrow>The trust model</Eyebrow>
            <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
              Four layers. None of them mean the same thing
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-base leading-6 text-slate-600">
              Product control, evidence, live status and contractual commitment answer different
              questions. Reading one as proof of another is the most common trust mistake reviewers
              make.
            </p>
          </Reveal>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {layers.map((layer, index) => {
            const Icon = layer.icon;
            return (
              <Reveal
                key={layer.title}
                delay={index * 70}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-[#EEF2FF] text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-4 text-base font-bold text-brand-dark">{layer.title}</p>
                <p className="mt-3 text-sm leading-5 text-slate-600">{layer.description}</p>
                <p className="mt-auto border-t border-slate-100 pt-3 text-xs font-bold text-slate-500">
                  {layer.owner}
                </p>
              </Reveal>
            );
          })}
        </div>

        <Reveal
          delay={120}
          className="mt-5 grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 bg-white sm:grid-cols-2 lg:grid-cols-4"
        >
          {distinctions.map(([left, right]) => (
            <div
              key={left}
              className="border-b border-slate-200 px-5 py-4 last:border-b-0 sm:[&:nth-child(n+3)]:border-b-0 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:[&:nth-child(-n+3)]:border-r"
            >
              <p className="text-xs font-semibold text-slate-700">
                {left} <span className="font-bold text-red-600">≠</span> {right}
              </p>
            </div>
          ))}
        </Reveal>

        <div className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal delay={140} className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Evidence states
            </p>
            <div className="mt-3.5 flex flex-wrap gap-2">
              {evidenceStates.map((state) => (
                <span
                  key={state.label}
                  className={`rounded-full px-3 py-1.5 text-xs font-bold ${toneClasses[state.tone]}`}
                >
                  {state.label}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={180} className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Access classes
            </p>
            <div className="mt-3.5 flex flex-wrap gap-2">
              {accessClasses.map((item) => (
                <span
                  key={item.label}
                  className={`rounded-full px-3 py-1.5 text-xs font-bold ${toneClasses[item.tone]}`}
                >
                  {item.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
