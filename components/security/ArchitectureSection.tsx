import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const badgeStyles = {
  product: "bg-indigo-50 text-blue-600",
  operational: "bg-orange-100 text-yellow-700",
  contractual: "bg-gray-100 text-slate-500",
} as const;

const layers: { step: string; title: string; detail: string; backing: keyof typeof badgeStyles }[] = [
  {
    step: "01",
    title: "Identity",
    detail: "Named user/service identity, authentication and session state.",
    backing: "product",
  },
  {
    step: "02",
    title: "Authorization",
    detail: "Explicit permissions and organizational scope per role.",
    backing: "product",
  },
  {
    step: "03",
    title: "Decision rights",
    detail: "Prepare, review and approve kept as distinct responsibilities.",
    backing: "product",
  },
  {
    step: "04",
    title: "Data controls",
    detail: "Purpose-bound access, minimization and export governance.",
    backing: "product",
  },
  {
    step: "05",
    title: "Audit evidence",
    detail: "Attributable record of material platform actions.",
    backing: "product",
  },
  {
    step: "06",
    title: "Privacy",
    detail: "Data lifecycle practices per record type, service and jurisdiction.",
    backing: "operational",
  },
  {
    step: "07",
    title: "Assurance",
    detail: "Certifications, assurance reports and testing evidence.",
    backing: "contractual",
  },
  {
    step: "08",
    title: "Resilience",
    detail: "Detection, continuity and recovery practices.",
    backing: "operational",
  },
];

const badgeLabels = {
  product: "Product-enforced",
  operational: "Operational practice",
  contractual: "Contractual evidence",
} as const;

export default function ArchitectureSection() {
  return (
    <section id="security-architecture" className="scroll-mt-24 bg-[#F6F8FC] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Security &amp; trust architecture</Eyebrow>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-9 text-slate-900">
            Product-enforced controls, kept separate from operational practice
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-700">
            Each layer is labeled by what actually backs it — the product itself, an operational
            practice, or contractual evidence.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-11">
          <div className="flex flex-col gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200">
            {layers.map((layer) => (
              <div
                key={layer.step}
                className="flex flex-col gap-2 bg-white px-6 py-4 sm:flex-row sm:items-center sm:gap-5"
              >
                <span className="w-6 shrink-0 font-mono text-xs font-bold leading-4 text-blue-600">
                  {layer.step}
                </span>
                <h3 className="shrink-0 text-sm font-bold leading-6 text-slate-900 sm:w-48">
                  {layer.title}
                </h3>
                <p className="flex-1 text-xs leading-5 text-slate-500">{layer.detail}</p>
                <span
                  className={`shrink-0 self-start rounded-full px-2 py-[3px] text-[10px] font-bold uppercase leading-4 tracking-tight sm:self-auto ${badgeStyles[layer.backing]}`}
                >
                  {badgeLabels[layer.backing]}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
