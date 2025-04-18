"use client"

import Image from "next/image"
import Navbar from "@/components/navbar"
import AnimatedText from "@/components/typedtitle"
import TechStack from "@/components/techstacks"
import ExperienceBlock from "@/components/experienceblock"
import Timeline from "@/components/timelinedot"
import ErrorSection from "@/components/errorsection"
import EducationBlock from "@/components/educationblock"

const badgesFrontend = [
  { name: "NextJS", icon: { src: "/nextjs.png", alt: "NextJs" } },
  { name: "TailwindCSS", icon: { src: "/tailwind.svg", alt: "TailwindCSS" } },
  { name: "ReactJS", icon: { src: "/react.svg", alt: "ReactJs" } },
  { name: "HTML", icon: { src: "/html.svg", alt: "HTML" } },
  { name: "CSS", icon: { src: "/css.svg", alt: "CSS" } },
  { name: "ViteJS", icon: { src: "/vite.svg", alt: "ViteJS" } },
]

const badgesBackend = [
  { name: "NodeJS", icon: { src: "/node.svg", alt: "NodeJs" } },
  { name: "Docker", icon: { src: "/docker.svg", alt: "Docker" } },
  { name: "ExpressJS", icon: { src: "/Express.svg", alt: "ExpressJs" } },
  { name: "JavaScript", icon: { src: "/javascript.svg", alt: "JavaScript" } },
  { name: "TypeScript", icon: { src: "/TypeScript.svg", alt: "TypeScript" } },
  { name: "MongoDB", icon: { src: "/MongoDB.svg", alt: "MongoDB" } },
  { name: "PostgreSQL", icon: { src: "/PostgresSQL.svg", alt: "PostgresSQL" } },
  { name: "FastAPI", icon: { src: "/fastapi.svg", alt: "FastAPI" } },
  { name: "SQLite", icon: { src: "/sqlite.svg", alt: "SQLite" } },
  { name: "Rust", icon: { src: "/rust.svg", alt: "Rust" } },
  { name: "Go", icon: { src: "/go.svg", alt: "Go" } },
  { name: "Gin", icon: { src: "/gin.svg", alt: "Gin" } },
]

const badgesRobotics = [
  { name: "ROS", icon: { src: "/ROS.svg", alt: "ROS" } },
  { name: "Gazebo", icon: { src: "/Gazebo.svg", alt: "Gazebo" } },
  { name: "Python", icon: { src: "/python.svg", alt: "python" } },
  { name: "C++", icon: { src: "/c.svg", alt: "cpp" } },
  { name: "Arduino", icon: { src: "/Arduino.svg", alt: "Arduino" } },
]

const badgesOther = [
  { name: "Git", icon: { src: "/git.svg", alt: "git" } },
  { name: "Github", icon: { src: "/github.svg", alt: "github" } },
  { name: "Gitlab", icon: { src: "/gitlab.svg", alt: "gitlab" } },
  { name: "Figma", icon: { src: "/figma.svg", alt: "figma" } },
]

export default function Home() {
  return (
    <div className="bg-gray-950 flex flex-col items-center justify-center w-full">
      <header className="w-full py-2 bg-black text-white justify-center items-center px-4">
        <Navbar />
      </header>

      <main className="bg-gray-950 items-center justify-center w-full max-w-7xl mx-auto px-4">
        <section id="Top" className="flex flex-col items-center justify-center mt-8 w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-16 md:mt-24 text-white text-center px-4">
            Curiosity, Creativity,
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white text-center px-4">
            and Anything in Between!
          </h1>
        </section>

        <section id="about" className="text-left mt-28 flex flex-col md:flex-row items-center mb-36 px-4">
          <section className="mt-2">
            <h1 className="text-white mt-5 text-3xl md:text-5xl font-poppins">Hi, It&apos;s me</h1>
            <h1 className="text-white mt-3 text-3xl md:text-5xl font-poppins">Muhammad Adha Ridwan</h1>
            <AnimatedText />
            <p className="text-gray-300 mt-5 text-lg md:text-2xl">
              Driven by my curiosity and thirst for new knowledge, I&apos;m constantly seeking opportunities to learn,
              grow, and challenge myself. With an adaptable mindset, I&apos;m always ready to embrace the unknown and
              take on new adventures.
            </p>
          </section>
          <Image
            src="/adha.png"
            alt="Profile Picture"
            width={380}
            height={380}
            className="rounded-full border-orange-400 border-2 border-opacity-70 shadow mt-8 md:mt-0 md:ml-10 w-64 h-64 md:w-[380px] md:h-[380px] object-cover"
          />
        </section>

        <div className="w-full flex justify-center mt-14">
          <div className="w-[100%] h-0.5 bg-orange-500 animate-growShrink"></div>
        </div>

        <section id="skills" className="justify-center items-center mt-28 mb-36">
          <h1 className="text-white text-3xl md:text-5xl font-poppins font-bold text-center px-4">Skills</h1>
          <h1 className="text-gray-300 mt-3 text-xl md:text-3xl font-poppins text-center px-4">
            Here are the some of the skills that i&apos;ve been honing for the past few years
          </h1>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 px-4">
            <TechStack title="Frontend" badges={badgesFrontend} />
            <TechStack title="Backend" badges={badgesBackend} />
            <TechStack title="Robotics" badges={badgesRobotics} />
            <TechStack title="Other" badges={badgesOther} />
          </section>
        </section>

        <div className="w-full flex justify-center mt-14">
          <div className="w-[100%] h-0.5 bg-orange-500 animate-growShrink"></div>
        </div>

        <section id="experience" className="flex flex-col items-center justify-center py-24">
          <div className="mb-4 w-full text-center">
            <h1 className="text-white text-3xl md:text-5xl font-poppins font-bold text-center px-4">Experience</h1>
            <h2 className="text-gray-300 text-xl md:text-3xl text-center mt-3 px-4">
              Some of my work experience across many field
            </h2>
          </div>

          <div className="w-full max-w-3xl mx-auto px-4">
            <section className="grid grid-cols-1 gap-3 mt-4">
              <div className="flex flex-col items-center">
                <div className="flex py-4 w-full">
                  <div className="flex-shrink-0">
                    <Timeline position="left" gap={16} isLast={false} />
                  </div>
                  <ExperienceBlock
                    title="Technology Development Staff"
                    company="HMIF ITB"
                    date="Desember 2024 - Present"
                    description="Technology Development Staff in HMIF ITB."
                    logo={{ src: "/hmif.png", alt: "hmif" }}
                    skills="Skills: -"
                  />
                </div>
                <div className="flex py-4 w-full">
                  <div className="flex-shrink-0">
                    <Timeline position="left" gap={16} isLast={false} />
                  </div>
                  <ExperienceBlock
                    title="Academics Intern"
                    company="HMIF ITB"
                    date="October 2024 - Desember 2024"
                    description="Academics Internship as part of the Internship program."
                    logo={{ src: "/hmif.png", alt: "hmif" }}
                    skills="Skills: Tutoring, Teamwork, Communication"
                  />
                </div>
                <div className="flex py-4 w-full">
                  <div className="flex-shrink-0">
                    <Timeline position="left" gap={16} isLast={false} />
                  </div>
                  <ExperienceBlock
                    title="Staff of Programming"
                    company="Dagozilla ITB"
                    date="September 2024 - Present"
                    description="Worked as a programming staff in Dagozilla ITB, a Robotics Team that focuses on Autonomous Soccer Robot Development."
                    logo={{ src: "/dagozilla.jpeg", alt: "Telkom Logo" }}
                    skills="Skills: C++, Python, ROS, Gazebo, Arduino"
                  />
                </div>
              </div>
            </section>
          </div>
        </section>

        <div className="w-full flex justify-center mt-14">
          <div className="w-[100%] h-0.5 bg-orange-500 animate-growShrink"></div>
        </div>

        <section id="projects" className="justify-center items-center mt-24 mb-36">
          <div className="mb-14">
            <h1 className="text-white text-3xl md:text-5xl font-poppins font-bold text-center px-4">Projects</h1>
            <h2 className="text-gray-300 text-xl md:text-3xl text-center mt-3 px-4">
              Some of projects that i&apos;ve been working on
            </h2>
            <ErrorSection />
          </div>
        </section>

        <div className="w-full flex justify-center mt-14">
          <div className="w-[100%] h-0.5 bg-orange-500 animate-growShrink"></div>
        </div>

        <section id="education" className="flex flex-col items-center justify-center py-24">
          <div className="mb-12 w-full text-center">
            <h1 className="text-white text-3xl md:text-5xl font-poppins font-bold text-center px-4">Education</h1>
            <h2 className="text-gray-300 text-xl md:text-3xl text-center mt-3 px-4">My academic journey so far</h2>
          </div>
          <div className="w-full max-w-3xl mx-auto px-4">
            <section className="grid grid-cols-1 gap-3 mt-4">
              <div className="flex flex-col items-center">
                <div className="flex py-4 w-full">
                  <EducationBlock
                    major="Bachelor of Technology - B.Eng, Informatics Engineering"
                    univ="Institut Teknologi Bandung"
                    date="2023 - Present"
                    description="Robotics Unit, Interested in Cybersecurity, Robotics, Low-Level Computing."
                    logo={{ src: "/itb.png", alt: "ITB Logo" }}
                    courses="Courses: Algorithm and Data Structure, Computer Organization and Architecture"
                    grade=" 3.82 CGPA"
                  />
                  <div className="flex-shrink-0">
                    <Timeline position="right" gap={16} isLast={false} />
                  </div>
                </div>
                <div className="flex py-4 w-full">
                  <EducationBlock
                    major="Natural Sciences"
                    univ="SMA IT Assyifa Boarding School Jalancagak"
                    date="2020 - 2023"
                    description="National Science Olympiad Team 2021-2022, Public Relations for Assyifa Scout Council, General Treasurer for SYIFEST 2022"
                    logo={{ src: "/assyifa.png", alt: "SMA Negeri 1 Cimahi Logo" }}
                    courses="Courses: Mathematics, Physics, Chemistry, Biology"
                    grade=" 91.83"
                  />
                  <div className="flex-shrink-0">
                    <Timeline position="right" gap={20} isLast={false} />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>

      <footer className="w-full py-2 bg-black text-white justify-center items-center px-4"></footer>
    </div>
  )
}
