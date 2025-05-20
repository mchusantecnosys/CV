import { Briefcase, GraduationCap, Mail, MapPin, Phone, Linkedin, Github, Target, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { cn } from "@/lib/utils";
//import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import perfil from './perfil1.jpg';
import {Geist, Geist_Mono} from 'next/font/google';


const cvData = {
  name: "Mario Chusan",
  jobTitle: "Fullstack Developer",
  // Optional: Replace with a professional photo URL or keep placeholder.
  profilePictureUrl: './perfil1.jpg', // Using a placeholder image
  contact: {
    email: "mchusan24@gmail.com", // Replace with actual email
    phone: "+593 987 033 027", // Replace with actual phone
    location: "Guayaquil, Ecuador" // Replace/Confirm location
  },
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/mario-chusan-p",
    github: "https://github.com/mchusantecnosys",
  },
  objective: "A highly motivated and results-oriented Fullstack Programmer with a passion for creating efficient, scalable, and user-friendly web solutions. Eager to apply a strong foundation in modern web technologies and problem-solving skills to contribute to innovative projects in a challenging and growth-oriented environment. Continuously learning and adapting to new technologies to deliver high-quality software.",
  experience: [
    {
      id: 1,
      title: "FullStack Developer", // Example, replace with actual
      company: "Tecnosys S.A.", // Example, replace with actual
      period: "Feb 2022 - Present", // Example, replace with actual
      description: [ // Replace with actual responsibilities/achievements
        "Developed and maintained web applications using .NET, Angular, and SQL Server.",
        "Collaborated in agile teams to deliver software solutions for diverse clients.",
        "Participated in requirements analysis, design, implementation, and testing phases.",
        "Contributed to API development and integration for various services.",
      ],
    },
    {
      id: 2,
      title: "Software Developer Intern", // Example, replace with actual
      company: "Innovate Solutions", // Example, replace with actual
      period: "Jun 2021 - Jan 2022", // Example, replace with actual
      description: [ // Replace with actual responsibilities/achievements
        "Assisted senior developers in coding and debugging software modules.",
        "Gained experience in front-end and back-end development technologies.",
        "Participated in daily stand-ups and team meetings.",
      ],
    },
    {
      id: 3,
      title: "STEM Teacher", // Example, replace with actual
      company: "Mentes Brillantes", // Example, replace with actual
      period: "Jun 2023 - Jan 2025", // Example, replace with actual
      description: [ // Replace with actual responsibilities/achievements
        "Worked as a STEM and English teacher, planning and teaching science, technology, engineering, and math classes to students from grades 3 to 12",
        "I created engaging, hands-on lessons that promote critical thinking and creativity.",
        "Additionally, I have experience developing Python applications.",
      ],
    },
  ],
  education: [
    {
      id: 1,
      degree: "Networking and Operating System", // Example, replace with actual
      institution: "Escuela Superior Politécnica del Litoral (ESPOL)", // Example, replace with actual
      period: "2012 - 2018", // Example, replace with actual
      description: "The networking and operating systems work with Cisco involves configuring and managing computer networks." // Replace/elaborate
    },
    {
      id: 2,
      degree: "Computer Science", // Example, replace with actual
      institution: "Harvard University (EdX)", // Example, replace with actual
      period: "2019 - 2021", // Example, replace with actual
      description: "The Computer Science course from HarvardX (edX) covers fundamental concepts such as algorithms, data structures, programming in languages like C and Python, web development, and problem-solving." // Replace/elaborate
    },
    // Add more education entries if necessary
  ],
  skills: [ // Optional: Add a skills section if desired
    "JavaScript", "TypeScript", "React", "Angular", "Node.js", "Next.js", "React.js",
    "Python", "Java", "SQL Server", "PostgreSQL", "MongoDB", "Vite", "Python",
    "HTML5", "CSS", "Tailwind CSS", "Git", "Docker", "Agile Methodologies"
  ]
};

const Section: React.FC<{ title: string; icon?: React.ReactNode; children: React.ReactNode; className?: string, id?: string }> = ({ title, icon, children, className, id }) => (
  <section id={id} className={cn("py-10 md:py-14", className)}>
    <div className="flex items-center mb-8">
      {icon && <span className="mr-4 text-primary">{icon}</span>}
      <h2 className="text-3xl md:text-4xl font-semibold text-primary">{title}</h2>
    </div>
    {children}
  </section>
);


export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-12 md:py-20">
        {/* Hero Section */}
        <header className="text-center mb-16 md:mb-20">
          {cvData.profilePictureUrl && (
            <Image 
              src={perfil} 
              alt={cvData.name} 
              width={160} 
              height={160} 
              className="rounded-full mx-auto mb-8 shadow-xl border-4 border-primary/20" 
              data-ai-hint="profile person" 
              priority
            />
          )}
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-3">{cvData.name}</h1>
          <p className="text-2xl md:text-3xl text-muted-foreground tracking-tight">{cvData.jobTitle}</p>
        </header>

        {/* Contact Info & Social Links */}
        <Section title="Contact Info & Social Links" icon={<Mail size={32}/>} className="border-b border-border/70" id="contact">
          <Card className="bg-card shadow-lg">
            <CardContent className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary/90">Get in Touch</h3>
                <ul className="space-y-3">
                  <li className="flex items-center group">
                    <Mail size={20} className="mr-3 text-accent flex-shrink-0" />
                    <a href={`mailto:${cvData.contact.email}`} className="hover:text-accent transition-colors duration-200 group-hover:underline">{cvData.contact.email}</a>
                  </li>
                  <li className="flex items-center">
                    <Phone size={20} className="mr-3 text-accent flex-shrink-0" />
                    <span>{cvData.contact.phone}</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin size={20} className="mr-3 text-accent flex-shrink-0" />
                    <span>{cvData.contact.location}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary/90">Online Presence</h3>
                <ul className="space-y-3">
                  <li className="flex items-center group">
                    <Linkedin size={20} className="mr-3 text-accent flex-shrink-0" />
                    <a href={cvData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-200 group-hover:underline">
                      LinkedIn <ExternalLink size={14} className="inline ml-1 opacity-70 group-hover:opacity-100" />
                    </a>
                  </li>
                  <li className="flex items-center group">
                    <Github size={20} className="mr-3 text-accent flex-shrink-0" />
                    <a href={cvData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-200 group-hover:underline">
                      GitHub <ExternalLink size={14} className="inline ml-1 opacity-70 group-hover:opacity-100" />
                    </a>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </Section>

        {/* Objective Summary */}
        <Section title="Professional Objective" icon={<Target size={32}/>} className="border-b border-border/70" id="objective">
          <p className="text-lg text-foreground/90 leading-relaxed indent-8">{cvData.objective}</p>
        </Section>

        {/* Work Experience */}
        <Section title="Work Experience" icon={<Briefcase size={32}/>} className="border-b border-border/70" id="experience">
          <div className="space-y-8">
            {cvData.experience.map((exp) => (
              <Card key={exp.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{exp.title}</CardTitle>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                     <p className="text-lg text-accent font-medium">{exp.company}</p>
                     <p className="text-sm text-muted-foreground mt-1 sm:mt-0">{exp.period}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-foreground/80 pl-2">
                    {exp.description.map((item, index) => <li key={index} className="leading-relaxed">{item}</li>)}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section title="Education" icon={<GraduationCap size={32}/>} className="border-b border-border/70" id="education">
          <div className="space-y-8">
            {cvData.education.map((edu) => (
              <Card key={edu.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{edu.degree}</CardTitle>
                   <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                     <p className="text-lg text-accent font-medium">{edu.institution}</p>
                     <p className="text-sm text-muted-foreground mt-1 sm:mt-0">{edu.period}</p>
                  </div>
                </CardHeader>
                {edu.description && (
                  <CardContent>
                    <p className="text-foreground/80 leading-relaxed">{edu.description}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </Section>
        
        {/* Skills Section (Optional) */}
        {cvData.skills && cvData.skills.length > 0 && (
          <Section title="Skills" icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
          } id="skills">
            <div className="flex flex-wrap gap-3">
              {cvData.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm px-4 py-2 bg-secondary hover:bg-primary/10 text-secondary-foreground shadow-sm">{skill}</Badge>
              ))}
            </div>
          </Section>
        )}

        <footer className="text-center mt-16 md:mt-20 pt-10 border-t border-border/70">
          <p className="text-muted-foreground">&copy; {new Date().getFullYear()} {cvData.name}. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

// Minimal Badge component if not available or to override style
// Using ShadCN Badge component from ui/badge.tsx instead.
// import { Badge as ShadBadge } from '@/components/ui/badge'; // Import if needed
const Badge: React.FC<{variant?: string, className?: string, children: React.ReactNode}> = ({ className, variant = "default", children }) => (
  <span 
    className={cn(
      "inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium shadow-sm",
      variant === "secondary" 
        ? "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80" 
        : "border-transparent bg-primary/10 text-primary hover:bg-primary/20",
      className
    )}
  >
    {children}
  </span>
);
