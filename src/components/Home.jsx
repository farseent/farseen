import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import Squares from '../Specials/Squares'

export const Home = () => {
  return (
    <section
      id="home"
      className="relative h-screen bg-black flex flex-col justify-center px-10 overflow-hidden"
    >
      {/* Squares as Background */}
      <div className="absolute inset-0 z-0">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#fff"
          hoverFillColor="#222"
        />
      </div>
  
      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col justify-between w-fit text-white">
        <TypeAnimation
          sequence={["Farseen T"]}
          wrapper="span"
          cursor={false}
          className="text-7xl font-bold text-left"
        />
        <TypeAnimation
          sequence={[1000, "I'm a React developer"]}
          wrapper="span"
          cursor={true}
          className="text-xl tracking-widest font-semibold text-left mt-2"
        />
        <div className="flex mt-6 w-64 justify-between">
          <a href="#projects">
            <button
              className="px-5 py-2 bg-transparent border border-white font-semibold rounded-full
                        hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-400 
                        focus:ring-offset-2 transition duration-300"
            >
              My Works
            </button>
          </a>
          <a href="assets/Farseen CV-1.pdf" download="Farseen-resume.pdft">
            <button
              className="px-5 py-2 bg-transparent border border-white font-semibold rounded-full
                        hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-400 
                        focus:ring-offset-2 transition duration-300"
            >
              Resume
            </button>
          </a>
        </div>
      </div>
      <div className="flex space-x-8 absolute bottom-4 right-4 px-4 py-2">
        <a
          href="https://www.instagram.com/farseen_t/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-600 hover:text-gray-300 transition duration-300"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/7736146247"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-600 hover:text-gray-300 transition duration-300"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://github.com/farseent"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-600 hover:text-gray-300 transition duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/farseent/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-600 hover:text-gray-300 transition duration-300"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
  
}
