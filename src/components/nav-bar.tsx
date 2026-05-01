"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import * as React from "react";

export interface NavLink {
  label: string;
  href: string;
}

export interface LogoConfig {
  src: string;
  alt?: string;
  name: string;
  href?: string;
}

export interface NavBarProps {
  logo: LogoConfig;
  links: NavLink[];
  modeToggle: React.ReactNode;
  desktopActions: React.ReactNode;
  mobileMenuActions: React.ReactNode;
}

const NavBar = ({
  logo,
  links,
  modeToggle,
  desktopActions,
  mobileMenuActions,
}: NavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoHref = logo.href ?? "/";

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 flex justify-center border-b border-border">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4">
        <div className="flex items-center">
          <a
            href={logoHref}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <img src={logo.src} alt={logo.alt ?? logo.name} className="h-8 w-8" />
            <span className="text-lg font-bold tracking-tight font-glancyr">
              {logo.name}
            </span>
          </a>
        </div>

        <NavigationMenu className="hidden lg:flex w-full justify-center items-center">
          <NavigationMenuList>
            {links.map((link) => (
              <NavigationMenuItem key={link.href}>
                <Button variant="ghost" asChild>
                  <a href={link.href}>{link.label}</a>
                </Button>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:flex items-center space-x-3">
          {modeToggle}
          {desktopActions}
        </div>

        <div className="flex items-center space-x-2 lg:hidden">
          {modeToggle}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-x-0 top-16 z-40 lg:hidden bg-background border-t border-border">
          <div className="h-[calc(100dvh-4rem)] flex flex-col">
            <div className="flex-1 overflow-y-auto overflow-x-hidden px-4 py-6 pb-[env(safe-area-inset-bottom)]">
              <div className="space-y-2">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block py-4 text-base font-medium hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="px-4 py-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] border-t border-border/30 bg-background">
              {mobileMenuActions}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export const ListItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => (
  <li>
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </NavigationMenuLink>
  </li>
));
ListItem.displayName = "ListItem";

export default NavBar;
