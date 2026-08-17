import type { SVGProps } from "react";

/** Icons specific to this page; shared ones live in components/ui/icons.tsx. */

export function BrowserIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.33} {...props}>
      <rect x="2" y="2.67" width="12" height="10.67" rx="1.33" />
      <path d="M2 6h12" />
    </svg>
  );
}

export function LinesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.33} {...props}>
      <path d="M2.67 4h10.66M2.67 8h10.66M2.67 12h10.66" />
    </svg>
  );
}

export function CheckRingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.33} {...props}>
      <path d="M6 8l1.33 1.33L10 6.67" />
      <circle cx="8" cy="8" r="6" />
    </svg>
  );
}

export function AlertTriangleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M8.58 3.25 1.5 15a1.67 1.67 0 0 0 1.42 2.5h14.16A1.67 1.67 0 0 0 18.5 15L11.42 3.25a1.67 1.67 0 0 0-2.84 0Z" />
      <path d="M10 7.5v3.75M10 14.5h.01" />
    </svg>
  );
}

export function CodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.33} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5.5 4.5 2 8l3.5 3.5M10.5 4.5 14 8l-3.5 3.5" />
    </svg>
  );
}

export function OrgIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth={1.1} {...props}>
      <rect x="1.63" y="2.17" width="9.75" height="8.67" rx="1.08" />
    </svg>
  );
}

export function EntityIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth={1.1} {...props}>
      <rect x="2.17" y="2.17" width="8.67" height="8.67" rx="1.08" />
      <path d="M5 5.5h3M5 7.75h2" />
    </svg>
  );
}

export function PeopleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth={1.1} {...props}>
      <circle cx="6.5" cy="4.33" r="1.63" />
      <path d="M3.25 10.29c0-1.79 1.46-2.71 3.25-2.71s3.25.92 3.25 2.71" />
    </svg>
  );
}

export function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth={1.1} {...props}>
      <rect x="1.63" y="2.71" width="9.75" height="8.67" rx="1.08" />
      <path d="M1.63 5.42h9.75M4.33 1.63v2.17M8.67 1.63v2.17" />
    </svg>
  );
}
