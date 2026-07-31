import Link from "next/link";
import Logo from "./Logo";
import CountryMarquee from "../ui/CountryMarquee";
import { footerColumns, legalLinks, socialLinks } from "./nav-data";
import { FacebookIcon, InstagramIcon, LinkedInIcon, XSocialIcon, YouTubeIcon } from "../ui/icons";

const socialIcons = {
  LinkedIn: LinkedInIcon,
  X: XSocialIcon,
  YouTube: YouTubeIcon,
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
} as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#EAF1F6] text-slate-700">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
              Global payroll control, built around local requirements. Standalone SaaS, interoperable
              with Zoiko One.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.label];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="inline-flex text-[#0872A7] transition-transform duration-200 hover:-translate-y-0.5 hover:text-brand-dark"
                  >
                    <Icon className="h-7 w-7" />
                  </a>
                );
              })}
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center text-sm text-slate-700 transition-colors duration-200 hover:text-brand"
                    >
                      <span className="border-b border-transparent transition-colors duration-200 group-hover:border-brand/40">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Continuously scrolling country strip */}
      <div className="border-t border-slate-200 py-6">
        <CountryMarquee />
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p>© {year} Zoiko Group. All rights reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors duration-200 hover:text-brand-dark">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
