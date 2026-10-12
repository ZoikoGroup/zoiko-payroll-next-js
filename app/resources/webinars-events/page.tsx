import {
  WebinarsAndEventsHero,
  EventStatusSection,
  FeaturedSessionSection,
  FindASessionSection,
  SessionCardSystemSection,
  EventDetailExperienceSection,
  RegistrationSection,
  LiveEventAccessSection,
  RecoveryAndReplaySection,
  FAQAndCTABannerSection,
} from "@/components/webinars-events";

export default function WebinarEventsPage() {
  return (
    <main>
      <WebinarsAndEventsHero />
      <EventStatusSection />
      <FeaturedSessionSection />
      <FindASessionSection />
      <SessionCardSystemSection />
      <EventDetailExperienceSection />
      <RegistrationSection />
      <LiveEventAccessSection />
      <RecoveryAndReplaySection />
      <FAQAndCTABannerSection />
    </main>
  );
}
