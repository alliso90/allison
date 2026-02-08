"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { styles } from "../styles/index";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { download, downloadHover, resume } from "../assets";
import { textVariant, fadeIn } from "../utils/motion";

const Experience = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="py-16 sm:pl-16 pl-8">
      {/* Section header */}
      <motion.div variants={textVariant(0)}>
        <p className={`${styles.sectionSubText}`}>What I've done so far</p>
        <h2 className={`${styles.sectionHeadText}`}>Work Experience.</h2>
      </motion.div>

      {/* Timeline */}
      <div className="mt-12 flex flex-col relative before:absolute before:left-8 before:top-0 before:h-full before:w-[2px] before:bg-gray-300 dark:before:bg-gray-600">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", "spring", index * 0.2, 0.8)}
            className="mb-8 flex items-start relative"
          >
            {/* Icon */}
            <div className="absolute left-0 top-0 w-16 h-16 flex justify-center items-center rounded-full bg-gray-200 dark:bg-gray-800">
              <Image
                src={exp.icon}
                alt={exp.company_name}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>

            {/* Content */}
            <div className="ml-24 bg-jetLight border border-white/5 p-8 rounded-[16px] shadow-lg w-full glassmorphism">
              <h3 className="text-[22px] font-bold font-secondary tracking-tight text-timberWolf">{exp.title}</h3>
              <p className="text-[16px] font-semibold text-taupe mt-1 font-sans">{exp.company_name}</p>
              <p className="text-[14px] text-taupe/60 italic font-sans">{exp.date}</p>
            </div>
          </motion.div>
        ))}

        {/* Resume Button */}
        <motion.div
          variants={fadeIn("up", "spring", experiences.length * 0.2, 0.8)}
          className="flex justify-center mt-12"
        >
          <button
            onClick={() => window.open("#", "_blank")}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-night font-bold font-secondary uppercase tracking-[2px] hover:bg-timberWolf transition-all duration-300 shadow-xl"
          >
            VIEW MY RESUME
            <Image
              src={hovered ? downloadHover : download}
              alt="download"
              width={22}
              height={22}
              className="ml-2"
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(Experience, "work");
