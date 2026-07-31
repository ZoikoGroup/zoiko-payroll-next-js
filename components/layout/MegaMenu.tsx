import Link from "next/link";
import ArrowLink from "../ui/ArrowLink";
import { SearchIcon } from "../ui/icons";
import type { MegaMenu as MegaMenuData } from "./mega-menu-data";

function CategoryLabel({ children }: { children: string }) {
  return (
    <p className="font-mono text-[10.5px] font-normal uppercase leading-[15.75px] tracking-[0.63px] text-[#075E99]">
      {children}
    </p>
  );
}

function FeaturedVisual({ visual }: { visual: MegaMenuData["visual"] }) {
  if (visual === "product") {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-3">
        <div className="flex gap-1.5">
          <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
            Approved
          </span>
          <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-medium text-amber-700">
            Pending
          </span>
        </div>
        <div className="mt-2.5 space-y-1.5">
          <div className="h-1.5 w-full rounded-full bg-slate-100" />
          <div className="h-1.5 w-2/3 rounded-full bg-slate-100" />
        </div>
      </div>
    );
  }

  if (visual === "solutions") {
    return (
      <div className="flex gap-1.5">
        {[0, 1, 2, 3].map((step) => (
          <span
            key={step}
            className={`h-1.5 flex-1 rounded-full ${step < 2 ? "bg-brand-gradient" : "bg-slate-200"}`}
          />
        ))}
      </div>
    );
  }

  if (visual === "global-payroll") {
    return (
      <div>
        <div className="relative">
          <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            readOnly
            placeholder="Search a country or territory"
            className="w-full cursor-default rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-xs text-brand-dark placeholder:text-slate-400 focus:outline-none"
          />
        </div>
        <div className="mt-3 flex items-start gap-2">
          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
          <p className="text-xs leading-relaxed">
            <span className="font-semibold text-brand-dark">United States — Available</span>
            <br />
            <span className="text-slate-500">Fully supported since March 2025.</span>
          </p>
        </div>
      </div>
    );
  }

  if (visual === "resources") {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-3">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
          Guide · Reviewed Jul 2026
        </p>
        <div className="mt-2.5 h-1.5 w-full rounded-full bg-slate-100" />
      </div>
    );
  }

  return null;
}

export default function MegaMenu({ menu }: { menu: MegaMenuData }) {
  return (
    <div className="grid grid-cols-[repeat(3,minmax(0,1fr))_260px] gap-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/10">
      {menu.columns.map((column) => (
        <div key={column.label}>
          <CategoryLabel>{column.label}</CategoryLabel>
          <ul className="mt-4 space-y-4">
            {column.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="group block">
                  <p className="text-sm font-semibold text-brand-dark transition-colors duration-150 group-hover:text-brand">
                    {link.title}
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-500">{link.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="rounded-2xl bg-[#EAF1F6] p-5">
        <CategoryLabel>{menu.featured.eyebrow}</CategoryLabel>

        {menu.visualPosition === "after" ? (
          <>
            <h3 className="mt-3 text-base font-semibold leading-snug text-brand-dark">{menu.featured.title}</h3>
            {menu.featured.description && (
              <p className="mt-2 text-xs leading-relaxed text-slate-600">{menu.featured.description}</p>
            )}
            <div className="mt-4">
              <FeaturedVisual visual={menu.visual} />
            </div>
          </>
        ) : (
          <>
            <div className="mt-3">
              <FeaturedVisual visual={menu.visual} />
            </div>
            <h3 className="mt-4 text-base font-semibold leading-snug text-brand-dark">{menu.featured.title}</h3>
            {menu.featured.description && (
              <p className="mt-2 text-xs leading-relaxed text-slate-600">{menu.featured.description}</p>
            )}
          </>
        )}

        <ArrowLink href={menu.featured.href} className="mt-4">
          {menu.featured.linkLabel}
        </ArrowLink>
      </div>
    </div>
  );
}
