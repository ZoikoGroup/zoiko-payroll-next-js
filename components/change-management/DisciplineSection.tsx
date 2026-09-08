import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Info } from "lucide-react";
import { Eyebrow } from "./Primitives";

const pillars = [
  "Stakeholder planning",
  "Impact assessment",
  "Communication strategy",
  "Readiness measurement",
  "Adoption & reinforcement",
] as const;

export default function DisciplineSection() {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="overflow-hidden rounded-2xl">
          <Image
            src="/images/change-management/discipline.webp"
            alt="A team working through an employee engagement plan"
            width={528}
            height={462}
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-6">
          <Eyebrow>The discipline</Eyebrow>
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            What payroll change management means.
          </h2>
          <p className="text-base leading-7 text-slate-500">
            It&apos;s the coordinated work of preparing people, roles, and
            communication for a new payroll operating model — alongside the
            technology itself.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {pillars.map((pillar, index) => (
              <div
                key={pillar}
                className={`flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-6 text-center text-sm font-semibold text-slate-900 ${
                  index === pillars.length - 1 ? "sm:col-span-2" : ""
                }`}
              >
                {pillar}
              </div>
            ))}
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-blue-600/20 bg-linear-81 from-blue-600/5 to-blue-400/10 p-6">
            <Info
              className="h-5 w-5 shrink-0 text-blue-600"
              strokeWidth={1.67}
            />
            <p className="text-sm leading-6 text-slate-900">
              Training is part of the broader change plan, but has its own
              dedicated service.{" "}
              {/* No training route exists yet — placeholder until one is built. */}
              <Link
                href="#"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                Explore training services →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
