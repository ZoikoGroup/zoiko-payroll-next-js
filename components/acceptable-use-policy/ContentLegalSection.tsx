import React from "react";
import SectionShell from "./SectionShell";
import RuleCard, { type Rule } from "./RuleCard";

const rules: Rule[] = [
  {
    label: "Lawful use only",
    status: "Prohibited",
    statement:
      "Use of Zoiko Payroll services in violation of applicable law is not permitted.",
    note: "Exact sanctions, export or jurisdiction-specific obligations are governed by approved legal terms, not summarized here.",
  },
  {
    label: "AI / automated use",
    status: "Conditional",
    statement:
      "Where Zoiko Payroll offers AI-assisted or automated capabilities, their use is subject to applicable product terms. This policy does not itself authorize or prohibit automated employment or payroll decisions beyond what is stated in approved product and contract terms.",
  },
];

export default function ContentLegalSection() {
  return (
    <SectionShell id="content-legal" title="Content, legal & regulatory use">
      <div className="space-y-4">
        {rules.map((rule) => (
          <RuleCard key={rule.label} rule={rule} />
        ))}
      </div>
    </SectionShell>
  );
}
