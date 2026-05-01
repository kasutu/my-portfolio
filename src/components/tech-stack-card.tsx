import { Badge } from "@/components/ui/badge";

interface TechStackCategory {
  category: string;
  values: string[];
}
interface TechStackCardProps {
  data: TechStackCategory[];
}

export function TechStackCard({ data }: TechStackCardProps) {
  return (
    <div className="w-full p-4 bg-background rounded-[32px] border flex flex-col justify-start items-start gap-4 overflow-hidden">
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