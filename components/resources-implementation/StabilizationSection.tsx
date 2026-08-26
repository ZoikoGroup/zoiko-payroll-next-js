import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const items = [
  {
    title: "First-cycle health",
    description:
      "Review production outputs, exceptions, integrations, access, reporting and support issues against defined expectations.",
  },
  {
    title: "Open issues",
    description:
      "Carry unresolved items with owners, severity, due path and evidence — they don't disappear at launch.",
  },
  {
    title: "Training / adoption",
    description:
      "Role-based training references where approved; no completion badge implies operational competence.",
  },
  {
    title: "Change after launch",
    description:
      "Release Notes + Product Documentation + governance review — implementation materials shouldn't become stale shadow documentation.",
  },
];

export default function StabilizationSection() {
  return (
    <section className="bg-[#F9FAFB] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Stabilization, training &amp; handoff</Eyebrow>
          <h2 className="mt-3.5 max-w-[640px] text-2xl font-bold leading-tight tracking-tight text-[#0A2E4B] sm:text-3xl sm:leading-10">
            Steady state doesn&apos;t mean the checklist disappears
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={(index % 2) * 80}>
              <div className="h-full rounded-xl border border-slate-200 bg-white px-4 pb-4 pt-3.5">
                <p className="text-sm font-bold leading-5 text-[#0A2E4B]">{item.title}</p>
                <p className="mt-1 text-xs leading-5 text-gray-600">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
