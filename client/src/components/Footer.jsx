import { motion } from 'framer-motion';
import { HiHeart } from 'react-icons/hi';
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Tech Stack', href: '#tech' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: FaGithub, href: '#', label: 'GitHub' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
];

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.06] pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary-500/[0.03] blur-[120px]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('#home'); }} className="text-2xl font-display font-bold gradient-text">NEXUS</a>
            <p className="text-dark-400 mt-4 text-sm leading-relaxed max-w-xs">Transforming bold ideas into stunning digital experiences. We build the future, one pixel at a time.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={(e) => { e.preventDefault(); scrollTo(link.href); }} className="text-sm text-dark-400 hover:text-primary-400 transition-colors duration-300">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex gap-3">
              {socials.map((s) => (
                <motion.a key={s.label} href={s.href} whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.95 }} className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary-500/30 hover:bg-primary-500/10 transition-all duration-300" aria-label={s.label}>
                  <s.icon className="w-4 h-4 text-dark-400 hover:text-white" />
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-dark-500 mt-6">hello@nexusagency.dev</p>
          </div>
        </div>
        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-dark-500">© {new Date().getFullYear()} Nexus Agency. All rights reserved.</p>
          <p className="text-sm text-dark-500 flex items-center gap-1">Built with <HiHeart className="w-4 h-4 text-red-500" /> by Nexus Team</p>
        </div>
      </div>
    </footer>
  );
}
