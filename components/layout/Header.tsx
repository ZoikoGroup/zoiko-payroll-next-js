"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import MegaMenu from "./MegaMenu";
import { navItems } from "./nav-data";
import { megaMenus } from "./mega-menu-data";
import { ChevronDownIcon, CloseIcon, MenuIcon } from "../ui/icons";

const CLOSE_DELAY = 150;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openKey, setOpenKey] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimeout = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
  };

  const openMenu = (label: string) => {
    clearCloseTimeout();
    setOpenKey(label);
  };

  const scheduleClose = () => {
    clearCloseTimeout();
    closeTimeout.current = setTimeout(() => setOpenKey(null), CLOSE_DELAY);
  };

  useEffect(() => {
    if (!openKey) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenKey(null);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenKey(null);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [openKey]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop nav */}
        <nav ref={navRef} className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => {
            const menu = megaMenus[item.label];
            const isOpen = openKey === item.label;

            if (!menu) {
              return (
                <Link
                  key={item.label}
                  href={item.href ?? "#"}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-brand-dark transition-colors duration-200 hover:text-brand"
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div
                key={item.label}
                onMouseEnter={() => openMenu(item.label)}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  onClick={() => openMenu(item.label)}
                  aria-expanded={isOpen}
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-brand-dark transition-colors duration-200 hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand"
                >
                  {item.label}
                  <ChevronDownIcon
                    className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-brand" : ""
                    }`}
                  />
                </button>
              </div>
            );
          })}
        </nav>

        {/* Mega menu panel: centered within the header's content container,
            independent of which trigger opened it, so it never overflows the viewport. */}
        {openKey && megaMenus[openKey] && (
          <div
            className="absolute inset-x-0 top-full z-50 flex justify-center pt-3"
            onMouseEnter={() => openMenu(openKey)}
            onMouseLeave={scheduleClose}
          >
            <div className="animate-mega-menu">
              <MegaMenu menu={megaMenus[openKey]} />
            </div>
          </div>
        )}

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/sign-in"
            className="text-sm font-medium text-brand-dark transition-colors duration-200 hover:text-brand"
          >
            Sign in
          </Link>
          <Link
            href="/book-a-demo"
            className="bg-brand-gradient rounded-lg px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/40 active:translate-y-0"
          >
            Book a demo
          </Link>
          <button
            type="button"
            className="flex items-center gap-1 rounded-[8px] border border-slate-200 px-3 py-2 text-sm font-medium text-brand-dark transition-colors duration-200 hover:border-brand hover:text-brand"
          >
            EN
            <ChevronDownIcon className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 transition-colors duration-200 hover:bg-slate-100 lg:hidden"
        >
          {mobileOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile panel */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <div className="space-y-1 border-t border-slate-200 px-4 py-4">
          {navItems.map((item) =>
            item.columns ? (
              <details key={item.label} className="group/d rounded-lg">
                <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-brand-dark transition-colors duration-200 hover:bg-slate-50">
                  {item.label}
                  <ChevronDownIcon className="h-4 w-4 transition-transform duration-200 group-open/d:rotate-180" />
                </summary>
                <div className="ml-2 space-y-1 border-l border-slate-200 pb-2 pl-4">
                  {item.columns.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block rounded-md px-3 py-2 text-sm text-slate-600 transition-colors duration-150 hover:text-brand"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </details>
            ) : (
              <Link
                key={item.label}
                href={item.href ?? "#"}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-brand-dark transition-colors duration-200 hover:bg-slate-50"
              >
                {item.label}
              </Link>
            )
          )}

          <div className="mt-3 flex flex-col gap-2 border-t border-slate-200 pt-3">
            <Link
              href="/sign-in"
              className="rounded-lg px-3 py-2.5 text-center text-sm font-medium text-brand-dark transition-colors duration-200 hover:bg-slate-50"
            >
              Sign in
            </Link>
            <Link
              href="/book-a-demo"
              className="bg-brand-gradient rounded-lg px-5 py-2.5 text-center text-sm font-semibold text-white transition-transform duration-200 active:scale-95"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
