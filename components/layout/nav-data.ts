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
      { label: "How Zoiko Payroll works", href: "/how-it-works" },
      { label: "Payroll processing", href: "/payroll-processing" },
      { label: "Approvals", href: "/payroll-approvals" },
      { label: "Employee payroll records", href: "/employee-payroll-records" },
      { label: "Reporting", href: "/product/reporting" },
      { label: "Integrations", href: "/integrations" },
      { label: "Implementation", href: "/implementation" },
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
