import React from "react";
import Link from "next/link";
import { Lock, Users, FileCheck } from "lucide-react";
import { Eyebrow } from "./Primitives";

const controls = [
  {
    icon: Lock,
    title: "Encrypted in transit and at rest",
    description:
      "Employee and payment data is encrypted end to end across the platform.",
  },
  {
    icon: Users,
    title: "Role-based access control",
    description:
      "Give people access to exactly what their role requires — nothing more.",
  },
  {
    icon: FileCheck,
    title: "Full activity audit trail",
    description:
      "Every change to pay data is logged and traceable back to its source.",
  },
] as const;

export default function SecuritySection() {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">
        <div className="flex flex-col items-start gap-3.5">
          <Eyebrow>Security &amp; enterprise confidence</Eyebrow>
          <h2 className="max-w-lg text-2xl font-extrabold leading-9 text-slate-900 sm:text-3xl">
            Payroll data handled the way it should be
          </h2>
          <p className="pb-3.5 text-base leading-6 text-gray-500">
            Payroll touches your most sensitive employee data. Zoiko Payroll is
            built with access control, encryption, and audit logging as core
            parts of the system, not an add-on.
          </p>
          <Link
            href="/product/security"
            className="rounded-[999px] border border-neutral-200 px-6 py-3.5 text-base font-bold text-slate-900 transition-colors hover:border-sky-600"
          >
            View security information
          </Link>
        </div>

        <ul className="flex flex-col">
          {controls.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="flex items-start gap-4 border-t border-neutral-200 py-5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-indigo-50">
                <Icon className="h-4 w-4 text-sky-700" strokeWidth={1.5} />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-bold text-slate-900">{title}</h3>
                <p className="text-sm leading-5 text-gray-500">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
