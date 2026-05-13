import { motion } from 'framer-motion';
import { HiArrowRight, HiPlay } from 'react-icons/hi';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Central glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary-500/[0.07] blur-[150px]" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-accent-500/[0.05] blur-[120px] animate-float-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-cyber-500/[0.04] blur-[100px] animate-float-slower" />

        {/* Grid */}
        <div className="absolute inset-0 grid-pattern opacity-40" />

        {/* Gradient lines */}
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-primary-500/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="section-badge">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for new projects
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-[1.05] mb-8"
        >
          <span className="block text-white dark:text-white">Transforming Ideas</span>
          <span className="block gradient-text mt-2">Into Digital Reality</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-dark-400 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          We craft premium digital experiences that push boundaries. From stunning websites 
          to intelligent AI solutions — we build the future, one pixel at a time.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(99, 102, 241, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300"
          >
            <span className="relative z-10">Start a Project</span>
            <HiArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>

          <motion.a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/15 text-white font-semibold rounded-2xl hover:bg-white/5 hover:border-white/25 transition-all duration-300"
          >
            <HiPlay className="w-5 h-5 text-primary-400" />
            <span>Explore Services</span>
          </motion.a>
        </motion.div>

        {/* Floating illustration / Orbit */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative mx-auto w-full max-w-3xl"
        >
          {/* Central card */}
          <div className="relative glass-strong p-8 md:p-12 rounded-3xl overflow-hidden">
            {/* Inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/10" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-primary-400/50 to-transparent" />

            {/* Fake code block */}
            <div className="relative font-mono text-sm text-left space-y-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-3 text-dark-500 text-xs">nexus.config.ts</span>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <span className="text-accent-400">const</span>{' '}
                <span className="text-cyber-400">nexus</span>{' '}
                <span className="text-dark-400">=</span>{' '}
                <span className="text-primary-400">createAgency</span>
                <span className="text-dark-400">{'({'}</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
              >
                <span className="text-dark-500 ml-4">vision:</span>{' '}
                <span className="text-green-400">"Build the impossible"</span>
                <span className="text-dark-400">,</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.5 }}
              >
                <span className="text-dark-500 ml-4">stack:</span>{' '}
                <span className="text-dark-400">[</span>
                <span className="text-yellow-400">"React"</span>
                <span className="text-dark-400">,</span>{' '}
                <span className="text-yellow-400">"Node"</span>
                <span className="text-dark-400">,</span>{' '}
                <span className="text-yellow-400">"AI"</span>
                <span className="text-dark-400">],</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.5 }}
              >
                <span className="text-dark-500 ml-4">quality:</span>{' '}
                <span className="text-cyber-400">Infinity</span>
                <span className="text-dark-400">,</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
              >
                <span className="text-dark-400">{'});'}</span>
              </motion.div>
            </div>
          </div>

          {/* Floating badges */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-4 -right-4 md:right-8 glass px-4 py-2 rounded-xl text-sm font-medium"
          >
            <span className="text-green-400">●</span> Production Ready
          </motion.div>

          <motion.div
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-4 -left-4 md:left-8 glass px-4 py-2 rounded-xl text-sm font-medium"
          >
            <span className="text-primary-400">⚡</span> Lightning Fast
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-white/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
