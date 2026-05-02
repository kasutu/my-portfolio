import { cn } from "@/lib/utils";
import {
  Item,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemFooter,
} from "@/components/ui/item";

interface Project {
  title: string;
  description: string;
  url: string;
}

export function RecentProjectsCard({ data, className }: { data: Project[]; className?: string }) {
  return (
    <div className={cn("w-full p-4 bg-background rounded-[32px] border flex flex-col justify-start items-start gap-4 overflow-hidden", className)}>
      <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">Recent Projects</h3>
      <div className="grid grid-cols-2 gap-2 w-full">
        {data.map(({ title, description, url }) => (
          <Item key={title} variant="outline" asChild>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <ItemContent>
                <ItemTitle>{title}</ItemTitle>
                <ItemDescription className="line-clamp-2">{description}</ItemDescription>
              </ItemContent>
              <ItemFooter>
                <code className="select-none pointer-events-none block min-w-0 rounded-md border bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  {new URL(url).hostname.replace("www.", "")}
                </code>
              </ItemFooter>
            </a>
          </Item>
        ))}
      </div>
    </div>
  );
}