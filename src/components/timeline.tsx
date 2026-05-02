import { cn } from "@/lib/utils"
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline"

export interface TimelineEntry {
  title: string;
  description: string;
  year: string;
}

export default function ExperienceTimeline({ timeline, className }: { timeline: TimelineEntry[], className?: string }) {
  const reversed = [...timeline].reverse()

  return (
    <div className={cn("w-full p-4 bg-background rounded-[32px] border flex flex-col gap-4 overflow-hidden min-h-0", className)}>
      <h3 className="scroll-m-20 text-lg font-semibold tracking-tight shrink-0">Experience</h3>
      <div className="flex-1 min-h-0 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <Timeline defaultValue={1} className="w-full">
          {reversed.map(({ title, description, year }, index) => (
            <TimelineItem key={index} step={index + 1}>
              <TimelineHeader>
                <TimelineDate>{year}</TimelineDate>
                <TimelineTitle className="line-clamp-2">{title}</TimelineTitle>
              </TimelineHeader>
              <TimelineIndicator />
              {index < reversed.length - 1 && <TimelineSeparator />}
              <TimelineContent>{description}</TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  )
}