import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ServicesSection = () => {
  const services = [
    {
      id: "01",
      title: "Shopify Development",
      description:
        "Custom Shopify store design and development, optimized for performance, conversion, and seamless user experience.",
    },
    {
      id: "02",
      title: "WordPress Development",
      description:
        "Custom WordPress themes, CMS setup, and plugin integration tailored to your business needs with easy content management.",
    },
    {
      id: "03",
      title: "Next.js 14 & React Development",
      description:
        "Modern web applications built with Next.js 14 and React – fast, scalable, SEO-friendly, and high-performing.",
    },
    {
      id: "04",
      title: "MERN Stack Development",
      description:
        "End-to-end full stack web development using MongoDB, Express.js, React, and Node.js for powerful business applications.",
    },
    {
      id: "05",
      title: "Full Stack Web Development",
      description:
        "Complete frontend and backend solutions with clean code architecture, responsive design, and scalable infrastructure.",
    },
    {
      id: "06",
      title: "UI/UX Design",
      description:
        "Engaging and intuitive user interface & user experience design that enhances usability and boosts customer retention.",
    },
  ];
  

  return (
    <section  id="services"  className="bg-black text-white py-32 px-6 md:px-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #8750f7 0%, #9b6af3 10%, #e5e7eb 100%)",
            }}
          >
            My Quality Services
          </span>
        </h2>

        <p className="text-gray-300 mt-3 max-w-xl mx-auto text-sm sm:text-base md:text-md leading-relaxed">
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and your customers.
        </p>
      </div>

      {/* Services List */}
      <div className="mt-10 max-w-4xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-4 border-b border-gray-800 transition-all duration-300 transform hover:bg-purple-600 hover:text-white hover:-translate-y-2 rounded-lg"
          >
            {/* Left Section: ID + Title + Description */}
            <div className="flex items-start gap-4">
              <span className="font-semibold text-purple-400 group-hover:text-white transition duration-300">
                {service.id}
              </span>
              <div>
                <h3 className="text-lg font-bold">{service.title}</h3>
                <p className="text-gray-300 group-hover:text-white transition duration-300">
                  {service.description}
                </p>
              </div>
            </div>

            {/* Right Arrow Icon */}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-xl text-purple-400 group-hover:text-white transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
