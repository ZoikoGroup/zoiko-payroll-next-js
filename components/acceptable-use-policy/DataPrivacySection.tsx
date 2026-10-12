import React from "react";
import SectionShell from "./SectionShell";
import RuleCard, { type Rule } from "./RuleCard";

const rule: Rule = {
  label: "Confidentiality of data accessed through the service",
  status: "Prohibited",
  statement:
    "Using data accessed through Zoiko Payroll outside its intended, authorized purpose is not permitted.",
  note: "Data-processing obligations and privacy rights are owned by the Data Processing Addendum and Privacy Notice, not this policy.",
};

export default function DataPrivacySection() {
  return (
    <SectionShell id="data-privacy" title="Data & privacy conduct">
      <RuleCard rule={rule} />
    </SectionShell>
  );
}
