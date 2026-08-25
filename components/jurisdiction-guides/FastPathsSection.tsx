import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const paths = [
  {
    badge: "D",
    title: "Product Documentation",
    description: "Current configuration and workflow.",
    href: "/resources/documentation",
  },
  {
    badge: "H",
    title: "Help Center",
    description: "Support-first — no demo gate.",
    href: "/resources/help-center",
  },
  {
    badge: "R",
    title: "Release Notes",
    description: "Recent shipped changes.",
    href: "/resources/release-notes",
  },
  {
    badge: "S",
    title: "System Status",
    description: "Current and historical service health.",
    href: "/resources/system-status",
  },
];

export default function FastPathsSection() {
  return (
    <section className="bg-[#F9FAFB] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Existing-customer fast paths</Eyebrow>
          <h2 className="mt-3.5 max-w-[640px] text-2xl font-bold leading-tight tracking-tight text-[#0A2E4B] sm:text-3xl sm:leading-10">
            Switch from learning to operating in one click
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {paths.map((path, index) => (
            <Reveal key={path.title} delay={index * 70} className="h-full">
              <Link
                href={path.href}
                className="flex h-full flex-col rounded-xl border border-slate-200 bg-white px-4 py-4 transition-colors duration-200 hover:border-brand/40"
              >
                <span
                  aria-hidden="true"
                  className="flex size-7 items-center justify-center rounded-md bg-blue-50 text-xs font-bold text-sky-700"
                >
                  {path.badge}
                </span>
                <p className="mt-3 text-sm font-bold leading-5 text-[#0A2E4B]">{path.title}</p>
                <p className="mt-1 text-xs leading-5 text-gray-600">{path.description}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
