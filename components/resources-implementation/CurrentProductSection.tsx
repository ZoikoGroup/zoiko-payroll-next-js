import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const destinations = [
  {
    badge: "D",
    title: "Product Documentation",
    description: "Current instructions.",
    href: "/resources/documentation",
  },
  {
    badge: "H",
    title: "Help Center",
    description: "Troubleshoot an issue.",
    href: "/resources/help-center",
  },
  {
    badge: "S",
    title: "System Status",
    description: "Is it down right now?",
    href: "/resources/system-status",
  },
  {
    badge: "R",
    title: "Release Notes",
    description: "What shipped recently.",
    href: "/resources/release-notes",
  },
  {
    badge: "V",
    title: "Product Videos",
    description: "Watch a task.",
    href: "/resources/documentation",
  },
  {
    badge: "→",
    title: "Sign in",
    description: "Return to your workspace.",
    href: "/sign-in",
  },
];

export default function CurrentProductSection() {
  return (
    <section className="bg-[#F9FAFB] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Current product, support, change &amp; status</Eyebrow>
          <h2 className="mt-3.5 max-w-[640px] text-2xl font-bold leading-tight tracking-tight text-[#0A2E4B] sm:text-3xl sm:leading-10">
            Existing customers never need a demo for this
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {destinations.map((destination, index) => (
            <Reveal key={destination.title} delay={index * 60}>
              <Link
                href={destination.href}
                className="flex h-full flex-col rounded-xl border border-slate-200 bg-white px-4 pb-4 pt-4 transition-colors duration-200 hover:border-brand/40"
              >
                <span
                  aria-hidden="true"
                  className="flex size-7 items-center justify-center rounded-md bg-blue-50 text-xs font-bold text-sky-700"
                >
                  {destination.badge}
                </span>
                <p className="mt-3 text-sm font-bold leading-5 text-[#0A2E4B]">
                  {destination.title}
                </p>
                <p className="mt-1 text-xs leading-5 text-gray-600">{destination.description}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
