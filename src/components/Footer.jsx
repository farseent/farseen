import { SocialLinks } from './SocialLinks';

export const Footer = () => (
  <footer className="px-6 md:px-16 py-8 border-t border-line">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs text-muted">
      <span>© {new Date().getFullYear()} Farseen T. Built with React &amp; Tailwind.</span>
      <SocialLinks />
    </div>
  </footer>
);
