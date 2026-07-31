import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { PulseIcon, GlobeIcon, LinkIcon, CheckCircleIcon } from "../ui/icons";

const pillars = [
  {
    icon: PulseIcon,
    label: "Mission",
    sublabel: "What we do now",
    description:
      "Give organizations a clear, controlled, dependable way to manage payroll across supported jurisdictions—so every pay cycle is completed with greater accuracy, accountability, and confidence.",
  },
  {
    icon: GlobeIcon,
    label: "Vision",
    sublabel: "The future we seek",
    description:
      "A world where organizations operate payroll globally with the visibility and discipline expected of every critical business function—without losing local precision or employee trust.",
  },
  {
    icon: LinkIcon,
    label: "Purpose",
    sublabel: "Why the work matters",
    description:
      "Protect the trust between organizations and their people by making payroll operations clearer, traceable, and governable.",
  },
  {
    icon: CheckCircleIcon,
    label: "Promise",
    sublabel: "What customers should experience",
    description: "Global control. Local precision. Clear accountability.",
  },
];

export default function MissionVisionSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow center>Mission, vision, purpose and promise</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            A clear mission. A global vision. A practical purpose.
          </h2>
        </Reveal>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="bg-brand-gradient pointer-events-none absolute inset-x-12 top-6 hidden h-[2px] lg:block"
            aria-hidden="true"
          />
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.label} delay={index * 80} className="relative text-center">
              <span className="bg-brand-gradient relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full p-[2px]">
                <span className="flex h-full w-full items-center justify-center rounded-full bg-[#EAF1F6] text-brand">
                  <pillar.icon className="h-5 w-5" />
                </span>
              </span>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-brand">{pillar.label}</p>
              <p className="mt-1 text-xs font-medium text-slate-500">{pillar.sublabel}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{pillar.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
