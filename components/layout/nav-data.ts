export type NavLink = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href?: string;
  columns?: NavLink[];
};

export const navItems: NavItem[] = [
  {
    label: "Product",
    columns: [
      { label: "Product overview", href: "/product" },
      { label: "Payroll processing", href: "/product/payroll-processing" },
      { label: "Approvals", href: "/product/approvals" },
      { label: "Reporting", href: "/product/reporting" },
      { label: "Integrations", href: "/product/integrations" },
      { label: "Security", href: "/product/security" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    label: "Solutions",
    columns: [
      { label: "Single-jurisdiction payroll", href: "/solutions/single-jurisdiction" },
      { label: "Multi-jurisdiction payroll", href: "/solutions/multi-jurisdiction" },
      { label: "Mid-market", href: "/solutions/mid-market" },
      { label: "Enterprise", href: "/solutions/enterprise" },
      { label: "Finance teams", href: "/solutions/finance-teams" },
    ],
  },
  {
    label: "Global Payroll",
    columns: [
      { label: "Jurisdiction directory", href: "/global-payroll/jurisdiction-directory" },
      { label: "Country guides", href: "/global-payroll/country-guides" },
      { label: "Global payroll guide", href: "/global-payroll/guide" },
      { label: "Payroll glossary", href: "/global-payroll/glossary" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Resources",
    columns: [
      { label: "Resource Center", href: "/resources" },
      { label: "Documentation", href: "/resources/documentation" },
      { label: "Help Center", href: "/resources/help-center" },
      { label: "Release notes", href: "/resources/release-notes" },
      { label: "System status", href: "/resources/system-status" },
    ],
  },
  {
    label: "Company",
    columns: [
      { label: "About", href: "/about-us" },
      { label: "Zoiko Group", href: "/company/zoiko-group" },
      { label: "Careers", href: "/company/careers" },
      { label: "Contact", href: "/company/contact" },
    ],
  },
];

export const footerColumns: { title: string; links: NavLink[] }[] = navItems
  .filter((item): item is NavItem & { columns: NavLink[] } => Boolean(item.columns))
  .map((item) => ({ title: item.label, links: item.columns }));

export const legalLinks: NavLink[] = [
  { label: "Trust Center", href: "/legal/trust-center" },
  { label: "Privacy Notice", href: "/legal/privacy-notice" },
  { label: "Cookie Preferences", href: "/legal/cookie-preferences" },
  { label: "Accessibility Statement", href: "/legal/accessibility-statement" },
  { label: "Terms of Service", href: "/legal/terms-of-service" },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "X", href: "https://x.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
] as const;
