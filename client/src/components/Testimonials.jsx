import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiStar, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const testimonials = [
  { name: 'Sarah Chen', role: 'CEO, TechVault', avatar: 'SC', rating: 5, text: 'Nexus completely transformed our digital presence. The attention to detail and code quality is unlike anything we\'ve experienced. Our conversion rates jumped 340% after the redesign.' },
  { name: 'Marcus Rodriguez', role: 'CTO, DataFlow AI', avatar: 'MR', rating: 5, text: 'Working with Nexus felt like having an extension of our own team. They delivered our AI dashboard 2 weeks ahead of schedule with zero bugs in production.' },
  { name: 'Emily Watson', role: 'Founder, Bloom Studio', avatar: 'EW', rating: 5, text: 'The design work was breathtaking. Every interaction, every animation — it all felt intentional and premium. Our users can\'t stop raving about the new experience.' },
  { name: 'James Park', role: 'VP Engineering, Quantum Labs', avatar: 'JP', rating: 5, text: 'Nexus built our entire cloud infrastructure from scratch. Scalable, secure, and beautifully architected. They\'re our go-to partner for all things digital.' },
  { name: 'Aria Patel', role: 'Product Lead, NovaPay', avatar: 'AP', rating: 5, text: 'From the initial wireframes to the final deployment, every step was executed with precision. The mobile app they built has a 4.9-star rating on both stores.' },
];

const avatarColors = ['bg-primary-500', 'bg-accent-500', 'bg-cyber-500', 'bg-green-500', 'bg-rose-500'];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => { setDirection(1); setCurrent((p) => (p + 1) % testimonials.length); }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => { setDirection(-1); setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length); };
  const next = () => { setDirection(1); setCurrent((p) => (p + 1) % testimonials.length); };

  const variants = {
    enter: (d) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d) => ({ x: d < 0 ? 300 : -300, opacity: 0 }),
  };

  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-500/[0.03] blur-[130px]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-badge mb-6 inline-flex"><HiStar className="w-4 h-4" />Client Love</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="section-heading text-white mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="section-subheading">
            Don't just take our word for it — hear from the amazing teams we've partnered with.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[280px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div key={current} custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }} className="glass p-8 md:p-12">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <HiStar key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg md:text-xl text-dark-200 leading-relaxed mb-8 italic">"{testimonials[current].text}"</p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full ${avatarColors[current]} flex items-center justify-center text-white font-bold text-sm`}>
                    {testimonials[current].avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonials[current].name}</p>
                    <p className="text-sm text-dark-400">{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="p-3 rounded-xl glass hover:bg-white/10 transition-colors"><HiChevronLeft className="w-5 h-5 text-white" /></button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-primary-500 w-6' : 'bg-dark-600 hover:bg-dark-500'}`} />
              ))}
            </div>
            <button onClick={next} className="p-3 rounded-xl glass hover:bg-white/10 transition-colors"><HiChevronRight className="w-5 h-5 text-white" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
