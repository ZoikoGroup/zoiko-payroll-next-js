import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import VideoCard, { type Video } from "./VideoCard";

const videos: Video[] = [
  {
    image: "/images/resources-product-videos/library-prepare-inputs.png",
    alt: "A payroll specialist gathering period inputs",
    title: "Prepare payroll inputs for a period",
    summary: "See how earnings, adjustments and absence inputs are gathered.",
    duration: "3:05",
    state: "Current",
    tags: ["Processing", "Captions"],
    watchHref: "#canonical-watch-page",
  },
  {
    image: "/images/resources-product-videos/library-recurring-deduction.png",
    alt: "Configuring a recurring deduction",
    title: "Add a recurring deduction",
    summary: "See where a deduction is configured and dated for effect.",
    duration: "2:47",
    state: "Current",
    tags: ["Deductions", "Captions"],
    watchHref: "#canonical-watch-page",
  },
  {
    image: "/images/resources-product-videos/library-export-register.png",
    alt: "Exporting a scoped payroll report",
    title: "Export a payroll register",
    summary: "See how a scoped report is generated and exported.",
    duration: "3:52",
    state: "Current",
    tags: ["Reporting", "Captions"],
    watchHref: "#canonical-watch-page",
  },
  {
    image: "/images/resources-product-videos/library-validation-exception.png",
    alt: "Triaging a flagged validation exception",
    title: "Resolve a validation exception",
    summary: "See how a flagged item is triaged and cleared before review.",
    duration: "4:35",
    state: "Current",
    tags: ["Processing", "Captions"],
    watchHref: "#canonical-watch-page",
  },
  {
    image: "/images/resources-product-videos/library-legal-entity.png",
    alt: "Scoping a new legal entity",
    title: "Set up a new legal entity",
    summary: "See how an entity is scoped before payroll onboarding.",
    duration: "6:10",
    state: "Review Due",
    tags: ["Implementation", "Captions"],
    watchHref: "#canonical-watch-page",
  },
  {
    image: "/images/resources-product-videos/library-role-based-access.png",
    alt: "A team reviewing role-based access",
    title: "Review role-based access",
    summary: "See how scoped roles govern what a user can see and do.",
    duration: "3:15",
    state: "Current",
    tags: ["Security & Trust", "Captions"],
    watchHref: "#canonical-watch-page",
  },
];

export default function LibrarySection() {
  return (
    <section id="video-library" className="scroll-mt-24 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Video library</Eyebrow>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            The current public catalog.
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, index) => (
            <VideoCard key={video.title} video={video} delay={index * 60} />
          ))}
        </div>

        <Reveal delay={200} className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-bold text-brand-dark">How video currency works</p>
          <p className="mt-2.5 text-sm leading-6 text-slate-600">
            &ldquo;Current&rdquo; means the published version has passed product-behavior, UI-label,
            accessibility and safety review against its declared applicability. Product changes can
            move a video into review. If exact steps matter, follow the linked current Product
            Documentation. Report a mismatch through the approved content-feedback route.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
