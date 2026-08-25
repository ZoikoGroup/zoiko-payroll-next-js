import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const guides = [
  {
    name: "United Kingdom",
    meta: "Country · Europe",
    description: "Market-specific payroll context, terminology and operating questions for the UK.",
    tags: ["Reviewed Jul 2026", "Current"],
    image: "/images/jurisdiction-guides/london.png",
    href: "/resources/jurisdiction-guides/united-kingdom",
  },
  {
    name: "United States",
    meta: "Country · Americas",
    description: "Federal and state-level payroll context and questions to investigate.",
    tags: ["Reviewed Aug 2026", "Current"],
    image: "/images/jurisdiction-guides/seattle.png",
    href: "/resources/jurisdiction-guides/united-states",
  },
  {
    name: "Singapore",
    meta: "Country · Asia Pacific",
    description: "Operating environment and payroll terminology for the Singapore market.",
    tags: ["Reviewed Jun 2026", "Current"],
    image: "/images/jurisdiction-guides/singapore.png",
    href: "/resources/jurisdiction-guides/singapore",
  },
  {
    name: "United Arab Emirates",
    meta: "Country · Middle East & Africa",
    description: "Market context and payroll operating questions for the UAE.",
    tags: ["Review due"],
    image: "/images/jurisdiction-guides/dubai.png",
    href: "/resources/jurisdiction-guides/united-arab-emirates",
  },
  {
    name: "Germany",
    meta: "Country · Europe",
    description: "Market-specific payroll terminology and operating environment for Germany.",
    tags: ["Reviewed May 2026", "Current"],
    image: "/images/jurisdiction-guides/cologne.png",
    href: "/resources/jurisdiction-guides/germany",
  },
  {
    name: "Ontario",
    meta: "Province · Canada · Americas",
    description: "Provincial payroll context and operating questions for Ontario.",
    tags: ["Reviewed Jul 2026", "Current"],
    image: "/images/jurisdiction-guides/toronto.png",
    href: "/resources/jurisdiction-guides/ontario",
  },
];

export default function GuideDirectorySection() {
  return (
    <section id="guide-directory" className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Guide directory</Eyebrow>
          <h2 className="mt-3.5 max-w-[640px] text-2xl font-bold leading-tight tracking-tight text-[#0A2E4B] sm:text-3xl sm:leading-10">
            Compare guides with trust metadata, not marketing copy
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide, index) => (
            <Reveal key={guide.name} delay={(index % 3) * 80} className="h-full">
              <Link
                href={guide.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_12px_28px_-20px_rgba(15,45,70,0.20)] transition-colors duration-200 hover:border-brand/40"
              >
                <img
                  src={guide.image}
                  alt=""
                  loading="lazy"
                  className="h-44 w-full object-cover transition-transform sm:h-48 duration-500 group-hover:scale-105"
                />

                <div className="flex flex-1 flex-col px-4 py-4">
                  <p className="text-base font-bold leading-6 text-[#0A2E4B]">{guide.name}</p>
                  <p className="mt-0.5 text-xs leading-4 text-slate-500">{guide.meta}</p>
                  <p className="mt-1.5 text-xs leading-5 text-gray-600">{guide.description}</p>

                  <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
                    {guide.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-[20px] border border-slate-200 bg-slate-100 px-2 py-[3px] text-[10px] leading-4 text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
