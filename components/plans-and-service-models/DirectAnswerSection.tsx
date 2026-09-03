"use client";

import React from "react";

export default function DirectAnswerSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-blue-50 border border-sky-100 rounded-xl p-5 sm:p-6">
          <p className="text-sm leading-5 text-[#082F49]">
            <span className="font-bold">
              What is the difference between a payroll plan and a service model?
            </span>{" "}
            A Zoiko Payroll plan defines licensed product scale and
            capabilities. A service model defines how payroll work is operated
            for a specific entity or jurisdiction — for example through Zoiko
            Payroll, a connected provider, an approved partner, or the
            customer&apos;s own payroll team. Optional services may be
            contracted separately.
          </p>
        </div>
      </div>
    </section>
  );
}
