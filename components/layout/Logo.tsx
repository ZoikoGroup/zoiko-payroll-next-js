import Image from "next/image";
import Link from "next/link";

const LOGO_SRC = "/logo.png";
// Real pixel dimensions of the source asset, used to keep aspect ratio correct.
const LOGO_WIDTH = 596;
const LOGO_HEIGHT = 212;

type LogoProps = {
  variant?: "dark" | "light";
};

export default function Logo({ variant = "dark" }: LogoProps) {
  const image = (
    <Image
      src={LOGO_SRC}
      alt="Zoiko Payroll"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      priority
      className="h-9 w-auto"
    />
  );

  return (
    <Link href="/" className="flex shrink-0 items-center" aria-label="Zoiko home">
      {variant === "light" ? <span className="rounded-md bg-white px-2 py-1.5">{image}</span> : image}
    </Link>
  );
}
