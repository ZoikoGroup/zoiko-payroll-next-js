import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { ArrowRightIcon } from "../ui/icons";
import { countries } from "../layout/countries-data";
import { US, GB, DE, SG, AU, BR, JP, MX, FR, IN, CA, NL, ZA, AE, SE } from "country-flag-icons/react/3x2";

type FlagProps = { className?: string; title?: string };

const flagComponents: Record<string, React.ComponentType<FlagProps>> = {
  US,
  GB,
  DE,
  SG,
  AU,
  BR,
  JP,
  MX,
  FR,
  IN,
  CA,
  NL,
  ZA,
  AE,
  SE,
};

const layers = [
  {
    badge: "Shared",
    badgeClass: "bg-sky-100 text-[#1483C7]",
    accent: "border-l-[#1483C7]",
    title: "Six-stage lifecycle",
    description: "Same stages, states and decision rights everywhere Zoiko Payroll operates.",
  },
  {
    badge: "Local",
    badgeClass: "bg-amber-100 text-yellow-700",
    accent: "border-l-yellow-600",
    title: "Jurisdiction configuration layer",
    description:
      "Calculations, statutory deductions, filing workflows, currencies and documentation configured per market.",
  },
];

export default function JurisdictionModelSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#F4F8FB] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Eyebrow>Multi-jurisdiction model</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
              One shared lifecycle. Local configuration underneath.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-600">
              The six stages don&rsquo;t change market to market — the rules underneath do. Calculations,
              statutory deductions, documentation, service model and legal responsibilities vary by
              jurisdiction.
            </p>

            <ul className="mt-8 flex flex-wrap gap-2.5">
              {countries.map((country) => {
                const Flag = flagComponents[country.code];
                if (!Flag) return null;
                return (
                  <li key={country.code}>
                    <Flag title={country.name} className="h-4 w-6 rounded-[2px] shadow-sm" />
                  </li>
                );
              })}
            </ul>

            <span className="mt-8 inline-flex items-center gap-1.5 border-b border-[#0A3050] pb-1 text-sm font-semibold text-brand-dark">
              Check jurisdiction availability
              <ArrowRightIcon className="h-4 w-4" />
            </span>
          </Reveal>

          <Reveal delay={100} className="space-y-4">
            {layers.map((layer) => (
              <div
                key={layer.title}
                className={`rounded-2xl border border-slate-200 border-l-[3px] bg-white p-6 ${layer.accent}`}
              >
                <span className={`inline-block rounded-full px-2.5 py-1 text-xs font-semibold ${layer.badgeClass}`}>
                  {layer.badge}
                </span>
                <h3 className="mt-3 text-base font-semibold text-brand-dark">{layer.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{layer.description}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
