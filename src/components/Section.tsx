import { ReactNode } from "react";
import SectionSvg from "../assets/svg/SectionSvg";

type SectionProps = {
  className?: string;
  id: string;
  children: ReactNode;
  customPadding?: string;
  crosses?: boolean;
  crossesOffset?: string;
};

export default function Section({
  className,
  id,
  crosses,
  crossesOffset,
  customPadding,
  children,
}: SectionProps) {
  return (
    <div
      id={id}
      className={`relative ${
        customPadding ||
        `py-10 lg:py-16 xl:py-20 ${crosses && "xl:py-40 lg:py-32"} ${
          className || ""
        }`
      } `}
    >
      {children}

      <div className="invisible absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
      <div className="invisible absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:right-10" />

      {crosses && (
        <>
          <div
            className={`invisible absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${
              crossesOffset && crossesOffset
            } pointer-events-none lg:block xl:left-10`}
          />
          {crossesOffset && <SectionSvg crossesOffset={crossesOffset} />}
        </>
      )}
    </div>
  );
}
