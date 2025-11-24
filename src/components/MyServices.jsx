import Aos from "aos";
import "aos/dist/aos.css";
import { Fragment, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaShopify, FaRocket, FaVideo } from "react-icons/fa";
import { SiWordpress, SiCanva } from "react-icons/si";

const MyServices = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  const services = [
    {
      icon: <FaFacebookF />,
      title: "Social Media Management",
      description: "Managing and optimizing social media platforms to grow engagement, followers, and brand awareness.",
      color: "red",
      aosIcon: "zoom-in",
      aosTitle: "fade-right",
      aosDesc: "fade-up"
    },
    {
      icon: <SiCanva />,
      title: "Content Creation",
      description: "Designing visually appealing graphics and posts using Canva for consistent, high-quality content.",
      color: "red",
      aosIcon: "zoom-in",
      aosTitle: "flip-right",
      aosDesc: "fade-up"
    },
    {
      icon: <FaInstagram />,
      title: "Facebook & Instagram Ads",
      description: "Creating and managing paid campaigns to drive traffic, conversions, and brand growth on social platforms.",
      color: "red",
      aosIcon: "zoom-in",
      aosTitle: "fade-up",
      aosDesc: "fade-right"
    },
    {
      icon: <FaVideo />,
      title: "Video Editing & Branding",
      description: "Editing videos and crafting brand identity visuals to enhance digital presence and engagement.",
      color: "red",
      aosIcon: "zoom-in",
      aosTitle: "fade-left",
      aosDesc: "fade-up"
    },
    {
      icon: <FaShopify />,
      title: "Shopify Setup & Management",
      description: "Setting up and managing Shopify stores for seamless online shopping experiences and high conversions.",
      color: "red",
      aosIcon: "zoom-in",
      aosTitle: "flip-left",
      aosDesc: "fade-up"
    },
    {
      icon: <SiCanva />,
      title: "Canva Designing",
      description: "Creating visually appealing graphics with Canva to engage audiences and maintain consistent brand identity.",
      color: "red",
      aosIcon: "zoom-in",
      aosTitle: "fade-down",
      aosDesc: "fade-up"
    }
  ];

  return (
    <Fragment>
      <div className="pt-8 pb-8 border-t-1 border-red-500">
      <section id="services" className="relative mx-auto max-w-8xl bg-black overflow-hidden ">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-red-600 opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-red-600 opacity-10 rounded-full blur-3xl animate-float-delay"></div>

        <div className="max-w-8xl mx-auto p-5">
          <div className="text-center mb-16">
            <h1 
              data-aos="fade-down"
              className="text-4xl md:text-5xl font-extrabold text-white relative inline-block group pt-3 mb-10"
            >
              Our <span data-aos="zoom-in" data-aos-delay="100" className="text-red-600">Services</span>
            </h1>
            <p 
              data-aos="fade-up"
              data-aos-delay="150"
              className="text-white text-lg max-w-2xl mx-auto"
            >
              Delivering tailored digital solutions to empower your business growth and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-black border border-red-600 rounded-2xl p-5 md:p-8 h-full transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-red-600/30"
              >
                <div className="relative z-10">
                  <div 
                    data-aos={service.aosIcon} 
                    data-aos-delay={index * 100}
                    className="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-red-600 group-hover:bg-white transition-all duration-500"
                  >
                    <span className="text-white group-hover:text-red-600 text-3xl transition-transform duration-500">
                      {service.icon}
                    </span>
                  </div>
                  
                  <h3 
                    data-aos={service.aosTitle} 
                    data-aos-delay={index * 150} 
                    className="text-2xl font-semibold text-white mb-3"
                  >
                    {service.title}
                  </h3>
                  <p 
                    data-aos={service.aosDesc} 
                    data-aos-delay={index * 200} 
                    className="text-gray-300 text-sm md:text-base"
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 10s ease-in-out infinite 2s; }
      `}</style>
      </div>
    </Fragment>
  );
};

export default MyServices;
