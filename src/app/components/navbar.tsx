import Image from "next/image";
import { NavbarProps } from "../types/navbarData";

export default function NavbarSection({ navbar }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="logo-container">
        {navbar.logo && (
          <Image
            src={`https:${navbar.logo.fields.file.url}`}
            width={navbar.logo.fields.file.details.image.width}
            height={navbar.logo.fields.file.details.image.height}
            alt={navbar.logo.fields.title}
          />
        )}
        <h3 className="company-name">{navbar.name}</h3>
      </div>
      {/* <div className="links">
        {navbar.links.map((link: any) => (
          <a key={link.fields.linkUrl} href={link.fields.linkUrl} className="link">
            {link.fields.linkText}
          </a>
        ))}
      </div> */}
    </nav>
  );
}
