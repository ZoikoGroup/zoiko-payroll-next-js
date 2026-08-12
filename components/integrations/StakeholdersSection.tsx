import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const stakeholders = [
  {
    image: "/images/integrations/stakeholder-payroll.png",
    title: "Payroll leaders",
    focus: "Reliability & runtime health",
  },
  {
    image: "/images/integrations/stakeholder-finance.png",
    title: "Finance & controllers",
    focus: "Mapping & reconciliation",
  },
  {
    image: "/images/integrations/stakeholder-it.png",
    title: "IT & integration architects",
    focus: "Protocols & observability",
  },
  {
    image: "/images/integrations/stakeholder-security.png",
    title: "Security & privacy",
    focus: "Least privilege & audit",
  },
];

export default function StakeholdersSection() {
  return (
    <section className="bg-[#F6F8FC] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Built for every stakeholder</Eyebrow>
          <h2 className="mt-3.5 text-3xl font-extrabold leading-10 text-slate-900">
            Six teams, one controlled integration layer.
          </h2>
          <p className="mt-3.5 text-base leading-6 text-gray-700">
            From payroll reliability to IT architecture, each function sees the evidence relevant to
            their responsibility.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stakeholders.map((stakeholder, index) => (
            <Reveal key={stakeholder.title} delay={index * 70}>
              <div className="relative overflow-hidden rounded-2xl bg-sky-950">
                <img
                  src={stakeholder.image}
                  alt={stakeholder.title}
                  loading="lazy"
                  className="h-80 w-full object-cover opacity-90"
                />
                <div
                  className="absolute inset-0 bg-linear-to-b from-transparent to-slate-900/90"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-sm font-bold leading-5 text-white">{stakeholder.title}</p>
                  <p className="mt-0.5 text-xs leading-4 text-white/70">{stakeholder.focus}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
