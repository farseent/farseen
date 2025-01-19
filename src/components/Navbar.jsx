import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';

export const Navbar = () => {

const [hamburger,isHamburger] = useState(false);

const toggleHamburger = () => {
    isHamburger((prev) => !prev);
}

useEffect(() => {
    const handleClickOutside = (event) => {
        if(
            hamburger &&
            !event.target.closest('#hamburger-menu') &&
            !event.target.closest('#hamburger')
        ) {
            isHamburger(false);
        }
    }
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
}, [hamburger]);

  return (
    <div>
      <nav className="bg-transparent backdrop-blur-md bg-opacity-70 text-white fixed w-full z-40">
        <div className="container mx-auto px-4 flex justify-center items-center py-4">
          <ul className="hidden md:flex space-x-8">
            {['Home', 'About','Skills','Projects', 'Contact'].map((section) => (
              <li key={section}>
                <a
                  href={`#${section.toLowerCase()}`}
                  className="text-white font-semibold tracking-wide hover:text-purple-400 transition duration-300"
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
          <button
            id="hamburger"
            className="block md:hidden text-white focus:outline-none"
            onClick={toggleHamburger}
          >
            <FaBars size={24} />
          </button>
        </div>
      </nav>
      <div
        id="hamburger-menu"
        className={`fixed bg-gray-800 text-white top-16 left-0 w-full rounded-b-lg py-6 px-4 space-y-4 z-50 shadow-lg transition-all duration-500 ease-in-out ${
          hamburger ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="text-center space-y-4">
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((section) => (
            <li key={section}>
              <a
                href={`#${section.toLowerCase()}`}
                className="text-white font-semibold tracking-wide hover:text-purple-400 transition duration-300"
                onClick={() => {
                  isHamburger(false);
                }}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
