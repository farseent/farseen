import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { ExternalLink } from 'lucide-react';

export const PROJECTS = [
  {
    name: 'GeoSentinel',
    tag: 'FLAGSHIP',
    description:
      'A MERN + Flask platform for satellite image change detection using Sentinel-2 imagery and a FresUNet deep learning model. Built the full web layer: React/Leaflet map frontend, JWT/RBAC auth with HttpOnly cookies, OTP password reset, and Flask microservice integration producing 14 output image types.',
    meta: ['REACT', 'LEAFLET', 'EXPRESS', 'FLASK', 'JWT/RBAC'],
    github: 'https://github.com/farseent/GeoSentinel',
    demo: null,
    note: 'Co-authored paper presented at ICOTL-26',
  },
  {
    name: 'Ticket Confirmation System',
    tag: 'IN PROGRESS',
    description:
      'A multi-role booking workflow with a state machine for ticket lifecycle, round-robin dispatch for confirmations, immutable audit logging, and live flight search via the Duffel API with INR/USD conversion. Containerized with Docker and CI/CD.',
    meta: ['MERN', 'DUFFEL API', 'JWT + COOKIES', 'DOCKER', 'CI/CD'],
    github: 'https://github.com/farseent',
    demo: null,
    note: 'Most technically involved project to date',
  },
  {
    name: 'TransitHub',
    tag: 'PLATFORM',
    description:
      'A community-driven public transport search and review platform with four-role RBAC (rider, operator, admin, moderator), built to surface bus routes and rider feedback in one place.',
    meta: ['MERN', 'RBAC', 'MONGODB'],
    github: 'https://github.com/farseent/TransitHub',
    demo: null,
  },
  {
    name: 'MediRemind',
    tag: '2ND PLACE · HACKATHON',
    description:
      'An AI-powered prescription and medication reminder app built in a 24-hour IEDC hackathon. Scans prescriptions and uses Google Gemini AI to extract doctor, medicines, dosage, and frequency into structured JSON, then drives a reminder engine with browser notifications and alarm alerts that keep firing even when the app isn\'t open.',
    meta: ['REACT', 'NODE/EXPRESS', 'MONGODB', 'GEMINI AI', 'DOCUMENT AI'],
    github: 'https://github.com/farseent/MediRemind',
    demo: null,
    note: 'Placed 2nd at IEDC 24-hour hackathon',
  },
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group bg-surface border border-line rounded-lg p-6 h-full flex flex-col transition-all duration-300 hover:border-teal hover:-translate-y-1"
  >
    <div className="flex items-start justify-between gap-3">
      <h3 className="font-display font-semibold text-xl">{project.name}</h3>
      <span className="font-mono text-[10px] text-amber border border-amber rounded-full px-2 py-0.5 shrink-0">
        {project.tag}
      </span>
    </div>

    <p className="text-muted text-sm mt-3 leading-relaxed flex-1">{project.description}</p>

    {project.note && <p className="text-teal font-mono text-xs mt-3">→ {project.note}</p>}

    <div className="flex flex-wrap gap-2 mt-5 font-mono text-[10px] text-muted">
      {project.meta.map((m) => (
        <span key={m} className="border border-line rounded px-2 py-1">
          {m}
        </span>
      ))}
    </div>

    <div className="flex gap-4 mt-6 pt-5 border-t border-line">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-sm hover:text-white transition-colors"
      >
        <FaGithub size={15} /> Code
      </a>
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm text-teal"
        >
          <ExternalLink size={15} /> Live Demo
        </a>
      )}
    </div>
  </motion.div>
);

export const Projects = () => (
  <section id="projects" className="py-24 md:py-32 px-6 md:px-16 max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className="font-mono text-xs text-teal">03 / PROJECTS</span>
      <h2 className="font-display font-bold text-3xl md:text-4xl mt-3 mb-14">Selected work</h2>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-6">
      {PROJECTS.map((p, i) => (
        <ProjectCard key={p.name} project={p} index={i} />
      ))}
    </div>
  </section>
);
