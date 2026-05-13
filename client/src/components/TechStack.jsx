import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChip } from 'react-icons/hi';
import { SiReact, SiNextdotjs, SiTailwindcss, SiVuedotjs, SiNodedotjs, SiExpress, SiSpringboot, SiDjango, SiGo, SiMongodb, SiPostgresql, SiMysql, SiRedis, SiDocker, SiVercel, SiGithubactions } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const tabs = [
  { id: 'frontend', label: 'Frontend', color: 'from-blue-500 to-cyan-500', techs: [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D' },
  ]},
  { id: 'backend', label: 'Backend', color: 'from-green-500 to-emerald-500', techs: [
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
    { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
    { name: 'Django', icon: SiDjango, color: '#092E20' },
    { name: 'Go', icon: SiGo, color: '#00ADD8' },
  ]},
  { id: 'database', label: 'Database', color: 'from-orange-500 to-amber-500', techs: [
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'Redis', icon: SiRedis, color: '#DC382D' },
  ]},
  { id: 'devops', label: 'DevOps', color: 'from-purple-500 to-violet-500', techs: [
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'AWS', icon: FaAws, color: '#FF9900' },
    { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
    { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
  ]},
];

export default function TechStack() {
  const [activeTab, setActiveTab] = useState('frontend');
  const currentTab = tabs.find((t) => t.id === activeTab);

  return (
    <section id="tech" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary-500/[0.03] blur-[150px] animate-float" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.8 }} 
            whileInView={{ opacity: 1, y: 0, scale: 1 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring' }}
          >
            <span className="section-badge mb-6 inline-flex animate-pulse-glow">
              <HiChip className="w-4 h-4" />
              Our Arsenal
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.1, duration: 0.8 }}
            className="section-heading text-white mb-6"
          >
            Technology <span className="gradient-text">Stack</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.2, duration: 0.8 }}
            className="section-subheading"
          >
            We leverage the most powerful and modern technologies to build products that are fast, scalable, and future-proof.
          </motion.p>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {tabs.map((tab) => (
            <motion.button 
              key={tab.id} 
              onClick={() => setActiveTab(tab.id)} 
              className={`relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${activeTab === tab.id ? 'text-white' : 'text-dark-400 hover:text-white hover:bg-white/5'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeTab === tab.id && (
                <motion.div 
                  layoutId="activeTechTab" 
                  className={`absolute inset-0 bg-gradient-to-r ${tab.color} rounded-xl opacity-20`} 
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }} 
                />
              )}
              {activeTab === tab.id && (
                <motion.div 
                  layoutId="activeTechBorder" 
                  className="absolute inset-0 rounded-xl border border-white/20" 
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }} 
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </motion.button>
          ))}
        </motion.div>
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab} 
            initial={{ opacity: 0, y: 20, rotateX: 10 }} 
            animate={{ opacity: 1, y: 0, rotateX: 0 }} 
            exit={{ opacity: 0, y: -20, rotateX: -10 }} 
            transition={{ duration: 0.5, type: 'spring' }} 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-4xl mx-auto"
          >
            {currentTab?.techs.map((tech, index) => (
              <motion.div 
                key={tech.name} 
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }} 
                animate={{ opacity: 1, scale: 1, rotate: 0 }} 
                transition={{ duration: 0.5, delay: index * 0.1, type: 'spring' }} 
                whileHover={{ 
                  y: -12, 
                  scale: 1.1,
                  rotate: 3,
                  transition: { duration: 0.3 }
                }} 
                whileTap={{ scale: 0.95 }}
                className="group glass p-6 flex flex-col items-center gap-4 text-center hover:border-white/20 transition-all duration-500 cursor-pointer"
              >
                <div className="relative">
                  <motion.div
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <tech.icon 
                      className="w-10 h-10 transition-transform duration-300 group-hover:scale-125" 
                      style={{ color: tech.color }} 
                    />
                  </motion.div>
                  <div 
                    className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-full animate-pulse" 
                    style={{ backgroundColor: tech.color }} 
                  />
                </div>
                <motion.span 
                  className="text-sm font-semibold text-dark-300 group-hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  {tech.name}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
