"use client";

import React from "react";
import {
  CookieNoticeHero,
  TableOfContentsSidebar,
  ContinuedSidebar,
  CategoriesInventorySection,
  CookieSettingsSection,
  SimilarTechnologiesSection,
  ConsentModelSection,
  DurationGovernanceSection,
  PrivacyRegionalSection,
  VersionsFaqSection,
  ContactSection,
  ChangePreferencesCallout,
} from "@/components/cookie-notice";

export default function CookieNoticePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Header Section */}
      <CookieNoticeHero />

      {/* Main Content Area */}
      <div className="w-full bg-[#F9FAFB] px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
        {/* FIRST BLOCK: Primary Navigation & Initial Sections */}
        <div className="flex max-w-6xl mx-auto flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
          {/* First Sidebar Container */}
          <div className="w-full lg:w-72 shrink-0 lg:sticky lg:top-8">
            <TableOfContentsSidebar />
          </div>

          {/* First Group of Content Sections */}
          <div className="min-w-0 flex-1 space-y-16">
            <CategoriesInventorySection />
            <CookieSettingsSection />
            <SimilarTechnologiesSection />
            <ConsentModelSection />
          </div>
        </div>

        {/* SECOND BLOCK: Continued Navigation & Subsequent Sections */}
        <div className="flex max-w-6xl mx-auto flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
          {/* Second Sidebar Container */}
          <div className="w-full lg:w-72 shrink-0 lg:sticky lg:top-8">
            <ContinuedSidebar />
          </div>

          {/* Second Group of Content Sections */}
          <div className="min-w-0 flex-1 space-y-16">
            <DurationGovernanceSection />
            <PrivacyRegionalSection />
            <VersionsFaqSection />
            <ContactSection />
          </div>
        </div>
      </div>
      <ChangePreferencesCallout />
    </main>
  );
}
