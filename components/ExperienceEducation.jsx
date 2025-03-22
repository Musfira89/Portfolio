import Image from "next/image";
import badge from "../assets/Portfolio/badge.png";

// Professional Experience Data (Shopify, WordPress, Flutter, MERN + Freelance)
const experienceData = [
  {
    year: "2023 - Present",
    title: "Freelance Full Stack Developer | Upwork & Direct Leads",
    place: "Shopify Stores • WordPress CMS • Flutter Apps • MERN Stack Solutions",
  },
  {
    year: "2021 - 2023",
    title: "Senior Full Stack Developer | MERN, Shopify, WordPress",
    place: "TechHive Solutions, Lahore",
  },
  {
    year: "2020 - 2021",
    title: "Frontend Developer | React, Next.js, TailwindCSS",
    place: "CodeCrafters Agency, Islamabad",
  },
  {
    year: "2019 - 2020",
    title: "Mobile App Developer | Flutter & Firebase",
    place: "Digital Soft Tech, Karachi",
  },
  {
    year: "2018 - 2019",
    title: "Web Developer | WordPress & Custom PHP",
    place: "ITVision Software House, Rawalpindi",
  },
];


export default function Experience() {
  return (
    <section id="experience" className="bg-black text-white py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #8750f7 0%, #9b6af3 10%, #e5e7eb 100%)",
            }}
          >
            <Image
              src={badge}
              alt="Experience"
              width={30}
              height={30}
              className="sm:w-8 sm:h-8 md:w-10 md:h-10"
            />
            My Professional Experience
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {experienceData.map((exp, index) => (
              <div
                key={index}
                className="px-5 md:px-8 py-6 bg-[#140C1C] dark:bg-primary-color-light rounded-2xl relative z-0 group transition-all duration-500 ease-in-out overflow-hidden"
              >
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"></div>

                {/* Card Content */}
                <div className="relative z-10 transition-all duration-500 ease-in-out group-hover:text-white">
                  <p className="text-md text-[#8750f7] font-bold">{exp.year}</p>
                  <h3 className="text-xl font-bold mt-2 mb-2">{exp.title}</h3>
                  <p className="text-sm text-gray-400 group-hover:text-white">
                    {exp.place}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
