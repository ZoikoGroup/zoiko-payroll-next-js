import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { ArrowRightIcon } from "../ui/icons";

const standalonePoints = [
  "Dedicated payroll product experience",
  "Independent commercial path",
  "Payroll-specific onboarding & support",
];

const connectedPoints = [
  "Optional connection where enabled",
  "Unified access across products",
  "Broader administration & reporting",
];

export default function StandaloneSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#F4F8FB] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Standalone Zoiko Payroll &amp; Zoiko One</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Commercially independent, technically interoperable.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            You don&rsquo;t need Zoiko One to understand or buy Zoiko Payroll — and not every product or
            data object interoperates automatically.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-slate-200 bg-white p-8">
            <Eyebrow>Standalone</Eyebrow>
            <h3 className="mt-3 text-xl font-semibold text-brand-dark">Zoiko Payroll on its own</h3>
            <ul className="mt-5 space-y-2.5">
              {standalonePoints.map((point) => (
                <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-slate-600">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
            <span className="mt-6 block h-px w-40 bg-[#1483C7]" aria-hidden="true" />
          </Reveal>

          <Reveal delay={100} className="rounded-2xl bg-brand-dark p-8">
            <Eyebrow tone="light">Through Zoiko One</Eyebrow>
            <h3 className="mt-3 text-xl font-semibold text-white">Payroll, connected</h3>
            <ul className="mt-5 space-y-2.5">
              {connectedPoints.map((point) => (
                <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-light" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
            <span className="mt-6 inline-flex items-center gap-1.5 border-b border-white pb-1 text-sm font-semibold text-white">
              Explore Zoiko One
              <ArrowRightIcon className="h-4 w-4" />
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
