import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiCode, HiUsers, HiClock, HiShieldCheck } from 'react-icons/hi';

const stats = [
  { icon: HiCode, value: 250, suffix: '+', label: 'Projects Completed', color: 'from-primary-500 to-primary-400' },
  { icon: HiUsers, value: 120, suffix: '+', label: 'Clients Served', color: 'from-accent-500 to-accent-400' },
  { icon: HiClock, value: 8, suffix: '+', label: 'Years Experience', color: 'from-cyber-500 to-cyber-400' },
  { icon: HiShieldCheck, value: 24, suffix: '/7', label: 'Support Available', color: 'from-green-500 to-emerald-400' },
];

function AnimatedCounter({ target, suffix, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/[0.02] to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group"
            >
              <div className="glass p-6 md:p-8 text-center hover:border-primary-500/20 transition-all duration-500">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${stat.color} bg-opacity-10 mb-4`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>

                {/* Value */}
                <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    inView={isInView}
                  />
                </div>

                {/* Label */}
                <p className="text-sm text-dark-400 font-medium">{stat.label}</p>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-5`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
