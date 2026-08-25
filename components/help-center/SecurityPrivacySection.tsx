import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { AlertTriangleIcon } from "../ui/icons";

const neverRequest = [
  "Employee payroll records",
  "Bank details",
  "Tax identifiers",
  "Pay amounts",
  "Passwords / credentials",
  "API keys",
];

const practices = [
  "Ask only what's needed",
  "Explain why",
  "Reveal upload after",
  "Validate type/size",
  "Scan / redact",
  "Communicate retention",
];

export default function SecurityPrivacySection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Security / privacy + evidence minimization</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Minimized by design — not by policy alone.
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-8 rounded-2xl border border-rose-100 bg-rose-50/60 p-6">
          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-rose-500 text-white">
              <AlertTriangleIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-rose-700">Never request or expose the following</p>
              <p className="mt-1 text-sm text-slate-600">
                Security and privacy concerns route directly to Security &amp; Trust — never generic
                support.
              </p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {neverRequest.map((item) => (
              <span
                key={item}
                className="rounded-full border border-rose-200 bg-white px-3 py-1 text-xs font-medium text-rose-700"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140} className="mt-6 flex flex-wrap gap-3">
          {practices.map((practice) => (
            <span
              key={practice}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600"
            >
              {practice}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
