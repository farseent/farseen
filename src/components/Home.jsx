import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'

export const Home = () => {
  return (
    <section id="home" className="h-screen bg-slate-200 flex flex-col justify-center px-10">
      <div className='flex flex-col justify-between w-fit'>
          <TypeAnimation
            sequence={['Farseen T' ]}
            wrapper="span" cursor={false} className='text-7xl font-bold text-left '
            />
          <TypeAnimation
            sequence={[ 1000, 'A React developer']}
            wrapper="span" cursor={true} className='text-xl tracking-widest font-semibold text-left mt-2'
            />
           <div className='flex mt-6 w-64 justify-between'>
                <a href="#projects">
                    <button 
                    className="px-5 py-2 bg-transparent border border-black font-semibold rounded-full
                              hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 
                              focus:ring-offset-2 transition duration-300">
                      My Works
                    </button>
                </a>
                <a href="assets/Farseen CV-1.pdf" download="Farseen-resume.pdft">
                    <button 
                    className="px-5 py-2 bg-transparent border border-black font-semibold rounded-full
                              hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 
                              focus:ring-offset-2 transition duration-300">
                      Resume
                    </button>
                </a>
            </div>   
      </div>
      <div class="flex space-x-8 absolute bottom-4 right-4 px-4 py-2">
        {/* Instagram Icon */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className=" text-2xl text-gray-600 hover:text-gray-900 transition duration-300"
      >
        <FaInstagram />
      </a>
      
      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/your-number"
        target="_blank"
        rel="noopener noreferrer"
        className=" text-2xl text-gray-600 hover:text-gray-900  transition duration-300"
      >
        <FaWhatsapp />
      </a>
      
      {/* GitHub Icon */}
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className=" text-2xl text-gray-600 hover:text-gray-900  transition duration-300"
      >
        <FaGithub />
      </a>
      
      {/* LinkedIn Icon */}
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className=" text-2xl text-gray-600 hover:text-gray-900  transition duration-300"
      >
        <FaLinkedin />
      </a>
      </div>
  </section>
  )
}
