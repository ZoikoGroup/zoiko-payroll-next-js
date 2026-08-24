export type TermScope = "General" | "Jurisdiction-sensitive" | "Product" | "Global payroll";

export type Term = {
  name: string;
  definition: string;
  scope: TermScope;
};

/** Canonical glossary entries, alphabetical — the A–Z index and search both read from here. */
export const terms: Term[] = [
  {
    name: "Adjustment",
    definition:
      "A controlled payroll change that alters a value, input or outcome for an effective context.",
    scope: "General",
  },
  {
    name: "Approval",
    definition: "A recorded authorization decision for a defined payroll version or action.",
    scope: "General",
  },
  {
    name: "Audit trail",
    definition:
      "A recorded history of material changes, decisions and approvals for a payroll record.",
    scope: "General",
  },
  {
    name: "Bonus",
    definition:
      "An additional earning attributed to a pay period under the applicable earnings setup.",
    scope: "General",
  },
  {
    name: "Close",
    definition:
      "The point at which a payroll cycle is completed and its records are retained as evidence.",
    scope: "General",
  },
  {
    name: "Cutoff",
    definition:
      "An operational deadline after which new inputs, changes or approvals may require an exception.",
    scope: "Product",
  },
  {
    name: "Deduction",
    definition:
      "An amount or configured rule that reduces a payroll amount under the applicable setup.",
    scope: "Jurisdiction-sensitive",
  },
  {
    name: "Earnings",
    definition: "Amounts attributed to an employee for a pay period before reductions are applied.",
    scope: "General",
  },
  {
    name: "Exception",
    definition:
      "A documented deviation from the standard payroll path, recorded with its authorization.",
    scope: "General",
  },
  {
    name: "Export",
    definition:
      "A generated file or dataset produced from payroll records for downstream reconciliation.",
    scope: "Product",
  },
  {
    name: "Gross pay",
    definition: "Payroll earnings amount before applicable deductions and other reductions.",
    scope: "Jurisdiction-sensitive",
  },
  {
    name: "Hourly earnings",
    definition: "Earnings derived from recorded working time and an applicable rate.",
    scope: "General",
  },
  {
    name: "Identifier",
    definition:
      "A stable reference used to match an employee, entity or record across connected systems.",
    scope: "Product",
  },
  {
    name: "Import",
    definition: "A controlled load of external payroll inputs into a defined payroll context.",
    scope: "Product",
  },
  {
    name: "Jurisdiction",
    definition:
      "The market whose rules and requirements apply to a payroll population or legal entity.",
    scope: "Global payroll",
  },
  {
    name: "Legal entity",
    definition:
      "The registered organizational unit under which payroll is operated for a jurisdiction.",
    scope: "Global payroll",
  },
  {
    name: "Mapping",
    definition:
      "A documented relationship between source-system values and payroll fields or codes.",
    scope: "Product",
  },
  {
    name: "Net pay",
    definition: "The payroll amount remaining after applicable deductions and reductions.",
    scope: "Jurisdiction-sensitive",
  },
  {
    name: "Overtime concept",
    definition:
      "Additional earning treatment for working time beyond a defined threshold, where applicable.",
    scope: "Jurisdiction-sensitive",
  },
  {
    name: "Pay date",
    definition: "The date on which payment is issued, distinct from the period it relates to.",
    scope: "General",
  },
  {
    name: "Pay period",
    definition: "The span of time for which earnings and payroll inputs are attributed.",
    scope: "General",
  },
  {
    name: "Payroll cutoff",
    definition:
      "An operational deadline after which new inputs, changes or approvals may require an exception.",
    scope: "Product",
  },
  {
    name: "Payroll frequency",
    definition: "How often a payroll cycle repeats for a defined population.",
    scope: "General",
  },
  {
    name: "Payroll group",
    definition:
      "A defined population processed together under shared calendar and control settings.",
    scope: "Global payroll",
  },
  {
    name: "Payroll record",
    definition: "The retained record of inputs, calculations, decisions and outcomes for a cycle.",
    scope: "General",
  },
  {
    name: "Payroll register",
    definition: "A structured summary of calculated payroll results for a defined run.",
    scope: "Product",
  },
  {
    name: "Processing window",
    definition:
      "The operational span during which a payroll run is prepared, reviewed and approved.",
    scope: "Product",
  },
  {
    name: "Reconciliation",
    definition:
      "Comparing payroll outputs against expected values or source records to explain differences.",
    scope: "General",
  },
  {
    name: "Retroactive adjustment",
    definition: "A change applied to an earlier effective context and reflected in a later cycle.",
    scope: "General",
  },
  {
    name: "Rounding",
    definition: "The documented treatment applied when a calculated value needs a fixed precision.",
    scope: "General",
  },
  {
    name: "Salary",
    definition: "A fixed earning attributed across pay periods under the applicable setup.",
    scope: "General",
  },
  {
    name: "Segregation of duties",
    definition:
      "Separating preparation, review and approval so no single person completes payroll alone.",
    scope: "General",
  },
  {
    name: "Source system",
    definition: "The system of record that supplies payroll inputs such as time, people or pay data.",
    scope: "Product",
  },
  {
    name: "Validation",
    definition: "A defined check applied to payroll inputs or results before review and approval.",
    scope: "General",
  },
  {
    name: "Variance",
    definition:
      "An explained difference between two payroll results, periods or expected values.",
    scope: "General",
  },
  {
    name: "Working time",
    definition: "Recorded time used as a payroll input under the applicable earnings rules.",
    scope: "Jurisdiction-sensitive",
  },
];

export const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
