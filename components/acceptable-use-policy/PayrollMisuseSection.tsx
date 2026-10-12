import React from "react";
import SectionShell from "./SectionShell";
import RuleCard, { type Rule } from "./RuleCard";

const rule: Rule = {
  label: "Unauthorized payroll or payment action",
  status: "Prohibited",
  statement:
    "Initiating, altering or approving a payroll or payment action outside your authorized role and permissions is not permitted.",
  examples: [
    "Approving a payroll run or payment change outside your assigned authorization.",
    "Altering employee or workforce records outside your permitted scope.",
  ],
  footnote:
    "Examples are illustrative and non-exhaustive; never a real customer scenario.",
};

export default function PayrollMisuseSection() {
  return (
    <SectionShell id="payroll-misuse" title="Payroll-sensitive misuse">
      <div className="rounded-[10px] border border-orange-200 bg-orange-100 px-5 py-4">
        <p className="text-xs font-bold uppercase leading-4 tracking-wide text-yellow-900">
          Conditional category
        </p>
        <p className="mt-2.5 text-sm leading-5 text-yellow-900">
          This clearly labeled group covers approved rules involving payroll
          runs, payment instructions, employee or workforce records, and
          statutory or tax workflows — high-consequence domains. The presence of
          payroll, tax or payment features in the product does not itself create
          a prohibited-use rule beyond what is stated here.
        </p>
      </div>

      <div className="mt-4">
        <RuleCard rule={rule} />
      </div>
    </SectionShell>
  );
}
