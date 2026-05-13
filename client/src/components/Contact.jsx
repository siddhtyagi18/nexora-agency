import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiUser, HiChatAlt2, HiPaperAirplane } from 'react-icons/hi';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Contact() {
  const [form, setForm] = useState({ fullName: '', email: '', description: '' });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = 'Name is required';
    else if (form.fullName.trim().length < 2) errs.fullName = 'Name is too short';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email address';
    if (!form.description.trim()) errs.description = 'Message is required';
    else if (form.description.trim().length < 10) errs.description = 'Message is too short (min 10 chars)';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await axios.post('/api/contact', form);
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setForm({ fullName: '', email: '', description: '' });
      setErrors({});
    } catch (err) {
      toast.error(err.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const inputClass = (field) => `w-full bg-white/5 border ${errors[field] ? 'border-red-500/50' : 'border-white/10 focus:border-primary-500/50'} rounded-xl px-4 py-3.5 text-white placeholder-dark-500 outline-none transition-all duration-300 focus:bg-white/[0.08] focus:ring-2 focus:ring-primary-500/20`;

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary-500/[0.04] blur-[150px]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-badge mb-6 inline-flex"><HiMail className="w-4 h-4" />Get In Touch</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="section-heading text-white mb-6">
            Let's Build Something <span className="gradient-text">Amazing</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="section-subheading">
            Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you within 24 hours.
          </motion.p>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="glass p-8 md:p-12 space-y-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-dark-300 mb-2"><HiUser className="w-4 h-4 text-primary-400" />Full Name</label>
              <input type="text" name="fullName" value={form.fullName} onChange={handleChange} placeholder="John Doe" className={inputClass('fullName')} />
              {errors.fullName && <p className="text-red-400 text-xs mt-1.5">{errors.fullName}</p>}
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-dark-300 mb-2"><HiMail className="w-4 h-4 text-primary-400" />Email Address</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" className={inputClass('email')} />
              {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-dark-300 mb-2"><HiChatAlt2 className="w-4 h-4 text-primary-400" />Message</label>
              <textarea name="description" value={form.description} onChange={handleChange} placeholder="Tell us about your project..." rows={5} className={`${inputClass('description')} resize-none`} />
              {errors.description && <p className="text-red-400 text-xs mt-1.5">{errors.description}</p>}
            </div>
            <motion.button type="submit" disabled={loading} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed">
              {loading ? (
                <><svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Sending...</>
              ) : (
                <><HiPaperAirplane className="w-5 h-5 rotate-90" />Send Message</>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
