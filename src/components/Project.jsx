import React from 'react';

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
    github: 'https://github.com/farseent/portfolio-website',
    image: '/assets/project-preview/portfolio.png',
  },
  {
    name: 'Portfolio Website',
    description: 'A personal portfolio to showcase projects and skills.',
    github: 'https://github.com/farseent/portfolio-website',
    image: '/assets/project-preview/portfolio.png',
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
            <div
              key={index}
              className="bg-gray-900 rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Project Image */}
              <div className="mb-6">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover rounded-lg border border-gray-700"
                />
              </div>

              {/* Project Details */}
              <h3 className="text-2xl font-semibold mb-3">{project.name}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex justify-center space-x-6">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#0aff9d] text-black font-semibold rounded-full transition hover:bg-[#05e586]"
                  >
                    Live Demo
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-transparent border border-[#0aff9d] text-[#0aff9d] font-semibold rounded-full transition hover:bg-[#0aff9d] hover:text-black"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
