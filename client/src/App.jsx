import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import About from './components/About';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import AdminDashboard from './components/AdminDashboard';

function HomePage({ isDark, toggleTheme }) {
  return (
    <>
      <ParticleBackground />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <TechStack />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('nexus-theme');
    if (saved === 'light') {
      setIsDark(false);
      document.body.classList.add('light-mode');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.body.classList.remove('light-mode');
        document.documentElement.classList.add('dark');
        localStorage.setItem('nexus-theme', 'dark');
      } else {
        document.body.classList.add('light-mode');
        document.documentElement.classList.remove('dark');
        localStorage.setItem('nexus-theme', 'light');
      }
      return next;
    });
  };

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="relative min-h-screen noise-bg">
      <CustomCursor />
      <ScrollProgress />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'rgba(15, 23, 42, 0.9)',
            color: '#e2e8f0',
            border: '1px solid rgba(99, 102, 241, 0.3)',
            backdropFilter: 'blur(12px)',
            borderRadius: '12px',
            fontSize: '14px',
          },
          success: {
            iconTheme: { primary: '#6366f1', secondary: '#e2e8f0' },
          },
          error: {
            iconTheme: { primary: '#ef4444', secondary: '#e2e8f0' },
          },
        }}
      />
      <Routes>
        <Route path="/" element={<HomePage isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}
