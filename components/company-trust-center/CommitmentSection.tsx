import Reveal from "../ui/Reveal";

const stats = [
  { value: "4", label: "Trust layers, never conflated" },
  { value: "7", label: "Deterministic trust paths" },
  { value: "6", label: "Governed access classes" },
];

export default function CommitmentSection() {
  return (
    <section className="bg-brand-dark py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-wider text-blue-300">
            Company level commitment
          </p>
          <h2 className="mt-3.5 max-w-[720px] text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl">
            Trust that holds up outside the sales deck.
          </h2>
          <p className="mt-4 max-w-[680px] text-sm leading-6 text-slate-300">
            This page is built to stay useful even when a certification is restricted, a review is
            due, or status data is temporarily unavailable — because a reviewer&apos;s trust in
            Zoiko Payroll should never depend on everything going right at once.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 80} className="border-l border-white/20 pl-5">
              <p className="text-4xl font-extrabold text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
