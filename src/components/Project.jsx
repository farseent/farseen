import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'E-Commerce App',
    description: 'An e-commerce app with admin and user features.',
    demo: 'https://e-com-app-henna.vercel.app',
    github: 'https://github.com/farseent/e-com-app',
    image: '/assets/project-preview/e-commerce.png',
  },
  {
    name: 'Portfolio Website',
    description: 'A personal portfolio to showcase projects and skills.',
    github: 'https://github.com/farseent/portfolio',
    image: '/assets/project-preview/portfolio.png',
  },
  {
    name: 'Login & Signup',
    description: 'Signup handler to check duplicates, add users, and navigate to the dashboard.',
    github: 'https://github.com/farseent/login-signup',
    image: '/assets/project-preview/Login.png',
  },
  {
    name: 'Todo App',
    description: 'A React TodoList with add, delete, and dynamic task display.',
    github: 'https://github.com/farseent/todo',
    image: '/assets/project-preview/todo.png',
  },
  {
    name: 'Counter App',
    description: 'A React counter with increment, decrement, add-five, and dynamic background.',
    github: 'https://github.com/farseent/Counter',
    image: '/assets/project-preview/Counter.png',
  },
  
];

export const Project = () => {
  return (
    <section
      id="projects"
      className="py-16 bg-black text-white flex flex-col justify-center px-6 md:px-10"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#0aff9d] mb-10">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, translateY: '20%', scale: 0.9 }}
              whileInView={{ opacity: 1, translateY: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              key={index}
              className="bg-gray-900 rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:rotate-3"
            >
              {/* Project Image */}
              <div className="mb-6">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover rounded-lg border border-gray-700 transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Project Details */}
              <h3 className="text-2xl font-semibold mb-3 transition-transform duration-300 hover:text-[#0aff9d]">
                {project.name}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              {/* Project Links */}
              <div className="flex justify-center space-x-6">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#0aff9d] text-black font-semibold rounded-full transition-all hover:bg-[#05e586] hover:scale-105"
                  >
                    Live Demo
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-transparent border border-[#0aff9d] text-[#0aff9d] font-semibold rounded-full transition-all hover:bg-[#0aff9d] hover:text-black hover:scale-105"
                >
                  GitHub Repo
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
