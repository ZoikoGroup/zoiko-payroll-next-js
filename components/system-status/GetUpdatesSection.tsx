import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { MailIcon, RssIcon, WebhookIcon } from "../ui/icons";

const channels = [
  {
    icon: MailIcon,
    title: "Email updates",
    status: "Available",
    statusTone: "bg-emerald-50 text-emerald-700",
    description: "Get notified about incidents and maintenance affecting your region.",
  },
  {
    icon: RssIcon,
    title: "RSS / Atom feed",
    status: "Available",
    statusTone: "bg-emerald-50 text-emerald-700",
    description: "Subscribe to the durable status feed for automated monitoring.",
  },
  {
    icon: WebhookIcon,
    title: "Webhook",
    status: "Unavailable",
    statusTone: "bg-slate-100 text-slate-500",
    description: "Not currently enabled for this account tier.",
  },
];

export default function GetUpdatesSection() {
  return (
    <section id="get-updates" className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Get updates + support handoff</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Subscriptions stay secondary to current health.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Only channels actually enabled are shown. No login or lead-capture gate for public status
            or support.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {channels.map((channel, index) => (
            <Reveal key={channel.title} delay={index * 60} className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2 text-sm font-semibold text-brand-dark">
                  <channel.icon className="h-4.5 w-4.5 text-brand" />
                  {channel.title}
                </span>
                <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${channel.statusTone}`}>
                  {channel.status}
                </span>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{channel.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={220}
          className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 sm:flex-row sm:items-center"
        >
          <div>
            <h3 className="text-sm font-semibold text-brand-dark">Still having trouble?</h3>
            <p className="mt-1 text-sm text-slate-600">
              Check the Help Center or contact support — no login required to reach us.
            </p>
          </div>
          <Link
            href="/company/contact"
            className="bg-brand-gradient shrink-0 rounded-lg px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/40"
          >
            Contact support
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
