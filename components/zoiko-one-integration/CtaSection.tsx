import Link from "next/link";
import Reveal from "../ui/Reveal";

const links = [
  { label: "Payroll Processing", href: "/payroll-processing" },
  { label: "Security & Trust", href: "/security" },
];

export default function CtaSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-[#0D2A45] to-[#134063] px-8 py-12 lg:px-12">
            {/* The navy wash is already baked into the artwork, so no overlay is layered on top. */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/zoiko-one-integration/cta-bg.png')" }}
              aria-hidden="true"
            />

            <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="max-w-md text-3xl font-extrabold leading-10 text-white">
                  Keep Payroll Focused. Connect the Business Context You Actually Need.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
                  See how Zoiko Payroll stays authoritative and in control, however much — or little — of
                  Zoiko One you choose to connect.
                </p>
                <div className="mt-6 flex flex-wrap gap-6">
                  {links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="border-b border-white/40 pb-0.5 text-sm text-white/90 transition-colors duration-200 hover:border-white hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <Link
                  href="/book-a-demo"
                  className="flex min-h-11 items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-bold text-sky-950 transition-all duration-200 hover:-translate-y-0.5"
                >
                  Book a demo
                </Link>
                <Link
                  href="/company/contact"
                  className="flex min-h-11 items-center justify-center rounded-lg border border-white/40 px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                  Discuss Zoiko One integration
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
