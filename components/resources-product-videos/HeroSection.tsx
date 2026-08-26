import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { PlayIcon } from "../ui/icons";

const previews = [
  {
    image: "/images/resources-product-videos/hero-review-approve.png",
    alt: "A reviewer approving a payroll run",
    title: "Review & approve a run",
    duration: "4:12",
    tags: ["Approvals", "CC"],
  },
  {
    image: "/images/resources-product-videos/hero-prepare-inputs.png",
    alt: "A payroll specialist preparing period inputs",
    title: "Prepare payroll inputs",
    duration: "3:05",
    tags: ["Processing", "CC"],
  },
];

export default function HeroSection() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <Reveal>
          <Eyebrow>Product Videos</Eyebrow>
          <h1 className="mt-3.5 max-w-[520px] text-3xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
            See Zoiko Payroll tasks in action.
          </h1>
          <p className="mt-4 max-w-[560px] text-base leading-6 text-slate-600">
            Find short, task-based demonstrations of Zoiko Payroll workflows. Each Current video
            shows what it covers, when it was reviewed, its accessible viewing options, and the
            current Product Documentation to use for exact instructions.
          </p>

          <div className="mt-6 max-w-[560px] rounded-[10px] border border-sky-100 bg-blue-50 px-4 py-4">
            <p className="text-xs leading-5 text-brand-dark">
              <span className="font-bold">Boundary:</span> A recorded demonstration is not proof of
              current service health, product availability, plan entitlement, jurisdiction support
              or compliance status.
            </p>
          </div>

          <Link
            href="#task-finder"
            className="mt-7 inline-flex w-full justify-center rounded-lg bg-brand-gradient px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-brand/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/40 sm:w-auto"
          >
            Find a product demonstration
          </Link>
        </Reveal>

        <Reveal delay={140} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:p-5">
          <p className="text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
            Synthetic catalog preview
          </p>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {previews.map((preview) => (
              <div
                key={preview.title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="relative">
                  <img
                    src={preview.image}
                    alt={preview.alt}
                    loading="lazy"
                    className="h-44 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/5 to-brand-dark/40" />

                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex size-11 items-center justify-center rounded-full bg-white/90 shadow-lg">
                      <PlayIcon className="h-4 w-4 text-brand-dark" />
                    </span>
                  </span>

                  <span className="absolute left-2 top-2 rounded-[20px] bg-green-100 px-2.5 py-1 text-[10px] font-bold leading-4 text-emerald-600">
                    Current
                  </span>
                  <span className="absolute bottom-2 right-2 rounded-[5px] bg-brand-dark/80 px-2 py-0.5 text-xs font-bold leading-4 text-white">
                    {preview.duration}
                  </span>
                </div>

                <div className="p-4">
                  <p className="text-sm font-bold leading-6 text-brand-dark">{preview.title}</p>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {preview.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-[20px] border border-slate-200 bg-slate-100 px-2.5 py-1 text-[10px] leading-4 text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
