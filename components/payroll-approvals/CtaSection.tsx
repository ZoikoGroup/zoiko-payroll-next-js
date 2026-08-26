import Link from "next/link";
import Reveal from "../ui/Reveal";

const links: { label: string; href?: string }[] = [
  { label: "Payroll Processing", href: "/product/payroll-processing" },
  { label: "Security & Trust" },
  { label: "Product Tour" },
];

export default function CtaSection() {
  return (
    <section className="bg-[#F5F8FA] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-sky-950">
            <img
              src="/images/payroll-approvals/cta-bg.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-sky-950/65" aria-hidden="true" />

            <div className="relative flex flex-col items-start justify-between gap-8 px-8 py-10 lg:flex-row lg:items-center lg:px-10">
              <div>
                <h2 className="max-w-md text-2xl font-extrabold leading-9 text-white sm:text-3xl">
                  Give Every Payroll Approval Clear Context and Authority
                </h2>
                <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
                  See how Zoiko Payroll keeps review, approval and completion visibly separate — bound to
                  the version that was actually reviewed.
                </p>
                <div className="mt-6 flex flex-wrap gap-6">
                  {links.map((link) =>
                    link.href ? (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="border-b border-white/40 pb-0.5 text-sm text-white/90 transition-colors duration-200 hover:border-white hover:text-white"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <span
                        key={link.label}
                        className="border-b border-white/40 pb-0.5 text-sm text-white/90"
                      >
                        {link.label}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/book-a-demo"
                  className="rounded-lg bg-white px-6 py-3 text-center text-sm font-semibold text-sky-950 transition-all duration-200 hover:-translate-y-0.5"
                >
                  Book a demo
                </Link>
                <span className="rounded-lg border border-white/40 px-6 py-3 text-center text-sm font-semibold text-white">
                  See the workflow
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
