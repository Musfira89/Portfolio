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
      title: "Full Stack Development (Next.js 14, React, Python & AWS)",
      description:
        "Scalable and high-performance web applications using Next.js 14, React, Python, and AWS cloud services, ensuring security and efficiency.",
    },
    {
      id: "04",
      title: "UI/UX Design",
      description:
        "Engaging and intuitive user interface & user experience design that enhances usability and boosts customer retention.",
    },
    {
      id: "05",
      title: "Mobile App Development (Flutter & React Native)",
      description:
        "Cross-platform mobile applications with Flutter and React Native, ensuring high performance and a smooth user experience on iOS & Android.",
    },
  ];

  return (
    <section id="services" className="bg-black text-white py-32 px-6 md:px-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #3b82f6 0%, #67e8f9 10%, #ffffff 100%)",
            }}
          >
            My Quality Services
          </span>
        </h2>

        <p className="text-gray-300 mt-3 max-w-xl mx-auto text-sm sm:text-base md:text-md leading-relaxed">
          We transform your ideas into a unique web project that captivates both
          you and your audience.
        </p>
      </div>

      {/* Services List */}
      <div className="mt-10 max-w-4xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex justify-between items-center p-4 border-b border-gray-800 transition-all duration-300 transform rounded-lg 
            ${
              index === 2
                ? "bg-cyan-700 text-white -translate-y-2"
                : "hover:bg-cyan-700 hover:text-white hover:-translate-y-2"
            }`}
          >
            {/* Left Section: ID + Title + Description */}
            <div className="flex items-start gap-4">
              <span className="font-semibold text-cyan-400 transition duration-300">
                {service.id}
              </span>
              <div>
                <h3 className="text-lg font-bold">{service.title}</h3>
                <p className="text-gray-300 transition duration-300">
                  {service.description}
                </p>
              </div>
            </div>

            {/* Right Arrow Icon */}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-xl text-cyan-700 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
