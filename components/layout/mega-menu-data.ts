export type MegaLink = {
  title: string;
  description: string;
  href: string;
};

export type MegaColumn = {
  label: string;
  links: MegaLink[];
};

export type MegaFeatured = {
  eyebrow: string;
  title: string;
  description: string;
  linkLabel: string;
  href: string;
};

export type MegaMenu = {
  columns: MegaColumn[];
  featured: MegaFeatured;
  /** Which bespoke mini-visual to render inside the featured card. */
  visual: "product" | "solutions" | "global-payroll" | "resources" | "company";
  /** Most menus show the visual above the heading; Global Payroll shows it below. */
  visualPosition?: "before" | "after";
};

export const megaMenus: Record<string, MegaMenu> = {
  Product: {
    columns: [
      {
        label: "Explore product",
        links: [
          {
            title: "Product Overview",
            description: "Understand the complete platform and choose the next product path.",
            href: "/product",
          },
          {
            title: "Payroll Processing",
            description: "Prepare, calculate, validate and complete payroll cycles.",
            href: "/payroll-processing",
          },
          {
            title: "Payroll Approvals",
            description: "Make review stages and decision rights visible.",
            href: "/payroll-approvals",
          },
          {
            title: "Deductions and Adjustments",
            description: "Control recurring, one-time and corrective changes.",
            href: "/deductions",
          },
          {
            title: "Employee Payroll Records",
            description: "Provide secure access to applicable pay information.",
            href: "/employee-payroll-records",
          },
        ],
      },
      {
        label: "Insight and control",
        links: [
          {
            title: "Reporting and Analytics",
            description: "Review payroll totals, trends, exports and history.",
            href: "/reporting",
          },
          {
            title: "Integrations",
            description: "Connect approved HR, finance, time and payment systems.",
            href: "/integrations",
          },
          {
            title: "Security and Trust",
            description: "Review access, audit, privacy and assurance controls.",
            href: "/security",
          },
          {
            title: "Product Tour",
            description: "See representative Zoiko Payroll workflows in action.",
            href: "/product/tour",
          },
        ],
      },
      {
        label: "Start here",
        links: [
          {
            title: "How Zoiko Payroll Works",
            description: "Follow the controlled payroll lifecycle from input to report.",
            href: "/how-it-works",
          },
          {
            title: "Implementation",
            description: "Understand discovery, configuration, testing and launch.",
            href: "/implementation",
          },
          {
            title: "Zoiko One Integration",
            description: "See the connected-suite path without weakening standalone value.",
            href: "/zoiko-one-integration",
          },
        ],
      },
    ],
    featured: {
      eyebrow: "Featured",
      title: "See Zoiko Payroll in action",
      description:
        "A short, synthetic-data product tour focused on control, approvals, records and reporting.",
      linkLabel: "Start the product tour",
      href: "/product/tour",
    },
    visual: "product",
  },

  Solutions: {
    columns: [
      {
        label: "By operating model",
        links: [
          {
            title: "Single-Jurisdiction Payroll",
            description: "Structured payroll control for one operating market.",
            href: "/single-jurisdiction",
          },
          {
            title: "Multi-Jurisdiction Payroll",
            description: "Centralize oversight while preserving local requirements.",
            href: "/multi-jurisdiction",
          },
          {
            title: "Centralized Payroll Operations",
            description: "Coordinate teams, entities and payroll status.",
            href: "/centralized-operations",
          },
          {
            title: "Payroll Modernization",
            description: "Replace fragmented or legacy workflows through controlled change.",
            href: "/payroll-modernization",
          },
          {
            title: "Payroll Migration",
            description: "Plan data, testing, validation and cutover.",
            href: "/payroll-migration",
          },
        ],
      },
      {
        label: "By organization",
        links: [
          {
            title: "Growing Businesses",
            description: "Scale payroll control as headcount and complexity increase.",
            href: "/growing-businesses",
          },
          {
            title: "Mid-Market Organizations",
            description: "Bring structure to expanding teams and entities.",
            href: "/mid-market-organizations",
          },
          {
            title: "Enterprise Organizations",
            description: "Evaluate governance, scale, integrations and assurance.",
            href: "/solutions/enterprise",
          },
          {
            title: "International Groups",
            description: "Coordinate payroll across markets and legal entities.",
            href: "/international-groups",
          },
        ],
      },
      {
        label: "By role",
        links: [
          {
            title: "Payroll Teams",
            description: "Improve preparation, validation, approvals and completion.",
            href: "/payroll-teams",
          },
          {
            title: "Finance Teams",
            description: "Strengthen totals, reconciliation and financial oversight.",
            href: "/finance-teams",
          },
          {
            title: "HR Teams",
            description: "Keep authorized employee changes and payroll records aligned.",
            href: "/hr-teams",
          },
          {
            title: "Business Leaders",
            description: "See status, exceptions and risk without operational noise.",
            href: "/solutions/business-leaders",
          },
        ],
      },
    ],
    featured: {
      eyebrow: "Guided route",
      title: "Find the right payroll path",
      description:
        "A four-question solution finder using jurisdictions, entities, workforce range and primary objective.",
      linkLabel: "Find your solution",
      href: "/solutions/finder",
    },
    visual: "solutions",
  },

  "Global Payroll": {
    columns: [
      {
        label: "Coverage",
        links: [
          {
            title: "Global Payroll Overview",
            description: "Understand the multi-jurisdiction operating model.",
            href: "/global-payroll",
          },
          {
            title: "Jurisdiction Coverage",
            description: "Review availability states and service boundaries.",
            href: "/global-payroll/jurisdiction-coverage",
          },
          {
            title: "Country and Territory Directory",
            description: "Search current status and documented scope by market.",
            href: "/country-territory-directory",
          },
        ],
      },
      {
        label: "Operations",
        links: [
          {
            title: "Local Payroll Requirements",
            description: "Preserve local requirements within a consistent control model.",
            href: "/global-payroll/local-requirements",
          },
          {
            title: "Compliance Workflows",
            description: "Manage review, documentation and traceability.",
            href: "/compliance-workflows",
          },
          {
            title: "Multi-Entity Payroll",
            description: "Coordinate entities and authorized teams.",
            href: "/global-payroll/multi-entity",
          },
          {
            title: "Global Reporting",
            description: "Review consolidated and jurisdiction-level outcomes.",
            href: "/global-reporting",
          },
        ],
      },
      {
        label: "Learn",
        links: [
          {
            title: "Global Payroll Resources",
            description: "Guides and checklists for cross-border payroll teams.",
            href: "/global-payroll-resources",
          },
          {
            title: "Jurisdiction Guides",
            description: "Market-specific education and current availability context.",
            href: "/global-payroll/country-guides",
          },
          {
            title: "Implementation and Migration",
            description: "Understand the path to controlled multi-market launch.",
            href: "/global-payroll/implementation",
          },
        ],
      },
    ],
    featured: {
      eyebrow: "Availability",
      title: "Check jurisdiction availability",
      description:
        "Search a country, territory, state or province and receive an honest current status before sharing personal data.",
      linkLabel: "Check availability",
      href: "/country-territory-directory",
    },
    visual: "global-payroll",
    visualPosition: "after",
  },

  Resources: {
    columns: [
      {
        label: "Learn",
        links: [
          {
            title: "Resource Center",
            description: "Search and browse all payroll knowledge.",
            href: "/resources",
          },
          {
            title: "Payroll Guides",
            description: "Build stronger payroll operations.",
            href: "/resources/payroll-guides",
          },
          {
            title: "Jurisdiction Guides",
            description: "Access market-specific guidance.",
            href: "/global-payroll/country-guides",
          },
          {
            title: "Payroll Glossary",
            description: "Find direct definitions of payroll terms.",
            href: "/payroll-glossary",
          },
          {
            title: "Frequently Asked Questions",
            description: "Answer product, commercial and implementation questions.",
            href: "/resources/faq",
          },
        ],
      },
      {
        label: "Product and support",
        links: [
          {
            title: "Product Documentation",
            description: "Configure and use Zoiko Payroll.",
            href: "/resources/documentation",
          },
          {
            title: "Help Center",
            description: "Resolve customer questions and access support.",
            href: "/resources/help-center",
          },
          {
            title: "Release Notes",
            description: "Review changes and required actions.",
            href: "/resources/release-notes",
          },
          {
            title: "System Status",
            description: "See current and historical service status.",
            href: "/resources/system-status",
          },
          {
            title: "Product Videos",
            description: "Watch task-based product demonstrations.",
            href: "/resources/product-videos",
          },
        ],
      },
      {
        label: "Browse by topic",
        links: [
          {
            title: "Global Payroll",
            description: "Coverage, operating models and local requirements.",
            href: "/global-payroll",
          },
          {
            title: "Implementation",
            description: "Migration, testing and launch guidance.",
            href: "/implementation",
          },
          {
            title: "Security and Trust",
            description: "Controls, evidence and procurement resources.",
            href: "/security",
          },
          {
            title: "Reporting",
            description: "Payroll insights, exports and reconciliation.",
            href: "/reporting",
          },
        ],
      },
    ],
    featured: {
      eyebrow: "Featured resource",
      title: "A practical guide to managing payroll across multiple jurisdictions",
      description: "",
      linkLabel: "Read the guide",
      href: "/resources/global-payroll-guide",
    },
    visual: "resources",
  },

  Company: {
    columns: [
      {
        label: "Company",
        links: [
          {
            title: "About Zoiko Payroll",
            description: "Purpose, mission, product identity and operating model.",
            href: "/about-us",
          },
          {
            title: "About Zoiko Group",
            description: "Ownership and wider technology ecosystem.",
            href: "/company/zoiko-group",
          },
          {
            title: "Leadership",
            description: "Approved accountable leaders and roles.",
            href: "/company/leadership",
          },
        ],
      },
      {
        label: "Trust and ecosystem",
        links: [
          {
            title: "Trust and Security",
            description: "Controls, evidence and procurement assurance.",
            href: "/company/trust-center",
          },
          {
            title: "Partners",
            description: "Technology, service and ecosystem pathways.",
            href: "/company/partners",
          },
          {
            title: "Zoiko One",
            description: "Connected-suite relationship and expansion route.",
            href: "/company/zoiko-one",
          },
        ],
      },
      {
        label: "Connect",
        links: [
          {
            title: "Careers",
            description: "Culture and approved open opportunities.",
            href: "/company/careers",
          },
          {
            title: "Newsroom",
            description: "Approved company and product announcements.",
            href: "/company/newsroom",
          },
          {
            title: "Contact",
            description: "Sales, support, privacy, press and general routes.",
            href: "/company/contact",
          },
        ],
      },
    ],
    featured: {
      eyebrow: "Our purpose",
      title: "Building controlled payroll operations for global business",
      description:
        "A concise company story that establishes ownership, accountability and why Zoiko Payroll exists.",
      linkLabel: "Learn about Zoiko Payroll",
      href: "/about-us",
    },
    visual: "company",
  },
};
