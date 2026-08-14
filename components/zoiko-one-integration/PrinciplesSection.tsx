import Reveal from "../ui/Reveal";

const principles = [
  { title: "Optional", detail: ["Zoiko One connects to Zoiko Payroll — it's", "never required"] },
  { title: "Scoped", detail: ["Every connection carries explicit, least-", "privilege scopes"] },
  { title: "No inheritance", detail: ["A Zoiko One identity never gains payroll", "access automatically"] },
  { title: "Payroll-governed", detail: ["Validation, approval and record versioning", "stay in payroll"] },
];

export default function PrinciplesSection() {
  return (
    <section className="border-t border-white/10 bg-sky-900">
      <div className="mx-auto grid max-w-7xl grid-cols-1 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {principles.map((principle, index) => (
          <Reveal
            key={principle.title}
            delay={index * 60}
            className={`border-white/10 px-5 py-5 ${index > 0 ? "border-t sm:border-t-0 sm:border-l" : ""} ${
              index === 2 ? "sm:border-t sm:border-l-0 lg:border-t-0 lg:border-l" : ""
            }`}
          >
            <p className="text-lg font-extrabold leading-7 text-white">{principle.title}</p>
            <p className="mt-0.5 text-xs leading-4 text-slate-400">
              {principle.detail[0]}
              <br />
              {principle.detail[1]}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
