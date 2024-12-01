'use client';

import Image from 'next/image';
import Navbar from '@/components/navbar';
import AnimatedText from '@/components/typedtitle';
import TechStack from '@/components/techstacks';
import ExperienceBlock from '@/components/experienceblock';
import Timeline from '@/components/timelinedot';
import ErrorSection from '@/components/errorsection';

const badgesFrontend = [
  { name: 'NextJS', icon: { src: '/nextjs.png', alt: 'NextJs' } },
  { name: 'TailwindCSS', icon: { src: '/tailwind.svg', alt: 'TailwindCSS' } },
  { name: 'ReactJS', icon: { src: '/react.svg', alt: 'ReactJs' } },
  { name: 'HTML', icon: { src: '/html.svg', alt: 'HTML' } },
  { name: 'CSS', icon: { src: '/css.svg', alt: 'CSS' } },
  { name: 'ViteJS', icon: { src: '/vite.svg', alt: 'ViteJS' } },

];

const badgesBackend = [
  { name: 'NodeJS', icon: { src: '/node.svg', alt: 'NodeJs' } },
  { name: 'Docker', icon: { src: '/docker.svg', alt: 'Docker' } },
  { name: 'ExpressJS', icon: { src: '/Express.svg', alt: 'ExpressJs' } },
  { name: 'JavaScript', icon: { src: '/javascript.svg', alt: 'JavaScript' } },
  { name: 'TypeScript', icon: { src: '/TypeScript.svg', alt: 'TypeScript' } },
  { name: 'MongoDB', icon: { src: '/MongoDB.svg', alt: 'MongoDB' } },
  { name: 'PostgreSQL', icon: { src: '/PostgresSQL.svg', alt: 'PostgresSQL' } },
  { name: 'FastAPI', icon: { src: '/fastapi.svg', alt: 'FastAPI' } },
];

const badgesRobotics = [
  { name: 'ROS', icon: { src: '/ROS.svg', alt: 'ROS' } },
  { name: 'Gazebo', icon: { src: '/Gazebo.svg', alt: 'Gazebo' } },
  { name: 'Python', icon: { src: '/python.svg', alt: 'python' } },
  { name: 'C++', icon: { src: '/c.svg', alt: 'cpp' } },
  { name: 'Arduino', icon: { src: '/Arduino.svg', alt: 'Arduino' } },


];

const badgesOther = [
  { name: 'Git', icon: { src: '/git.svg', alt: 'git' } },
  { name: 'Github', icon: { src: '/github.svg', alt: 'github' } },
  { name: 'Gitlab', icon: { src: '/gitlab.svg', alt: 'gitlab' } },
  { name: 'Figma', icon: { src: '/figma.svg', alt: 'figma' } },

];


export default function Home() {
  return (
    <div className="bg-gray-950 flex flex-col items-center justify-center">
      <header className="w-full py-2 bg-black text-white justify-center items-center px-4">
        <Navbar/>
      </header>

      <main className="bg-gray-950 items-center justify-center">

        <section id ="Top" className="flex flex-col items-center justify-center mt-8">
          <h1 className="text-6xl font-extrabold mt-24 text-white text-center">Curiosity, Creativity,</h1>
          <h1 className="text-6xl font-extrabold text-white text-center">and Anything in Between!</h1>
        </section>

        <section id='about'  className='text-left mt-28 flex items-center mb-36'>
          <section className='mt-2'>
            <h1 className='text-white mt-5 text-5xl font-poppins'>Hi, It&apos;s me</h1>
            <h1 className='text-white mt-3 text-5xl font-poppins'>Muhammad Adha Ridwan</h1>
            <AnimatedText/> 
            <h1 className='text-gray-300 mt-5 text-2xl'>Driven by my curiosity and thirst for new knowledge,</h1>
            <h1 className='text-gray-300 mt-2 text-2xl'>I&apos;m constantly seeking opportunities to learn, grow,</h1>
            <h1 className='text-gray-300 mt-2 text-2xl'>and challenge myself. With an adaptable mindset, I&apos;m always</h1>
            <h1 className='text-gray-300 mt-2 text-2xl'>ready to embrace the unknown and take on new adventures.</h1>
          </section>
          <Image src='/adha.png' alt='Profile Picture' width={380} height={380} className='rounded-full border-orange-400 border-2 border-opacity-70 shadow ml-10' />
        </section>

        <div className="w-full flex justify-center mt-14">
          <div className="w-[100%] h-0.5 bg-orange-500 animate-growShrink"></div>
        </div>

        <section id='skills' className='justify-center items-center mt-28 mb-36'>
          <h1 className='text-white text-5xl font-poppins font-bold text-center'>Skills</h1>
          <h1 className='text-gray-300 mt-3 text-3xl font-poppins text-center'>Here are the some of the skills that i&apos;ve been honing for the past few years</h1>
          <section className='grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3 mt-4'>
            <TechStack title='Frontend' badges={badgesFrontend}/>
            <TechStack title='Backend' badges={badgesBackend}/>
            <TechStack title='Robotics' badges={badgesRobotics}/>
            <TechStack title='Other' badges={badgesOther}/>
          </section>
        </section>
       
        <div className="w-full flex justify-center mt-14">
          <div className="w-[100%] h-0.5 bg-orange-500 animate-growShrink"></div>
        </div>

        <section id='experience' className='justify-center items-center mt-24 mb-36' >
          <div className='mb-14'> 
              <h1 className='text-white text-5xl font-poppins font-bold text-center'>Experience</h1>
              <h2 className='text-gray-300 text-3xl text-center mt-3'>Some of my work experience across many field </h2>
          </div>

          <div className='mt-4 '>
              <section className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-3 mt-4'>
                <div className='flex'>
                  <Timeline isLast={false}/>
                  <ExperienceBlock
                      title='Academics Intern'
                      company='HMIF ITB'
                      date='October 2024 - Present'
                      description='Academics Internship as part of the Internship program.               '
                      logo={{ src: '/hmif.png', alt: 'hmif' }}
                      skills='Skills: Tutoring, Teamwork, Communication'
                  />
                </div>
                <div className='flex'>
                  <Timeline isLast={false}/>
                  <ExperienceBlock
                      title='Staff of Programming'
                      company='Dagozilla ITB'
                      date='September 2024 - Present'
                      description='Worked as a programming staff in Dagozilla ITB, a Robotics Team that focuses on Autonomous Soccer Robot Development.'
                      logo={{ src: '/dagozilla.jpeg', alt: 'Telkom Logo' }}
                      skills='Skills: C++, Python, ROS, Gazebo, Arduino'
                  />
                </div>
              </section>
          </div>
        </section>

        <div className="w-full flex justify-center mt-14">
          <div className="w-[100%] h-0.5 bg-orange-500 animate-growShrink"></div>
        </div>

        <section id="projects" className='justify-center items-center mt-24 mb-36'>
          <div className='mb-14'> 
            <h1 className='text-white text-5xl font-poppins font-bold text-center'>Projects</h1>
            <h2 className='text-gray-300 text-3xl text-center mt-3'>Some of projects that i&apos;ve been working on </h2>
            <ErrorSection/>
          </div>
        </section>

        <div className="w-full flex justify-center mt-14">
          <div className="w-[100%] h-0.5 bg-orange-500 animate-growShrink"></div>
        </div>

        <section id='education' className='justify-center items-center mt-24 mb-36'>
          <div>
            <h1 className='text-white text-5xl font-poppins font-bold text-center mt-24'>Education</h1>
            <ErrorSection/>
          </div>
        </section>

      </main>
    </div>
  );
}
