import type { Metadata } from "next";
import {
  HeroSection,
  TaskFinderSection,
  BrowseSection,
  FeaturedSection,
  LibrarySection,
  FastPathsSection,
  CanonicalWatchSection,
  EvaluationSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/resources-product-videos";

export const metadata: Metadata = {
  title: "Product Videos | Zoiko Payroll",
  description:
    "Watch short, task-based demonstrations of Zoiko Payroll workflows — each with verified scope, review date, captions, transcript and the current Product Documentation.",
};

export default function ProductVideosPage() {
  return (
    <>
      <HeroSection />
      <TaskFinderSection />
      <BrowseSection />
      <FeaturedSection />
      <LibrarySection />
      <FastPathsSection />
      <CanonicalWatchSection />
      <EvaluationSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
