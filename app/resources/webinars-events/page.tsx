import type { Metadata } from "next";
import {
  HeroSection,
  EventStatusSection,
  FeaturedSessionSection,
  FindSessionSection,
  SessionCardSystemSection,
  EventDetailSection,
  RegistrationSection,
  LiveEventAccessSection,
  RecoveryReplaySection,
  FaqSection,
  CtaSection,
} from "@/components/webinars-events";

export const metadata: Metadata = {
  title: "Webinars & Events | Zoiko Payroll",
  description:
    "Live sessions and on-demand recordings covering payroll operations, compliance, implementation and platform capabilities — every lifecycle state clearly labeled.",
};

export default function WebinarsEventsPage() {
  return (
    <div className="relative w-full bg-gray-50">
      <HeroSection />
      <EventStatusSection />
      <FeaturedSessionSection />
      <FindSessionSection />
      <SessionCardSystemSection />
      <EventDetailSection />
      <RegistrationSection />
      <LiveEventAccessSection />
      <RecoveryReplaySection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
