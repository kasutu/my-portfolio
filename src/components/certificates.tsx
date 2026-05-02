// src/components/certificates.tsx
import { cn } from "@/lib/utils";
import { Item, ItemContent, ItemTitle } from "@/components/ui/item";

interface Certification {
  title: string;
  url: string;
}

export function Certificates({ certifications, className }: { certifications: Certification[]; className?: string }) {
  return (
    <div className={cn("w-full p-4 bg-background rounded-[32px] border flex flex-col gap-4 h-fit", className)}>
      <h3 className="scroll-m-20 text-lg font-semibold tracking-tight shrink-0">Certifications</h3>
      <div className="flex flex-col gap-2 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {certifications.map(({ title, url }) => (
          <Item key={title} variant="outline" asChild>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <ItemContent>
                <ItemTitle>{title}</ItemTitle>
              </ItemContent>
            </a>
          </Item>
        ))}
      </div>
    </div>
  );
}