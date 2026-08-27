"use client";

import React, { useState } from "react";

interface ToggleSetting {
  id: string;
  title: string;
  description: string;
  disabled?: boolean;
  defaultChecked?: boolean;
}

const settingsData: ToggleSetting[] = [
  {
    id: "essential",
    title: "Essential",
    description: "Required for core functions — cannot be disabled",
    disabled: true,
    defaultChecked: true,
  },
  {
    id: "analytics",
    title: "Analytics",
    description: "Aggregate usage understanding",
    disabled: false,
    defaultChecked: false,
  },
  {
    id: "preferences",
    title: "Preferences",
    description: "Remembers your display/session choices",
    disabled: false,
    defaultChecked: true,
  },
  {
    id: "marketing",
    title: "Marketing",
    description: "Not currently deployed on this scope",
    disabled: false,
    defaultChecked: false,
  },
];

export default function CookieSettingsSection() {
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    essential: true,
    analytics: false,
    preferences: true,
    marketing: false,
  });

  const handleToggle = (id: string, disabled?: boolean) => {
    if (disabled) return;
    setToggles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="cookie-settings" className="scroll-mt-8 space-y-8">
      {/* Header & Subtitle */}
      <div className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
          Cookie Settings & fairness
        </h2>
        <p className="text-[14.5px] text-[#5B646B] leading-relaxed">
          Opening Cookie Settings is the primary operational action for changing
          preferences. Accept/reject-all controls belong inside the approved
          consent center; category toggles are operational controls sourced from
          the Consent Policy Registry. Essential categories may be locked only
          with a source-backed explanation — never by default convenience.
        </p>
      </div>

      {/* Settings Card List */}
      <div className="space-y-3">
        <div className="bg-white border border-slate-200/80 rounded-2xl divide-y divide-slate-100 shadow-sm overflow-hidden">
          {settingsData.map((item) => {
            const isChecked = toggles[item.id];
            return (
              <div
                key={item.id}
                className="p-5 flex items-center justify-between gap-4"
              >
                <div className="space-y-0.5 min-w-0">
                  <h3 className="text-sm font-bold text-[#0F172A]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5B646B]">{item.description}</p>
                </div>

                {/* Toggle Switch Button */}
                <button
                  type="button"
                  role="switch"
                  aria-checked={isChecked}
                  disabled={item.disabled}
                  onClick={() => handleToggle(item.id, item.disabled)}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    item.disabled
                      ? "cursor-not-allowed bg-slate-300 opacity-60"
                      : isChecked
                        ? "bg-[#0284C7]"
                        : "bg-slate-200"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                      isChecked ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            );
          })}
        </div>

        {/* Caption below controls */}
        <p className="text-[12px] text-[#94A3B8] leading-normal pt-1">
          Illustrative preview only — live controls, Save action and
          confirmation state exist in the approved Cookie Settings center, not
          on this notice.
        </p>
      </div>

      {/* Fairness Rule Callout Box */}
      <div className="relative bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm overflow-hidden">
        {/* Left Accent Bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0284C7]" />

        <p className="text-[13.5px] text-[#0F172A] leading-relaxed pl-2">
          <span className="font-bold">Fairness rule:</span> No preselected
          optional category, hidden reject option, shame copy, forced account
          creation or commercial benefit tied to consent. Withdrawal is exactly
          as discoverable as the initial choice. If Settings is temporarily
          unavailable, an approved fallback route is shown — we never claim
          preferences were saved when they weren&apos;t.
        </p>
      </div>
    </section>
  );
}
