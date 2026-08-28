/**
 * The fourteen substantive Service Terms sections.
 *
 * Every one has the same shape — an uppercase eyebrow and a list of clause
 * summaries, some carrying a routing line to the document that actually owns
 * the topic — so they are data here rather than fourteen near-identical
 * components. Routes without an `href` are documents not yet published; they
 * render as plain text rather than links so the page never points at a 404.
 */

export interface ClauseRoute {
  label: string;
  href?: string;
}

export interface Clause {
  title: string;
  description: string;
  route?: ClauseRoute;
}

export interface TermsSection {
  id: string;
  /** Section heading, and the label used in the table of contents. */
  title: string;
  /** Short label for the table-of-contents chip. */
  tocLabel: string;
  /** Uppercase kicker inside the card. */
  eyebrow: string;
  clauses: Clause[];
}

export const termsSections: TermsSection[] = [
  {
    id: "parties-definitions",
    title: "Parties, applicability & definitions",
    tocLabel: "Parties & definitions",
    eyebrow: "Parties & applicability",
    clauses: [
      {
        title: "Who these terms apply to",
        description:
          "Defines the parties to these standard terms and the scope of Zoiko Payroll services they apply to.",
      },
      {
        title: "Definitions",
        description:
          'Defines terms used throughout this document (for example, "Services," "Customer Data," "Order") so they carry a consistent meaning across sections.',
      },
    ],
  },
  {
    id: "orders-accounts",
    title: "Orders, service scope & accounts",
    tocLabel: "Orders & accounts",
    eyebrow: "Commercial structure",
    clauses: [
      {
        title: "Orders & service scope",
        description:
          "Describes how an order defines the specific services, plan and scope purchased, and how it relates to these standard terms.",
      },
      {
        title: "Accounts, administrators & authorized users",
        description:
          "Describes account setup, administrator responsibilities and how authorized users are designated.",
      },
    ],
  },
  {
    id: "fees-payment",
    title: "Fees, invoicing, taxes & payment",
    tocLabel: "Fees & payment",
    eyebrow: "Billing",
    clauses: [
      {
        title: "Fees & invoicing",
        description:
          "Describes how fees are determined and invoiced. Exact pricing, billing cadence and payment terms for your account are set by your order, not this page.",
        route: { label: "Current published pricing: see Pricing" },
      },
      {
        title: "Taxes",
        description:
          "Describes the general approach to applicable taxes on fees. Specific tax treatment depends on your jurisdiction and order.",
      },
      {
        title: "Payment support",
        description:
          "For a specific invoice or payment question, contact Billing Support rather than relying on this page.",
        route: { label: "Route: Billing Support", href: "/contact" },
      },
    ],
  },
  {
    id: "term-renewal",
    title: "Term, renewal & cancellation",
    tocLabel: "Term & renewal",
    eyebrow: "Duration",
    clauses: [
      {
        title: "Term & renewal",
        description:
          "Describes how the service term and any renewal approach generally work. Specific term length and renewal terms for your account are set by your order.",
      },
      {
        title: "Cancellation",
        description:
          "Describes the general approach to cancellation. Specific notice requirements and effects depend on your executed agreement.",
      },
    ],
  },
  {
    id: "customer-responsibilities",
    title: "Customer responsibilities & service use boundary",
    tocLabel: "Customer responsibilities & AUP boundary",
    eyebrow: "Use of the service",
    clauses: [
      {
        title: "Customer responsibilities",
        description:
          "Describes general responsibilities customers have when using Zoiko Payroll services, including account and access management.",
      },
      {
        title: "Acceptable use boundary",
        description:
          "Service use is also governed by the Acceptable Use Policy, incorporated by reference where stated in your agreement.",
        route: {
          label: "Full rules: Acceptable Use Policy",
          href: "/legal/acceptable-use-policy",
        },
      },
    ],
  },
  {
    id: "service-changes",
    title: "Service & terms changes",
    tocLabel: "Service & terms changes",
    eyebrow: "Change management",
    clauses: [
      {
        title: "Changes to the service",
        description:
          "Describes the general approach to evolving Zoiko Payroll services over time.",
        route: {
          label: "What shipped recently: Release Notes",
          href: "/resources/release-notes",
        },
      },
      {
        title: "Changes to these terms",
        description:
          "Describes how these public standard terms may be updated, and how a new version relates to existing accounts.",
        route: { label: "See Version History below", href: "#version-history" },
      },
    ],
  },
  {
    id: "support-service-levels",
    title: "Support, maintenance & service levels",
    tocLabel: "Support & service levels",
    eyebrow: "Operational support",
    clauses: [
      {
        title: "Support & maintenance",
        description:
          "Describes the general availability of support and maintenance. Specific support entitlements and any service-level commitment are set by your order or a separate SLA document, not invented here.",
        route: {
          label: "Get help now: Help Center",
          href: "/resources/help-center",
        },
      },
    ],
  },
  {
    id: "security-confidentiality",
    title: "Security, confidentiality & data protection boundary",
    tocLabel: "Security, confidentiality & DPA boundary",
    eyebrow: "Trust boundary",
    clauses: [
      {
        title: "Security & confidentiality",
        description:
          "Describes general confidentiality obligations between the parties in connection with the services.",
        route: {
          label: "Controls & evidence: Trust and Security",
          href: "/resources/security-trust",
        },
      },
      {
        title: "Data protection & DPA boundary",
        description:
          "Data-processing obligations are governed by the Data Processing Addendum, incorporated where stated in your agreement — not restated here.",
        route: {
          label: "Full obligations: Data Processing Addendum",
          href: "/legal/dpa",
        },
      },
    ],
  },
  {
    id: "customer-data-ip",
    title: "Customer data, content & intellectual property",
    tocLabel: "Customer data & IP",
    eyebrow: "Ownership & rights",
    clauses: [
      {
        title: "Customer data & content",
        description:
          "Describes the general framework for rights in data and content customers input into or generate through the services.",
      },
      {
        title: "Zoiko intellectual property",
        description:
          "Describes Zoiko Payroll's ownership of its software, platform and related intellectual property.",
        route: {
          label: "Brand & IP notices: Legal Notices",
          href: "/legal/legal-notices",
        },
      },
    ],
  },
  {
    id: "third-party-services",
    title: "Third-party services & integrations",
    tocLabel: "Third-party services",
    eyebrow: "Integrated services",
    clauses: [
      {
        title: "Third-party services",
        description:
          "Describes the general framework governing optional third-party or integrated services used alongside Zoiko Payroll.",
      },
    ],
  },
  {
    id: "suspension-termination",
    title: "Suspension & termination",
    tocLabel: "Suspension & termination",
    eyebrow: "Account actions",
    clauses: [
      {
        title: "Suspension",
        description:
          "Describes the general circumstances in which access to the service may be suspended, and the approach to notice where applicable.",
      },
      {
        title: "Termination & effect",
        description:
          "Describes the general framework for how the agreement may end and what happens afterward. Specific notice periods and post-termination obligations are set by your executed agreement.",
      },
    ],
  },
  {
    id: "warranties-liability",
    title: "Warranties, indemnities & limitation of liability",
    tocLabel: "Warranties, indemnities & liability",
    eyebrow: "Risk allocation",
    clauses: [
      {
        title: "Warranties & disclaimers",
        description:
          "Describes the general warranty framework and disclaimers that apply to the services.",
      },
      {
        title: "Indemnities",
        description:
          "Describes the general framework for indemnification obligations between the parties.",
      },
      {
        title: "Limitation of liability",
        description:
          "Describes the general approach to limiting liability under these terms. Specific caps and exclusions are set out in the full current document and, where applicable, your executed agreement — not summarized as a figure here.",
      },
    ],
  },
  {
    id: "governing-law",
    title: "Governing law, dispute resolution & formal notices",
    tocLabel: "Governing law, disputes & notices",
    eyebrow: "Legal process",
    clauses: [
      {
        title: "Governing law & dispute resolution",
        description:
          "Describes the general approach to governing law and how disputes are intended to be resolved. Specific governing law and venue depend on the approved current document and your order.",
      },
      {
        title: "Formal notices",
        description:
          "Formal legal notices use the approved Legal route, not general support or sales channels.",
        route: {
          label: "Route: Contact — Legal",
          href: "/legal/legal-notices#formal-notice",
        },
      },
    ],
  },
  {
    id: "miscellaneous",
    title: "Miscellaneous & custom terms",
    tocLabel: "Miscellaneous & custom terms",
    eyebrow: "General provisions",
    clauses: [
      {
        title: "Miscellaneous contract clauses",
        description:
          "Standard general provisions common to the agreement structure (for example, assignment, severability and entire-agreement framing) are set out in the full current document.",
      },
      {
        title: "Custom terms & legal review",
        description:
          "Organizations with custom or negotiated terms should refer to their executed agreement. Requesting a custom term or legal review does not itself promise a particular turnaround or acceptance.",
        route: { label: "Route: Contact — Sales / Legal", href: "/contact" },
      },
    ],
  },
];
