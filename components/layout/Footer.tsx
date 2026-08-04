import Link from "next/link";
import Logo from "./Logo";
import { footerLinkColumns, headquarters, utilityLinks, bottomLegalLinks } from "./footer-data";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XSocialIcon,
  YouTubeIcon,
  ArrowRightIcon,
  GlobeIcon,
  ChevronDownIcon,
} from "../ui/icons";

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com", Icon: LinkedInIcon },
  { label: "YouTube", href: "https://youtube.com", Icon: YouTubeIcon },
  { label: "X", href: "https://x.com", Icon: XSocialIcon },
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
  { label: "Facebook", href: "https://facebook.com", Icon: FacebookIcon },
] as const;

const linkClass =
  "group inline-flex items-center text-sm text-slate-300 transition-colors duration-200 hover:text-white";

function FooterLinkList({ links }: { links: { label: string; href: string }[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className={linkClass}>
            <span className="border-b border-transparent transition-colors duration-200 group-hover:border-white/40">
              {link.label}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function RegionSelector({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      className={`flex items-center gap-2 rounded-lg border border-white/15 px-3.5 py-2 text-sm font-medium text-slate-200 transition-colors duration-200 hover:border-white/30 hover:text-white ${className}`}
    >
      <GlobeIcon className="h-4 w-4" />
      English (US)
      <ChevronDownIcon className="h-3.5 w-3.5" />
    </button>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-slate-300">
      {/* Band 1: brand + headquarters */}
      <div className="bg-[#0A3856]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:gap-16">
            <div>
              <Logo src="/footer-logo.png" sizeClassName="h-12 w-auto" />
              <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300">
                Global payroll control, built around local requirements.
              </p>
              <p className="mt-1 max-w-md text-sm leading-relaxed text-slate-400">
                Use Zoiko Payroll as standalone SaaS or as part of Zoiko One.
              </p>
              <div className="mt-5 flex items-center gap-4">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.08] text-slate-100 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-brand-dark"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {headquarters.map((hq) => (
              <div key={hq.label} className="min-w-[200px]">
                <h3 className="text-sm font-semibold text-white">{hq.label}</h3>
                <div className="mt-3 space-y-0.5 text-sm text-slate-300">
                  {hq.entity && <p>{hq.entity}</p>}
                  {hq.addressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
                <Link
                  href={hq.href}
                  className="group mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-white transition-colors duration-200 hover:text-slate-200"
                >
                  {hq.contactLabel}
                  <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Band 2: link mega-grid */}
      <div className="bg-[#0A3856]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="hidden border-t border-white/10 pt-12 lg:grid lg:grid-cols-6 lg:gap-x-8 lg:gap-y-10">
            {footerLinkColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-white">{column.title}</h3>
                <FooterLinkList links={column.links} />
              </div>
            ))}
          </div>

          <div className="space-y-1 border-t border-white/10 pt-8 lg:hidden">
            {footerLinkColumns.map((column) => (
              <details key={column.title} className="group/d border-b border-white/10">
                <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-sm font-medium text-white">
                  {column.title}
                  <ChevronDownIcon className="h-4 w-4 text-slate-400 transition-transform duration-200 group-open/d:rotate-180" />
                </summary>
                <div className="pb-4">
                  <FooterLinkList links={column.links} />
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* Band 3: utility bar */}
      <div className="bg-[#072A42]">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              {utilityLinks.map((link) => (
                <Link key={link.href} href={link.href} className={linkClass}>
                  <span className="border-b border-transparent transition-colors duration-200 group-hover:border-white/40">
                    {link.label}
                  </span>
                </Link>
              ))}
              <span className="flex items-center gap-2 text-slate-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                All systems operational
              </span>
            </div>

            <RegionSelector className="w-fit" />
          </div>
        </div>
      </div>

      {/* Band 4: legal links, then copyright + disclaimers, centered */}
      <div className="bg-[#051B2B]">
        <div className="mx-auto max-w-8xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
            {bottomLegalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-300 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center text-xs leading-relaxed text-slate-400">
            <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
              <span className="text-sm text-slate-200">
                <span className="font-semibold">© {year} Zoiko Payroll.</span> All rights reserved.
              </span>
              <span>Zoiko Payroll is a platform owned and operated by Zoiko Tech Inc., a Zoiko Group company.</span>
              <span>Zoiko Payroll is available as standalone SaaS and as an integrated component of Zoiko One.</span>
            </p>

            <p className="mx-auto mt-4 max-w-5xl">
              Product availability, functionality, service models, delivery entities and support vary by
              jurisdiction and contract. Where partner-supported services are used, the applicable
              contracting and service-delivery arrangements are identified in the relevant order form
              and service terms.
            </p>

            <div className="mx-auto mt-6  border-t border-white/10 pt-6 text-slate-500">
              Website content is provided for general information and does not constitute legal, tax,
              accounting, payroll, employment or other professional advice.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
