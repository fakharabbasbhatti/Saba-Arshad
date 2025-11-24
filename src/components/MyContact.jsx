import { Fragment, useRef, useEffect } from "react"; 
import { FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import { MdOutlineAlternateEmail, MdLocationPin } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";

const MyContact = () => {
  const form = useRef();

  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!", {
      position: "top-center",
      autoClose: 3000,
    });
    form.current.reset();
  };

  const contactInfo = [
    { icon: <MdLocationPin className="text-3xl" />, text: "Bahawalpur, Punjab, Pakistan", link: "#" },
    { icon: <MdOutlineAlternateEmail className="text-3xl" />, text: "zingster663@gmail.com", link: "mailto:zingster663@gmail.com" },
    { icon: <FaPhoneAlt className="text-3xl" />, text: "+92 320-6301580", link: "tel:+923206301580" },
    { icon: <CgWebsite className="text-3xl" />, text: "https://chsaba-arshad.vercel.app/", link: "https://saba-arshad-marketing.vercel.app/" },
  ];

  return (
    <Fragment>
      <div className="pt-8 pb-8 border-t-2 border-red-500">
        <section id="contact" className="relative bg-black min-h-screen overflow-hidden px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
          {/* Decorative floating elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-red-600 opacity-20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-red-600 opacity-20 rounded-full blur-3xl animate-float-delay"></div>

          {/* Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 data-aos="fade-down" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Get In <span className="text-red-600">Touch</span>
            </h1>
            <p data-aos="fade-up" className="text-white text-base sm:text-lg max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities? Let's connect!
            </p>
          </div>

          {/* Form & Info */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
            {/* Contact Form */}
            <div data-aos="fade-right" className="w-full lg:w-1/2 bg-black border border-red-600 p-6 sm:p-10 rounded-2xl shadow-2xl">
              <h2 className="text-2xl font-semibold text-white mb-6 sm:mb-8">Send me a message</h2>

              <form ref={form} onSubmit={sendEmail} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-white mb-1 sm:mb-2">Your Name</label>
                    <input
                      type="text"
                      name="from_name"
                      required
                      placeholder="Sarha Json"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black border border-red-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-1 sm:mb-2">Your Email</label>
                    <input
                      type="email"
                      name="from_email"
                      required
                      placeholder="sarhajson@example.com"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black border border-red-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white mb-1 sm:mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="from_phone"
                    required
                    placeholder="+92 300 1234567"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black border border-red-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-white"
                  />
                </div>

                <div>
                  <label className="block text-white mb-1 sm:mb-2">Your Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    placeholder="Hello Sarha, I would like to discuss..."
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black border border-red-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-white"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-white hover:text-red-600 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/30"
                >
                  Send Message <FaPaperPlane />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div data-aos="fade-left" className="w-full lg:w-1/2 bg-black border border-red-600 p-6 sm:p-10 rounded-2xl shadow-2xl">
              <h2 className="text-2xl font-semibold text-white mb-6 sm:mb-8">Contact Information</h2>

              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-black border border-red-600 rounded-lg hover:bg-red-600 transition-colors duration-300 group"
                  >
                    <div className="mt-1 text-red-600 group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white group-hover:text-white transition-colors duration-300 break-words"
                      >
                        {item.text}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 sm:mt-12" data-aos="fade-up" data-aos-delay={600}>
                <h3 className="text-xl font-semibold text-white mb-2 sm:mb-4">Available for work</h3>
                <p className="text-white text-sm sm:text-base">
                  I'm currently available for freelance projects and full-time positions.  
                  Feel free to reach out for collaborations or just to say hello!
                </p>
              </div>
            </div>
          </div>
        </section>

        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          draggable
          pauseOnHover
          theme="dark"
        />

        <style jsx global>{`
          @keyframes float { 0%,100%{transform:translateY(0) translateX(0);} 50%{transform:translateY(-20px) translateX(10px);} }
          @keyframes float-delay { 0%,100%{transform:translateY(0) translateX(0);} 50%{transform:translateY(-20px) translateX(10px);} }
          .animate-float { animation: float 8s ease-in-out infinite; }
          .animate-float-delay { animation: float-delay 10s ease-in-out infinite 2s; }
        `}</style>
      </div>
    </Fragment>
  );
};

export default MyContact;
