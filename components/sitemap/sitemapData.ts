/**
 * Single source of truth for the Sitemap page.
 *
 * Both the category cards and the A–Z index are built from this list, so the
 * two views can never drift apart. Entries without an `href` are pages that
 * are planned but not yet published — they render as muted text rather than
 * links, so the index never points at a 404.
 */

export interface SitemapLink {
  /** Label as shown inside the category card. */
  label: string;
  /** Route, omitted while the page is not yet published. */
  href?: string;
  /** Name used in the A–Z index, when it differs from the card label. */
  azLabel?: string;
  /** Highlighted in the card, matching the design. */
  featured?: boolean;
}

export interface SitemapCategory {
  id: string;
  title: string;
  /** Disambiguates duplicate names in the A–Z index, e.g. "HR teams (Solution)". */
  qualifier: string;
  links: SitemapLink[];
}

export const sitemapCategories: SitemapCategory[] = [
  {
    id: "product",
    title: "Product",
    qualifier: "Product",
    links: [
      { label: "Product overview" },
      { label: "How Zoiko Payroll works", href: "/product/how-it-works" },
      { label: "Payroll workspace" },
      {
        label: "Employee payroll records",
        href: "/product/employee-payroll-records",
      },
      { label: "Reporting and analytics", href: "/product/reporting" },
      { label: "Product tour" },
    ],
  },
  {
    id: "payroll-operations",
    title: "Payroll Operations",
    qualifier: "Payroll ops",
    links: [
      { label: "Payroll processing", href: "/product/payroll-processing" },
      { label: "Calculations" },
      { label: "Approvals", href: "/product/payroll-approvals" },
      { label: "Deductions and adjustments", href: "/product/deductions" },
      { label: "Payments orchestration" },
      { label: "Payroll close and audit" },
      { label: "Records and reports" },
    ],
  },
  {
    id: "solutions",
    title: "Solutions",
    qualifier: "Solution",
    links: [
      { label: "Solutions overview" },
      {
        label: "Single-jurisdiction payroll",
        href: "/solutions/single-jurisdiction",
      },
      {
        label: "Multi-jurisdiction payroll",
        href: "/solutions/multi-jurisdiction",
      },
      {
        label: "Mid-market organizations",
        href: "/solutions/mid-market-organizations",
      },
      {
        label: "Enterprise organizations",
        href: "/solutions/enterprise-organizations",
      },
      { label: "HR teams", href: "/solutions/hr-teams", featured: true },
      { label: "Finance teams", href: "/solutions/finance-teams" },
      { label: "Payroll teams", href: "/solutions/payroll-teams" },
      {
        label: "Multi-entity organizations",
        href: "/solutions/international-groups",
      },
      { label: "Contractor-heavy workforces" },
    ],
  },
  {
    id: "global-payroll",
    title: "Global Payroll",
    qualifier: "Global payroll",
    links: [
      { label: "Global payroll overview", href: "/global-payroll" },
      {
        label: "Jurisdiction directory",
        href: "/global-payroll/country-territory-directory",
      },
      {
        label: "Jurisdiction guides",
        href: "/global-payroll/jurisdiction-guides",
        featured: true,
      },
      {
        label: "Local payroll requirements",
        href: "/global-payroll/payroll-requirements",
      },
      { label: "Partner-supported payroll" },
      {
        label: "Multi-entity payroll",
        href: "/global-payroll/multi-entity-payroll",
      },
      {
        label: "Global implementation",
        href: "/global-payroll/implementation-migration",
      },
      { label: "Global reporting", href: "/global-payroll/reporting" },
    ],
  },
  {
    id: "pricing-procurement",
    title: "Pricing & Procurement",
    qualifier: "Pricing",
    links: [
      { label: "Pricing" },
      { label: "Plans and service models" },
      { label: "Included and optional services" },
      { label: "Implementation pricing" },
      { label: "Multi-jurisdiction pricing" },
      { label: "Procurement resources" },
      { label: "Security review" },
      { label: "Pricing FAQs" },
    ],
  },
  {
    id: "integrations-apis",
    title: "Integrations & APIs",
    qualifier: "Integrations",
    links: [
      { label: "Integrations overview", href: "/product/integrations" },
      { label: "HRIS and HCM systems", azLabel: "HRIS and HCM integrations" },
      { label: "Finance and ERP systems" },
      { label: "Time and attendance" },
      { label: "Payment systems" },
      { label: "Identity and access" },
      { label: "API documentation", href: "/resources/documentation" },
      { label: "Webhooks" },
      { label: "Integration support" },
    ],
  },
  {
    id: "implementation-services",
    title: "Implementation & Services",
    qualifier: "Implementation",
    links: [
      {
        label: "Implementation overview",
        href: "/product/implementation",
        featured: true,
      },
      { label: "Readiness assessment" },
      { label: "Data migration" },
      { label: "Configuration" },
      { label: "Parallel runs and validation" },
      { label: "Change management" },
      { label: "Training" },
      { label: "Customer success" },
      { label: "Professional services" },
    ],
  },
  {
    id: "resources",
    title: "Resources",
    qualifier: "Resource",
    links: [
      { label: "Resource Center", href: "/resources" },
      { label: "Payroll guides", href: "/resources/payroll-guides" },
      { label: "Global payroll guide", href: "/global-payroll/resources" },
      {
        label: "Jurisdiction guides",
        href: "/resources/jurisdiction-guides",
        featured: true,
      },
      {
        label: "Payroll glossary",
        href: "/resources/payroll-glossary",
        featured: true,
      },
      { label: "Customer stories" },
      { label: "Webinars and events" },
      { label: "Frequently asked questions", azLabel: "FAQ", href: "/resources/faq" },
      {
        label: "Product Videos",
        href: "/resources/product-videos",
        featured: true,
      },
      { label: "Release notes", href: "/resources/release-notes" },
    ],
  },
  {
    id: "customer-support",
    title: "Customer & Employee Support",
    qualifier: "Support",
    links: [
      { label: "Help Center", href: "/resources/help-center" },
      { label: "Product Documentation", href: "/resources/documentation" },
      { label: "Contact Support", href: "/contact" },
      { label: "Global payroll help" },
      { label: "Employee access help" },
      { label: "Payroll administrator help" },
      { label: "Implementation support", href: "/resources/implementation" },
      { label: "Sign in", href: "/sign-in" },
      { label: "System Status", href: "/resources/system-status" },
    ],
  },
  {
    id: "trust-security",
    title: "Trust, Security & Compliance",
    qualifier: "Trust",
    links: [
      {
        label: "Trust Center",
        href: "/company/trust-center",
        featured: true,
      },
      {
        label: "Security and Trust",
        href: "/resources/security-trust",
        featured: true,
      },
      { label: "Privacy and data protection", href: "/legal/privacy-notice" },
      { label: "Compliance and assurance" },
      { label: "Data residency" },
      { label: "Business continuity" },
      { label: "Subprocessors" },
      { label: "Responsible disclosure" },
      {
        label: "Accessibility Statement",
        href: "/legal/accessibility-statement",
        featured: true,
      },
    ],
  },
  {
    id: "company-ecosystem",
    title: "Company & Ecosystem",
    qualifier: "Company",
    links: [
      { label: "About Zoiko Payroll", href: "/company/about-us" },
      { label: "Zoiko Group", href: "/company/zoiko-group" },
      { label: "Zoiko One", href: "/company/zoiko-one" },
      { label: "Leadership", href: "/company/leadership" },
      { label: "Partners", href: "/company/partners" },
      { label: "Careers", href: "/company/careers" },
      { label: "Newsroom", href: "/company/newsroom" },
      { label: "Contact", href: "/contact", featured: true },
      { label: "Offices" },
    ],
  },
  {
    id: "legal-governance",
    title: "Legal & Governance",
    qualifier: "Legal",
    links: [
      {
        label: "01 Legal Center",
        azLabel: "Legal Center",
        href: "/legal/legal-center",
      },
      {
        label: "02 Privacy Notice",
        azLabel: "Privacy Notice",
        href: "/legal/privacy-notice",
      },
      {
        label: "03 Cookie Notice",
        azLabel: "Cookie Notice",
        href: "/legal/cookie-notice",
      },
      {
        label: "04 Website Terms of Use",
        azLabel: "Website Terms of Use",
        href: "/legal/website-terms",
      },
      {
        label: "05 Service Terms",
        azLabel: "Service Terms",
        href: "/legal/service-terms",
        featured: true,
      },
      {
        label: "06 Data Processing Addendum",
        azLabel: "Data Processing Addendum",
        href: "/legal/dpa",
      },
      {
        label: "07 Acceptable Use Policy",
        azLabel: "Acceptable Use Policy",
        href: "/legal/acceptable-use-policy",
        featured: true,
      },
      {
        label: "08 Accessibility Statement",
        azLabel: "Accessibility Statement",
        href: "/legal/accessibility-statement",
        featured: true,
      },
      {
        label: "09 Legal Notices",
        azLabel: "Legal Notices",
        href: "/legal/legal-notices",
        featured: true,
      },
      {
        label: "10 Sitemap — you are here",
        azLabel: "Sitemap",
        href: "/legal/sitemap",
        featured: true,
      },
    ],
  },
];

export interface AZEntry {
  /** Display name, with a qualifier appended when the name is ambiguous. */
  name: string;
  href?: string;
  letter: string;
}

/**
 * Flattens the categories into a de-duplicated alphabetical index. Names that
 * occur in more than one category are qualified — "HR teams (Solution)" — so
 * every entry is unambiguous, as the design requires.
 */
export function buildAZIndex(categories: SitemapCategory[]): AZEntry[] {
  const flattened = categories.flatMap((category) =>
    category.links.map((link) => ({
      name: link.azLabel ?? link.label,
      href: link.href,
      qualifier: category.qualifier,
    })),
  );

  // Collapse entries that are the same page reached from two categories.
  const deduped = flattened.filter(
    (entry, index) =>
      flattened.findIndex(
        (other) => other.name === entry.name && other.href === entry.href,
      ) === index,
  );

  const nameCounts = new Map<string, number>();
  deduped.forEach((entry) => {
    nameCounts.set(entry.name, (nameCounts.get(entry.name) ?? 0) + 1);
  });

  return deduped
    .map((entry) => {
      const isAmbiguous = (nameCounts.get(entry.name) ?? 0) > 1;
      const name = isAmbiguous
        ? `${entry.name} (${entry.qualifier})`
        : entry.name;

      return {
        name,
        href: entry.href,
        letter: name.charAt(0).toUpperCase(),
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

export const azIndex = buildAZIndex(sitemapCategories);

export const azLetters = Array.from(
  new Set(azIndex.map((entry) => entry.letter)),
).sort();

export const totalPageCount = azIndex.length;
