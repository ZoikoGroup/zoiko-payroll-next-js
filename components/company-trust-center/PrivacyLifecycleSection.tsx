import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { RecordsIcon, ClockIcon, TransferIcon } from "../ui/icons";

const stages = [
  "Collection",
  "Transit",
  "Processing",
  "Storage",
  "Access",
  "Support",
  "Backup / recovery",
  "Export",
  "Archive",
  "Deletion",
];

const authorities = [
  {
    icon: RecordsIcon,
    title: "Purpose, role & data classes",
    description:
      "What data is collected, why, and which approved data classes apply to payroll processing.",
    authority: "Authority: Privacy Notice",
    href: "/privacy-notice",
  },
  {
    icon: ClockIcon,
    title: "Retention, deletion & residency",
    description:
      "Retention and deletion periods, and residency scoped to primary processing, replicas and backups separately.",
    authority: "Authority: DPA / Privacy Notice",
    href: "/privacy-notice",
  },
  {
    icon: TransferIcon,
    title: "Transfers & subprocessors",
    description:
      "Cross border transfer mechanisms and the current approved subprocessor list.",
    authority: "Authority: Subprocessor list",
    href: "/subprocessors",
  },
];

const nonInference = [
  "Global Payroll market availability",
  "Jurisdiction directory coverage",
  "Implementation plans",
  "Ecosystem / Zoiko One relationships",
  "Provider or cloud logos",
];

export default function PrivacyLifecycleSection() {
  return (
    <section
      id="privacy-lifecycle"
      className="scroll-mt-24 border-y border-slate-200 bg-white py-14 sm:py-20"
    >
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-2 lg:gap-10">
          <Reveal>
            <Eyebrow>Privacy &amp; data lifecycle</Eyebrow>
            <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
              Cross-border boundaries, shown — never a &ldquo;hosted-in&rdquo; badge
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-base leading-6 text-slate-600">
              Public trust treatment here comes only from approved privacy and contract authorities.
              Availability in a market is never evidence of where data actually lives.
            </p>
          </Reveal>
        </div>

        <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {stages.map((stage, index) => (
            <Reveal
              key={stage}
              delay={index * 40}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-5 text-center"
            >
              <p className="text-xs font-bold text-brand">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-1 text-sm font-bold text-brand-dark">{stage}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {authorities.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.title}
                delay={index * 80}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6"
              >
                <span className="flex size-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-brand-dark">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-4 text-base font-bold text-brand-dark">{item.title}</p>
                <p className="mt-2.5 text-sm leading-6 text-slate-600">{item.description}</p>
                <Link
                  href={item.href}
                  className="mt-auto pt-4 text-sm font-bold text-brand transition-colors duration-200 hover:text-brand-dark"
                >
                  {item.authority}
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={160} className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-red-700">
            Cross-border non-inference — do not infer data location from:
          </p>
          <div className="mt-3.5 flex flex-wrap gap-2">
            {nonInference.map((item) => (
              <span
                key={item}
                className="rounded-full border border-red-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
