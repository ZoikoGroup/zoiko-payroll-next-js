import React from "react";
import SectionShell from "./SectionShell";
import RuleCard, { type Rule } from "./RuleCard";

const rule: Rule = {
  label: "Automated / programmatic access",
  status: "Restricted",
  statement:
    "Automated access to Zoiko Payroll services beyond documented API use requires prior written authorization.",
  note: "Authorization route: contact your account team or Support to request approval.",
};

export default function RestrictedUseSection() {
  return (
    <SectionShell
      id="restricted-use"
      title="Restricted / permissioned use"
      intro="Some activity is not prohibited outright but requires written, technical or contractual authorization before use."
    >
      <RuleCard rule={rule} />

      <p className="mt-4 rounded-[10px] border border-slate-200 bg-slate-100 px-5 py-4 text-sm leading-5 text-sky-950">
        <span className="font-bold">Note:</span> A Support response or
        product-admin permission does not itself constitute legal policy
        authorization unless this policy says so.
      </p>
    </SectionShell>
  );
}
