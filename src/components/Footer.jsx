import React, { useEffect } from "react";
import { FaUser, FaFacebookF, FaInstagram, FaYoutube, FaAngleRight } from "react-icons/fa";
import { RiTiktokLine } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";

// SOCIAL ICONS (Red, Black, White Theme)
const socialLinks = [
  { icon: <FaFacebookF />, href: "https://www.facebook.com/profile.php?id=61572806127729", label: "Facebook", color: "text-white hover:text-red-500" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/sabamarketingagency?igsh=Mzc5MHRhd2xtOTVt", label: "Instagram", color: "text-white hover:text-red-500" },
  { icon: <RiTiktokLine />, href: "https://www.tiktok.com/@sabaarshad4914?_r=1&_t=ZN-91aqibMqThO", label: "TikTok", color: "text-black bg-white p-2 rounded-full hover:bg-red-500 hover:text-white" },
  { icon: <FaYoutube />, href: "https://youtube.com/@sabamarketingagency?si=xTnnHVcj0W-fb0jE", label: "YouTube", color: "text-white hover:text-red-600" },
];

// QUICK LINKS + CUSTOMER SERVICE
const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Resume", href: "#resume" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
];

const customerService = [
  { name: "Social Media Management", href: "" },
  { name: "Content Creation", href: "" },
  { name: "Facebook & Instagram Ads", href: "" },
  { name: "Video Editing & Branding", href: "" },
  { name: "Shopify Setup & Management", href: "" },
  { name: "Canva Designing", href: "" },
];

export default function Footer() {
  useEffect(() => {
    AOS.init({ offset: 100, duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <footer className="relative overflow-hidden border-t border-red-500">
      
      {/* Floating Background Circles */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-red-600 opacity-10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-black opacity-20 rounded-full blur-3xl animate-float-delay"></div>

      {/* MAIN FOOTER SECTION */}
      <div className="bg-black text-white relative z-10 pt-5">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 px-6 py-4 gap-10">
          
          {/* ABOUT SECTION */}
          <div data-aos="fade-up">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <FaUser className="mr-3 text-red-500" /> About Me
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
             Results-driven digital marketer creating engaging content, boosting social media, brand visibility, and measurable marketing success.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-300 hover:text-red-500 transition-transform duration-300 hover:translate-x-2"
                >
                  <FaAngleRight className="mr-2 text-red-500" />
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* CUSTOMER SERVICE */}
          <div data-aos="fade-up" data-aos-delay="150">
            <h3 className="text-2xl font-bold mb-4">Customer Service</h3>
            <ul className="space-y-3">
              {customerService.map((link, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-300 hover:text-red-500 transition-transform duration-300 hover:translate-x-2"
                >
                  <FaAngleRight className="mr-2 text-red-500" />
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL MEDIA */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-2xl font-bold mb-4">Connect With Me</h3>
            <div className="flex space-x-6 mb-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xl transition-all duration-300 border border-white p-2 rounded-full hover:border-red-500 hover:text-red-500 ${social.color}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-300">Follow me for updates!</p>
          </div>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT BAR */}
      <div className="bg-black pt-2 pb-6 relative z-10">
        <div className="flex flex-col items-center max-w-screen-xl mx-auto border-t border-gray-700 pt-5 text-gray-300 text-sm">
          <p>
            Made with <span className="text-red-500">❤️</span> by{" "}
            <span className="font-bold text-white">Saba Arshad</span> © {new Date().getFullYear()}
          </p>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-25px) translateX(15px); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 10s ease-in-out infinite 2s; }
      `}</style>
    </footer>
  );
}
