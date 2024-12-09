import Section from "./Section";
import { socials } from "../constants";

export default function Footer() {
  return (
    <Section id="footer" crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 rounded-full transition-colors hover:bg-n-6 bg-n-7"
            >
              <img src={item.iconUrl} height={16} width={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
}
