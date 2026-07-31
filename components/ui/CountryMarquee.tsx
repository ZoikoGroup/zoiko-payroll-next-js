import Marquee from "./Marquee";
import { countries } from "../layout/countries-data";
import { US, GB, DE, SG, AU, BR, JP, MX, FR, IN, CA, NL, ZA, AE, SE } from "country-flag-icons/react/3x2";

type FlagProps = { className?: string; title?: string };

const flagComponents: Record<string, React.ComponentType<FlagProps>> = {
  US,
  GB,
  DE,
  SG,
  AU,
  BR,
  JP,
  MX,
  FR,
  IN,
  CA,
  NL,
  ZA,
  AE,
  SE,
};

type CountryMarqueeProps = {
  className?: string;
};

export default function CountryMarquee({ className = "" }: CountryMarqueeProps) {
  return (
    <Marquee className={className}>
      {countries.map((country) => {
        const Flag = flagComponents[country.code];
        return (
          <span key={country.code} className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <Flag title={country.name} className="h-3.5 w-5 shrink-0 rounded-[2px]" />
            {country.code}
          </span>
        );
      })}
    </Marquee>
  );
}
