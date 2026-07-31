import { motion } from 'framer-motion';

const SKILL_GROUPS = [
  { label: 'Core Stack', items: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript (ES6+)'] },
  { label: 'Tooling & Infra', items: ['Docker', 'GitHub Actions CI/CD', 'Tailwind CSS', 'Git'] },
  { label: 'Currently Deepening', items: ['AWS (IAM, EC2, S3)', 'System Design', 'RAG / Agentic AI'] },
];

export const Skills = () => (
  <section id="skills" className="py-24 md:py-32 px-6 md:px-16 max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className="font-mono text-xs text-teal">02 / STACK</span>
      <h2 className="font-display font-bold text-3xl md:text-4xl mt-3 mb-14">What I build with</h2>
    </motion.div>

    <div className="grid md:grid-cols-3 gap-8">
      {SKILL_GROUPS.map((group, i) => (
        <motion.div
          key={group.label}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.12 }}
          className="bg-surface border border-line rounded-lg p-6 h-full"
        >
          <h3 className="font-mono text-xs text-muted uppercase tracking-wide mb-4">{group.label}</h3>
          <ul className="space-y-3">
            {group.items.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm md:text-base">
                <span className="w-1 h-1 rounded-full bg-teal shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);
