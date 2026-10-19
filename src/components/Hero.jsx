import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';
import { SocialLinks } from './SocialLinks';
import { StatusPanel } from './StatusPanel';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const CoordinateFrame = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
    <div className="absolute inset-4 sm:inset-6 md:inset-10 border border-line">
      <span className="absolute -top-2 left-0 font-mono text-[9px] sm:text-[10px] text-muted bg-ink px-1">40.7128°N</span>
      <span className="absolute -top-2 right-0 font-mono text-[9px] sm:text-[10px] text-muted bg-ink px-1">74.0060°W</span>
      <span className="absolute -bottom-2 left-0 font-mono text-[9px] sm:text-[10px] text-muted bg-ink px-1">SYS.STATUS: ACTIVE</span>
      <span className="absolute -bottom-2 right-0 font-mono text-[9px] sm:text-[10px] text-muted bg-ink px-1">v2.0</span>
    </div>
    <div className="absolute left-4 right-4 sm:left-6 sm:right-6 md:left-10 md:right-10 h-px bg-gradient-to-r from-transparent via-teal to-transparent animate-scan" />
  </div>
);

export const Hero = () => (
  <section
    id="home"
    className="relative min-h-screen flex flex-col justify-center px-6 sm:px-10 md:px-16 py-28 lg:py-0 overflow-hidden"
  >
    <CoordinateFrame />

    <div className="relative z-10 grid lg:grid-cols-5 gap-10 lg:gap-12 items-center">
      <div className="lg:col-span-3 max-w-2xl">
        <motion.span
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1 rounded-full border border-teal text-teal"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
          Full Stack Developer
        </motion.span>

        <motion.h1
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.1}
          variants={fadeUp}
          className="font-display font-bold text-3xl sm:text-4xl md:text-6xl mt-6 leading-tight"
        >
          Farseen T
        </motion.h1>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.2}
          variants={fadeUp}
          className="text-base sm:text-lg md:text-xl text-muted mt-4 leading-relaxed"
        >
          I build product-grade web applications — from{" "}
          <span className="text-teal">satellite image analysis</span> to{" "}
          <span className="text-amber">real-time booking systems</span>. MERN
          stack, end-to-end ownership, published research.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.3}
          variants={fadeUp}
          className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-8"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto text-center px-6 py-3 bg-teal text-ink font-display font-semibold rounded-full text-sm hover:brightness-110 transition"
          >
            View My Work
          </a>

          <a
            href="/assets/Farseen resume.pdf"
            className="w-full sm:w-auto justify-center px-6 py-3 border border-line rounded-full text-sm font-display font-semibold flex items-center gap-2 hover:border-teal hover:text-teal transition"
          >
            <FileDown size={16} />
            Resume
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.4}
          variants={fadeUp}
          className="mt-10"
        >
          <SocialLinks />
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        custom={0.25}
        variants={fadeUp}
        className="hidden lg:block lg:col-span-2"
      >
        <StatusPanel />
      </motion.div>
    </div>

    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      custom={0.5}
      variants={fadeUp}
      className="relative z-10 mt-16 md:mt-24"
    >
      <div className="flex flex-col sm:flex-row sm:flex-wrap divide-y divide-line sm:divide-y-0 sm:divide-x sm:divide-line font-mono text-xs text-muted border-t border-line pt-2 sm:pt-6">
        <span className="py-3 sm:py-0 sm:pr-8 first:pt-0">IET, University of Calicut</span>
        <span className="py-3 sm:py-0 sm:px-8">ICOTL-26 Published Research</span>
        <span className="py-3 sm:py-0 sm:px-8">Build Epik</span>
        <span className="py-3 sm:py-0 sm:px-8">Bridgeon Solutions</span>
        <span className="py-3 sm:py-0 sm:pl-8 last:pb-0">ModelSuite AI</span>
      </div>
    </motion.div>
  </section>
);