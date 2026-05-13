import { motion } from 'framer-motion';
import { HiCheckCircle, HiStar, HiGlobe, HiUserGroup } from 'react-icons/hi';

const achievements = [
  { icon: HiStar, value: '98%', label: 'Client Satisfaction', color: 'text-yellow-400' },
  { icon: HiGlobe, value: '30+', label: 'Countries Reached', color: 'text-cyan-400' },
  { icon: HiUserGroup, value: '50+', label: 'Team Members', color: 'text-green-400' },
  { icon: HiCheckCircle, value: '99.9%', label: 'Uptime SLA', color: 'text-primary-400' },
];

const timeline = [
  {
    year: '2017',
    title: 'The Beginning',
    description: 'Founded with a bold vision — to build software that matters.',
  },
  {
    year: '2019',
    title: 'Rapid Growth',
    description: 'Expanded our team to 25+ engineers and designers across 3 countries.',
  },
  {
    year: '2021',
    title: 'AI Integration',
    description: 'Launched our AI division, delivering intelligent solutions to enterprise clients.',
  },
  {
    year: '2024',
    title: 'Global Presence',
    description: 'Serving 120+ clients worldwide with offices in 4 major tech hubs.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-accent-500/[0.03] blur-[130px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-primary-500/[0.03] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge mb-6 inline-flex">
              <HiUserGroup className="w-4 h-4" />
              Our Story
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-heading text-white mb-6"
          >
            Building the{' '}
            <span className="gradient-text">Future Together</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subheading"
          >
            We're a team of passionate engineers, designers, and strategists on a mission 
            to craft digital experiences that leave lasting impressions.
          </motion.p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          {/* Left — Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass p-8 md:p-10">
              <h3 className="text-2xl font-display font-bold text-white mb-6">
                Why Choose Nexus?
              </h3>
              <div className="space-y-4 text-dark-400 leading-relaxed">
                <p>
                  At Nexus, we don't just write code — we architect digital ecosystems. 
                  Every pixel, every line, every interaction is intentionally designed to 
                  create experiences that captivate and convert.
                </p>
                <p>
                  Our team combines deep technical expertise with a relentless eye for 
                  design. We've shipped products for startups, scale-ups, and Fortune 500 
                  companies — always with the same standard of excellence.
                </p>
                <p>
                  From concept to deployment, we partner with you at every stage. Your 
                  success is our success, and we don't stop until the product exceeds 
                  expectations.
                </p>
              </div>

              {/* Feature list */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Agile Development',
                  'Dedicated Teams',
                  'Code Reviews',
                  'CI/CD Pipelines',
                  'Quality Assurance',
                  '24/7 Support',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-dark-300">
                    <HiCheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-500/50 via-accent-500/30 to-transparent" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative pl-12"
                >
                  {/* Dot */}
                  <div className="absolute left-[11px] top-1 w-[18px] h-[18px] rounded-full border-2 border-primary-500 bg-dark-950">
                    <div className="absolute inset-1 rounded-full bg-primary-500 animate-pulse" />
                  </div>

                  {/* Card */}
                  <div className="glass p-6 hover:border-primary-500/20 transition-all duration-300 group">
                    <span className="text-xs font-mono font-bold text-primary-400 tracking-wider uppercase">
                      {item.year}
                    </span>
                    <h4 className="text-lg font-display font-bold text-white mt-1 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-dark-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass p-6 text-center group hover:border-white/15 transition-all duration-300"
            >
              <item.icon className={`w-8 h-8 mx-auto mb-3 ${item.color}`} />
              <div className="text-2xl md:text-3xl font-display font-bold text-white mb-1">
                {item.value}
              </div>
              <p className="text-xs text-dark-400 font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
