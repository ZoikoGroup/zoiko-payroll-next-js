import React from "react";
import SectionShell from "./SectionShell";
import RuleCard, { type Rule } from "./RuleCard";

const rule: Rule = {
  label: "API use outside documented terms",
  status: "Conditional",
  statement:
    "API and integration use is expected to follow documented usage terms. Technical rate limits, authentication mechanics and quotas are defined in Product Documentation and API docs, not this policy.",
  note: "A third-party integration relationship does not itself create additional acceptable-use obligations beyond what is stated here.",
};

export default function AutomationSection() {
  return (
    <SectionShell id="automation" title="Automation, API & integrations">
      <RuleCard rule={rule} />
    </SectionShell>
  );
}
