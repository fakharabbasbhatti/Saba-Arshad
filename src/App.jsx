import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import MySkills from './components/MySkills';
import EducationCertifications from './components/EducationCertifications';
import MyServices from './components/MyServices';
import MyProjects from './components/MyProjects';
import MyContact from './components/MyContact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black relative overflow-hidden">

        {/* Neon Red Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900 to-black opacity-90 blur-[80px] animate-pulse"></div>

        {/* SVG Neon Spinner Loader */}
        <div
          aria-label="Loading..."
          role="status"
          className="flex flex-col items-center space-y-6 z-10"
        >
          <svg
            className="h-24 w-24 animate-spin"
            viewBox="0 0 256 256"
          >
            <line x1="128" y1="32" x2="128" y2="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" stroke="#ff2e2e" style={{ filter: 'drop-shadow(0 0 10px #ff2e2e) drop-shadow(0 0 20px #ff0000)' }}></line>
            <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" stroke="#ff2e2e" style={{ filter: 'drop-shadow(0 0 10px #ff2e2e) drop-shadow(0 0 20px #ff0000)' }}></line>
            <line x1="224" y1="128" x2="192" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" stroke="#ff2e2e" style={{ filter: 'drop-shadow(0 0 10px #ff2e2e) drop-shadow(0 0 20px #ff0000)' }}></line>
            <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" stroke="#ff2e2e" style={{ filter: 'drop-shadow(0 0 10px #ff2e2e) drop-shadow(0 0 20px #ff0000)' }}></line>
            <line x1="128" y1="224" x2="128" y2="192" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" stroke="#ff2e2e" style={{ filter: 'drop-shadow(0 0 10px #ff2e2e) drop-shadow(0 0 20px #ff0000)' }}></line>
            <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" stroke="#ff2e2e" style={{ filter: 'drop-shadow(0 0 10px #ff2e2e) drop-shadow(0 0 20px #ff0000)' }}></line>
            <line x1="32" y1="128" x2="64" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" stroke="#ff2e2e" style={{ filter: 'drop-shadow(0 0 10px #ff2e2e) drop-shadow(0 0 20px #ff0000)' }}></line>
            <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" stroke="#ff2e2e" style={{ filter: 'drop-shadow(0 0 10px #ff2e2e) drop-shadow(0 0 20px #ff0000)' }}></line>
          </svg>

          <span className="text-4xl font-bold text-white drop-shadow-[0_0_10px_red] animate-pulse">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white relative">

      <Navbar />
      <HeroSection />
      <AboutMe />
      <MySkills />
      <EducationCertifications />
      <MyServices />
      <MyProjects />
      <MyContact />
      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/+923279681646"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-10"
      >
        <FaWhatsapp size={28} />
      </a>

    </div>
  );
}

export default App;
