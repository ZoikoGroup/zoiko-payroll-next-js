import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const models = [
  {
    title: "Centralized global payroll",
    description: "One global team coordinates configuration, close and reporting across markets.",
    scope: "Current scope",
    image: "/images/multi-jurisdiction/model-centralized.png",
    alt: "Centralized team coordinating global payroll",
  },
  {
    title: "Regional hub",
    description: "Regional leads coordinate a cluster of jurisdictions with shared context.",
    scope: "Current scope",
    image: "/images/multi-jurisdiction/model-regional-hub.png",
    alt: "Regional hub team managing several markets",
  },
  {
    title: "Local execution, global governance",
    description: "Local teams execute; global governance sets the policy floor and evidence bar.",
    scope: "Current scope",
    image: "/images/multi-jurisdiction/model-local-execution.png",
    alt: "Local team retaining execution authority",
  },
  {
    title: "Hybrid service model",
    description:
      "A mix of direct, partner-supported and customer-operated markets, tracked distinctly.",
    scope: "Planned expansion",
    image: "/images/multi-jurisdiction/model-hybrid.png",
    alt: "Analyst reviewing a hybrid service model dashboard",
  },
];

export default function OperatingModelsSection() {
  return (
    <section className="border-t border-[#DCE6EC] bg-[#EAF1F6] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Operating models</Eyebrow>
          <h2 className="mt-2.5 max-w-4xl text-2xl font-extrabold leading-8 break-words sm:text-3xl sm:leading-9 text-[#082F49]">
            Four patterns — current scope shown separately from planned
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {models.map((model, index) => (
            <Reveal key={model.title} delay={(index % 4) * 70}>
              <div className="h-full overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 p-2.5">
                <img
                  src={model.image}
                  alt={model.alt}
                  className="h-36 w-full rounded-xl object-cover"
                />
                <div className="px-2 pt-4 pb-1.5">
                  <h3 className="text-base font-extrabold leading-5 text-[#082F49]">{model.title}</h3>
                  <p className="mt-2 pb-2.5 text-xs leading-5 text-[#4E6172]">
                    {model.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#DCE6EC] px-2.5 py-1 text-xs font-semibold leading-4 text-[#075E99]">
                    <span className="size-1.5 rounded-[3px] bg-[#075E99]" aria-hidden="true" />
                    {model.scope}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
