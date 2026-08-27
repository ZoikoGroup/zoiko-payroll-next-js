"use client";

import React, { useState, useEffect } from "react";

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: "roles-context", label: "Roles & context" },
  { id: "categories-sources", label: "Categories & sources" },
  { id: "purposes-basis", label: "Purposes & basis" },
  {
    id: "recipients-transfers-retention",
    label: "Recipients, transfers & retention",
  },
  { id: "rights-requests", label: "Rights & requests" },
  { id: "cookies-marketing", label: "Cookies & marketing" },
  { id: "ai-children-history", label: "AI, children & history" },
  { id: "contact", label: "Contact" },
];

export default function TableOfContentsSidebar() {
  const [activeId, setActiveId] = useState<string>("");

  // Optional: Highlight current section in view on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="w-full lg:w-64 shrink-0 lg:sticky lg:top-8 font-sans antialiased">
      <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
        {/* Title */}
        <p className="text-[11px] font-bold tracking-wider text-[#94A3B8] uppercase mb-4">
          ON THIS PAGE
        </p>

        {/* Links Navigation */}
        <nav className="flex flex-col divide-y divide-slate-100">
          {navItems.map((item) => {
            const isActive = activeId === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`py-3 text-xs sm:text-sm font-medium transition-colors hover:text-[#2F6FED] ${
                  isActive ? "text-[#2F6FED] font-bold" : "text-[#1E293B]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
