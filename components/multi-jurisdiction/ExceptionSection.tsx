import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const exceptions = [
  {
    title: "Failed source import",
    severity: "High",
    severityClass: "bg-red-100 text-red-700",
    detail: "SG-All Staff · workforce system connector returned an error before calculation could start.",
    owner: "R. Tan",
    action: "Retry / escalate",
    impact: "Cutoff at risk",
  },
  {
    title: "Unresolved calculation exception",
    severity: "Medium",
    severityClass: "bg-[#F1EAD8] text-[#9C7A1F]",
    detail: "DE-Standard · 2 records flagged for statutory deduction mismatch pending correction.",
    owner: "L. Faber",
    action: "Correct / review",
    impact: "None yet",
  },
];

export default function ExceptionSection() {
  return (
    <section className="border-t border-[#DCE6EC] bg-[#EAF1F6] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Exception &amp; escalation model</Eyebrow>
          <h2 className="mt-2.5 max-w-3xl text-2xl font-extrabold leading-8 break-words sm:text-3xl sm:leading-9 text-[#082F49]">
            The same shape everywhere — not identical rules everywhere
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {exceptions.map((exception, index) => (
            <Reveal key={exception.title} delay={index * 80}>
              <div className="h-full rounded-2xl border border-[#DCE6EC] bg-white px-5 py-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm font-bold leading-5 text-[#082F49]">{exception.title}</h3>
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 font-mono text-xs leading-4 ${exception.severityClass}`}
                  >
                    {exception.severity}
                  </span>
                </div>

                <p className="mt-2.5 text-xs leading-5 text-[#4E6172]">{exception.detail}</p>

                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1.5 text-xs leading-5 text-[#4E6172]">
                  <span>
                    Owner: <span className="font-bold text-[#082F49]">{exception.owner}</span>
                  </span>
                  <span>
                    Action: <span className="font-bold text-[#082F49]">{exception.action}</span>
                  </span>
                  <span>
                    Due impact: <span className="font-bold text-[#082F49]">{exception.impact}</span>
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
