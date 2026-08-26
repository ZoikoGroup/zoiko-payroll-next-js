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
      { label: "How Zoiko Payroll works", href: "/product/how-it-works" },
      { label: "Payroll processing", href: "/product/payroll-processing" },
      { label: "Approvals", href: "/product/payroll-approvals" },
      { label: "Employee payroll records", href: "/product/employee-payroll-records" },
      { label: "Deductions and adjustments", href: "/product/deductions" },
      { label: "Reporting", href: "/product/reporting" },
      { label: "Integrations", href: "/product/integrations" },
      { label: "Implementation", href: "/product/implementation" },
      { label: "Security", href: "/product/security" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    label: "Solutions",
    columns: [
      { label: "Single-jurisdiction payroll", href: "/solutions/single-jurisdiction" },
      { label: "Multi-jurisdiction payroll", href: "/solutions/multi-jurisdiction" },
      { label: "Growing businesses", href: "/solutions/growing-businesses" },
      { label: "International groups", href: "/solutions/international-groups" },
      { label: "Payroll teams", href: "/solutions/payroll-teams" },
      { label: "Payroll modernization", href: "/solutions/payroll-modernization" },
      { label: "Mid-market organizations", href: "/solutions/mid-market-organizations" },
      { label: "Enterprise", href: "/solutions/enterprise-organizations" },
      { label: "Finance teams", href: "/solutions/finance-teams" },
      { label: "HR teams", href: "/solutions/hr-teams" },
    ],
  },
  {
    label: "Global Payroll",
    columns: [
      { label: "Jurisdiction directory", href: "/global-payroll/jurisdiction-directory" },
      { label: "Country guides", href: "/resources/jurisdiction-guides" },
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
      { label: "About", href: "/company/about-us" },
      { label: "Zoiko Group", href: "/company/zoiko-group" },
      { label: "Careers", href: "/company/careers" },
      { label: "Contact", href: "/company/contact" },
    ],
  },
];
