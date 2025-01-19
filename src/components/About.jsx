
import React from 'react';
import { motion } from 'framer-motion';
import myImage from '../assets/my-image.jpg'

export const About = () => {
  return (
    <section
      id="about"
      className="h-screen bg-black flex items-center justify-center px-6 md:px-10 text-white"
    >
      <div className="flex flex-col md:flex-row w-full max-w-screen-xl mx-auto">
        {/* Left Section: Image */}
        <motion.div
          initial={{ opacity: 0, translateX: '-50%' }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="md:w-1/2 flex justify-center mb-6 md:mb-0"
        >
          <img
            src={myImage} // Replace with your image URL
            alt="Farseen"
            className="w-72 h-72 object-cover rounded-full border-4 border-[#0aff9d]"
          />
        </motion.div>
        <div className="md:w-1/2 border-l-2 border-[#0aff9d] hidden md:block"></div>
        {/* Right Section: Text */}
        <div className="md:w-1/2 flex flex-col justify-center pl-0 md:pl-12">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, translateY: '50%' }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-[#0aff9d] mb-4"
          >
            About Me
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, translateY: '50%' }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            Hi, I’m <span className="text-[#0aff9d]">Farseen</span>. I specialize
            in <span className="font-semibold text-[#0aff9d]">React.js</span> and modern web development. 
            My passion is crafting intuitive and efficient user experiences that make a difference. 
            If you're looking for someone to bring your ideas to life, let’s create something amazing together!
          </motion.p>
        </div>
      </div>
    </section>
  );
};
