"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import "../styles/globals.css"

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`bg-transparent text-white ${scrolled ? "bg-transparent" : "bg-opacity-60"} backdrop-blur-md p-3 sm:p-4 fixed top-0 left-0 w-full z-50 transition-all duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex text-xl sm:text-3xl font-bold items-center ml-2 sm:ml-12">
          <Link className="mt-3 font-poppins" href="/">
            Portfolio
          </Link>
          <Image className="ml-2" src="/hutao.png" alt="Logo" width={55} height={55} />
        </div>

        <div className="hidden md:flex space-x-6 lg:space-x-14 mr-4 lg:mr-32 font-poppins">
          <Link
            href="#about"
            className="px-0.5 py-2 rounded text-lg lg:text-2xl hover:text-orange-400 transition-colors"
          >
            About
          </Link>
          <Link
            href="#skills"
            className="px-0.5 py-2 rounded text-lg lg:text-2xl hover:text-orange-400 transition-colors"
          >
            Skills
          </Link>
          <Link
            href="#experience"
            className="px-0.5 py-2 rounded text-lg lg:text-2xl hover:text-orange-400 transition-colors"
          >
            Experience
          </Link>
          <Link
            href="#projects"
            className="px-0.5 py-2 rounded text-lg lg:text-2xl hover:text-orange-400 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#education"
            className="px-0.5 py-2 rounded text-lg lg:text-2xl hover:text-orange-400 transition-colors"
          >
            Education
          </Link>
        </div>

        <button className="md:hidden text-2xl mr-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <span className="sr-only">Open main menu</span>
          &#9776;
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"} absolute bg-gray-950 opacity-90 w-full mt-2 left-0 rounded-b-lg shadow-lg transition-all duration-300 ease-in-out text-center`}
      >
        <Link
          href="#about"
          className="block px-4 py-3 text-white hover:bg-gray-700 hover:text-orange-400 transition-colors"
        >
          About
        </Link>
        <Link
          href="#skills"
          className="block px-4 py-3 text-white hover:bg-gray-700 hover:text-orange-400 transition-colors"
        >
          Skills
        </Link>
        <Link
          href="#experience"
          className="block px-4 py-3 text-white hover:bg-gray-700 hover:text-orange-400 transition-colors"
        >
          Experience
        </Link>
        <Link
          href="#projects"
          className="block px-4 py-3 text-white hover:bg-gray-700 hover:text-orange-400 transition-colors"
        >
          Projects
        </Link>
        <Link
          href="#education"
          className="block px-4 py-3 text-white hover:bg-gray-700 hover:text-orange-400 transition-colors"
        >
          Education
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
