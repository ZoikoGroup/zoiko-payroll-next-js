const footerColumns = [
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
  {
    title: "Pricing & procurement",
    links: ["Pricing", "Plans and service models", "Included and optional services", "Implementation pricing", "Multi-jurisdiction pricing", "Procurement resources", "Security review", "Pricing FAQs"],
  },
  {
    title: "Integrations & APIs",
    links: ["Integrations overview", "HRIS and HCM systems", "Finance and ERP systems", "Time and attendance", "Payment systems", "Identity and access", "API documentation", "Webhooks", "Integration support"],
  },
];

const footerColumns2 = [
  {
    title: "Implementation & services",
    links: ["Implementation overview", "Readiness assessment", "Data migration", "Configuration", "Parallel runs and validation", "Change management", "Training", "Customer success", "Professional services"],
  },
  {
    title: "Resources",
    links: ["Resource Center", "Payroll guides", "Global payroll guide", "Jurisdiction guides", "Payroll glossary", "Customer stories", "Webinars and events", "Frequently asked questions", "Release notes"],
  },
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
];

const legalLinks = ["Privacy Notice", "Cookie Preferences", "Terms of Use", "Zoiko Payroll Service Terms", "Data Processing Addendum", "Subprocessors", "Acceptable Use Policy", "Accessibility Statement", "Legal Notices"];

export default function GuideFooter() {
  return (
    <div className="w-full relative">
      {/* Main footer area */}
      <div className="w-full bg-sky-950 relative">
        {/* Top section with logo and offices */}
        <div className="w-full h-80 relative">
          {/* Logo area */}
          <div className="absolute left-[60px] top-[56px] w-12 h-11 bg-gradient-to-r from-sky-500 to-sky-600" />
          <div className="absolute left-[60px] top-[149px] w-[478px] text-white/80 text-sm leading-6">
            Global payroll control, built around local requirements.
          </div>
          <div className="absolute left-[60px] top-[180px] w-[478px] text-white/60 text-sm leading-5">
            Use Zoiko Payroll as standalone SaaS or as part of Zoiko One.
          </div>

          {/* Social icons placeholder */}
          <div className="absolute left-[60px] top-[234px] flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white/80 rounded-sm" />
              </div>
            ))}
          </div>

          {/* Global HQ */}
          <div className="absolute left-[720px] top-[77px] text-white text-sm font-semibold leading-5">
            Global Headquarters
          </div>
          <div className="absolute left-[720px] top-[102px] w-56 text-white/70 text-sm leading-5">
            Zoiko Tech Inc.
            <br />
            1401 21st Street, Suite R
            <br />
            Sacramento, CA 95811
            <br />
            United States
          </div>
          <div className="absolute left-[720px] top-[191px] text-blue-400 text-sm font-semibold leading-5">
            Contact Global Headquarters →
          </div>

          {/* European HQ */}
          <div className="absolute left-[1093px] top-[76px] text-white text-sm font-semibold leading-5">
            European Headquarters
          </div>
          <div className="absolute left-[1093px] top-[101px] w-56 text-white/70 text-sm leading-5">
            167–169 Great Portland Street
            <br />
            5th Floor
            <br />
            London W1W 5PF
            <br />
            United Kingdom
          </div>
          <div className="absolute left-[1093px] top-[190px] text-blue-400 text-sm font-semibold leading-5">
            Contact European Headquarters →
          </div>
        </div>

        {/* Sitemap columns - Row 1 */}
        <div className="w-full px-[56px] pt-8 pb-16 grid grid-cols-6 gap-8">
          {footerColumns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <div className="text-white text-sm font-semibold leading-5">{col.title}</div>
              {col.links.map((link) => (
                <div key={link} className="text-white/70 text-sm leading-5">{link}</div>
              ))}
            </div>
          ))}
        </div>

        {/* Sitemap columns - Row 2 */}
        <div className="w-full px-[56px] pb-16 grid grid-cols-6 gap-8">
          {footerColumns2.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <div className="text-white text-sm font-semibold leading-5">{col.title}</div>
              {col.links.map((link) => (
                <div key={link} className="text-white/70 text-sm leading-5">{link}</div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Help bar */}
      <div className="w-full h-14 bg-sky-950 border-t border-white/10 flex items-center justify-center gap-0 px-[73px]">
        <span className="text-white/80 text-sm">Help Center</span>
        <span className="text-white/25 text-sm mx-4">·</span>
        <span className="text-white/80 text-sm">Contact support</span>
        <span className="text-white/25 text-sm mx-4">·</span>
        <span className="text-white/80 text-sm">Documentation</span>
        <span className="text-white/25 text-sm mx-4">·</span>
        <span className="text-white/80 text-sm">Release notes</span>
        <span className="text-white/25 text-sm mx-4">·</span>
        <span className="text-white/80 text-sm">Accessibility feedback</span>
        <span className="text-white/25 text-sm mx-4">·</span>
        <div className="w-1.5 h-1.5 bg-green-600 rounded-sm mr-2" />
        <span className="text-white/80 text-sm">All systems operational</span>
      </div>

      {/* Legal bar */}
      <div className="w-full bg-slate-900 border-t border-white/10">
        {/* Legal links */}
        <div className="flex items-center justify-center gap-6 px-[71px] pt-7">
          {legalLinks.map((link) => (
            <span key={link} className="text-white/70 text-xs leading-5">{link}</span>
          ))}
        </div>

        {/* Copyright */}
        <div className="px-[71px] pt-5 flex items-center">
          <span className="text-white/80 text-xs font-bold leading-5">©️ 2026 Zoiko Payroll.</span>
          <span className="text-white/60 text-xs leading-5"> All rights reserved.</span>
          <span className="text-white/60 text-xs leading-5 ml-[200px]">
            Zoiko Payroll is a platform owned and operated by Zoiko Tech Inc., a Zoiko Group company.
          </span>
          <span className="text-white/60 text-xs leading-5 ml-[200px]">
            Zoiko Payroll is available as standalone SaaS and as an integrated component of Zoiko One.
          </span>
        </div>

        {/* Disclaimer */}
        <div className="px-[83px] pt-4 pb-4 text-white/60 text-xs leading-7 text-center">
          Product availability, functionality, service models, delivery entities and support vary by jurisdiction and contract. Where partner-supported services are used, the applicable contracting and
          <br />
          service-delivery arrangements are identified in the relevant order form and service terms.
        </div>

        <div className="text-center text-white/60 text-xs leading-5 pb-4">
          Website content is provided for general information and does not constitute legal, tax, accounting, payroll, employment or other professional advice.
        </div>

        {/* Divider */}
        <div className="mx-[83px] outline outline-[0.50px] outline-offset-[-0.25px] outline-zinc-400" />
      </div>
    </div>
  );
}
