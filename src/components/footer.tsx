import * as React from "react";

export interface FooterLink {
  name: string;
  href: string;
}

export interface SocialLink {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export interface LogoConfig {
  src: string;
  alt?: string;
  name: string;
  href?: string;
}

export interface FooterProps {
  logo: LogoConfig;
  links: FooterLink[];
  socials: SocialLink[];
  copyright: string;
}

const Footer = ({ logo, links, socials, copyright }: FooterProps) => {
  const logoHref = logo.href ?? "/";

  return (
    <footer className="mx-auto max-w-7xl">
      <div className="flex w-full flex-col items-center justify-center space-y-5 px-4 py-12 text-center">
        <a href={logoHref} className="hover:opacity-80 transition-opacity">
          <img src={logo.src} alt={logo.alt ?? logo.name} className="h-8 w-8" />
        </a>

        <nav className="flex flex-col flex-wrap items-center space-y-4 text-xs font-medium text-muted-foreground sm:flex-row sm:space-x-4 sm:space-y-0">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-foreground">
              {link.name}
            </a>
          ))}
        </nav>

        <nav className="flex items-center gap-4 text-muted-foreground">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-foreground transition-colors"
            >
              {social.icon}
            </a>
          ))}
        </nav>

        <p className="text-xs text-muted-foreground">{copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;