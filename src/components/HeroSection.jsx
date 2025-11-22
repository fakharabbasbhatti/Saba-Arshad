import { Fragment, useEffect } from "react"; 
import { FaPaperPlane, FaRocket, FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import Hero from "../Images/sabaarshad.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const socialLinks = [
    {
      icon: <FaFacebookF className="h-5 w-5" />,
      onClick: () => window.open("https://www.facebook.com/profile.php?id=61572806127729", "_blank"),
      color: "hover:bg-red-600 hover:shadow-[0_0_15px_#ff2e2e]",
      aos: "flip-left",
    },
    {
      icon: <FaInstagram className="h-5 w-5" />,
      onClick: () => window.open("https://www.instagram.com/sabamarketingagency?igsh=Mzc5MHRhd2xtOTVt", "_blank"),
      color: "hover:bg-red-600 hover:shadow-[0_0_15px_#ff2e2e]",
      aos: "flip-up",
    },
    {
      icon: <FaTiktok className="h-5 w-5" />,
      onClick: () => window.open("https://www.tiktok.com/@sabaarshad4914?_r=1&_t=ZN-91aqibMqThO", "_blank"),
      color: "hover:bg-red-600 hover:shadow-[0_0_15px_#ff2e2e]",
      aos: "flip-right",
    },
    {
      icon: <FaYoutube className="h-5 w-5" />,
      onClick: () => window.open("https://youtube.com/@sabamarketingagency?si=xTnnHVcj0W-fb0jE", "_blank"),
      color: "hover:bg-red-600 hover:shadow-[0_0_15px_#ff2e2e]",
      aos: "flip-left",
    },
  ];

  return (
    <Fragment>
      <section
        id="home"
        className="relative flex justify-center items-center min-h-screen mx-auto max-w-8xl bg-black overflow-hidden pt-10"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            data-aos="zoom-in"
            className="absolute top-20 left-10 sm:left-20 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-red-600 opacity-20 blur-3xl animate-float"
          ></div>
          <div
            data-aos="zoom-out"
            className="absolute bottom-10 right-10 sm:right-20 w-24 sm:w-28 h-24 sm:h-28 rounded-full bg-red-600 opacity-20 blur-3xl animate-float-delay"
          ></div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center gap-12 w-full max-w-7xl z-10 py-20">
          {/* Left Section */}
          <div className="w-full md:w-1/2 text-center md:text-start">
            <span
              data-aos="fade-down"
              className="text-red-600 font-mono tracking-widest text-base sm:text-lg"
            >
              👋 Hello, I'm
            </span>

            <h1
              data-aos="fade-right"
              className="text-white text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4"
            >
              Saba Arshad
            </h1>

            <div
              data-aos="fade-left"
              className="text-lg sm:text-xl md:text-2xl font-medium mb-6 h-10 sm:h-12"
            >
              <span className="text-white">
                <Typewriter
                  words={["Digital Marketing", "Graphic Design", "Video Editing", "Youtube Automation", "Shopify Expert"]}
                  loop
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </div>

            <p
              data-aos="fade-up"
              className="text-white text-base sm:text-lg mb-8 max-w-lg mx-auto md:mx-0"
            >
              I’m Saba Arshad — a Digital Marketing Specialist & Shopify Expert.
              I help brands grow online <span className="text-red-600 font-semibold">create professional content</span> & 
              <span className="text-white font-semibold"> increase their sales,</span>  
              I specialize in Social Media Management, Paid Ads, Shopify Store Setup, and Content Creation.
            </p>

            {/* Buttons */}
            <div className="flex flex-row gap-3 sm:gap-4 mb-10 justify-center sm:justify-start">
              <button
                data-aos="fade-down"
                className="relative bg-red-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold text-sm sm:text-base flex items-center gap-2 transition-all duration-500 transform hover:scale-110 shadow-lg overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[120%] group-hover:translate-x-[120%] transition-transform duration-700 ease-in-out"></span>
                <FaPaperPlane className="z-10" />
                <span className="z-10">Contact Me</span>
              </button>

              <button
                data-aos="fade-up"
                className="relative border-2 border-red-600 text-red-600 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold text-sm sm:text-base flex items-center gap-2 transition-all duration-500 transform hover:scale-110 hover:bg-red-600 hover:text-white shadow-md group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[120%] group-hover:translate-x-[120%] transition-transform duration-700 ease-in-out"></span>
                <FaRocket className="z-10" />
                <span className="z-10">View Projects</span>
              </button>
            </div>

            {/* Social Icons */}
            <div className="mt-8">
              <h2
                data-aos="fade-down"
                className="text-white mb-4 tracking-wide text-sm sm:text-base"
              >
                🌐 Connect with me
              </h2>
              <div className="flex justify-center md:justify-start items-center gap-4">
                {socialLinks.map((item, index) => (
                  <button
                    key={index}
                    data-aos={item.aos}
                    onClick={item.onClick}
                    aria-label="Social Link"
                    className={`text-white cursor-pointer border flex justify-center items-center bg-black ${item.color} 
                               h-10 w-10 sm:h-12 sm:w-12 rounded-full transition-all duration-500 transform hover:scale-110`}
                  >
                    {item.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section (Hero Image) */}
          <div data-aos="zoom-in" className="w-full md:w-1/2 flex justify-center relative">
            <div className="relative h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] animate-float-slow group">
              <div className="absolute inset-0 rounded-full border-4 border-red-600 opacity-30 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full border-4 border-white opacity-20 animate-pulse-delay"></div>

              <div className="absolute inset-0 rounded-full scale-0 group-hover:scale-110 opacity-0 group-hover:opacity-80 transition-all duration-700 bg-gradient-to-r from-red-600 via-white to-red-600 blur-3xl"></div>

              <img
                src={Hero}
                alt="Saba Arshad profile"
                className="w-full h-full object-cover rounded-full border-4 border-red-600 shadow-2xl relative transition-all duration-700 group-hover:scale-105 group-hover:rotate-3 p-3 sm:p-5"
              />

              <div className="absolute top-2 left-2 bg-red-600 text-white text-xs sm:text-sm md:text-base font-semibold px-3 py-1 rounded-full shadow-lg">
                Graphic Design
              </div>
              <div className="absolute bottom-2 right-2 bg-red-600 text-white text-xs sm:text-sm md:text-base font-semibold px-3 py-1 rounded-full shadow-lg">
                Digital Marketing
              </div>
            </div>
          </div>
        </div>

        <style jsx global>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-20px) translateX(10px); }
          }
          @keyframes float-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.05); }
          }
          @keyframes pulse-delay {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(1.1); }
          }
          .animate-float { animation: float 8s ease-in-out infinite; }
          .animate-float-delay { animation: float 10s ease-in-out infinite 2s; }
          .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
          .animate-pulse { animation: pulse 4s ease-in-out infinite; }
          .animate-pulse-delay { animation: pulse-delay 5s ease-in-out infinite 1s; }
        `}</style>
      </section>
    </Fragment>
  );
};

export default HeroSection;
