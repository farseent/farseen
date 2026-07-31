import { motion } from 'framer-motion';

export const Research = () => (
  <section id="research" className="py-24 md:py-32 px-6 md:px-16 max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-surface border border-line rounded-lg p-8 md:p-12 grid md:grid-cols-3 gap-8 items-center"
    >
      <div className="md:col-span-2">
        <span className="font-mono text-xs text-amber">04 / RESEARCH</span>
        <h2 className="font-display font-bold text-2xl md:text-3xl mt-3">
          AI-Based Satellite Image Change Detection
        </h2>
        <p className="text-muted mt-4 leading-relaxed">
          Co-authored and presented at ICOTL-26. The work applies a FresUNet
          deep-learning model to Sentinel-2 imagery to detect and visualize
          land-cover change over time — the research backbone behind GeoSentinel.
        </p>
      </div>

      <div className="font-mono text-xs text-muted border-t md:border-t-0 md:border-l border-line pt-6 md:pt-0 md:pl-8">
        <div className="mb-2">CONFERENCE</div>
        <div className="text-teal mb-4">ICOTL-26</div>
        <div className="mb-2">MODEL</div>
        <div className="text-teal">FresUNet</div>
      </div>
    </motion.div>
  </section>
);
