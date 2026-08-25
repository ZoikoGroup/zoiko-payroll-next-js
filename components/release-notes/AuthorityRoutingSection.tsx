import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { CardIcon, InfoIcon, ClockIcon, DatabaseIcon, LockIcon } from "../ui/icons";

const destinations = [
  {
    icon: CardIcon,
    title: "Product Documentation",
    description: "Current product behavior.",
    cta: "Open Docs",
    href: "/resources/documentation",
  },
  {
    icon: InfoIcon,
    title: "Help Center",
    description: "Account-specific support.",
    cta: "Open Help",
    href: "/resources/help-center",
  },
  {
    icon: ClockIcon,
    title: "System Status",
    description: "Live service health.",
    cta: "Check Status",
    href: "/resources/system-status",
  },
  {
    icon: DatabaseIcon,
    title: "Implementation",
    description: "Migration & launch authority.",
    cta: "Open Implementation",
    href: "/implementation",
  },
  {
    icon: LockIcon,
    title: "Security & Trust",
    description: "Evidence & controls.",
    cta: "Open Security",
    href: "/security",
  },
];

export default function AuthorityRoutingSection() {
  return (
    <section className="border-t border-[#E1E8F0] bg-[#F8FAFC] py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-[640px] text-center">
          <Eyebrow center>Current authority</Eyebrow>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-9 tracking-tight text-[#0A2E4B] sm:text-3xl">
            A routing system — not a sales banner.
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#4A5565] sm:text-base">
            Shipped change, not launch theater. Docs, Help, Status and Implementation come before any
            demo for operational intent.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {destinations.map((destination, index) => (
            <Reveal key={destination.title} delay={index * 70} className="h-full">
              <div className="flex h-full flex-col items-center rounded-lg border border-[#E1E8F0] bg-white px-4 py-6 text-center">
                <span className="flex size-9 items-center justify-center rounded-full border border-[#0A8FD0]">
                  <destination.icon className="h-4 w-4 text-[#0A8FD0]" />
                </span>
                <p className="mt-4 text-sm font-bold leading-5 text-[#0A2E4B]">{destination.title}</p>
                <p className="mt-1.5 text-xs leading-5 text-[#8592A0]">{destination.description}</p>
                <Link
                  href={destination.href}
                  className="mt-auto w-full rounded-lg border border-[#E1E8F0] px-3 py-3 text-sm font-bold leading-5 text-[#0A2E4B] transition-colors duration-200 hover:border-[#0A8FD0] hover:text-[#0A8FD0]"
                >
                  {destination.cta}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
