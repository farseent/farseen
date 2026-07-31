import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
// npm install @emailjs/browser, then uncomment below and fill in your IDs
// import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      // await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   form,
      //   'YOUR_PUBLIC_KEY'
      // );
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-16 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs text-teal">05 / CONTACT</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-3 mb-6">Let's build something</h2>
          <p className="text-muted leading-relaxed mb-8">
            Open to full-stack roles, especially with product teams building
            something worth owning end-to-end. Reach out directly, or use the form.
          </p>
          <div className="space-y-4 font-mono text-sm">
            <a href="mailto:farseen.ft@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
              <Mail size={16} className="text-teal" /> farseen.ft@gmail.com
            </a>
            <div className="flex items-center gap-3 text-muted">
              <MapPin size={16} className="text-teal" /> Malappuram, Kerala, India
            </div>
            <a
              href="https://linkedin.com/in/farseent"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-white transition-colors"
            >
              <FaLinkedin size={16} className="text-teal" /> linkedin.com/in/farseent
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="bg-surface border border-line rounded-lg p-6 md:p-8 space-y-5"
        >
          <div>
            <label htmlFor="name" className="block font-mono text-xs text-muted uppercase mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-md bg-transparent border border-line text-sm outline-none focus:border-teal transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-mono text-xs text-muted uppercase mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-md bg-transparent border border-line text-sm outline-none focus:border-teal transition-colors"
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-mono text-xs text-muted uppercase mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="What are you building?"
              className="w-full px-4 py-3 rounded-md bg-transparent border border-line text-sm outline-none focus:border-teal transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full py-3 font-display font-semibold rounded-md text-sm flex items-center justify-center gap-2 bg-teal text-ink hover:brightness-110 transition disabled:opacity-60"
          >
            {status === 'sent' ? 'Message sent ✓' : status === 'sending' ? 'Sending…' : 'Send message'}
            {status === 'idle' && <ArrowUpRight size={16} />}
          </button>
          {status === 'error' && (
            <p className="font-mono text-xs text-amber text-center">
              Something went wrong. Try emailing directly instead.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};
