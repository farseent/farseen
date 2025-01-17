import React from 'react'

const projects = [
    {
      name: 'E-Commerce App',
      description: 'A full-stack e-commerce app with admin and user features.',
      stack: ['React.js', 'Node.js', 'MongoDB'],
      demo: 'https://yourapp.vercel.app',
      github: 'https://github.com/yourusername/ecommerce-app',
    },
  ];
  
export const Project = () => {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Tech Stack:</strong> {project.stack.join(', ')}
              </p>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Live Demo
              </a>
              {' | '}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub Repo
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
