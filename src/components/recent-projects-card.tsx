import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  url: string;
}



export function RecentProjectsCard({ data }: {
  data: Project[];
}) {
  return (
    <div className="w-full p-4 bg-background rounded-[32px] border flex flex-col justify-start items-start gap-4 overflow-hidden">
      <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">Recent Projects</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full">
        {data.map(({ title, description, url }) => (
          <a
            key={title}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-2 p-3 rounded-2xl border bg-muted/30 hover:bg-muted/60 transition-colors"
          >
            <span className="text-sm font-medium leading-none text-foreground">
              {title}
            </span>
            <span className="text-xs text-muted-foreground line-clamp-2">
              {description}
            </span>
            <code className="select-none pointer-events-none w-fit rounded-md border bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground">
              {new URL(url).hostname.replace("www.", "")}
            </code>
          </a>
        ))}
      </div>
    </div>
  );
}