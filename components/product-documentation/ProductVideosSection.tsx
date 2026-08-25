import Reveal from "../ui/Reveal";
import ArrowLink from "../ui/ArrowLink";
import Eyebrow from "../home/Eyebrow";
import { PlayIcon } from "../ui/icons";

const videos = [
  {
    title: "How to run your first payroll cycle",
    meta: "Payroll Processing · 4 min",
    image: "/images/product-documentation/video-payroll-cycle.png",
  },
  {
    title: "Configuring your approval workflow",
    meta: "Approvals · 3 min",
    image: "/images/product-documentation/video-approval-workflow.png",
  },
  {
    title: "Connecting your first integration",
    meta: "Integrations · 5 min",
    image: "/images/product-documentation/video-integration.png",
  },
];

export default function ProductVideosSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <Eyebrow>Product videos</Eyebrow>
          <ArrowLink href="/resources/product-videos" className="hidden sm:inline-flex">
            Show all product videos
          </ArrowLink>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {videos.map((video, index) => (
            <Reveal key={video.title} delay={index * 60}>
              <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/10">
                <div className="relative">
                  <img
                    src={video.image}
                    alt={video.title}
                    loading="lazy"
                    className="h-40 w-full object-cover"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-brand-dark">
                      <PlayIcon className="ml-0.5 h-4.5 w-4.5" />
                    </span>
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-brand-dark">{video.title}</h3>
                  <p className="mt-1 text-xs text-slate-500">{video.meta}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <ArrowLink href="/resources/product-videos" className="mt-4 sm:hidden">
          Show all product videos
        </ArrowLink>
      </div>
    </section>
  );
}
