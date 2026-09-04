import Reveal from "../ui/Reveal";

export default function CtaSection() {
  return (
    <section className="bg-sky-950 px-7 py-16">
      <div className="mx-auto max-w-7xl text-center">
        <Reveal>
          <div className="flex items-center justify-center gap-1.5">
            <span className="inline-block h-3.5 w-1.5 shrink-0 rounded-xs bg-blue-300" />
            <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
              Ready to plan a controlled global payroll launch?
            </span>
          </div>
          <h2 className="mx-auto mt-3.5 max-w-3xl text-3xl font-extrabold leading-10 text-white">
            Turn scope, migration, validation and launch decisions into one
            accountable implementation program
          </h2>
          <div className="mt-7 flex items-center justify-center gap-3.5">
            <span className="rounded-lg bg-gradient-to-br from-sky-400 to-sky-900 px-5 py-2.5 text-sm font-bold text-white shadow-[0px_1px_2px_rgba(10,46,75,0.06)]">
              Contact Support
            </span>
            <span className="rounded-lg outline outline-1 outline-offset-[-1px] outline-white/30 px-5 py-2.5 text-sm text-white">
              Explore Global Payroll Resources →
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
