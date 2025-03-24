"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Import Flaticon images
import figmaIcon from "../assets/Portfolio/figma.webp";
import wordpressIcon from "../assets/Portfolio/wp.webp";
import reactIcon from "../assets/Portfolio/react.webp";
import jsIcon from "../assets/Portfolio/js.webp";
import shopifyIcon from "../assets/Portfolio/shopify.webp";
import nextjsIcon from "../assets/Portfolio/nextjs.png";
import nodeIcon from "../assets/Portfolio/nodejs.png";
import mongoIcon from "../assets/Portfolio/mongodb.webp";
import python from "../assets/Portfolio/python.webp";
import flutter from "../assets/Portfolio/flutter.webp";

const skills = [
  { name: "Flutter", icon: flutter, percentage: "98%" },
  { name: "Python", icon: python, percentage: "78%" },
  { name: "Figma", icon: figmaIcon, percentage: "92%" },
  { name: "WordPress", icon: wordpressIcon, percentage: "99%" },
  { name: "Shopify", icon: shopifyIcon, percentage: "98%" },
  { name: "JavaScript", icon: jsIcon, percentage: "93%" },
  { name: "Next.js 14", icon: nextjsIcon, percentage: "90%" },
  { name: "React.js", icon: reactIcon, percentage: "89%" },
  { name: "Node.js", icon: nodeIcon, percentage: "88%" },
  { name: "MongoDB", icon: mongoIcon, percentage: "85%" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-black text-white py-36 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #3b82f6 0%, #67e8f9 100%)",
          }}
        >
          My Skills.
        </span>
      </h2>
      <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm sm:text-base md:text-sm leading-relaxed mb-12">
        Transforming ideas into innovative and high-performance digital solutions.
      </p>

      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 20px rgba(103, 232, 249, 0.7)",
            }}
            transition={{ duration: 0.3 }}
            className={`bg-[#0f172a] rounded-xl p-6 flex flex-col items-center w-40 h-40 cursor-pointer border
            ${
              skill.name === "React.js"
                ? "!border-cyan-500 !shadow-[0px_0px_20px_rgba(103,232,249,0.7)]"
                : "border-transparent hover:border-cyan-500"
            }`}
          >
            <Image
              src={skill.icon}
              alt={skill.name}
              width={50}
              height={50}
              className="mb-6"
            />
            <p className="text-white text-md font-semibold">
              {skill.percentage}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <p
            key={index}
            className="text-base font-medium text-center text-cyan-400"
          >
            {skill.name}
          </p>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
