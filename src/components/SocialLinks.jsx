import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const LINKS = [
  { href: 'https://github.com/farseent', label: 'GitHub profile', Icon: FaGithub },
  { href: 'https://linkedin.com/in/farseent', label: 'LinkedIn profile', Icon: FaLinkedin },
  { href: 'https://www.instagram.com/farseen_t', label: 'Instagram profile', Icon: FaInstagram },
];

export const SocialLinks = ({ className = '' }) => (
  <div className={`flex gap-5 text-muted ${className}`}>
    {LINKS.map(({ href, label, Icon }) => (
      <a
        key={label}
        href={href}
        target={href.startsWith('mailto') ? undefined : '_blank'}
        rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
        aria-label={label}
        className="transition-colors hover:text-white"
      >
        <Icon size={20} />
      </a>
    ))}
  </div>
);
