import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const SECTIONS = ['Home', 'About', 'Skills', 'Projects', 'Research', 'Contact'];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.toLowerCase());
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink/85 backdrop-blur-md border-b border-line' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 flex justify-between items-center py-4">
        <a href="#home" className="font-display font-bold text-lg">
          Farseen<span className="text-teal">.</span>
        </a>

        <ul className="hidden md:flex gap-8 font-mono text-xs uppercase tracking-wide">
          {SECTIONS.map((s) => {
            const id = s.toLowerCase();
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? 'page' : undefined}
                  className={active === id ? 'text-teal' : 'text-muted hover:text-white transition-colors'}
                >
                  {s}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          className="md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col items-center gap-6 py-6 bg-ink/95 font-mono text-sm uppercase">
          {SECTIONS.map((s) => (
            <li key={s}>
              <a href={`#${s.toLowerCase()}`} onClick={() => setOpen(false)}>
                {s}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};
