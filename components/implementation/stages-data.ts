export type StatusTone = "ok" | "warn";

export type StageMock =
  | {
      kind: "table";
      title: string;
      columns: string[];
      rows: { cells: string[]; status: string; tone: StatusTone }[];
    }
  | { kind: "toggles"; title: string; rows: { label: string; on: boolean }[] }
  | { kind: "chart"; title: string; bars: { label: string; height: number; muted?: boolean }[] }
  | {
      kind: "comparison";
      title: string;
      columns: [string, string];
      rows: { label: string; left: string; right: string }[];
      note: string;
    }
  | {
      kind: "gantt";
      title: string;
      rows: { label: string; start: number; width: number; tone: "blue" | "green" }[];
      note: string;
    }
  | { kind: "metrics"; title: string; rows: { label: string; value: string; tone: StatusTone }[] };

export type ImplementationStage = {
  number: string;
  title: string;
  owner: string;
  duration: string;
  description: string;
  checklist: string[];
  exit: { criteria: string; owner: string; duration: string };
  mock: StageMock;
};

export const implementationStages: ImplementationStage[] = [
  {
    number: "01",
    title: "Discover",
    owner: "Implementation Lead + Payroll Lead",
    duration: "1–2 weeks",
    description:
      "Scope entities, jurisdictions, payroll calendars, users, controls and integrations before a single rule gets built — so Configure starts from an agreed picture, not assumptions.",
    checklist: [
      "Map legal entities, worker populations and pay frequencies across every operating jurisdiction",
      "Inventory current payroll calendars, cutoffs and processing windows",
      "Identify required approval roles and controls to carry forward",
      "Catalog systems that must connect — HRIS, time tracking, benefits, general ledger",
    ],
    exit: {
      criteria:
        "Scoping document signed off, jurisdiction list confirmed, integration inventory approved by both sides.",
      owner: "Implementation Lead",
      duration: "1–2 weeks",
    },
    mock: {
      kind: "table",
      title: "Scoping directory",
      columns: ["Entity", "Jurisdiction", "Status"],
      rows: [
        { cells: ["Acme Group Ltd", "US, GB"], status: "Confirmed", tone: "ok" },
        { cells: ["Acme DE GmbH", "DE"], status: "Confirmed", tone: "ok" },
        { cells: ["Acme APAC Pte", "SG"], status: "In review", tone: "warn" },
        { cells: ["Acme Brasil Ltda", "BR"], status: "Confirmed", tone: "ok" },
      ],
    },
  },
  {
    number: "02",
    title: "Configure",
    owner: "Zoiko Configuration Team",
    duration: "2–4 weeks",
    description:
      "Set approved payroll rules, workflows, roles, access and jurisdiction settings — built against the scope agreed in Discover, not a generic template.",
    checklist: [
      "Build calculation rules for earnings, deductions and statutory requirements per jurisdiction",
      "Configure approval chains and role-based access for payroll, finance and HR users",
      "Set up payroll calendars and processing windows",
      "Apply jurisdiction-specific settings for filing, currency and reporting",
    ],
    exit: {
      criteria:
        "Configuration reviewed line-by-line against the scoping document; access roles provisioned and confirmed by named owners.",
      owner: "Configuration Team",
      duration: "2–4 weeks",
    },
    mock: {
      kind: "toggles",
      title: "Workflow configuration",
      rows: [
        { label: "Multi-level approval (PR → FN)", on: true },
        { label: "Statutory filing — US, GB", on: true },
        { label: "Currency: multi-currency payout", on: true },
        { label: "Retroactive adjustment window", on: false },
      ],
    },
  },
  {
    number: "03",
    title: "Prepare data",
    owner: "Customer Data Owner + Zoiko Data Team",
    duration: "1–3 weeks",
    description:
      "Map, validate, cleanse and securely transfer required information — the stage where most legacy-system surprises get caught before they reach a payslip.",
    checklist: [
      "Map source fields from HRIS and legacy payroll to Zoiko Payroll's data model",
      "Cleanse employee, earnings and deduction records for completeness and accuracy",
      "Transfer data through encrypted, audited channels",
      "Reconcile record counts and totals against source systems",
    ],
    exit: {
      criteria:
        "100% of required fields mapped; reconciliation variance against source systems under agreed threshold.",
      owner: "Data Owner",
      duration: "1–3 weeks",
    },
    mock: {
      kind: "table",
      title: "Field mapping",
      columns: ["Source field", "Zoiko field", "Status"],
      rows: [
        { cells: ["emp_base_pay", "Base earnings"], status: "Mapped", tone: "ok" },
        { cells: ["ded_401k_pct", "Retirement deduction"], status: "Mapped", tone: "ok" },
        { cells: ["tax_juris_code", "Jurisdiction tax code"], status: "Needs review", tone: "warn" },
        { cells: ["absence_bal", "Leave balance"], status: "Mapped", tone: "ok" },
      ],
    },
  },
  {
    number: "04",
    title: "Validate",
    owner: "Zoiko QA + Payroll Lead",
    duration: "1–2 weeks",
    description:
      "Test calculations, records, workflows, reports, access and integrations in isolation — before results ever get compared against your live system.",
    checklist: [
      "Run test payrolls against configured rules and confirm calculation accuracy",
      "Verify approval workflows route to the correct roles",
      "Confirm reports, exports and integration feeds return expected results",
      "Log and resolve exceptions before parallel testing begins",
    ],
    exit: {
      criteria:
        "All test cases pass; all open items carry a documented resolution plan; zero unresolved critical exceptions.",
      owner: "Zoiko QA",
      duration: "1–2 weeks",
    },
    mock: {
      kind: "chart",
      title: "Test run summary",
      bars: [
        { label: "Calcs", height: 88 },
        { label: "Workflows", height: 80 },
        { label: "Open", height: 22, muted: true },
        { label: "Reports", height: 72 },
        { label: "Access", height: 64 },
      ],
    },
  },
  {
    number: "05",
    title: "Parallel test",
    owner: "Finance Sponsor + Implementation Lead",
    duration: "1–2 payroll cycles",
    description:
      'Compare approved outputs with your existing payroll process, cycle by cycle, where appropriate — the stage that turns "we tested it" into a number your finance team can sign.',
    checklist: [
      "Run Zoiko Payroll alongside the existing system for one or more live cycles",
      "Compare gross-to-net outputs, deductions and statutory calculations line by line",
      "Document and resolve variances above the agreed tolerance",
      "Confirm reporting and filings match expected output before sign-off",
    ],
    exit: {
      criteria:
        "Outputs match within tolerance — commonly 99.5% or better — across every parallel cycle run.",
      owner: "Finance Sponsor",
      duration: "1–2 cycles",
    },
    mock: {
      kind: "comparison",
      title: "Parallel run comparison — cycle 2",
      columns: ["Legacy system", "Zoiko Payroll"],
      rows: [
        { label: "Gross pay", left: "$1,842,904", right: "$1,842,904" },
        { label: "Deductions", left: "$412,110", right: "$412,110" },
        { label: "Net pay", left: "$1,430,794", right: "$1,430,898" },
      ],
      note: "Variance: 0.007% — within 99.5% tolerance",
    },
  },
  {
    number: "06",
    title: "Launch",
    owner: "Implementation Lead",
    duration: "1 payroll cycle",
    description:
      "Complete controlled cutover, authorization, user activation and production monitoring — cutover happens once, on a reviewed go/no-go, not by default.",
    checklist: [
      "Run a go/no-go review against exit criteria from every prior stage",
      "Execute final cutover from the legacy system to production Zoiko Payroll",
      "Activate authorized users and confirm access before the first live cycle",
      "Monitor the first live cycles with elevated support coverage",
    ],
    exit: {
      criteria: "Go/no-go formally approved; first production payroll cycle completed and signed off.",
      owner: "Implementation Lead",
      duration: "1 cycle",
    },
    mock: {
      kind: "gantt",
      title: "Cutover schedule",
      rows: [
        { label: "Go/no-go", start: 8, width: 22, tone: "blue" },
        { label: "Data freeze", start: 18, width: 18, tone: "blue" },
        { label: "Cutover", start: 34, width: 26, tone: "green" },
        { label: "First run", start: 56, width: 30, tone: "green" },
      ],
      note: "Go-live: first production payroll approved",
    },
  },
  {
    number: "07",
    title: "Optimize",
    owner: "Zoiko Customer Success",
    duration: "Ongoing from day 1",
    description:
      "Review outcomes, exceptions, support demand and workflow improvements — implementation doesn't end at go-live, it hands off to a support relationship with the same evidence standard.",
    checklist: [
      "Review exception volume, cycle time and support ticket trends",
      "Identify workflow or configuration adjustments worth making",
      "Transition from the implementation team to ongoing support",
      "Schedule a structured review at 30, 60 and 90 days post-launch",
    ],
    exit: {
      criteria: "Program formally handed to ongoing support; improvement backlog documented and owned.",
      owner: "Customer Success",
      duration: "Ongoing",
    },
    mock: {
      kind: "metrics",
      title: "30-day health check",
      rows: [
        { label: "Payroll exceptions per cycle", value: "↓ 62%", tone: "ok" },
        { label: "Avg. approval turnaround", value: "↓ 1.8 days", tone: "ok" },
        { label: "Support tickets (post-launch)", value: "↑ expected, tapering", tone: "warn" },
      ],
    },
  },
];
