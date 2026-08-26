import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

export default function EvaluationSection() {
  return (
    <section className="bg-[#EAF0FA] py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal className="grid grid-cols-1 overflow-hidden rounded-2xl bg-brand-dark lg:grid-cols-2">
          <div className="p-6 sm:p-10">
            <Eyebrow tone="light">Evaluation</Eyebrow>
            <h2 className="mt-3.5 text-xl font-extrabold leading-tight tracking-tight text-white sm:text-2xl">
              Want to see more of what Zoiko Payroll can do?
            </h2>
            <p className="mt-4 max-w-[460px] text-sm leading-6 text-slate-300">
              Explore the platform, review pricing, or book a walkthrough tailored to your operating
              model — after you&apos;ve seen how the task actually works.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/product"
                className="rounded-lg bg-brand-gradient px-6 py-3 text-center text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
              >
                Explore Zoiko Payroll
              </Link>
              <Link
                href="/book-a-demo"
                className="rounded-lg border border-white/20 px-6 py-3 text-center text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40"
              >
                Book a demo
              </Link>
            </div>
          </div>

          <img
            src="/images/resources-product-videos/evaluation.png"
            alt="A payroll professional exploring the product after watching a demonstration"
            loading="lazy"
            className="h-56 w-full object-cover sm:h-72 lg:h-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
