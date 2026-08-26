import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

export default function AuditEvidenceSection() {
  return (
    <section className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-center">
          <Eyebrow>Audit, evidence &amp; review</Eyebrow>
          <h2 className="mt-3.5 max-w-[620px] text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Facts and states — never a compliance score.
          </h2>
          <p className="mt-5 max-w-[570px] text-base leading-7 text-slate-600">
            A report is explainable when its scope, period, definition, source and freshness are
            visible. We never add a single &quot;reporting health&quot; or &quot;compliance&quot;
            score — explicit facts and source links replace it.
          </p>
        </Reveal>

        <Reveal
          delay={120}
          className="mt-8 w-full max-w-[680px] rounded-xl border border-l-4 border-slate-200 border-l-brand bg-white px-6 py-6 text-left sm:px-8"
        >
          <p className="text-sm leading-6 text-brand-dark">
            Evidence supports review; it does not itself prove legal or statutory compliance. An
            auditor sees employee detail only if their authorized role permits it — aggregate access
            never implies drill-down.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
