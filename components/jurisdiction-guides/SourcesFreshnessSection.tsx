import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const items = [
  {
    title: "Reviewed date",
    description:
      "Displayed prominently and tied to the current approved guide version — not a generic CMS-modified timestamp.",
  },
  {
    title: "Section sources",
    description:
      "High-risk statements map to named sources with title, publisher and relevant date where public.",
  },
  {
    title: "Change triggers",
    description:
      "A material source change, product change or correction report can move a guide to Under review or Review due.",
  },
  {
    title: "Corrections",
    description:
      "Material public guidance changes get a visible correction note — never a silent overwrite.",
  },
];

export default function SourcesFreshnessSection() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Sources, freshness &amp; corrections</Eyebrow>
          <h2 className="mt-3.5 max-w-[640px] text-2xl font-bold leading-tight tracking-tight text-[#0A2E4B] sm:text-3xl sm:leading-10">
            Provenance is not decorative here
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={(index % 2) * 70}>
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
