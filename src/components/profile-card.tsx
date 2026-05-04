"use client";

import * as React from "react";
import { MapPin, BadgeCheck, ChevronDown, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export interface BadgeLink {
  title: string;
  href: string;
}

export interface ProfileCardProps {
  avatar: string;
  name: string;
  verified?: boolean;
  location: string;
  tags: string[];
  badge?: BadgeLink[];
  actions: React.ReactNode;
  modeToggle: React.ReactNode;
}

// Name
{/* <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight truncate">
  {name}
</h2> */}

// Location
{/* <p className="text-sm text-muted-foreground flex items-center gap-1">
  <MapPin className="size-4 shrink-0" />
  {location}
</p> */}

// Badge dropdown label
{/* <DropdownMenuLabel className="text-xs font-medium text-muted-foreground">
  Other Achievements
</DropdownMenuLabel> */}

const ProfileCard = ({
  avatar,
  name,
  verified = false,
  location,
  tags,
  badge,
  actions,
  modeToggle,
}: ProfileCardProps) => {
  const hasMultipleBadges = badge && badge.length > 1;

  return (
    <div className="w-full max-w-5xl p-4 bg-background rounded-[32px] border inline-flex justify-start items-center overflow-hidden">
      <div className="flex-1 flex justify-start items-start gap-4">
        <Image
          loading="eager"
          width={160}
          height={160}
          src={avatar}
          alt={name}
          className="size-20 sm:size-28 lg:size-40 rounded-2xl object-cover shrink-0"
        />

        <div className="flex-1 self-stretch flex flex-col justify-between items-start min-w-0">
          <div className="self-stretch flex flex-col justify-start items-start gap-2 w-full">

            <div className="self-stretch flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 w-full">
              <div className="flex justify-start items-center gap-2 min-w-0">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight truncate">
                  {name}
                </h2>
                {verified && (
                  <BadgeCheck className="size-5 text-sky-500 shrink-0" />
                )}
              </div>

              {badge?.length && (
                hasMultipleBadges ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="min-h-9 px-4 py-1 bg-linear-to-r from-sky-400 to-sky-500 rounded-2xl border border-sky-300 inline-flex justify-start items-center gap-2 shrink-0 cursor-pointer hover:opacity-90 transition-opacity focus:outline-none">
                        <Trophy className="size-4 text-sky-50" />
                        <span className="text-sky-50 text-sm font-medium leading-5 whitespace-nowrap">
                          {badge[0].title}
                        </span>
                        <ChevronDown className="size-4 text-sky-50" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel className="text-xs font-medium text-muted-foreground">
                        Other Achievements
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      {badge.slice(1).map((item) => (
                        <DropdownMenuItem key={item.title} asChild>
                          <a href={item.href}>{item.title}</a>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <a
                    href={badge[0].href}
                    className="min-h-9 px-4 py-1 bg-linear-to-r from-sky-400 to-sky-500 rounded-2xl border border-sky-300 inline-flex justify-start items-center gap-2 shrink-0 hover:opacity-90 transition-opacity"
                  >
                    <Trophy className="size-4 text-sky-50" />
                    <span className="text-sky-50 text-sm font-medium leading-5 whitespace-nowrap">
                      {badge[0].title}
                    </span>
                  </a>
                )
              )}
            </div>

            <div className="flex justify-start items-center gap-1">
              <MapPin className="size-4 text-zinc-500 shrink-0" />
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <MapPin className="size-4 shrink-0" />
                {location}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 py-1">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="rounded-full">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="self-stretch flex justify-between items-center mt-2">
            <div className="flex flex-wrap justify-start items-center gap-2">
              {actions}
            </div>
            {modeToggle}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;