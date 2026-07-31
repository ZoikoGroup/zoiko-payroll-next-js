import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import RadialDiagram from "./RadialDiagram";

const hubItems = [
  { label: "Users", sublabel: "Admins & employees" },
  { label: "Zoiko", sublabel: "Zoiko One" },
  { label: "APIs", sublabel: "Integrations" },
  { label: "Shared", sublabel: "Platform services" },
  { label: "Config", sublabel: "Jurisdictions" },
];

export default function DifferentiationSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>What makes Zoiko Payroll different</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
              Independent as a product. Connected as a platform.
            </h2>
            <div className="mt-6 space-y-5">
              <div>
                <p className="text-sm font-semibold text-brand-dark">Commercial independence</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  Organizations can purchase and use Zoiko Payroll without subscribing to Zoiko One.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-dark">Global control, local precision</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  A consistent operating model preserves verified configurations for each supported
                  jurisdiction.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-dark">Transparent availability</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  Every market uses one controlled status: Available, Limited, Partner-supported,
                  Planned, or Not available. Evidence before claims — coverage, integrations, and
                  certifications are published only when verified and approved.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="rounded-2xl border border-slate-200 bg-white p-8">
            <RadialDiagram centerLabel="Zoiko Payroll" items={hubItems} />
          </Reveal>
        </div>

        <Reveal delay={160} className="mt-8 rounded-2xl border border-brand/15 bg-brand/5 p-6 text-center">
          <Eyebrow center>Approved product principle</Eyebrow>
          <p className="mt-3 text-lg font-semibold text-brand-dark">
            Separate products commercially. Preserve a shared platform technically.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
