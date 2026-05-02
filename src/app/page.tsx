import MaxWidthWrapper from "@/components/global/max-width-wrapper";
import ProfileCard from "@/components/profile-card";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { CalendarDays, Mail } from "lucide-react";
import OSSBadge from "@/components/oss-badge";
import { Badge } from "@/components/ui/badge";
import { TechStackCard } from "@/components/tech-stack-card";
import { AboutCard } from "@/components/about-card";
import Timeline, { TimelineEntry } from "@/components/timeline";
import { RecentProjectsCard } from "@/components/recent-projects-card";

export default function Home() {
  const about = `
  I'm a full-Stack Software Engineer specializing in building solutions with JavaScript, Java, and Dart. I work on projects involving real-time systems, modern web and native desktop applications, android mobile applications, and digital marketing and out of home advertising. 
  


  I've helped businesses and startups streamline their operations through software. 

  Lately, I've been in the dojo training Artificial Intelligence, focusing on training and integrating AI models into modern software. My work now includes real-time video systems and AI powered solutions optimizing processes and deliver cutting edge solutions.
  `;

  const techStack = [
    {
      category: "Languages",
      values: ["Typescript", "Javascript", "Java", "Dart", "C#", "Shell", "Python"],
    },
    {
      category: "Frontend",
      values: ["Next.js", "React", "Solid.js", "Vite", "Flutter", "Astro", "TailwindCSS", "shadcn/ui", "Bootstrap"],
    },
    {
      category: "Backend & Runtime",
      values: ["Node.js", "NestJs", "Bun", "Springboot"],
    },
    {
      category: "DevOps & Infrastructure",
      values: ["Docker", "Docker Compose", "GitHub Actions", "Netlify", "Vercel", "Railway", "Render"],
    },
  ];

  const timeline: TimelineEntry[] = [
    {
      title: "GTA S.A. Mods, Batch Scripts",
      description: "Barotac Nuevo, Philippines",
      year: "2012",
    },
    {
      title: "Hacking, Rooting, & Networking",
      description: "Barotac Nuevo, Philippines",
      year: "2017",
    },
    {
      title: "Photo and Video Editing",
      description: "Barotac Nuevo, Philippines",
      year: "2018",
    },
    {
      title: "Sports Sticker Business",
      description: "Negative Space, Barotac Nuevo, Philippines",
      year: "2020",
    },
    {
      title: "Founder & Owner",
      description: "Splitscale, Iloilo, Philippines",
      year: "2022",
    },
    {
      title: "Software Engineer",
      description: "UniHub, Iloilo, Philippines",
      year: "2022",
    },
    {
      title: "Project Associate Software Engineer",
      description: "Prometheus, Iloilo, Philippines",
      year: "2023",
    },
    {
      title: "Co-founder & CTO",
      description: "Localize, Iloilo, Philippines",
      year: "2024",
    },
  ];

  const projects = [
    {
      title: "Ottie",
      description: "A rock collecting app",
      url: "https://ottie.splitscale.ph",
    },
    {
      title: "Landil",
      description: "A premium real estate market place",
      url: "https://splitscale.com",
    },
    {
      title: "Localize",
      description: "in-transit digital advertising platform.",
      url: "https://localize-landing.vercel.app",
    },
  ];

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
        <div className="flex flex-col gap-4 w-full">
          <AboutCard content={about} />
          <TechStackCard data={techStack} />
          <RecentProjectsCard data={projects} />
        </div>
        <div className="flex flex-col gap-4 w-fit">
          <OSSBadge />
          <Timeline timeline={timeline} />
        </div>
      </section>
    </MaxWidthWrapper>
  );
}