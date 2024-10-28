'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/globals.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent text-white bg-opacity-60 backdrop-blur-md p-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center">
        <div className="flex text-3xl font-bold items-center justify-center ml-12">
          <Link className= "mt-3 font-poppins"href="/">Portfolio</Link>
          <Image className="ml-2" src="/hutao.png" alt="Logo" width={55} height={55} />
        </div>

        <div className="flex-grow flex justify-center md:flex">
            <div className="hidden md:flex space-x-14 mr-32 font-poppins">
                <Link href="#about" className=" px-0.5 py-2 rounded text-2xl ">About</Link>
                <Link href="#skills" className=" px-0.5 py-2 rounded text-2xl ">Skills</Link>
                <Link href="#experience" className=" px-0.5 py-2 rounded text-2xl ">Experience</Link>
                <Link href="#projects" className=" px-0.5 py-2 rounded text-2xl ">Projects</Link>
                <Link href="#education" className=" px-0.5 py-2 rounded text-2xl ">Education</Link>
            </div>
        </div>

        <button
          className="md:hidden text-2xl ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          &#9776;
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute bg-gray-800 w-full mt-2`}>
        <Link href="/" className="block px-4 py-2 text-white hover:bg-gray-700">Home</Link>
        <Link href="#projects" className="block px-4 py-2 text-white hover:bg-gray-700">Projects</Link>
        <Link href="#about" className="block px-4 py-2 text-white hover:bg-gray-700">About</Link>
        <Link href="#contact" className="block px-4 py-2 text-white hover:bg-gray-700">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
