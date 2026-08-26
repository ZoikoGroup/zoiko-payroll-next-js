import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const paths = [
  {
    initial: "D",
    title: "Product Documentation",
    description: "Current fields, procedures, states and recovery.",
    href: "/resources/documentation",
  },
  {
    initial: "H",
    title: "Help Center",
    description: "Troubleshooting and secure support routes.",
    href: "/resources/help-center",
  },
  {
    initial: "R",
    title: "Release Notes",
    description: "Shipped changes that may explain a video update.",
    href: "/resources/release-notes",
  },
  {
    initial: "S",
    title: "System Status",
    description: "Current and historical service health.",
    href: "/resources/system-status",
  },
];

export default function FastPathsSection() {
  return (
    <section className="bg-[#EAF0FA] py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Existing-customer fast paths</Eyebrow>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Operational intent outranks sales.
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {paths.map((path, index) => (
            <Reveal key={path.title} delay={index * 70}>
              <Link
                href={path.href}
                className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30"
              >
                <span className="flex size-9 items-center justify-center rounded-[10px] bg-blue-50 text-base font-bold text-sky-700">
                  {path.initial}
                </span>
                <span className="mt-4 block text-sm font-bold leading-5 text-brand-dark">
                  {path.title}
                </span>
                <span className="mt-1.5 block text-xs leading-5 text-slate-600">
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
