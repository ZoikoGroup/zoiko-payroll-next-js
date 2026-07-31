import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { PinIcon } from "../ui/icons";

const fields = [
  { label: "Product", value: "Zoiko Payroll" },
  { label: "Platform owner and operator", value: "Zoiko Tech Inc" },
  { label: "Parent group", value: "Zoiko Group" },
  { label: "Commercial availability", value: "Standalone SaaS and through Zoiko One" },
  { label: "Product scope", value: "Global, multi-jurisdictional payroll management" },
];

const offices = [
  {
    label: "Headquarters",
    address: "1401 21st Street, Suite R\nSacramento, CA 95811 USA",
  },
  {
    label: "European headquarters",
    address: "167-169 Great Portland Street, 5th Floor\nLondon W1W 5PF UK",
  },
];

export default function OwnershipSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Ownership, accountability and corporate presence</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
              A Zoiko Tech platform. A Zoiko Group company.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Zoiko Payroll is a platform owned and operated by Zoiko Tech Inc, a Zoiko Group company.
              Zoiko Tech Inc develops and operates technology products and digital platforms within the
              wider Zoiko Group.
            </p>
          </Reveal>

          <Reveal delay={100} className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-white p-8">
            <span className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-600">
              Zoiko Group
            </span>
            <span className="h-6 w-px bg-slate-200" />
            <span className="rounded-lg border border-brand px-5 py-2.5 text-sm font-medium text-brand">
              Zoiko Tech Inc
            </span>
            <span className="h-6 w-px bg-slate-200" />
            <span className="bg-brand-gradient rounded-lg px-5 py-2.5 text-sm font-semibold text-white">
              Zoiko Payroll
            </span>
          </Reveal>
        </div>

        <Reveal delay={140} className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="hidden grid-cols-2 gap-4 border-b border-slate-100 bg-slate-50 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400 sm:grid">
            <span>Field</span>
            <span>Published value</span>
          </div>
          {fields.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-1 gap-1 border-b border-slate-100 px-6 py-4 last:border-b-0 sm:grid-cols-2 sm:gap-4"
            >
              <span className="text-sm font-semibold text-brand-dark">{row.label}</span>
              <span className="text-sm text-slate-600">{row.value}</span>
            </div>
          ))}
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {offices.map((office, index) => (
            <Reveal key={office.label} delay={180 + index * 60} className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                <PinIcon className="h-4 w-4 text-brand" />
                {office.label}
              </div>
              <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-brand-dark">{office.address}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
