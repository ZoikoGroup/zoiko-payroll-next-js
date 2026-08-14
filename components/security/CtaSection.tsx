import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const links: { label: string; href?: string }[] = [
  { label: "Trust Center" },
  { label: "Integrations", href: "/integrations" },
  { label: "Implementation", href: "/implementation" },
  { label: "Pricing" },
];

export default function CtaSection() {
  return (
    <section className="bg-[#F6F8FC] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-[#0B1A33] via-[#0F2142] to-[#16294D] px-6 py-14 text-center sm:px-12">
            <Eyebrow tone="light" center>
              Ready to evaluate?
            </Eyebrow>
            <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-extrabold leading-tight text-white">
              Evaluate payroll controls with the evidence your team needs.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-6 text-white/70">
              A guided walkthrough of access, decision rights, audit evidence and current assurance
              artifacts — mapped to your review requirements.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/book-a-demo"
                className="flex min-h-11 items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                Book a demo
              </Link>
              <Link
                href="/company/contact"
                className="flex min-h-11 items-center justify-center rounded-lg border border-[#565F6E] bg-[#3D4655] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                Contact sales
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 border-t border-white/10 pt-6">
              {links.map((link) =>
                link.href ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <span key={link.label} className="text-sm text-white/60">
                    {link.label}
                  </span>
                ),
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
