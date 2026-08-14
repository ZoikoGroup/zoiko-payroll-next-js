import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import { CheckCircleIcon } from "../ui/icons";

const points = [
  "Authentication, least-privilege authorization, audit events and data minimization are shown explicitly, not implied.",
  "Encryption, residency, subprocessors and assurance are never inferred as shared across all Zoiko products.",
  "Purpose, products involved, and applicable processing/retention are documented per connection.",
];

export default function SecurityAuditSection() {
  return (
    <section className="border-t border-slate-200 bg-[#F5F8FA] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Eyebrow>Security, privacy &amp; audit</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold leading-9 text-sky-950">
              Least privilege, checked at every commit
            </h2>

            <ul className="mt-7 space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm leading-6 text-sky-950">
                  <CheckCircleIcon className="mt-0.5 size-4 shrink-0 text-green-700" />
                  {point}
                </li>
              ))}
            </ul>

            <Link
              href="/security"
              className="mt-8 inline-block border-b-2 border-sky-950 pb-1 text-sm font-bold text-sky-950 transition-colors duration-200 hover:border-sky-600 hover:text-sky-700"
            >
              Visit the Trust Center →
            </Link>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative overflow-hidden rounded-2xl border border-slate-200">
              <img
                src="/images/zoiko-one-integration/security-audit.png"
                alt="Team reviewing connection authorization together"
                className="w-full object-cover"
              />
              <span className="absolute top-4 right-4 rounded-md bg-sky-950/90 px-2.5 py-[5px] font-mono text-xs font-medium leading-4 tracking-tight text-white">
                Authorization checked at commit, not just on load
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
