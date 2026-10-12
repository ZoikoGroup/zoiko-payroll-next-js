import React from "react";
import SectionShell from "./SectionShell";
import RuleCard, { type Rule } from "./RuleCard";

const rule: Rule = {
  label: "Access control integrity",
  status: "Prohibited",
  statement:
    "Users are responsible for maintaining the integrity of their assigned access and not enabling unauthorized use of their account.",
  note: "Suspected vulnerabilities route to Responsible Disclosure, not general misuse reporting.",
};

export default function SecurityIntegritySection() {
  return (
    <SectionShell id="security-integrity" title="Security & access integrity">
      <RuleCard rule={rule} />
    </SectionShell>
  );
}
