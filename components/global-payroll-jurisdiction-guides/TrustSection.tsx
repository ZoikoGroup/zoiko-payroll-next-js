import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const cards = [
  {
    title: "Editorial governance",
    description: "Every guide has a named content owner and a scheduled review cadence.",
  },
  {
    title: "Privacy",
    description: "Reading a guide does not require submitting contact details.",
  },
  {
    title: "Accessibility",
    description:
      "Guides support assistive technology, keyboard navigation and full content parity across devices.",
  },
];

export default function TrustSection() {
  return (
    <section className="border-t border-slate-200 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Trust, privacy &amp; accessibility</Eyebrow>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Governance and data handling, plainly stated.
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <Reveal
              key={card.title}
              delay={index * 60}
              className="h-full rounded-2xl border border-slate-200 bg-white p-5"
            >
              <p className="text-sm font-bold leading-5 text-brand-dark">{card.title}</p>
              <p className="mt-2.5 text-xs leading-5 text-slate-600">{card.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
