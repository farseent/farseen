import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export const About = () => (
  <section id="about" className="py-24 md:py-32 px-6 md:px-16 max-w-6xl mx-auto">
    <div className="grid md:grid-cols-5 gap-12 items-start">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="md:col-span-2"
      >
        <span className="font-mono text-xs text-teal">01 / ABOUT</span>
        <h2 className="font-display font-bold text-3xl md:text-4xl mt-3">
          Systems thinker,
          <br />
          shipping developer
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="md:col-span-3 space-y-5 text-base md:text-lg text-muted leading-relaxed"
      >
        <p>
          I'm a MERN stack developer who likes problems with real edges — state
          machines, dispatch logic, auth flows that have to hold up under
          concurrency. Most recently that's meant building a multi-role ticket
          confirmation system with round-robin dispatch and live flight search, and
          co-authoring a research paper on satellite image change detection
          presented at ICOTL-26.
        </p>
        <p>
          I gravitate toward product-oriented teams where I can own a feature
          end-to-end, not just the frontend slice of it. Outside of shipping code,
          I train on competitive programming in C and keep exploring where AI/LLM
          integration meets everyday full-stack work.
        </p>
        <div className="flex items-center gap-3 pt-2 font-mono text-sm">
          <MapPin size={16} className="text-teal" />
          Malappuram, Kerala, India
        </div>
      </motion.div>
    </div>
  </section>
);
