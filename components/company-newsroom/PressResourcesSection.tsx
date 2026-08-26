import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const resources = [
  {
    icon: "/images/company-newsroom/press-boilerplate.svg",
    title: "Company boilerplate",
    description: "Versioned, review-dated corporate identity text.",
  },
  {
    icon: "/images/company-newsroom/press-fact-sheet.svg",
    title: "Fact sheet",
    description: "Verified company/product facts, last-reviewed date shown.",
  },
  {
    icon: "/images/company-newsroom/press-brand-marks.svg",
    title: "Brand marks",
    description: "Approved logos with usage and clear-space guidance.",
  },
  {
    icon: "/images/company-newsroom/press-screenshots.svg",
    title: "Product screenshots",
    description: "Synthetic, sanitized images with alt text and usage notes.",
  },
];

export default function PressResourcesSection() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-[820px] text-center">
          <div className="flex justify-center">
            <Eyebrow>Press &amp; media resources</Eyebrow>
          </div>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Verified assets only — never outlet logos as validation
          </h2>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource, index) => (
            <Reveal
              key={resource.title}
              delay={index * 70}
              className="flex h-full flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-[#EEF2FF]">
                <img src={resource.icon} alt="" aria-hidden="true" className="size-[18px]" />
              </span>
              <p className="mt-4 text-sm font-bold text-brand-dark">{resource.title}</p>
              <p className="mt-2 text-xs leading-5 text-slate-500">{resource.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
