import React, { useEffect, useState } from 'react';

export const Navbar = () => {
  return (
    <div>
      <nav className="bg-transparent backdrop-blur-md bg-opacity-70 text-white fixed w-full z-40">
        <div className="container mx-auto px-4 flex justify-center items-center py-4">
          <ul className="flex space-x-8">
            {['Home', 'About','Skills','Projects', 'Contact'].map((section) => (
              <li key={section}>
                <a
                  href={`#${section.toLowerCase()}`}
                  className="text-white font-semibold tracking-wide hover:text-[#0aff9d] transition duration-300"
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  )
}
