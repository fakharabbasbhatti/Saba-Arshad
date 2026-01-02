import { Fragment, useEffect } from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const EducationCertifications = () => {
  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const education = [
    { title: "Intermediate (ICS)", period: "2021-2023", institution: "Govt Post Graduate College, Bahawalpur", icon: <FaGraduationCap className="text-white text-2xl" /> },
    { title: "BBA", period: "2023 - 2027", institution: "The CUVAS Bahawalpur Pakistan", icon: <FaGraduationCap className="text-white text-2xl" /> },
  ];

  const experience = [
    { title: "Digital Marketing", period: "2024 - Present", titleTwo: "Event Organization", icon: <FaBriefcase className="text-white text-2xl" /> },
    { title: "Social Media Marketing", period: "Jan 2025 - Present", titleTwo: "E-Commerce", icon: <FaBriefcase className="text-white text-2xl" /> },
  ];

  return (
    <Fragment>
      <div className="pt-8 pb-8 border-t-2 border-red-500">
        <section id="resume" className="relative mx-auto max-w-7xl bg-black overflow-hidden px-4 sm:px-6 lg:px-8">
          {/* Background shapes */}
          <div className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-red-600/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-red-600/20 rounded-full blur-3xl animate-float-delay"></div>

          <div className="text-center relative z-10">
            <h1 data-aos="zoom-in" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white pt-3 mb-6 sm:mb-10">
              Education <span className="text-red-600">&</span> Certifications
            </h1>
            <p data-aos="fade-up" data-aos-delay="150" className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-12 sm:mb-16">
              A journey of continuous learning and professional growth, highlighting key achievements and skills.
            </p>

            <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-12">
              {/* Education */}
              <div data-aos="fade-right" className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-8 sm:mb-10">
                  <div className="bg-red-600/20 p-3 sm:p-4 rounded-full shadow-lg backdrop-blur-md">
                    <FaGraduationCap className="text-red-600 text-3xl animate-pulse" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-wide">Education</h2>
                </div>
                <div className="relative pl-12 border-l-4 border-red-600/40 space-y-8 sm:space-y-12">
                  {education.map((item, index) => (
                    <div key={index} className="relative group">
                      <div data-aos="zoom-in" data-aos-delay={index * 100} className="absolute -left-10 top-0 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white shadow-xl transition-transform duration-500 transform group-hover:scale-125 group-hover:rotate-12">
                        {item.icon}
                      </div>
                      <div data-aos="fade-up" data-aos-delay={index * 150 + 50} className="bg-black p-4 sm:p-6 rounded-2xl border border-red-600/40 hover:border-red-600 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-red-600/50">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 tracking-wide">{item.title}</h3>
                        <p className="text-sm sm:text-base text-red-600 font-medium mb-1">{item.period}</p>
                        <p className="text-gray-300 text-sm sm:text-base">{item.institution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div data-aos="fade-left" className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-8 sm:mb-10">
                  <div className="bg-red-600/20 p-3 sm:p-4 rounded-full shadow-lg backdrop-blur-md">
                    <FaBriefcase className="text-red-600 text-3xl animate-pulse" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-wide">Certifications</h2>
                </div>
                <div className="relative pl-12 border-l-4 border-red-600/40 space-y-8 sm:space-y-12">
                  {experience.map((item, index) => (
                    <div key={index} className="relative group">
                      <div data-aos="zoom-in" data-aos-delay={index * 100} className="absolute -left-10 top-0 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white shadow-xl transition-transform duration-500 transform group-hover:scale-125 group-hover:rotate-12">
                        {item.icon}
                      </div>
                      <div data-aos="fade-up" data-aos-delay={index * 150 + 50} className="bg-black p-4 sm:p-6 rounded-2xl border border-red-600/40 hover:border-red-600 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-red-600/50">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 tracking-wide">{item.title}</h3>
                        <p className="text-sm sm:text-base text-red-600 font-medium mb-1">{item.period}</p>
                        <p className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 tracking-wide">{item.titleTwo}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animations */}
        <style jsx global>{`
          @keyframes float {0%,100%{transform:translateY(0) translateX(0);}50%{transform:translateY(-20px) translateX(15px);}}
          @keyframes float-delay {0%,100%{transform:translateY(0) translateX(0);}50%{transform:translateY(-25px) translateX(-15px);}}
          .animate-float { animation: float 9s ease-in-out infinite; }
          .animate-float-delay { animation: float-delay 11s ease-in-out infinite 2s; }
        `}</style>
      </div>
    </Fragment>
  );
};

export default EducationCertifications;
