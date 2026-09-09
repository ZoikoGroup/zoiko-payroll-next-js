import Reveal from "../ui/Reveal";

export default function AuditEvidenceSection() {
  return (
    <section className="bg-[#F4F8FB] py-16 sm:py-20" id="audit-evidence">
      <div className="mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-[760px] text-center">
            {/* Tag / Eyebrow */}
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-[#0A8FD0]">/</span>
              <span className="text-xs font-bold font-['Plus_Jakarta_Sans'] uppercase leading-5 tracking-wide text-[#0A8FD0]">
                Audit, evidence &amp; review
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-1 text-3xl font-extrabold leading-tight text-[#0A2E4B] sm:text-4xl font-['Plus_Jakarta_Sans']">
              Facts and states — never a compliance
              <br />
              score.
            </h2>

            {/* Description */}
            <p className="mt-4 text-xs sm:text-sm font-normal leading-6 text-[#5B646B] font-['Plus_Jakarta_Sans']">
              A report is explainable when its scope, period, definition, source and
              <br className="hidden sm:inline" />
              {" "}freshness are visible. We never add a single &quot;reporting health&quot; or
              <br className="hidden sm:inline" />
              {" "}&quot;compliance&quot; score — explicit facts and source links replace it.
            </p>
          </div>
        </Reveal>

        {/* Callout Card (Only Left Border) */}
        <Reveal delay={80}>
          <div className="mx-auto mt-8 flex min-h-[119px] w-full max-w-[616px] items-center justify-center rounded-xl border-l-4 border-sky-600 bg-white p-6 text-center shadow-[0px_2px_8px_0px_rgba(10,120,194,0.04)]">
            <p className="text-sm font-normal leading-6 text-[#0A2E4B] font-['Plus_Jakarta_Sans']">
              Evidence supports review; it does not itself prove legal or statutory compliance.
              <br />
              An auditor sees employee detail only if their authorized role permits it —
              <br />
              aggregate access never implies drill-down.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}