import Link from "next/link";
import Reveal from "../ui/Reveal";

const paths = [
  {
    title: "Researching or evaluating",
    // Figma: "Continue to product, implementation, security, pricing<br/>— or book a demo when you're ready."
    description: (
      <>Continue to product, implementation, security, pricing<br />— or book a demo when you&apos;re ready.</>
    ),
    cta: "Book a demo",
    href: "/contact",
    variant: "primary" as const,
  },
  {
    title: "Existing customer",
    // Figma: "Route to documentation, help or support before sales —<br/>you're never forced into a demo-first path."
    description: (
      <>Route to documentation, help or support before sales —<br />you&apos;re never forced into a demo-first path.</>
    ),
    cta: "Explore documentation",
    href: "/resources/documentation",
    variant: "secondary" as const,
  },
];

export default function ChoosePathSection() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <Reveal className="mx-auto flex max-w-[1320px] flex-col items-center gap-7 px-6 md:px-24">
        {/* Header */}
        <div className="flex max-w-[680px] flex-col items-center gap-4">
          <div className="flex w-full items-center justify-center gap-1.5">
            <span className="text-xs font-bold text-sky-600">/</span>
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-sky-600">
              Choose your path
            </span>
          </div>
          {/* Figma: "Context-aware next steps — never one<br/>generic sales banner" */}
          <h2 className="w-full pb-[0.58px] text-center text-3xl font-extrabold leading-10 text-sky-950">
            Context-aware next steps — never one
            <br />generic sales banner
          </h2>
        </div>

        {/* Path cards */}
        <div className="flex w-full max-w-[820px] flex-col items-stretch justify-center gap-5 md:flex-row">
          {paths.map((path) => (
            <div
              key={path.title}
              className={`flex flex-1 flex-col items-start gap-2 rounded-2xl px-6 pb-7 pt-6 ${
                path.variant === "primary"
                  ? "bg-white outline outline-1 outline-offset-[-1px] outline-slate-200"
                  : "bg-sky-100 outline outline-1 outline-offset-[-1px] outline-sky-600"
              }`}
            >
              <h3 className="text-base font-extrabold leading-7 text-sky-950">
                {path.title}
              </h3>
              <p className="pb-2 text-xs font-normal leading-5 text-gray-600">
                {path.description}
              </p>
              {path.variant === "primary" ? (
                <Link
                  href={path.href}
                  className="flex items-center justify-center rounded-lg px-6 py-3 shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] transition-opacity duration-200 hover:opacity-90"
                  style={{ backgroundImage: "linear-gradient(78deg,rgba(62,163,224,1),rgba(11,69,115,1))" }}
                >
                  <span className="text-center text-sm font-bold leading-6 text-white">{path.cta}</span>
                </Link>
              ) : (
                <Link
                  href={path.href}
                  className="flex items-center justify-center rounded-lg bg-white px-6 py-3 outline outline-1 outline-offset-[-1px] outline-slate-200 transition-colors duration-200 hover:bg-slate-50"
                >
                  <span className="text-center text-sm font-bold leading-6 text-sky-950">{path.cta}</span>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Figma: "...routes only through our approved customer<br/>program — never assumed or auto-enrolled." */}
        <div className="w-full max-w-[680px] pt-[3.39px] pb-0.5">
          <p className="text-center text-xs font-normal leading-5 text-gray-400">
            Interested in sharing your own story? Advocacy participation routes only through our approved customer
            <br />program — never assumed or auto-enrolled.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
