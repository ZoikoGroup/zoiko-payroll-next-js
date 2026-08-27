import {
  ContactSection,
  ChooseYourRouteSection,
  OfficesContactSection,
  CommonQuestionsSection,
} from "@/components/contact";

export default function ContactPage() {
  return (
    <main>
      <ContactSection />
      <ChooseYourRouteSection />
      <OfficesContactSection />
      <CommonQuestionsSection />
    </main>
  );
}
