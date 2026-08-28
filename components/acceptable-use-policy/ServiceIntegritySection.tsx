import React from "react";
import SectionShell from "./SectionShell";
import RuleCard, { type Rule } from "./RuleCard";

const rule: Rule = {
  label: "Disruption or interference",
  status: "Prohibited",
  statement:
    "Actions intended to disrupt, overload or interfere with the normal operation of Zoiko Payroll services are not permitted.",
};

export default function ServiceIntegritySection() {
  return (
    <SectionShell id="service-integrity" title="Service integrity">
      <RuleCard rule={rule} />
    </SectionShell>
  );
}
