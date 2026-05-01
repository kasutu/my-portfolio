import MaxWidthWrapper from "@/components/global/max-width-wrapper";
import ProfileCard from "@/components/profile-card";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { CalendarDays, Mail } from "lucide-react";
import OSSBadge from "@/components/oss-badge";

export default function Home() {
  return (
    <MaxWidthWrapper className="py-8 flex flex-col gap-4">
      <section>
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
      </section>

      {/* About */}
      <section className="flex gap-4">
        <div className="w-[664px] p-4 bg-background rounded-[32px] border inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
          <div className="self-stretch justify-center text-foreground text-lg font-bold font-['Inter'] leading-7">
            About
          </div>
          <div className="self-stretch justify-center text-foreground text-base font-normal font-['Inter'] leading-6">
            I'm a full-Stack Software Engineer specializing in building solutions with JavaScript, Java, and Dart. I work on projects involving real-time systems, modern web and native desktop applications, android mobile applications, and digital marketing and out of home advertising.<br /><br />I've helped businesses and startups streamline their operations through software.<br /><br />Lately, I've been in the dojo training Artificial Intelligence, focusing on training and integrating AI models into modern software. My work now includes real-time video systems and AI powered solutions optimizing processes and deliver cutting edge solutions.
          </div>
        </div>
        <OSSBadge />
      </section>

    </MaxWidthWrapper>
  );
}