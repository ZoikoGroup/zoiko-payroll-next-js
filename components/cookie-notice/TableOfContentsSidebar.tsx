"use client";

import React, { useState, useEffect } from "react";

interface NavigationItem {
  id: string;
  label: string;
}

const navItems: NavigationItem[] = [
  { id: "categories-inventory", label: "Categories & inventory" },
  { id: "cookie-settings", label: "Cookie Settings" },
  { id: "similar-technologies", label: "Similar technologies" },
  { id: "consent-model", label: "Consent model" },
  { id: "duration-governance", label: "Duration & governance" },
  { id: "privacy-authority", label: "Privacy & authority" },
  { id: "versions-faq", label: "Versions & FAQ" },
  { id: "contact", label: "Contact" },
];

export default function TableOfContentsSidebar() {
  const [activeId, setActiveId] = useState<string>("categories-inventory");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveId(id);
    }
  };

  return (
    <aside className="w-full lg:w-72 shrink-0 lg:sticky lg:top-8">
      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
        <span className="block text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] mb-4">
          ON THIS PAGE
        </span>
        <nav className="divide-y divide-slate-100">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left py-3.5 text-xs sm:text-sm font-semibold transition-colors flex items-center justify-between ${
                  isActive
                    ? "text-[#0284C7]"
                    : "text-[#0F172A] hover:text-[#0284C7]"
                }`}
              >
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
