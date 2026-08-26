import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const paths = [
  {
    initial: "S",
    title: "Current service health",
    description: "System Status — wins over static trust copy.",
    href: "/resources/system-status",
  },
  {
    initial: "D",
    title: "Current product behavior",
    description: "Product Documentation.",
    href: "/resources/documentation",
  },
  {
    initial: "R",
    title: "Recent changes",
    description: "Release Notes.",
    href: "/resources/release-notes",
  },
  {
    initial: "H",
    title: "Customer support",
    description: "Help Center / Sign in.",
    href: "/resources/help-center",
  },
  {
    initial: "V",
    title: "Report a vulnerability",
    description: "Responsible Disclosure — immediate, protected route.",
    href: "/product/security",
  },
];

export default function FastPathsSection() {
  return (
    <section className="bg-slate-100 py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Changes, support &amp; responsible disclosure</Eyebrow>
          <h2 className="mt-3.5 max-w-[600px] text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Fast paths that never require booking a demo.
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {paths.map((path, index) => (
            <Reveal key={path.title} delay={index * 60}>
              <Link
                href={path.href}
                className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30"
              >
                <span className="flex size-8 items-center justify-center rounded-lg bg-blue-50 text-xs font-bold text-sky-700">
                  {path.initial}
                </span>
                <span className="mt-5 block text-xs font-bold leading-5 text-brand-dark">
                  {path.title}
                </span>
                <span className="mt-1.5 block text-xs leading-4 text-slate-600">
                  {path.description}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
