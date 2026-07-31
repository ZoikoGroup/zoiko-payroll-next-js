import Link from "next/link";
import { ArrowRightIcon } from "./icons";

type ArrowLinkProps = {
  href: string;
  children: string;
  className?: string;
};

export default function ArrowLink({ href, children, className = "" }: ArrowLinkProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-dark transition-colors duration-200 hover:text-brand ${className}`}
    >
      {children}
      <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  );
}
