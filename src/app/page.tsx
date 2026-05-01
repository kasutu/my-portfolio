import MaxWidthWrapper from "@/components/global/max-width-wrapper";
import ProfileCard from "@/components/profile-card";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { CalendarDays, Mail } from "lucide-react";

export default function Home() {
  return (
    <MaxWidthWrapper className="py-8">
      <ProfileCard
        avatar="/avatar.png"
        name="Jerome Cabugwason"
        verified
        location="Iloilo city, Philippines"
        tags={["AI", "Software Engineer", "Business", "Marketing"]}
        badge={[
          { title: "DTI Moonshot TNK 2023 Best in pitch", href: "https://cpu.edu.ph/news/cpus-team-ridesafe-receives-award-in-dtis-moonshot-tnk-pitching-competition/" }
        ]}
        actions={
          <>
            <Button size="sm" className="gap-2 rounded-lg">
              <CalendarDays className="size-4" />
              Schedule a call
            </Button>
            <Button size="sm" variant="outline" className="gap-2 rounded-lg">
              <Mail className="size-4" />
              Send email
            </Button>
          </>
        }
        modeToggle={<ModeToggle />}
      />
    </MaxWidthWrapper>
  );
}