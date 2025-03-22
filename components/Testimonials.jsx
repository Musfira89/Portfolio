import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
        {/* Heading Section */}
        <div className="text-center px-4">
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
          <p className="text-gray-400 mt-3 text-xs md:text-sm">
            Empowering people in a new digital journey with my super services.
          </p>
        </div>

        {/* Cards Section */}
        <div className="w-full flex flex-col md:flex-row flex-wrap justify-center gap-8 px-4">
          {/* Card 1 */}
          <div className="bg-[#1A061F] w-full md:w-[30%] p-8 rounded-2xl shadow-xl max-w-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-sm text-gray-400 font-semibold">UPWORK CLIENT</h3>
              <FontAwesomeIcon icon={faQuoteLeft} className="text-purple-500 text-xl" />
            </div>
            <p className="text-gray-300 mt-4 text-sm md:text-base leading-relaxed">
              “Outstanding work! The freelancer delivered exactly what was agreed upon, on time, with great quality and attention to detail.”
            </p>
            <h4 className="font-bold text-white mt-5 text-lg">Satisfied Upwork Client</h4>
            <p className="text-gray-400 text-sm">React SPA Project - $15 (5.0★)</p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1A061F] w-full md:w-[30%] p-8 rounded-2xl shadow-xl max-w-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-sm text-gray-400 font-semibold">UPWORK CLIENT</h3>
              <FontAwesomeIcon icon={faQuoteLeft} className="text-purple-500 text-xl" />
            </div>
            <p className="text-gray-300 mt-4 text-sm md:text-base leading-relaxed">
              “Arees Shah is a genius! Delivered everything with high quality and great design sense. Extremely reliable, quick, and efficient. Will definitely rehire.”
            </p>
            <h4 className="font-bold text-white mt-5 text-lg">Satisfied Upwork Client</h4>
            <p className="text-gray-400 text-sm">WordPress UI Fixes – 5.0★</p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1A061F] w-full md:w-[30%] p-8 rounded-2xl shadow-xl max-w-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-sm text-gray-400 font-semibold">LOCAL CLIENT – KARACHI</h3>
              <FontAwesomeIcon icon={faQuoteLeft} className="text-purple-500 text-xl" />
            </div>
            <p className="text-gray-300 mt-4 text-sm md:text-base leading-relaxed">
              “Absolutely impressed with the professionalism and skills. Arees developed a responsive React website for our startup that exceeded expectations. Highly recommended!”
            </p>
            <h4 className="font-bold text-white mt-5 text-lg">Faisal Ahmed</h4>
            <p className="text-gray-400 text-sm">Startup Founder, Karachi</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
