import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaShopify, FaRocket, FaChartLine } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const MySkills = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const skills = [
    { name: "Social Media Management", icon: <FaFacebookF />, percentage: 90, color: "bg-red-600" },
    { name: "Content Creation", icon: <SiCanva />, percentage: 85, color: "bg-red-600" },
    { name: "Facebook & Instagram Ads", icon: <FaInstagram />, percentage: 80, color: "bg-red-600" },
    { name: "Video Editing & Branding", icon: <TbBrandFramerMotion />, percentage: 86, color: "bg-red-600" },
    { name: "Shopify Setup & Management", icon: <FaShopify />, percentage: 75, color: "bg-red-600" },
    { name: "SEO Basics", icon: <FaRocket />, percentage: 80, color: "bg-red-600" },
    { name: "Analytics & Reporting", icon: <FaChartLine />, percentage: 92, color: "bg-red-600" },
    { name: "Canva Designing", icon: <SiCanva />, percentage: 90, color: "bg-red-600" },
  ];

  const animations = [
    "fade-up",
    "fade-down",
    "fade-right",
    "fade-left",
    "zoom-in",
    "zoom-in-up",
    "flip-left",
    "flip-right",
  ];

  return (
    <div className="pt-8 pb-8 border-t-2 border-red-500">
      <section id="skills" className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Background gradient effects */}
        <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-red-600 opacity-20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-48 sm:w-60 h-48 sm:h-60 bg-red-600 opacity-20 rounded-full blur-3xl animate-float-delay"></div>

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2
              data-aos="zoom-in"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white pt-5 mb-6 sm:mb-10"
            >
              My <span className="text-red-600">Skills</span>
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="150"
              className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto"
            >
              Showcasing my expertise in SEO, social media, content creation, paid ads, analytics, branding, and digital strategies for growth.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                data-aos={animations[index % animations.length]}
                data-aos-delay={index * 120}
                className="relative bg-black/80 border border-red-600 rounded-2xl p-6 h-64 flex flex-col justify-between transition-all duration-500 hover:shadow-xl hover:shadow-red-600/40 hover:-translate-y-2 group"
              >
                {/* Icon */}
                <div className="flex justify-center items-center mb-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-xl bg-red-600 text-3xl sm:text-4xl text-white group-hover:bg-white group-hover:text-red-600 transition-all duration-500">
                    {skill.icon}
                  </div>
                </div>

                {/* Skill Name */}
                <h3 className="text-xl sm:text-lg md:text-xl font-semibold text-white text-center group-hover:text-red-600 transition-colors duration-500">
                  {skill.name}
                </h3>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div
                      className={`${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-400 mt-2 text-center font-medium">
                    Proficiency: <span className="text-white">{skill.percentage}%</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Animations */}
        <style jsx global>{`
          @keyframes float { 0%,100%{transform:translateY(0) translateX(0);}50%{transform:translateY(-20px) translateX(10px);} }
          @keyframes float-delay { 0%,100%{transform:translateY(0) translateX(0);}50%{transform:translateY(-25px) translateX(-10px);} }
          .animate-float { animation: float 8s ease-in-out infinite; }
          .animate-float-delay { animation: float-delay 10s ease-in-out infinite 2s; }
        `}</style>
      </section>
    </div>
  );
};

export default MySkills;
