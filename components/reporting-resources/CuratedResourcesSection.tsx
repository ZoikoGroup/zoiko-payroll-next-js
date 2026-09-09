import Reveal from "../ui/Reveal";

const collections = [
  {
    title: "Reporting foundations",
    description: "Definitions, scope, period and\nsource context.",
    image: "Reporting foundations.png",
  },
  {
    title: "Exports & sharing",
    description: "Least privilege, scope and safe\nhandling.",
    image: "Exports and sharing.png",
  },
  {
    title: "Audit & review",
    description: "Traceability, evidence and access\nboundaries.",
    image: "Audit and review.png",
  },
  {
    title: "Visual learning",
    description: "Task-based reporting videos with\ncaptions.",
    image: "Visual learning.png",
  },
];

export default function CuratedResourcesSection() {
  return (
    <section className="bg-[#F4F8FB] py-16 sm:py-20" id="curated-resources">
      <div className="mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-[1140px] text-center">
            {/* Header Tag / Eyebrow */}
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-[#0A8FD0]">/</span>
              <span className="text-xs font-bold font-['Plus_Jakarta_Sans'] uppercase leading-5 tracking-wide text-[#0A8FD0]">
                Curated reporting resources
              </span>
            </div>

            {/* Title */}
            <h2 className="mt-1 text-3xl font-extrabold leading-9 text-[#0A2E4B] sm:text-4xl sm:leading-tight font-['Plus_Jakarta_Sans']">
              Four collections to go deeper.
            </h2>
          </div>
        </Reveal>

        {/* Resource Cards Grid */}
        <Reveal delay={80}>
          <div className="mx-auto mt-12 grid max-w-[1140px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {collections.map((collection) => (
              <div
                key={collection.title}
                className="overflow-hidden rounded-2xl border border-[#DCE6EC] bg-white shadow-[0px_1px_2px_0px_rgba(10,46,75,0.04)] transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                {/* Card Thumbnail */}
                <div className="h-36 overflow-hidden bg-slate-100">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="size-full object-cover"
                  />
                </div>

                {/* Card Info */}
                <div className="p-5 text-left">
                  <h3 className="text-base font-bold leading-6 text-[#0A2E4B] font-['Plus_Jakarta_Sans']">
                    {collection.title}
                  </h3>
                  <p className="mt-1 whitespace-pre-line text-xs font-normal leading-5 text-[#5B646B] font-['Plus_Jakarta_Sans']">
                    {collection.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}