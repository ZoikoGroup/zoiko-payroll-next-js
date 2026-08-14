export type FooterLink = { label: string; href: string };
export type FooterColumn = { title: string; links: FooterLink[] };

export const footerLinkColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Product overview", href: "/product" },
      { label: "How Zoiko Payroll works", href: "/how-it-works" },
      { label: "Payroll workspace", href: "/product/workspace" },
      { label: "Employee payroll records", href: "/employee-payroll-records" },
      { label: "Reporting and analytics", href: "/reporting" },
      { label: "Product tour", href: "/product/tour" },
    ],
  },
  {
    title: "Payroll operations",
    links: [
      { label: "Payroll processing", href: "/payroll-processing" },
      { label: "Inputs and validation", href: "/product/inputs-validation" },
      { label: "Calculations", href: "/product/calculations" },
      { label: "Approvals", href: "/payroll-approvals" },
      { label: "Deductions and adjustments", href: "/deductions" },
      { label: "Payments orchestration", href: "/product/payments-orchestration" },
      { label: "Payroll close and audit", href: "/product/close-and-audit" },
      { label: "Records and reports", href: "/product/records-and-reports" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Solutions overview", href: "/solutions" },
      { label: "Single-jurisdiction payroll", href: "/solutions/single-jurisdiction" },
      { label: "Multi-jurisdiction payroll", href: "/solutions/multi-jurisdiction" },
      { label: "Mid-market organizations", href: "/solutions/mid-market" },
      { label: "Enterprise organizations", href: "/solutions/enterprise" },
      { label: "Payroll teams", href: "/solutions/payroll-teams" },
      { label: "Finance teams", href: "/solutions/finance-teams" },
      { label: "HR and people teams", href: "/solutions/hr-teams" },
      { label: "Multi-entity organizations", href: "/solutions/multi-entity" },
    ],
  },
  {
    title: "Global payroll",
    links: [
      { label: "Global payroll overview", href: "/global-payroll" },
      { label: "Jurisdiction directory", href: "/global-payroll/jurisdiction-directory" },
      { label: "Country and territory guides", href: "/global-payroll/country-guides" },
      { label: "Local payroll requirements", href: "/global-payroll/local-requirements" },
      { label: "Partner-supported payroll", href: "/global-payroll/partner-supported" },
      { label: "Multi-entity payroll", href: "/global-payroll/multi-entity" },
      { label: "Global implementation", href: "/global-payroll/implementation" },
      { label: "Global reporting", href: "/global-payroll/reporting" },
    ],
  },
  {
    title: "Pricing & procurement",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "Plans and service models", href: "/pricing/plans" },
      { label: "Included and optional services", href: "/pricing/services" },
      { label: "Implementation pricing", href: "/pricing/implementation" },
      { label: "Multi-jurisdiction pricing", href: "/pricing/multi-jurisdiction" },
      { label: "Procurement resources", href: "/pricing/procurement" },
      { label: "Security review", href: "/pricing/security-review" },
      { label: "Pricing FAQs", href: "/pricing/faqs" },
    ],
  },
  {
    title: "Integrations & APIs",
    links: [
      { label: "Integrations overview", href: "/integrations" },
      { label: "HRIS and HCM systems", href: "/product/integrations/hris-hcm" },
      { label: "Finance and ERP systems", href: "/product/integrations/finance-erp" },
      { label: "Time and attendance", href: "/product/integrations/time-attendance" },
      { label: "Payment systems", href: "/product/integrations/payments" },
      { label: "Identity and access", href: "/product/integrations/identity" },
      { label: "API documentation", href: "/resources/documentation/api" },
      { label: "Webhooks", href: "/product/integrations/webhooks" },
      { label: "Integration support", href: "/product/integrations/support" },
    ],
  },
  {
    title: "Implementation & services",
    links: [
      { label: "Implementation overview", href: "/implementation" },
      { label: "Readiness assessment", href: "/product/implementation/readiness" },
      { label: "Data migration", href: "/product/implementation/data-migration" },
      { label: "Configuration", href: "/product/implementation/configuration" },
      { label: "Parallel runs and validation", href: "/product/implementation/parallel-runs" },
      { label: "Change management", href: "/product/implementation/change-management" },
      { label: "Training", href: "/product/implementation/training" },
      { label: "Customer success", href: "/product/implementation/customer-success" },
      { label: "Professional services", href: "/product/implementation/professional-services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Resource Center", href: "/resources" },
      { label: "Payroll guides", href: "/resources/payroll-guides" },
      { label: "Global payroll guide", href: "/resources/global-payroll-guide" },
      { label: "Jurisdiction guides", href: "/global-payroll/country-guides" },
      { label: "Payroll glossary", href: "/resources/glossary" },
      { label: "Customer stories", href: "/resources/customer-stories" },
      { label: "Webinars and events", href: "/resources/webinars-events" },
      { label: "Frequently asked questions", href: "/resources/faq" },
      { label: "Release notes", href: "/resources/release-notes" },
    ],
  },
  {
    title: "Customer & employee support",
    links: [
      { label: "Help Center", href: "/resources/help-center" },
      { label: "Product documentation", href: "/resources/documentation" },
      { label: "Contact support", href: "/company/contact" },
      { label: "Employee access help", href: "/support/employee-access" },
      { label: "Payroll administrator help", href: "/support/administrator-help" },
      { label: "Implementation support", href: "/support/implementation" },
      { label: "Sign in", href: "/sign-in" },
      { label: "System status", href: "/resources/system-status" },
    ],
  },
  {
    title: "Trust, security & compliance",
    links: [
      { label: "Trust Center", href: "/company/trust-center" },
      { label: "Security", href: "/security" },
      { label: "Privacy and data protection", href: "/legal/privacy-notice" },
      { label: "Compliance and assurance", href: "/company/trust-center/compliance" },
      { label: "Data residency", href: "/company/trust-center/data-residency" },
      { label: "Business continuity", href: "/company/trust-center/business-continuity" },
      { label: "Subprocessors", href: "/legal/subprocessors" },
      { label: "Responsible disclosure", href: "/company/trust-center/responsible-disclosure" },
      { label: "Accessibility", href: "/legal/accessibility-statement" },
    ],
  },
  {
    title: "Company & ecosystem",
    links: [
      { label: "About Zoiko Payroll", href: "/about-us" },
      { label: "Zoiko Group", href: "/company/zoiko-group" },
      { label: "Zoiko One", href: "/company/zoiko-one" },
      { label: "Leadership", href: "/company/leadership" },
      { label: "Partners", href: "/company/partners" },
      { label: "Careers", href: "/company/careers" },
      { label: "Newsroom", href: "/company/newsroom" },
      { label: "Contact", href: "/company/contact" },
      { label: "Offices", href: "/company/offices" },
    ],
  },
  {
    title: "Legal & governance",
    links: [
      { label: "Legal Center", href: "/legal" },
      { label: "Privacy Notice", href: "/legal/privacy-notice" },
      { label: "Cookie Notice", href: "/legal/cookie-notice" },
      { label: "Website Terms of Use", href: "/legal/terms-of-service" },
      { label: "Zoiko Payroll Service Terms", href: "/legal/service-terms" },
      { label: "Data Processing Addendum", href: "/legal/dpa" },
      { label: "Acceptable Use Policy", href: "/legal/acceptable-use-policy" },
      { label: "Accessibility Statement", href: "/legal/accessibility-statement" },
      { label: "Legal Notices", href: "/legal/notices" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
];

export type Headquarters = {
  label: string;
  entity?: string;
  addressLines: string[];
  contactLabel: string;
  href: string;
};

export const headquarters: Headquarters[] = [
  {
    label: "Global Headquarters",
    entity: "Zoiko Tech Inc.",
    addressLines: ["1401 21st Street, Suite R", "Sacramento, CA 95811", "United States"],
    contactLabel: "Contact Global Headquarters",
    href: "/company/contact",
  },
  {
    label: "European Headquarters",
    addressLines: ["167-169 Great Portland Street", "5th Floor", "London W1W 5PF", "United Kingdom"],
    contactLabel: "Contact European Headquarters",
    href: "/company/contact",
  },
];

export const utilityLinks: FooterLink[] = [
  { label: "Help Center", href: "/resources/help-center" },
  { label: "Contact support", href: "/company/contact" },
  { label: "Documentation", href: "/resources/documentation" },
  { label: "Release notes", href: "/resources/release-notes" },
  { label: "Accessibility feedback", href: "/legal/accessibility-statement" },
];

export const bottomLegalLinks: FooterLink[] = [
  { label: "Privacy Notice", href: "/legal/privacy-notice" },
  { label: "Cookie Preferences", href: "/legal/cookie-notice" },
  { label: "Terms of Use", href: "/legal/terms-of-service" },
  { label: "Zoiko Payroll Service Terms", href: "/legal/service-terms" },
  { label: "Data Processing Addendum", href: "/legal/dpa" },
  { label: "Subprocessors", href: "/legal/subprocessors" },
  { label: "Acceptable Use Policy", href: "/legal/acceptable-use-policy" },
  { label: "Accessibility Statement", href: "/legal/accessibility-statement" },
  { label: "Legal Notices", href: "/legal/notices" },
];
