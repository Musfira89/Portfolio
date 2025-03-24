import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="flex flex-col md:flex-row justify-between items-center bg-[#06030c] text-white p-8 md:p-40 gap-16"
    >
{/* Left Side - Contact Form */}
<div className="bg-[#090513] p-6 md:p-10 rounded-xl w-full max-w-2xl mx-auto shadow-xl">
  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
    Let’s <span className="bg-gradient-to-r from-[#3b82f6] to-[#67e8f9] text-transparent bg-clip-text">work together!</span>
  </h2>
  <p className="text-gray-300 mb-6 text-sm md:text-md leading-relaxed text-center md:text-left">
    I design and code beautifully simple things, and I love what I do. Just simple like that!
  </p>

  {/* Form Fields */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
    <input
      type="text"
      placeholder="First name"
      className="p-4 bg-[#0f172a] text-white rounded-lg border border-gray-600 w-full focus:outline-none focus:border-cyan-400"
    />
    <input
      type="text"
      placeholder="Last name"
      className="p-4 bg-[#0f172a] text-white rounded-lg border border-gray-600 w-full focus:outline-none focus:border-cyan-400"
    />
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
    <input
      type="email"
      placeholder="Email address"
      className="p-4 bg-[#0f172a] text-white rounded-lg border border-gray-600 w-full focus:outline-none focus:border-cyan-400"
    />
    <input
      type="text"
      placeholder="Phone number"
      className="p-4 bg-[#0f172a] text-white rounded-lg border border-gray-600 w-full focus:outline-none focus:border-cyan-400"
    />
  </div>

  <select className="p-4 bg-[#0f172a] text-white rounded-lg border border-gray-600 w-full mb-4 focus:outline-none focus:border-cyan-400">
    <option>Select an option</option>
    <option>Web Development</option>
    <option>UI/UX Design</option>
    <option>Consultation</option>
  </select>

  <textarea
    placeholder="Message"
    className="p-4 bg-[#0f172a] text-white rounded-lg border border-gray-600 w-full h-36 mb-4 focus:outline-none focus:border-cyan-400"
  ></textarea>

  <button className="bg-gradient-to-r from-[#3b82f6] to-[#19c5db] text-white py-4 px-8 rounded-lg w-full font-medium text-md shadow-md hover:from-[#2563eb] hover:to-[#22d3ee] transition duration-300">
    Send Message
  </button>
</div>


      {/* Right Side - Contact Info */}
      <div className="space-y-6 text-white w-full md:w-[40%]">
        {/* Phone */}
        <div className="flex items-center space-x-4">
          <div className="p-3 rounded-full border-2 border-cyan-500 w-12 h-12 flex items-center justify-center">
            <FontAwesomeIcon icon={faPhone} className="text-cyan-500 text-lg" />
          </div>
          <div>
            <p className="text-gray-300 text-sm">Phone</p>
            <p className="font-semibold text-lg">+92 312 4180123</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-4">
          <div className="p-3 rounded-full border-2 border-cyan-500 w-12 h-12 flex items-center justify-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-cyan-500 text-lg" />
          </div>
          <div>
            <p className="text-gray-300 text-sm">Email</p>
            <p className="font-semibold text-lg">areesshah678@gmail.com</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-center space-x-4">
          <div className="p-3 rounded-full border-2 border-cyan-500 w-12 h-12 flex items-center justify-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-cyan-500 text-lg" />
          </div>
          <div>
            <p className="text-gray-300 text-sm">Address</p>
            <p className="font-semibold text-lg">Karachi, Pakistan</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
