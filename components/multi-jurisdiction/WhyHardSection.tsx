import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const differences = [
  {
    title: "Different calendars & cutoffs",
    description:
      "Local milestones, timezones and dependencies rarely line up on one universal countdown.",
    chip: "Local milestones",
    image: "/images/multi-jurisdiction/diff-calendars.png",
    alt: "Team coordinating across calendars and time zones",
  },
  {
    title: "Different currencies",
    description:
      "Unlike currencies are never combined without a governed reporting-currency method.",
    chip: "Currency-aware",
    image: "/images/multi-jurisdiction/diff-currencies.png",
    alt: "Close-up of financial figures across currencies",
  },
  {
    title: "Different owners",
    description: "Global visibility is distinguished from local edit and approval authority.",
    chip: "Authority, not just view",
    image: "/images/multi-jurisdiction/diff-owners.png",
    alt: "Local and global teams aligning on ownership",
  },
  {
    title: "Different service models",
    description:
      "Direct, customer-operated, partner-supported — kept distinguishable, never blended.",
    chip: "Model-aware",
    image: "/images/multi-jurisdiction/diff-service-models.png",
    alt: "Team representing different service delivery models",
  },
  {
    title: "Different integrations",
    description: "Connection scope, mappings, local data flow and recovery shown per market.",
    chip: "Per-market mapping",
    image: "/images/multi-jurisdiction/diff-integrations.png",
    alt: "Server infrastructure representing local integrations",
  },
  {
    title: "Different configuration versions",
    description: "Effective-dated local version control — nothing changes silently mid-cycle.",
    chip: "Effective-dated",
    image: "/images/multi-jurisdiction/diff-versions.png",
    alt: "Version history on a configuration screen",
  },
];

export default function WhyHardSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Why it gets hard</Eyebrow>
          <h2 className="mt-2.5 max-w-2xl text-2xl font-extrabold leading-8 break-words sm:text-3xl sm:leading-9 text-[#082F49]">
            Six differences, not one generic complexity problem
          </h2>
          <p className="mt-2.5 max-w-3xl text-base leading-6 text-[#4E6172]">
            Operational friction, not fear-based marketing — each one maps to a specific control on
            this page
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {differences.map((item, index) => (
            <Reveal key={item.title} delay={(index % 3) * 80}>
              <div className="h-full overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 p-2.5">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-36 w-full rounded-xl object-cover"
                />
                <div className="px-2 pt-4 pb-1.5">
                  <h3 className="text-base font-extrabold leading-5 text-[#082F49]">{item.title}</h3>
                  <p className="mt-1.5 pb-2.5 text-xs leading-5 text-[#4E6172]">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#DCE6EC] px-2.5 py-1 text-xs font-semibold leading-4 text-[#075E99]">
                    <span className="size-1.5 rounded-[3px] bg-[#075E99]" aria-hidden="true" />
                    {item.chip}
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
