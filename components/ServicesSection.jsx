import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ServicesSection = () => {
  const services = [
    {
      id: "01",
      title: "Web Development",
      description:
        "Ensure your website looks great on any device, with layouts that adapt to different screen sizes seamlessly.",
    },
    {
      id: "02",
      title: "UI/UX Design",
      description:
        "Set up user-friendly CMS solutions like WordPress or custom-built options so clients can manage content easily.",
    },
    {
      id: "03",
      title: "Content Writing",
      description:
        "Build and integrate APIs to connect websites with third-party applications, enhancing functionality and performance.",
    },
    {
      id: "04",
      title: "Digital Marketing",
      description:
        "Refresh outdated websites with modern, appealing designs that align with current brand goals and user expectations.",
    },
  ];

  return (
    <section className="bg-black text-white py-32 px-6 md:px-16">
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
