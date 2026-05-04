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
import { Card, CardContent } from "@/components/ui/card";

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
      title: "My first matrix batch script",
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
      name: "Justine Santos",
      role: "Software Engineer",
      company: "Bloom",
      content: "From what I've seen working with Jerome at Prometheus brings a really solid mix of technical skill and genuine team-player energy. I remember him suggesting CLX to me and tailwind merge for a much more cleaner structure / implementation frontend wise., while keeping things witty between us HAHAHA. That's honestly rare.",
    },
    {
      name: "Cedrick Sabrine",
      role: "COO",
      company: "VIP Scale",
      content: "When it comes to the technical side of things, Jerome is definitely a CTO material. Jerome is a trusted partner who can take full ownership of the tech, once it's in his hands, we know it's completely taken care of.",
    },
    {
      name: "Angelo Kaufmann",
      role: "Solutions Architect",
      company: "GCash",
      content: "In a sea of students, Jerome stands out as a true learner. He possesses that rare, interest-driven curiosity that compels him to go down the 'rabbit hole' of a complex subject until he has mastered it. He has a distinct 'spiky profile' possessing a deep, specialized intelligence that allows him to operate as a high-level expert in his chosen field. He doesn't just study; he runs with his interests until they become core competencies.",
    },
    {
      name: "Joel Bagoyo",
      role: "Quality Assurance",
      company: "Freelance",
      content: "Jerome gave his all during the time he worked as UI/UX designer. He was super keen into details and made sure we kept revising the work until we got it perfect. Looking forward to work with him again in the future!",
    },
    {
      name: "Paul Ian Capanas",
      role: "Co-founder",
      company: "Wisdomous Solution Inc.",
      content: "Jerome possesses a remarkable ability to bridge technical execution with tangible business value. Rather than simply writing code, he focuses on solving real-world problems through profitable, high-impact projects. His unique 'startup-minded' perspective ensures that his work as a developer is always strategically aligned with measurable success and long-term growth.",
    },
    {
      name: "Danloyd John M. Ludas, RPh",
      role: "Pharmacist",
      company: "x",
      content: "Jerome has been a great help to me, especially when I need advice on tech-related matters beyond my expertise. He’s reliable in recommending the right actions or purchases to improve my use of technology. He guides me on which computer parts to choose and what questions to ask sellers. He also presents both the best-performing options and the most cost-effective alternatives, helping me make well-informed decisions.",
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

      {/* Body */}
      <div className="grid grid-cols-6 gap-4">
        {/* Left column */}
        <div className="grid grid-rows-3 grid-cols-1 col-span-4 gap-4">
          <AboutCard content={about} />
          <TechStackCard data={techStack} />
          <RecentProjectsCard data={projects} />
        </div>

        {/* Right column */}
        <div className="grid col-span-2 gap-4">
          <OSSBadge className="w-full" />
          <Certificates certifications={certifications} />
          <ExperienceTimeline timeline={timeline} />
        </div>
      </div>

      {/* Footer */}
      <div className="flex gap-4">
        <div className="flex-1 p-4 bg-background rounded-[32px] border flex items-center justify-center min-h-48 text-sm text-muted-foreground">
          gallery & services
        </div>
        <Testimonials testimonials={testimonials} className="w-72" />
      </div>
    </MaxWidthWrapper>
  )
}