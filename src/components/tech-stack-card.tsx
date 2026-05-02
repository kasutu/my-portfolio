import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface TechStackCategory {
  category: string;
  values: string[];
}
interface TechStackCardProps {
  data: TechStackCategory[];
  className?: string;
}

export function TechStackCard({ data, className }: TechStackCardProps) {
  return (
    <div className={cn("w-full p-4 bg-background rounded-[32px] border flex flex-col justify-start items-start gap-4 overflow-hidden", className)}>
      <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">Tech Stack</h3>
      <div className="flex flex-col gap-4">
        {data.map(({ category, values }) => (
          <div key={category} className="flex flex-col gap-2">
            <small className="text-sm font-medium leading-none text-foreground">
              {category}
            </small>
            <div className="flex flex-wrap gap-2 py-1">
              {values.map((tag) => (
                <Badge key={tag} variant="secondary" className="rounded-full">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}