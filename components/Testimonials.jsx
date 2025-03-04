import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Left Side - Heading */}
        <div className="md:w-1/2 px-4">
        <h2 className="text-3xl sm:text-2xl md:text-4xl font-extrabold">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #8750f7 0%, #9b6af3 10%, #e5e7eb 100%)",
            }}
          >
            My Client Stories.
          </span>
        </h2>
          <p className="text-gray-400 mt-3 text-xs">
            Empowering people in a new digital journey with my super services.
          </p>
        </div>

        {/* Right Side - Cards */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
          {/* Card 1 */}
          <div className="bg-[#1A061F] p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between">
              <h3 className="text-sm text-gray-400 font-semibold">COSMIC SPORTS</h3>
              <FontAwesomeIcon icon={faQuoteLeft} className="text-purple-500 text-lg" />
            </div>
            <p className="text-gray-300 mt-4">
              “Taylor is a professional Designer. He really helps my business by providing value to my business.”
            </p>
            <h4 className="font-bold text-white mt-4">Tim Bailey</h4>
            <p className="text-gray-400 text-sm">SEO Specialist, Theme Junction</p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1A061F] p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between">
              <h3 className="text-sm text-gray-400 font-semibold">COMPANY</h3>
              <FontAwesomeIcon icon={faQuoteLeft} className="text-purple-500 text-lg" />
            </div>
            <p className="text-gray-300 mt-4">
              “Taylor is a professional Designer. He really helps my business by providing value to my business.”
            </p>
            <h4 className="font-bold text-white mt-4">Brandon Fraser</h4>
            <p className="text-gray-400 text-sm">Senior Software Dev, Cosmic Sport</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
