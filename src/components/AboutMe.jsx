import { Fragment, useEffect } from "react";
import About from "../Images/sabaarshad.jpg";
import resume from "../Images/SabaArshad.pdf";
import { FaDownload, FaRocket } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "SabaArshad.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const beliefs = [
    {
      icon: <FaRocket className="text-red-600 group-hover:text-white text-2xl sm:text-3xl transition-colors duration-300" />,
      title: "I believe in",
      points: ["Clear strategies", "Professional execution"],
      aos: "fade-right",
    },
    {
      icon: <FaRocket className="text-red-600 group-hover:text-white text-2xl sm:text-3xl transition-colors duration-300" />,
      title: "I believe in",
      points: ["Creative content", "Fast communication & client satisfaction"],
      aos: "fade-left",
    },
  ];

  return (
    <Fragment>
      <div className="pt-8 pb-8 border-t-2 border-red-500">
        <div id="about" className="relative mx-auto max-w-7xl bg-black overflow-hidden px-4 sm:px-6 lg:px-8">
          {/* Decorative Background */}
          <div className="absolute top-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-red-600 opacity-20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-32 sm:w-48 h-32 sm:h-48 bg-red-600 opacity-20 rounded-full blur-3xl animate-float-delay"></div>

          {/* Title */}
          <h1 data-aos="fade-up" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center pt-5 mb-12 sm:mb-16">
            About <span className="text-red-600">Me</span>
          </h1>

          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-12">
            {/* Image */}
            <div data-aos="zoom-in-down" className="w-full lg:w-2/5 flex justify-center relative group">
              <div className="relative w-64 sm:w-80 md:w-96 lg:w-full aspect-square animate-float-slow">
                <div className="absolute inset-0 rounded-full bg-red-600/20 opacity-0 group-hover:opacity-80 transition duration-700 blur-3xl"></div>
                <img
                  src={About}
                  alt="Saba Arshad"
                  className="w-full h-full object-cover rounded-full p-3 sm:p-4 border-4 border-red-600 shadow-xl relative z-10 transition-all duration-700 group-hover:scale-105 group-hover:rotate-3"
                />
                <div className="absolute inset-0 rounded-full border-4 border-red-600 opacity-30 animate-pulse"></div>
                <div className="absolute inset-0 rounded-full border-4 border-red-600 opacity-15 animate-pulse-delay"></div>

                {/* Badges */}
                <span className="absolute top-3 left-3 bg-red-600 text-white text-xs sm:text-sm px-3 py-1 rounded-full shadow-md font-medium z-20">Shopify store</span>
                <span className="absolute bottom-3 right-3 bg-red-600 text-white text-xs sm:text-sm px-3 py-1 rounded-full shadow-md font-medium z-20">Digital Marketing</span>
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-3/5 space-y-6 text-center lg:text-left">
              <h2 data-aos="zoom-in" className="text-2xl sm:text-3xl font-bold text-white">
                I'm <span className="text-red-600">Saba Arshad</span>, a dedicated Digital Marketing Specialist & Shopify Expert.
              </h2>

              <p data-aos="zoom-in-up" className="text-white text-base sm:text-lg leading-relaxed">
                With hands-on experience in social media marketing, paid advertising, Shopify store setup, branding, and content creation, I help brands build a strong online presence and achieve real results. Whether you need a high-converting Shopify store, engaging social media content, ad campaigns that bring results, or complete brand management — I’m here to help you grow with confidence. <span className="text-red-600 font-semibold">My goal is simple:</span> Deliver work that creates impact, builds trust, and helps your business move forward.
              </p>

              {/* Belief Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                {beliefs.map((item, index) => (
                  <div
                    key={index}
                    data-aos={item.aos}
                    data-aos-delay={index * 150}
                    className="bg-black border-2 border-red-600 p-6 sm:p-8 rounded-xl hover:bg-red-600 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-red-600/30 group"
                  >
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                      {item.icon}
                      <h3 className="text-white font-medium text-lg group-hover:text-white">{item.title}</h3>
                    </div>
                    {item.points.map((point, idx) => (
                      <p key={idx} className="text-white text-sm sm:text-base flex items-start gap-2 group-hover:text-white">
                        <span className="text-red-600 group-hover:text-white transition-colors duration-300">•</span> {point}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              {/* Download CV Button */}
              <div className="flex justify-center lg:justify-start mt-8">
                <button
                  onClick={handleDownload}
                  data-aos="flip-up"
                  className="bg-red-600 hover:bg-white hover:text-red-600 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all duration-500 transform hover:scale-110 shadow-lg hover:shadow-red-600/40"
                >
                  Download CV <FaDownload />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes float { 0%,100%{transform:translateY(0) translateX(0);}50%{transform:translateY(-20px) translateX(10px);} }
        @keyframes float-slow { 0%,100%{transform:translateY(0);}50%{transform:translateY(-15px);} }
        @keyframes pulse {0%,100%{opacity:0.3;transform:scale(1);}50%{opacity:0.5;transform:scale(1.05);} }
        @keyframes pulse-delay {0%,100%{opacity:0.15;transform:scale(1);}50%{opacity:0.25;transform:scale(1.1);} }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delay { animation: float 10s ease-in-out infinite 2s; }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-pulse { animation: pulse 4s ease-in-out infinite; }
        .animate-pulse-delay { animation: pulse-delay 4s ease-in-out infinite 2s; }
      `}</style>
    </Fragment>
  );
};

export default AboutMe;
