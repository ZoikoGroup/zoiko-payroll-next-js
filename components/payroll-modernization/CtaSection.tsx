import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const links = [
  { label: "Payroll Migration", href: "/solutions/payroll-migration" },
  { label: "Integrations", href: "/product/integrations" },
  { label: "Security & Trust", href: "/product/security" },
  { label: "Pricing", href: "/pricing" },
];

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#0B1A33] py-16 sm:py-20">
      <img
        src="/images/payroll-modernization/cta-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-10"
      />
      <div
        className="absolute inset-0 bg-radial-[at_50%_0%] from-blue-500/20 to-transparent to-70%"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow tone="light" center>
            Ready to modernize payroll?
          </Eyebrow>
          <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-extrabold leading-tight text-white">
            Build a payroll transformation you can prove.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-6 text-white/70">
            See the roadmap, control center, migration mapping and cutover model mapped to your
            entities and jurisdictions.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/book-a-demo"
              className="flex min-h-11 items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              Book a demo
            </Link>
            <Link
              href="#find-your-solution"
              className="flex min-h-11 items-center justify-center rounded-lg border border-[#565F6E] bg-[#3D4655] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              Find your solution
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 border-t border-white/10 pt-6">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
