import { Fragment, useEffect } from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const EducationExperience = () => {
  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const education = [
    {
      title: "Intermediate (ICS)",
      period: "2018-2020",
      institution: "",
      icon: <FaGraduationCap className="text-white text-2xl" />,
    },
    {
      title: "BS In Information Technology",
      period: "2021 - 2024",
      institution: "The Islamia University Bahawalpur Pakistan",
      icon: <FaGraduationCap className="text-white text-2xl" />,
    },
  ];

  const experience = [
    {
      title: "Digital Marketing",
      period: "2024 - Present",
      company: "Codes Thinker Company (Onsite)",
      icon: <FaBriefcase className="text-white text-2xl" />,
    },
    {
      title: "Social Media Management",
      period: "Jan 2025 - Present",
      company: "ASL Digital Creator Company (Remote)",
      icon: <FaBriefcase className="text-white text-2xl" />,
    },
  ];

  return (
    <Fragment>
      <div className="pt-8 pb-8 border-t-1 border-red-500">
        <section
          id="resume"
          className="relative mx-auto max-w-8xl bg-black overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-red-600/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-float-delay"></div>

          <div className="max-w-8xl mx-auto text-center relative z-10 p-5">
            <h1
              data-aos="zoom-in"
              className="text-3xl md:text-5xl font-extrabold text-white pt-3 mb-10"
            >
              Education <span className="text-red-600">&</span> Experience
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="150"
              className="text-gray-300 text-lg mb-16 max-w-2xl mx-auto"
            >
              A journey of continuous learning and professional growth, highlighting key achievements and skills.
            </p>

            <div className="flex flex-col lg:flex-row justify-center gap-12">
              {/* Education Section */}
              <div data-aos="fade-right" className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-10">
                  <div className="bg-red-600/20 p-4 rounded-full shadow-lg backdrop-blur-md">
                    <FaGraduationCap className="text-red-600 text-3xl animate-pulse" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white tracking-wide">
                    Education
                  </h2>
                </div>

                <div className="relative pl-12 border-l-4 border-red-600/40 space-y-12">
                  {education.map((item, index) => (
                    <div key={index} className="relative group">
                      {/* Icon */}
                      <div
                        data-aos="zoom-in"
                        data-aos-delay={index * 100}
                        className="absolute -left-11 top-0 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white shadow-xl transition-transform duration-500 transform group-hover:scale-125 group-hover:rotate-12"
                      >
                        {item.icon}
                      </div>

                      {/* Card */}
                      <div
                        data-aos="fade-up"
                        data-aos-delay={index * 150 + 50}
                        className="bg-black p-5 md:p-6 rounded-3xl border border-red-600/40 hover:border-red-600 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-red-600/50"
                      >
                        <h3
                          data-aos="flip-left"
                          data-aos-delay={index * 150 + 100}
                          className="text-xl font-bold text-white mb-2 tracking-wide"
                        >
                          {item.title}
                        </h3>
                        <p
                          data-aos="fade-right"
                          data-aos-delay={index * 150 + 150}
                          className="text-sm text-red-600 font-medium mb-2"
                        >
                          {item.period}
                        </p>
                        <p
                          data-aos="fade-left"
                          data-aos-delay={index * 150 + 200}
                          className="text-gray-300 text-sm"
                        >
                          {item.institution}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience Section */}
              <div data-aos="fade-left" className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-10">
                  <div className="bg-red-600/20 p-4 rounded-full shadow-lg backdrop-blur-md">
                    <FaBriefcase className="text-red-600 text-3xl animate-pulse" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white tracking-wide">
                    Experience
                  </h2>
                </div>

                <div className="relative pl-12 border-l-4 border-red-600/40 space-y-12">
                  {experience.map((item, index) => (
                    <div key={index} className="relative group">
                      {/* Icon */}
                      <div
                        data-aos="zoom-in"
                        data-aos-delay={index * 100}
                        className="absolute -left-11 top-0 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white shadow-xl transition-transform duration-500 transform group-hover:scale-125 group-hover:rotate-12"
                      >
                        {item.icon}
                      </div>

                      {/* Card */}
                      <div
                        data-aos="fade-up"
                        data-aos-delay={index * 150 + 50}
                        className="bg-black p-5 md:p-6 rounded-3xl border border-red-600/40 hover:border-red-600 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-red-600/50"
                      >
                        <h3
                          data-aos="flip-right"
                          data-aos-delay={index * 150 + 100}
                          className="text-xl font-bold text-white mb-2 tracking-wide"
                        >
                          {item.title}
                        </h3>
                        <p
                          data-aos="fade-left"
                          data-aos-delay={index * 150 + 150}
                          className="text-sm text-red-600 font-medium mb-2"
                        >
                          {item.period}
                        </p>
                        <p
                          data-aos="fade-right"
                          data-aos-delay={index * 150 + 200}
                          className="text-gray-300 text-sm"
                        >
                          {item.company}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(15px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-25px) translateX(-15px); }
        }
        .animate-float { animation: float 9s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 11s ease-in-out infinite 2s; }
      `}</style>
      </div>
    </Fragment>
  );
};

export default EducationExperience;
