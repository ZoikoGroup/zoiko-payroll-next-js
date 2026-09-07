"use client";

import React from "react";
import Image from "next/image";

const roles = [
  {
    title: "Independent controller",
    description:
      "Processes data under its own authority, e.g. certain banks or regulators.",
  },
  {
    title: "Customer-directed integration",
    description:
      "Connected or marketplace app the customer chooses to authorize directly.",
  },
  {
    title: "Ordinary vendor",
    description: "Supplier with no access to customer personal data in scope.",
  },
] as const;

export default function RoleClassificationSection() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: image with floating badge */}
          <div className="relative overflow-hidden rounded-2xl shadow-[0px_20px_50px_0px_rgba(10,40,65,0.15)]">
            <Image
              src="/images/subprocessors/role-classification.png"
              alt="Reviewing a subprocessor relationship"
              width={526}
              height={383}
              className="aspect-[4/3] h-auto w-full object-cover"
            />
            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white px-3.5 py-2 shadow-[0px_8px_20px_0px_rgba(10,30,50,0.18)]">
              <span className="h-2 w-2 rounded-full bg-[#0A78C3]" />
              <span className="text-xs font-bold text-[#0F172A]">
                Relationship reviewed
              </span>
            </div>
          </div>

          {/* Right: copy */}
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-4 bg-[#0A78C3]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#0A78C3] sm:text-xs">
                ROLE CLASSIFICATION
              </span>
            </div>
            <h2 className="text-2xl font-extrabold tracking-tight text-[#0B192C] sm:text-3xl md:text-[34px]">
              Classification follows the processing relationship
            </h2>
            <p className="text-sm leading-relaxed text-[#64748B] sm:text-base">
              Whether a provider appears here depends on its actual legal role —
              not simply whether Zoiko buys a service from it.
            </p>
          </div>
        </div>

        {/* Role cards */}
        <div className="mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {roles.map((role) => (
            <div
              key={role.title}
              className="rounded-[10px] border border-[#E2E8F0] bg-white px-5 py-4"
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#94A3B8]" />
                <h3 className="text-sm font-bold text-[#0F172A] sm:text-base">
                  {role.title}
                </h3>
              </div>
              <p className="pl-4 pt-1 text-xs leading-relaxed text-[#64748B] sm:text-sm">
                {role.description}
              </p>
            </div>
          ))}
        </div>

        {/* Routing strip */}
        <div className="mt-6 w-full rounded-full bg-[#F1F5F9] px-3.5 py-1.5">
          <span className="text-[11px] font-bold tracking-tight text-[#475569] sm:text-xs">
            → THE THREE ABOVE ROUTE ELSEWHERE
          </span>
        </div>

        {/* Note */}
        <div className="mt-8 w-full max-w-4xl rounded-[6px] border-l-4 border-l-[#0A78C3] bg-[#E7EDFD] p-4 sm:p-5">
          <p className="text-xs leading-relaxed text-[#334155] sm:text-[13px]">
            Only legally classified subprocessors enter the public registry. A
            Zoiko affiliate is not automatically a subprocessor.
          </p>
        </div>
      </div>
    </section>
  );
}
