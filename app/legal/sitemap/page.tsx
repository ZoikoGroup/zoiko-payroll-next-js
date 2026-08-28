import type { Metadata } from "next";
import { SitemapHero, SitemapExplorer } from "@/components/sitemap";

export const metadata: Metadata = {
  title: "Sitemap | Zoiko Payroll",
  description:
    "A complete, human-readable index of Zoiko Payroll public pages — browse by category or A-Z, or search by page name.",
};

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-white">
      <SitemapHero />
      <SitemapExplorer />
    </div>
  );
}
