import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const pathways = [
  {
    image: "/images/company-partners/pathway-technology.png",
    alt: "A hand using a tablet showing live data",
    title: "Technology",
    description:
      "For approved technology and platform relationships that may support interoperability, data exchange, identity or finance/time/HR ecosystems.",
    authority: "Product Integrations remains the current capability authority.",
  },
  {
    image: "/images/company-partners/pathway-service-delivery.png",
    alt: "A consultant reviewing documents beside a laptop",
    title: "Service Delivery",
    description:
      "For approved implementation, payroll service, local delivery, managed-service or specialist operational relationships.",
    authority: "Coverage / Implementation / contract authorities own current service availability.",
  },
  {
    image: "/images/company-partners/pathway-ecosystem.png",
    alt: "A team reviewing reporting dashboards in a meeting",
    title: "Ecosystem",
    description:
      "For approved channel, referral, advisory, industry, standards, marketplace or broader collaboration relationships.",
    authority: "Exact subtype and commercial authority must be explicit.",
  },
];

export default function PathwaysSection() {
  return (
    <section id="partner-pathways" className="scroll-mt-24 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-[680px] text-center">
          <div className="flex justify-center">
            <Eyebrow>Choose a partnership pathway</Eyebrow>
          </div>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Three verified relationship categories
          </h2>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pathways.map((pathway, index) => (
            <Reveal
              key={pathway.title}
              delay={index * 80}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <img
                src={pathway.image}
                alt={pathway.alt}
                loading="lazy"
                className="h-52 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <p className="text-base font-extrabold leading-7 text-brand-dark">
                  {pathway.title}
                </p>
                <p className="mt-2 text-sm leading-5 text-slate-600">{pathway.description}</p>
                <p className="mt-auto border-t border-slate-200 pt-3 text-xs leading-5 text-slate-400">
                  {pathway.authority}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
