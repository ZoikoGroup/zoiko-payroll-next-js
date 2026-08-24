const footerColumns = [
  [
    {
      title: "Product",
      links: ["Product overview", "How Zoiko Payroll works", "Payroll workspace", "Employee payroll records", "Reporting and analytics", "Product tour"],
    },
    {
      title: "Payroll operations",
      links: ["Payroll processing", "Inputs and validation", "Calculations", "Approvals", "Deductions and adjustments", "Payments orchestration", "Payroll close and audit", "Records and reports"],
    },
    {
      title: "Solutions",
      links: ["Solutions overview", "Single-jurisdiction payroll", "Multi-jurisdiction payroll", "Mid-market organizations", "Enterprise organizations", "Payroll teams", "Finance teams", "HR and people teams", "Multi-entity organizations"],
    },
    {
      title: "Global payroll",
      links: ["Global payroll overview", "Jurisdiction directory", "Country and territory guides", "Local payroll requirements", "Partner-supported payroll", "Multi-entity payroll", "Global implementation", "Global reporting"],
    },
  ],
  [
    {
      title: "Pricing & procurement",
      links: ["Pricing", "Plans and service models", "Included and optional services", "Implementation pricing", "Multi-jurisdiction pricing", "Procurement resources", "Security review", "Pricing FAQs"],
    },
    {
      title: "Integrations & APIs",
      links: ["Integrations overview", "HRIS and HCM systems", "Finance and ERP systems", "Time and attendance", "Payment systems", "Identity and access", "API documentation", "Webhooks", "Integration support"],
    },
    {
      title: "Implementation & services",
      links: ["Implementation overview", "Readiness assessment", "Data migration", "Configuration", "Parallel runs and validation", "Change management", "Training", "Customer success", "Professional services"],
    },
    {
      title: "Resources",
      links: ["Resource Center", "Payroll guides", "Global payroll guide", "Jurisdiction guides", "Payroll glossary", "Customer stories", "Webinars and events", "Frequently asked questions", "Release notes"],
    },
  ],
  [
    {
      title: "Customer & employee support",
      links: ["Help Center", "Product documentation", "Contact support", "Employee access help", "Payroll administrator help", "Implementation support", "Sign in", "System status"],
    },
    {
      title: "Trust, security & compliance",
      links: ["Trust Center", "Security", "Privacy and data protection", "Compliance and assurance", "Data residency", "Business continuity", "Subprocessors", "Responsible disclosure", "Accessibility"],
    },
    {
      title: "Company & ecosystem",
      links: ["About Zoiko Payroll", "Zoiko Group", "Zoiko One", "Leadership", "Partners", "Careers", "Newsroom", "Contact", "Offices"],
    },
    {
      title: "Legal & governance",
      links: ["Legal Center", "Privacy Notice", "Cookie Notice", "Cookie Preferences", "Website Terms of Use", "Zoiko Payroll Service Terms", "Data Processing Addendum", "Acceptable Use Policy", "Accessibility Statement", "Legal Notices", "Sitemap"],
    },
  ],
];

const helpLinks = ["Help Center", "Contact support", "Documentation", "Release notes", "Accessibility feedback"];

const legalLinks = ["Privacy Notice", "Cookie Preferences", "Terms of Use", "Zoiko Payroll Service Terms", "Data Processing Addendum", "Subprocessors", "Acceptable Use Policy", "Accessibility Statement", "Legal Notices"];

export default function Footer() {
  return (
    <footer className="w-full bg-sky-950">
      {/* Footer Top */}
      <div className="flex flex-col gap-0 border-b border-white/10 md:flex-row">
        <div className="flex flex-1 flex-col gap-5 px-14 py-20">
          <div className="text-sm leading-6 text-white/80">
            Global payroll control, built around local requirements.
          </div>
          <div className="text-sm leading-5 text-white/60">
            Use Zoiko Payroll as standalone SaaS or as part of Zoiko One.
          </div>
          <div className="flex items-center gap-2.5 pt-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10"
              >
                <div className="h-4 w-4 bg-white" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 px-14 py-16">
          <div className="text-sm font-semibold leading-5 text-white">
            Global Headquarters
          </div>
          <div className="text-sm leading-5 text-white/70">
            Zoiko Tech Inc.
            <br />
            1401 21st Street, Suite R
            <br />
            Sacramento, CA 95811
            <br />
            United States
          </div>
          <div className="text-sm font-semibold leading-5 text-blue-400">
            Contact Global Headquarters →
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 px-14 py-16">
          <div className="text-sm font-semibold leading-5 text-white">
            European Headquarters
          </div>
          <div className="text-sm leading-5 text-white/70">
            167–169 Great Portland Street
            <br />
            5th Floor
            <br />
            London W1W 5PF
            <br />
            United Kingdom
          </div>
          <div className="text-sm font-semibold leading-5 text-blue-400">
            Contact European Headquarters →
          </div>
        </div>
      </div>

      {/* Footer Link Columns */}
      {footerColumns.map((cols, rowIdx) => (
        <div
          key={rowIdx}
          className="grid grid-cols-2 gap-x-12 gap-y-10 px-14 py-16 md:grid-cols-4"
        >
          {cols.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <div className="text-sm font-semibold leading-5 text-white">
                {col.title}
              </div>
              {col.links.map((link) => (
                <div key={link} className="text-sm leading-5 text-white/70">
                  {link}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}

      {/* Help Bar */}
      <div className="flex flex-wrap items-center gap-0 border-t border-white/10 px-14 py-3">
        {helpLinks.map((item, i) => (
          <span key={item} className="flex items-center">
            <span className="text-sm leading-5 text-white/80">{item}</span>
            {i < helpLinks.length - 1 && (
              <span className="px-4 text-sm leading-5 text-white/25">·</span>
            )}
          </span>
        ))}
        <span className="flex items-center gap-2 pl-4">
          <div className="h-1.5 w-1.5 rounded-sm bg-green-600" />
          <span className="text-sm leading-5 text-white/80">
            All systems operational
          </span>
        </span>
      </div>

      {/* Legal Bar */}
      <div className="border-t border-white/10 bg-slate-900 px-14 py-6">
        <div className="flex flex-wrap gap-6 pb-6 text-xs leading-5 text-white/70">
          {legalLinks.map((link) => (
            <span key={link}>{link}</span>
          ))}
        </div>
        <div className="flex flex-wrap items-start gap-4 pb-4">
          <span className="text-xs leading-5">
            <span className="font-bold text-white/80">©️ 2026 Zoiko Payroll.</span>
            <span className="text-white/60"> All rights reserved.</span>
          </span>
          <span className="text-xs leading-5 text-white/60">
            Zoiko Payroll is a platform owned and operated by Zoiko Tech Inc., a Zoiko
            Group company.
          </span>
          <span className="text-xs leading-5 text-white/60">
            Zoiko Payroll is available as standalone SaaS and as an integrated component
            of Zoiko One.
          </span>
        </div>
        <div className="border-t border-zinc-400/50 pt-4 text-center text-xs leading-7 text-white/60">
          Product availability, functionality, service models, delivery entities and support
          vary by jurisdiction and contract. Where partner-supported services are used, the
          applicable contracting and
          <br />
          service-delivery arrangements are identified in the relevant order form and
          service terms.
        </div>
        <div className="pt-3 text-center text-xs leading-5 text-white/60">
          Website content is provided for general information and does not constitute legal,
          tax, accounting, payroll, employment or other professional advice.
        </div>
      </div>
    </footer>
  );
}
