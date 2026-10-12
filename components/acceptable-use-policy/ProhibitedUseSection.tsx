import React from "react";
import SectionShell from "./SectionShell";
import RuleCard, { type Rule } from "./RuleCard";

const rules: Rule[] = [
  {
    label: "Unauthorized access & credential misuse",
    status: "Prohibited",
    statement:
      "Accessing accounts, data or systems without authorization, or misusing credentials, is not permitted.",
    examples: [
      "Attempting to access another organization's account or data without authorization.",
      "Sharing login credentials in a way that circumvents assigned roles or permissions.",
    ],
    footnote: "Examples are illustrative and non-exhaustive.",
  },
  {
    label: "Fraud, deception & impersonation",
    status: "Prohibited",
    statement:
      "Using the service to deceive, defraud or impersonate another party is not permitted.",
    examples: [
      "Submitting knowingly false information to obtain a service outcome.",
      "Impersonating another individual or organization within the service.",
    ],
    footnote: "Examples are illustrative and non-exhaustive.",
  },
  {
    label: "Security circumvention",
    status: "Prohibited",
    statement:
      "Bypassing or attempting to bypass access controls, rate limits or other security measures is not permitted outside an approved authorization route.",
    examples: [
      "Attempting to disable, bypass or interfere with authentication or access controls.",
    ],
    note: "Authorized security research uses a separate route — see Responsible Disclosure.",
  },
];

export default function ProhibitedUseSection() {
  return (
    <SectionShell
      id="prohibited-use"
      title="Prohibited use"
      intro="The following categories describe conduct that is not permitted when using Zoiko Payroll services."
    >
      <div className="space-y-4">
        {rules.map((rule) => (
          <RuleCard key={rule.label} rule={rule} />
        ))}
      </div>
    </SectionShell>
  );
}
