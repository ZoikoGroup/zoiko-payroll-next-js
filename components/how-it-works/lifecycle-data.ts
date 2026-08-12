import type { Tone } from "./StatusChip";

export type LifecycleStage = {
  /** anchor id, also used by the stage selector */
  id: string;
  number: string;
  label: string;
  description: string;
  meta: { label: string; value: string }[];
  states: { label: string; tone: Tone }[];
  note: string;
  mock: {
    title: string;
    rows: { title: string; detail: string; badge: string; tone: Tone }[];
    footer: { left: string; right: string };
  };
};

export const lifecycleStages: LifecycleStage[] = [
  {
    id: "prepare",
    number: "01",
    label: "Prepare",
    description:
      "Assemble the payroll-period data and approved changes a run needs before anything is calculated — employee records, earnings, deductions, adjustments, absence context, entity and jurisdiction.",
    meta: [
      { label: "Responsible role", value: "Payroll Operator" },
      { label: "Typical inputs", value: "Employee & period data" },
    ],
    states: [
      { label: "Ready", tone: "ok" },
      { label: "Needs attention", tone: "warn" },
      { label: "Missing", tone: "muted" },
    ],
    note: "Exit condition: required inputs are present, or unresolved items remain explicitly visible. Zoiko Payroll never implies hidden automatic completeness.",
    mock: {
      title: "Readiness workspace — PR-2026-08",
      rows: [
        { title: "Employee records", detail: "248 of 248 loaded", badge: "Ready", tone: "ok" },
        { title: "Earnings & deductions", detail: "DE-01 entity", badge: "Ready", tone: "ok" },
        {
          title: "Absence & time context",
          detail: "2 pending submissions",
          badge: "Needs attention",
          tone: "warn",
        },
        { title: "Approved changes", detail: "Effective 01 Aug 2026", badge: "Ready", tone: "ok" },
      ],
      footer: { left: "Period: Aug 2026 · EMEA", right: "4 of 5 categories ready" },
    },
  },
  {
    id: "calculate",
    number: "02",
    label: "Calculate",
    description:
      "Produce the payroll result under the applicable, effective-dated configuration and data version for this run. Calculation alone does not mean approval or completion.",
    meta: [
      { label: "Responsible role", value: "Payroll Operator" },
      { label: "Version", value: "Run v3 · Aug 2026" },
    ],
    states: [
      { label: "Completed", tone: "ok" },
      { label: "In progress", tone: "muted" },
      { label: "Error", tone: "error" },
    ],
    note: "Exit condition: calculation completes for the current run/version, or produces visible, attributable errors.",
    mock: {
      title: "Calculation status — Run v3",
      rows: [
        { title: "Gross-to-net calculation", detail: "248 employees", badge: "Completed", tone: "ok" },
        {
          title: "Statutory deductions",
          detail: "DE rules, effective 2026-01",
          badge: "Completed",
          tone: "ok",
        },
        { title: "One-time adjustments", detail: "6 records", badge: "Completed", tone: "ok" },
      ],
      footer: { left: "Config version: DE-2026-01", right: "Run duration: 41s" },
    },
  },
  {
    id: "validate",
    number: "03",
    label: "Validate",
    description:
      "Check calculated payroll and supporting data for configured issues, inconsistencies or missing conditions. Validation is not Review, and it is not Approval.",
    meta: [
      { label: "Responsible role", value: "Payroll Operator" },
      { label: "Owner", value: "Priya S. — DE-01" },
    ],
    states: [
      { label: "Blocked", tone: "warn" },
      { label: "In progress", tone: "muted" },
      { label: "Ready for review", tone: "ok" },
    ],
    note: 'Key state: "Ready for review" appears only once blocking issues are resolved or explicitly remain blocked and visible.',
    mock: {
      title: "Validation issues — DE-01",
      rows: [
        {
          title: "Negative net pay, 2 employees",
          detail: "Category: calculation",
          badge: "Blocked",
          tone: "error",
        },
        {
          title: "Missing tax ID, 1 employee",
          detail: "Category: data completeness",
          badge: "Needs attention",
          tone: "warn",
        },
        {
          title: "Duplicate bank detail change",
          detail: "Category: data integrity",
          badge: "Needs attention",
          tone: "warn",
        },
      ],
      footer: { left: "3 open issues", right: "Next action: resolve or reassign" },
    },
  },
  {
    id: "review",
    number: "04",
    label: "Review",
    description:
      "Authorized reviewers inspect the defined payroll version, exceptions and supporting context. Review is inspection and context resolution — it is not final authorization.",
    meta: [
      { label: "Responsible role", value: "Reviewer" },
      { label: "Scope", value: "DE-01, Run v3" },
    ],
    states: [
      { label: "Pending approval", tone: "muted" },
      { label: "Change requested", tone: "warn" },
    ],
    note: "Actions available: accept for approval, request change, or resolve a review issue where supported.",
    mock: {
      title: "Review workspace — Run v3",
      rows: [
        { title: "Validation summary", detail: "3 issues resolved, 0 open", badge: "Clear", tone: "ok" },
        {
          title: "Exceptions in scope",
          detail: "1 negative-net correction",
          badge: "Review",
          tone: "warn",
        },
        { title: "Change history", detail: "2 edits since Prepare", badge: "Logged", tone: "muted" },
      ],
      footer: { left: "Reviewer: A. Meyer", right: "Accept for approval →" },
    },
  },
  {
    id: "approve",
    number: "05",
    label: "Approve",
    description:
      "Approval is a consequential, attributable, version-bound human decision. Automation may surface, calculate, validate, route or remind — it never approves payroll.",
    meta: [
      { label: "Responsible role", value: "Approver" },
      { label: "Version bound to", value: "Run v3, DE-01" },
    ],
    states: [
      { label: "Approved", tone: "ok" },
      { label: "Rejected / returned", tone: "error" },
      { label: "Request change", tone: "warn" },
    ],
    note: "Separation of duties: the approver cannot be the same identity that prepared or reviewed this version.",
    mock: {
      title: "Approval detail — Run v3",
      rows: [
        { title: "Approver", detail: "R. Novak · Finance Controller", badge: "Verified", tone: "brand" },
        {
          title: "Preconditions",
          detail: "Review accepted, 0 open issues",
          badge: "Met",
          tone: "muted",
        },
        {
          title: "Decision",
          detail: "Bound to Run v3 · 09 Aug 2026, 14:02 UTC",
          badge: "Approved",
          tone: "ok",
        },
      ],
      footer: { left: "Evidence recorded", right: "Cannot be reused on later versions" },
    },
  },
  {
    id: "complete",
    number: "06",
    label: "Complete",
    description:
      "Completion means the approved version is finalized inside Zoiko Payroll. It does not automatically mean money movement or statutory filing unless service scope is verified for your account.",
    meta: [
      { label: "Responsible role", value: "Payroll Administrator" },
      { label: "Downstream status", value: "Integration: pending" },
    ],
    states: [
      { label: "Completed", tone: "ok" },
      { label: "Governed reopen", tone: "muted" },
    ],
    note: "Late corrections use a governed, versioned reopen path that preserves the prior state — nothing is silently overwritten.",
    mock: {
      title: "Completed outcome — Run v3",
      rows: [
        {
          title: "Approved version finalized",
          detail: "DE-01 · 248 employees",
          badge: "Completed",
          tone: "ok",
        },
        { title: "Employee documents", detail: "Payslips generated", badge: "Available", tone: "ok" },
        {
          title: "Payment interface",
          detail: "Bank file export",
          badge: "Requires setup",
          tone: "warn",
        },
      ],
      footer: { left: "Completed 09 Aug 2026", right: "Reports →" },
    },
  },
];
