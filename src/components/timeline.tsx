export interface TimelineEntry {
  title: string;
  description: string;
  year: string;
}

export default function Timeline({ timeline }: { timeline: TimelineEntry[] }) {
  return (
    <div className="w-full p-4 bg-background rounded-[32px] border flex flex-col gap-4 overflow-hidden">
      <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">Experience</h3>

      <div className="flex flex-col">
        <div className="relative">
          {[...timeline].reverse().map(({ title, description, year }, index) => (
            <div className="group relative" key={index}>
              <div className="flex items-start">
                <div className="relative flex-1 min-w-0 space-y-1 border-l pb-4 pl-5">
                  <div className="absolute top-4 -left-px h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background" />

                  <h4 className="mt-2 text-sm font-medium tracking-tight">{title}</h4>
                  <div className="flex flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted-foreground leading-6 flex-1 min-w-0">{description}</p>
                    <small className="text-xs text-muted-foreground/60 font-medium leading-none shrink-0">{year}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}