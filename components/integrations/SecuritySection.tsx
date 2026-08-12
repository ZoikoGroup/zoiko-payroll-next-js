import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const safeguards = [
  {
    icon: "/images/integrations/icon-least-privilege.svg",
    title: "Least privilege",
    description: "Scoped authorization and minimal data access per connection.",
  },
  {
    icon: "/images/integrations/icon-secret-handling.svg",
    title: "Secret handling",
    description: "Credentials, tokens and keys are never shown in screenshots, logs or analytics.",
  },
  {
    icon: "/images/integrations/icon-audit-trail.svg",
    title: "Audit trail",
    description: "Configuration changes, activations and mapping versions are recorded.",
  },
];

export default function SecuritySection() {
  return (
    <section className="border-b border-slate-200 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Security, privacy &amp; audit</Eyebrow>
          <h2 className="mt-3.5 text-3xl font-extrabold leading-10 text-slate-900">
            Integration-specific safeguards, without exposing secrets.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {safeguards.map((safeguard, index) => (
            <Reveal key={safeguard.title} delay={index * 70}>
              <div className="h-full rounded-xl border border-slate-200 bg-white p-6">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
                  <img src={safeguard.icon} alt="" aria-hidden="true" className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-sm font-bold text-slate-900">{safeguard.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{safeguard.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
