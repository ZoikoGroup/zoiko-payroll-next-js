import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const collections = [
  {
    title: "Reporting foundations",
    description: "Definitions, scope, period and source context.",
    image: "/images/resources-reporting/collection-foundations.png",
    alt: "Hands reviewing figures on paper beside a laptop",
    href: "/product/reporting",
  },
  {
    title: "Exports & sharing",
    description: "Least privilege, scope and safe handling.",
    image: "/images/resources-reporting/collection-exports.png",
    alt: "A person using a calculator to check exported totals",
    href: "#export-guidance",
  },
  {
    title: "Audit & review",
    description: "Traceability, evidence and access boundaries.",
    image: "/images/resources-reporting/collection-audit.png",
    alt: "A team reviewing payroll evidence in a meeting room",
    href: "/resources/security-trust",
  },
  {
    title: "Visual learning",
    description: "Task-based reporting videos with captions.",
    image: "/images/resources-reporting/collection-visual-learning.png",
    alt: "Colleagues watching a product walkthrough on laptops",
    href: "/resources/product-videos",
  },
];

export default function CollectionsSection() {
  return (
    <section className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-center text-center">
          <Eyebrow>Curated reporting resources</Eyebrow>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Four collections to go deeper.
          </h2>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((collection, index) => (
            <Reveal key={collection.title} delay={index * 80} className="h-full">
              <Link
                href={collection.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg"
              >
                <img
                  src={collection.image}
                  alt={collection.alt}
                  loading="lazy"
                  className="h-32 w-full object-cover"
                />
                <div className="px-5 py-5">
                  <p className="text-sm font-bold leading-6 text-brand-dark transition-colors duration-200 group-hover:text-brand">
                    {collection.title}
                  </p>
                  <p className="mt-1.5 text-xs leading-5 text-slate-600">
                    {collection.description}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
