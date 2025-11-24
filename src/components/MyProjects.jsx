import { Fragment, useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";

// Project Images (CDN URLs)
const img1 = "https://cdn.pixabay.com/photo/2017/01/06/20/19/social-1958774_640.jpg";
const img2 = "https://cdn.pixabay.com/photo/2023/12/29/09/01/ai-generated-8475823_640.jpg";
const img3 = "https://cdn.pixabay.com/photo/2014/03/22/22/17/phone-292994_640.jpg";
const img4 = "https://cdn.pixabay.com/photo/2024/09/21/14/03/ai-generated-9063939_640.jpg";
const img5 = "https://cdn.pixabay.com/photo/2018/12/12/22/32/smart-3871774_640.jpg";
const img6 = "https://cdn.pixabay.com/photo/2017/08/06/13/15/painting-2592410_1280.jpg";

const MyProjects = () => {
  useEffect(() => {
    Aos.init({
      offset: 120,
      duration: 900,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const projects = [
    {
      pic: img1,
      title: "Social Media Management",
      link: "",
      category: "Social Media",
    },
    {
      pic: img2,
      title: "Content Creation",
      link: "",
      category: "Creative Content",
    },
    {
      pic: img3,
      title: "Facebook & Instagram Ads",
      link: "",
      category: "Paid Advertising",
    },
    {
      pic: img4,
      title: "Video Editing & Branding",
      link: "",
      category: "Branding & Editing",
    },
    {
      pic: img5,
      title: "Shopify Setup & Management",
      link: "",
      category: "E-Commerce",
    },
    {
      pic: img6,
      title: "Canva Designing",
      link: "",
      category: "Graphic Designing",
    },
  ];

  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <Fragment>
      <div className="pt-8 pb-8 border-t-1 border-red-500">
      <section
        id="projects"
        className="relative bg-black overflow-hidden mx-auto max-w-8xl"
      >
        {/* Decorative floating elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-red-600 opacity-20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-red-600 opacity-20 rounded-full blur-3xl animate-float-delay"></div>

        <div className="max-w-8xl mx-auto p-5">
          {/* Heading */}
          <div className="text-center mb-16">
            <h1
              data-aos="fade-down"
              className="text-4xl md:text-5xl font-extrabold text-white tracking-tight pt-3 mb-10"
            >
              My <span className="text-red-600">Projects</span>
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-300 text-lg max-w-2xl mx-auto"
            >
              A showcase of my professional work demonstrating creativity and digital expertise.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 150}
                className="group relative overflow-hidden rounded-2xl cursor-pointer border border-red-600 bg-black shadow-lg hover:shadow-red-600/40 transition-all duration-500"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => project.link && window.open(project.link, "_blank")}
              >
                {/* Image */}
                <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-2xl">
                  <img
                    src={project.pic}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 ${
                    hoveredProject === index ? "opacity-100" : "opacity-0"
                  }`}
                ></div>

                {/* Project Info */}
                <div className="absolute bottom-0 left-0 p-5 w-full transition-all duration-500">
                  <span
                    className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-white bg-red-600 rounded-full shadow-md group-hover:bg-white group-hover:text-red-600 transition-all duration-300"
                  >
                    {project.category}
                  </span>

                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <div
                    className={`flex items-center text-white mt-2 font-medium transition-opacity duration-300 ${
                      hoveredProject === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <span className="mr-2">View Project</span>
                    <MdArrowOutward className="text-lg" />
                  </div>
                </div>

                {/* Center Hover Icon */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                    hoveredProject === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="border-2 border-white rounded-full p-4 hover:bg-red-600 transition-all">
                    <MdArrowOutward className="text-2xl text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(10px); }
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

export default MyProjects;
