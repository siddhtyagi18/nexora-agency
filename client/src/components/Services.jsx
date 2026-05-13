import { motion } from 'framer-motion';
import {
  HiCode,
  HiDeviceMobile,
  HiLightningBolt,
  HiColorSwatch,
  HiCloud,
  HiDesktopComputer,
} from 'react-icons/hi';

const services = [
  {
    icon: HiCode,
    title: 'Web Development',
    description:
      'We build blazing-fast, responsive websites and web apps using React, Next.js, and modern frameworks that convert visitors into customers.',
    gradient: 'from-primary-500 to-blue-500',
    glow: 'group-hover:shadow-primary-500/20',
    delay: 0.1,
  },
  {
    icon: HiDeviceMobile,
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile apps built with React Native and Flutter. Smooth, performant, and beautifully crafted for iOS & Android.',
    gradient: 'from-accent-500 to-pink-500',
    glow: 'group-hover:shadow-accent-500/20',
    delay: 0.2,
  },
  {
    icon: HiLightningBolt,
    title: 'AI Solutions',
    description:
      'Harness the power of artificial intelligence with custom ML models, NLP integrations, and intelligent automation that scales your business.',
    gradient: 'from-yellow-500 to-orange-500',
    glow: 'group-hover:shadow-yellow-500/20',
    delay: 0.3,
  },
  {
    icon: HiColorSwatch,
    title: 'UI/UX Design',
    description:
      'Human-centered design that delights users. We create intuitive interfaces with stunning visuals, micro-interactions, and seamless user flows.',
    gradient: 'from-cyber-500 to-teal-500',
    glow: 'group-hover:shadow-cyber-500/20',
    delay: 0.4,
  },
  {
    icon: HiCloud,
    title: 'Cloud Services',
    description:
      'Scalable cloud architecture on AWS, GCP, and Azure. We handle infrastructure, CI/CD pipelines, and DevOps so you can focus on growth.',
    gradient: 'from-green-500 to-emerald-500',
    glow: 'group-hover:shadow-green-500/20',
    delay: 0.5,
  },
  {
    icon: HiDesktopComputer,
    title: 'Desktop Applications',
    description:
      'Powerful desktop software built with Electron and Tauri. Cross-platform apps that feel native with modern UIs and top-tier performance.',
    gradient: 'from-rose-500 to-red-500',
    glow: 'group-hover:shadow-rose-500/20',
    delay: 0.6,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-primary-500/[0.03] blur-[120px] animate-float-slow" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent-500/[0.03] blur-[100px] animate-float-slower" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring' }}
          >
            <span className="section-badge mb-6 inline-flex">
              <HiLightningBolt className="w-4 h-4" />
              What We Do
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="section-heading text-white mb-6"
          >
            Services That{' '}
            <span className="gradient-text">Drive Growth</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="section-subheading"
          >
            We deliver end-to-end digital solutions that transform your vision into
            reality. Every project is crafted with precision, passion, and cutting-edge technology.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: service.delay, type: 'spring', stiffness: 100 }}
              whileHover={{ 
                y: -12, 
                scale: 1.03,
                rotate: 1
              }}
              whileTap={{ scale: 0.98 }}
              className={`group relative glass p-8 hover:border-white/15 transition-all duration-500 cursor-pointer ${service.glow} hover:shadow-2xl`}
            >
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <motion.div
                  className={`absolute inset-0 border-2 border-transparent ${service.gradient}`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Gradient top border */}
              <div
                className={`absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full`}
              />

              {/* Icon with animation */}
              <motion.div
                className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 shadow-lg`}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 360,
                  transition: { duration: 0.5 }
                }}
              >
                <service.icon className="w-7 h-7 text-white" />
              </motion.div>

              {/* Content */}
              <motion.h3 
                className="text-xl font-display font-bold text-white mb-3 group-hover:gradient-text-static transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {service.title}
              </motion.h3>
              <motion.p 
                className="text-dark-400 leading-relaxed text-[15px]"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {service.description}
              </motion.p>

              {/* Arrow with enhanced animation */}
              <motion.div 
                className="mt-6 flex items-center gap-2 text-sm font-medium text-dark-500 group-hover:text-primary-400 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <span>Learn more</span>
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </motion.svg>
              </motion.div>

              {/* Hover background glow */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
