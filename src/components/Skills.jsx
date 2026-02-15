import React from 'react';
import { motion } from 'framer-motion';

export const Skills = () => {
  const skills = [
    { name: 'React.js', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Express.js', level: 80 },
    { name: 'MongoDB', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML', level: 85 },
    { name: 'CSS', level: 85 },
    { name: 'Git', level: 70}
  ];

  const midpoint = Math.ceil(skills.length / 2);
  const leftSkills = skills.slice(0, midpoint);
  const rightSkills = skills.slice(midpoint);

  return (
    <section
      id="skills"
      className="min-h-screen bg-black flex flex-col items-center justify-center px-6 md:px-10 text-white"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-[#0aff9d] mb-10">
        My Skills
      </h2>

      {/* Skills Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
        {/* Left Column */}
        <div className="space-y-8">
          {leftSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="w-full"
              initial={{ opacity: 0, x: '-100%' }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-medium">{skill.name}</span>
                <span className="text-sm font-medium text-gray-400">
                  {skill.level}%
                </span>
              </div>
              <div className="relative w-full h-4 bg-gray-800 rounded-full">
                <motion.div
                  className="absolute top-0 left-0 h-4 bg-[#0aff9d] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {rightSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="w-full"
              initial={{ opacity: 0, x: '100%' }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-medium">{skill.name}</span>
                <span className="text-sm font-medium text-gray-400">
                  {skill.level}%
                </span>
              </div>
              <div className="relative w-full h-4 bg-gray-800 rounded-full">
                <motion.div
                  className="absolute top-0 left-0 h-4 bg-[#0aff9d] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
