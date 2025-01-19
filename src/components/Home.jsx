import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import MagnetLines from '../Specials/MagnetLines'
import {motion} from 'framer-motion'

export const Home = () => {
  return (
    <section
      id="home"
      className="relative h-screen bg-black flex flex-col justify-center px-6 md:px-10 overflow-hidden"
    >
      {/* Background Lines */}
      <motion.div 
        initial={{opacity:0,translateY: "100%"}}
        whileInView={{opacity:1,translateY: 0}}
        transition={{duration:1}}
        viewport={{ once: true }}
        className="absolute z-0 hidden md:block md:right-24">
          <MagnetLines
            rows={9}
            columns={9}
            containerSize="70vmin"
            lineColor="#0aff9d"
            lineWidth="0.8vmin"
            lineHeight="5vmin"
            baseAngle={0}
            style={{ margin: "0 auto" }}
          />
      </motion.div>
  
      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col justify-between w-fit text-white mx-auto md:mx-0">
        <TypeAnimation
          sequence={["Farseen T"]}
          wrapper="span"
          cursor={false}
          className="text-4xl md:text-7xl font-bold text-center md:text-left"
        />
        <TypeAnimation
          sequence={[1000, "I'm a React developer"]}
          wrapper="span"
          cursor={true}
          className="text-lg md:text-xl text-[#0aff9d] tracking-widest font-semibold text-center md:text-left mt-2"
        />
        <motion.div 
          initial={{opacity: 0,translateY: "100%"}}
          whileInView={{opacity: 1,translateY: 0}}
          transition={{duration: 1, delay: 0.3}}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row mt-6 w-full md:w-64 justify-center md:justify-between text-[#0aff9d] gap-4">
            <a href="#projects">
              <button
                className="px-4 py-2 bg-transparent border border-[#0aff9d] font-semibold rounded-full
                          hover:bg-[#0aff9d] hover:text-black focus:outline-none transition duration-300"
              >
                My Works
              </button>
            </a>
            <a href="public\assets\Farseen CV-1.pdf" download="Farseen-resume.pdf">
              <button
                className="px-4 py-2 bg-transparent border border-[#0aff9d] font-semibold rounded-full
                          hover:bg-[#0aff9d] hover:text-black focus:outline-none transition duration-300"
              >
                Resume
              </button>
            </a>
        </motion.div>
      </div>
  
      {/* Social Links */}
      <motion.div 
        initial={{opacity:0,translateY: "100%"}}
        whileInView={{opacity:1,translateY: 0}}
        transition={{duration:1,delay: 0.3}}
        viewport={{ once: true }}
        className="flex space-x-4 absolute bottom-4 right-16 px-2 py-2 md:space-x-8">
          <a
            href="https://www.instagram.com/farseen_t/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl text-gray-600 hover:text-[#0aff9d] transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/7736146247"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl text-gray-600 hover:text-[#0aff9d] transition duration-300"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://github.com/farseent"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl text-gray-600 hover:text-[#0aff9d] transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/farseent/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl text-gray-600 hover:text-[#0aff9d] transition duration-300"
          >
            <FaLinkedin />
          </a>
      </motion.div>
    </section>
  );
}
