import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "./Primitives";

const routes = [
  {
    title: "Contact the right team",
    description: "Route by practical need — sales, support, or a specific office.",
    action: "Contact the right team",
    href: "/contact",
    primary: true,
  },
  {
    title: "Approved commercial CTA",
    description: "Available only after office-finding utility remains fully intact.",
    action: "Book a demo",
    href: "/book-a-demo",
    primary: true,
  },
  {
    title: "Utility only",
    description: "Just needed an address or phone number? You're already done.",
    action: "Back to offices",
    href: "#office-results",
    primary: false,
  },
] as const;

export default function FinalRoutingSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 sm:gap-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start gap-3.5">
            <Eyebrow>Customer utility &amp; final routing</Eyebrow>
            <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-[#0B192C] sm:text-3xl md:text-4xl">
              A routing decision, not a generic sales banner
            </h2>
            <p className="text-sm leading-7 text-[#64748B] sm:text-base">
              Your path adjusts to intent — utility, existing customer, or
              commercial — and office context carries forward without storing
              sensitive free text.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-[0px_20px_50px_0px_rgba(10,40,65,0.15)]">
            <Image
              src="/images/offices/final-routing.webp"
              alt="A session showing how requests are routed"
              width={526}
              height={379}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {routes.map((route) => (
            <div
              key={route.title}
              className="flex flex-col gap-2 rounded-xl border border-[#E2E8F0] bg-white p-5"
            >
              <h3 className="text-base font-bold text-[#0F172A]">
                {route.title}
              </h3>
              <p className="pb-3 text-sm leading-6 text-[#64748B]">
                {route.description}
              </p>
              <Link
                href={route.href}
                className={`w-fit rounded-lg px-3.5 py-2 text-xs font-bold transition-colors ${
                  route.primary
                    ? "bg-[#0B2437] text-white hover:bg-[#14324d]"
                    : "border border-[#E2E8F0] bg-white text-[#0F172A] hover:border-[#0A78C3]"
                }`}
              >
                {route.action}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
