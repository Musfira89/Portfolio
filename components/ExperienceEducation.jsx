import Image from "next/image";
import graduation from "../assets/Portfolio/graduation.png";
import badge from "../assets/Portfolio/badge.png";

// Experience & Education Data
const experienceData = [
  {
    year: "2022 - Present",
    title: "PROGRAMMING COURSE",
    place: "Blockdots, London",
  },
  {
    year: "2021 - 2022",
    title: "CMS COURSE",
    place: "Parsons, The New School",
  },
  {
    year: "2020 - 2021",
    title: "WEB DESIGN COURSE",
    place: "House of Life, Leeds",
  },
  {
    year: "2018 - 2020",
    title: "PARSONS, THE NEW SCHOOL",
    place: "Theme Junction, Bursa",
  },
];

const educationData = [
  { year: "2020 - 2023", title: "BLOCKDOTS", place: "Harvard University" },
  {
    year: "2016 - 2020",
    title: "PARSONS, THE NEW SCHOOL",
    place: "University of Denmark",
  },
  { year: "2012 - 2015", title: "IDEO", place: "University of California" },
  {
    year: "2010 - 2011",
    title: "PARSONS, THE NEW SCHOOL",
    place: "Parsons, The New School",
  },
];

export default function ExperienceEducation() {
  return (
    <section className="bg-black text-white py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* My Experience Section */}
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
            My Experience
          </h2>
          <div className="space-y-6">
            {experienceData.map((exp, index) => (
              <div
                key={index}
                className="px-5 md:px-8 py-6 bg-[#140C1C] dark:bg-primary-color-light rounded-2xl relative z-0 group max-w-[470px] 
                transition-all duration-500 ease-in-out overflow-hidden"
              >
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"></div>

                {/* Card Content */}
                <div className="relative z-10 transition-all duration-500 ease-in-out group-hover:text-white">
                  <p className="text-md text-[#8750f7] font-bold ">
                    {exp.year}
                  </p>
                  <h3 className="text-xl font-bold mt-2 mb-2">{exp.title}</h3>
                  <p className="text-sm text-gray-400 group-hover:text-white">
                    {exp.place}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* My Education Section */}
        <div>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #8750f7 0%, #9b6af3 10%, #e5e7eb 100%)",
            }}
          >
            <Image
              src={graduation}
              alt="Education"
              width={30}
              height={30}
              className="sm:w-8 sm:h-8 md:w-10 md:h-10"
            />
            My Education
          </h2>
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="px-5 md:px-8 py-6 bg-[#140C1C] dark:bg-primary-color-light rounded-2xl relative z-0 group max-w-[470px] 
                transition-all duration-500 ease-in-out overflow-hidden"
              >
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"></div>

                {/* Card Content */}
                <div className="relative z-10 transition-all duration-500 ease-in-out group-hover:text-white">
                  <p className="text-md text-[#8750f7] font-bold">{edu.year}</p>
                  <h3 className="text-xl font-bold mt-2 mb-2">{edu.title}</h3>
                  <p className="text-sm text-gray-400 group-hover:text-white">
                    {edu.place}
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
