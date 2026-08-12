import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const interfaces = [
  {
    glyph: "{ }",
    title: "Event & data purpose",
    description: "What each event or endpoint represents, in plain terms, before any technical detail.",
  },
  {
    glyph: "⇄",
    title: "Idempotency",
    description: "Repeated requests never create duplicate payroll records or duplicate side effects.",
  },
  {
    glyph: "v",
    title: "Versioning",
    description: "Every event and payload carries an explicit, historically-preserved version.",
  },
];

export default function ApisSection() {
  return (
    <section className="bg-[#F6F8FC] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>APIs &amp; webhooks</Eyebrow>
          <h2 className="mt-3.5 text-3xl font-extrabold leading-10 text-slate-900">
            Developer interfaces, explained at both levels.
          </h2>
          <p className="mt-3.5 text-base leading-6 text-gray-700">
            Event purpose, authorization, idempotency, versioning and failure behavior — documented only
            when the route is live, current and approved.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {interfaces.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <div className="h-full rounded-xl border border-slate-200 bg-white p-6">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-600">
                  {item.glyph}
                </span>
                <h3 className="mt-4 text-sm font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
