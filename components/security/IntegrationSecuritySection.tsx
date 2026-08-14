import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const connectionPosture = [
  { item: "Service identity per connection", tag: "named" },
  { item: "Approved environment & scope", tag: "least privilege" },
  { item: "Security-relevant events logged", tag: "where supported" },
  { item: "Secrets never shown in UI", tag: "policy", warn: true },
];

const responsibilitySplit = [
  { item: "Customer-selected integrations", tag: "HRIS, ERP, etc." },
  { item: "Zoiko Payroll subprocessors", tag: "separately listed" },
  { item: "Distinct approval & review paths", tag: "not conflated" },
];

type Row = { item: string; tag: string; warn?: boolean };

function PostureCard({ title, rows }: { title: string; rows: Row[] }) {
  return (
    <div className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <h3 className="border-b border-slate-200 bg-gray-50 px-5 pb-4 pt-3.5 text-sm font-extrabold leading-6 text-slate-900">
        {title}
      </h3>
      <div className="px-5 py-4">
        {rows.map((row, index) => (
          <div
            key={row.item}
            className={`flex items-center gap-2.5 py-2 ${
              index < rows.length - 1 ? "border-b border-slate-200" : ""
            }`}
          >
            <span
              aria-hidden="true"
              className={`flex size-4 shrink-0 items-center justify-center rounded-[5px] text-xs font-bold leading-4 ${
                row.warn ? "bg-orange-100 text-yellow-700" : "bg-emerald-50 text-green-600"
              }`}
            >
              {row.warn ? "!" : "✓"}
            </span>
            <span className="text-xs leading-5 text-slate-900">{row.item}</span>
            <span className="ml-auto shrink-0 pl-4 font-mono text-xs leading-4 text-slate-500">
              {row.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function IntegrationSecuritySection() {
  return (
    <section className="bg-[#F6F8FC] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Integration &amp; API security</Eyebrow>
          <h2 className="mt-2.5 max-w-2xl text-3xl font-extrabold leading-9 text-slate-900">
            Least privilege, without exposing secrets.
          </h2>
          <p className="mt-2.5 max-w-3xl text-base leading-6 text-gray-700">
            Full technical detail lives on the dedicated Integrations page — this is the security
            lens on it.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <Reveal>
            <PostureCard title="Connection security posture" rows={connectionPosture} />
          </Reveal>
          <Reveal delay={100}>
            <PostureCard title="Customer vs. subprocessor" rows={responsibilitySplit} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
