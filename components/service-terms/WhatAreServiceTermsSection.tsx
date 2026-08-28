import React from "react";
import SectionShell from "./SectionShell";

export default function WhatAreServiceTermsSection() {
  return (
    <SectionShell
      id="what-are-service-terms"
      title="What are Zoiko Payroll Service Terms?"
    >
      <p className="rounded-[10px] border border-sky-100 bg-blue-50 px-5 py-4 text-sm leading-5 text-sky-950">
        <span className="font-bold">Direct answer:</span> Zoiko Payroll Service
        Terms are the public standard terms and conditions for using Zoiko
        Payroll services. They apply as the standard baseline unless your
        organization has an executed agreement or order that states otherwise —
        in which case the executed agreement controls for your account.
      </p>
    </SectionShell>
  );
}
