import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav className="bg-white p-4 shadow-lg fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link 
          to="hero" 
          smooth={true} 
          duration={500} 
          className="text-2xl font-bold text-indigo-700 cursor-pointer"
        >
          Portfolio
        </Link>
        <div className="space-x-6 hidden md:flex">
          <Link 
            to="about" 
            smooth={true} 
            duration={500} 
            className="text-gray-600 hover:text-indigo-700 cursor-pointer"
          >
            About
          </Link>
          <Link 
            to="projects" 
            smooth={true} 
            duration={500} 
            className="text-gray-600 hover:text-indigo-700 cursor-pointer"
          >
            Projects
          </Link>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            className="text-gray-600 hover:text-indigo-700 cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
