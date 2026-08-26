import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import VideoCard, { type Video } from "./VideoCard";

const videos: Video[] = [
  {
    image: "/images/resources-product-videos/featured-review-approve.png",
    alt: "A reviewer checking a payroll run with a colleague",
    title: "Review and approve a payroll run",
    summary: "See where a reviewer checks the run and records an approval decision.",
    duration: "4:12",
    state: "Current",
    tags: ["Payroll Approvals", "Reviewed Aug 2026", "Captions", "Transcript"],
    watchHref: "#canonical-watch-page",
    docsHref: "/resources/documentation",
  },
  {
    image: "/images/resources-product-videos/featured-hris-source.png",
    alt: "A team mapping an HRIS source",
    title: "Connect and map an HRIS source",
    summary: "See how a source field is mapped and reconciled against the payroll contract.",
    duration: "5:40",
    state: "Current",
    tags: ["Integrations", "Reviewed Jul 2026", "Captions", "Transcript"],
    watchHref: "#canonical-watch-page",
    docsHref: "/product/integrations",
  },
  {
    image: "/images/resources-product-videos/featured-employee-records.png",
    alt: "A specialist reviewing employee payroll records",
    title: "Review employee payroll records",
    summary: "See how published and superseded record versions are distinguished.",
    duration: "3:28",
    state: "Current",
    tags: ["Employee Records", "Reviewed Aug 2026", "Captions", "Transcript"],
    watchHref: "#canonical-watch-page",
    docsHref: "/product/employee-payroll-records",
  },
];

export default function FeaturedSection() {
  return (
    <section className="bg-slate-100 py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Featured / recently reviewed</Eyebrow>
          <h2 className="mt-3.5 max-w-[600px] text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Editorially current, not algorithmically guessed.
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, index) => (
            <VideoCard key={video.title} video={video} delay={index * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
