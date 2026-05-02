import MaxWidthWrapper from "@/components/global/max-width-wrapper";
import ProfileCard from "@/components/profile-card";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { CalendarDays, Mail } from "lucide-react";
import OSSBadge from "@/components/oss-badge";
import { TechStackCard } from "@/components/tech-stack-card";
import { AboutCard } from "@/components/about-card";
import { TimelineEntry } from "@/components/timeline";
import { RecentProjectsCard } from "@/components/recent-projects-card";
import { Certificates } from "@/components/certificates";
import { TestimonialItem, Testimonials } from "@/components/testimonial";
import ExperienceTimeline from "@/components/timeline";

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

  const certifications = [
    {
      title: "TOPCIT Software Development Certification",
      url: "https://www.linkedin.com/posts/jeromecabugwason_topcit-ict-softwaredevelopment-share-7456316406104711168-24Ws",
    },
  ];

  const testimonials: TestimonialItem[] = [
    {
      name: "Renz Villanueva",
      role: "Project Manager",
      company: "Prometheus",
      content: "Jerome consistently delivered beyond expectations. His ability to translate complex requirements into clean, working software made every sprint smoother than the last.",
    },
    {
      name: "Miguel Santos",
      role: "Co-founder",
      company: "Localize",
      content: "As our CTO, Jerome architected our entire platform from the ground up. His technical decisions were sound, pragmatic, and always had the product's growth in mind.",
    },
    {
      name: "Carla Reyes",
      role: "CEO",
      company: "UniHub",
      content: "Jerome is the kind of engineer who takes ownership. He didn't just write code — he understood the business, asked the right questions, and shipped things that actually mattered.",
    },
    {
      name: "Paolo Mendoza",
      role: "Lead Developer",
      company: "Splitscale",
      content: "Working with Jerome on real-time systems was a great experience. He has a sharp eye for performance and a natural instinct for building things that scale.",
    },
  ];


  return (
    <MaxWidthWrapper className="py-8 flex flex-col gap-4">
      <ProfileCard
        avatar="/avatar.png"
        name="Jerome Cabugwason"
        verified
        location="Iloilo city, Philippines"
        tags={["AI", "Software Engineer", "Business", "Marketing"]}
        badge={[{ title: "DTI Moonshot TNK 2023 Best in pitch", href: "https://cpu.edu.ph/news/cpus-team-ridesafe-receives-award-in-dtis-moonshot-tnk-pitching-competition/" }]}
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

      <div
        className="grid gap-4 grid-cols-[1fr_288px] grid-rows-[auto_auto_auto_auto]"
        style={{
          gridTemplateAreas: `
            "about    timeline"
            "stack    timeline"
            "projects timeline"
            "gallery  testimonials"
          `,
        }}
      >
        <AboutCard content={about} className="[grid-area:about]" />
        <TechStackCard data={techStack} className="[grid-area:stack]" />
        <RecentProjectsCard data={projects} className="[grid-area:projects]" />

        <div className="[grid-area:timeline] flex flex-col gap-4 min-h-0">
          <OSSBadge className="w-full" />
          <Certificates certifications={certifications} />
          <ExperienceTimeline timeline={timeline} className="flex-1 min-h-0" />
        </div>

        <div className="[grid-area:gallery] bg-background rounded-[32px] border p-4 min-h-48 flex items-center justify-center text-sm text-muted-foreground">
          gallery & services
        </div>

        <Testimonials testimonials={testimonials} className="[grid-area:testimonials]" />
      </div>
    </MaxWidthWrapper>
  );
}