import { ReactNode } from "react";
import brackets from "../assets/svg/Brackets";

type TaglineProps = {
  className?: string;
  children: ReactNode;
};
export default function Tagline({ className, children }: TaglineProps) {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {brackets("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets("right")}
    </div>
  );
}
