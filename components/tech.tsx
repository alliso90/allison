"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles/index";
import { textVariant } from "../utils/motion";

interface Technology {
  name: string;
  icon: any;
}

const TechCard = ({ icon, name, index }: { icon: any; name: string; index: number }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        show: {
          opacity: 1,
          scale: 1,
          transition: {
            delay: index * 0.05,
            duration: 0.5,
            ease: "easeOut"
          }
        }
      }}
      className="flex flex-col items-center justify-center gap-2"
    >
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: (index % 4) * 0.5,
        }}
        whileHover={{ scale: 1.15, rotate: 5 }}
        className="w-24 h-24 rounded-full bg-jetLight flex items-center justify-center 
        shadow-card hover:shadow-2xl transition-shadow cursor-pointer p-5 glassmorphism relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50" />
        <Image
          src={icon}
          alt={name}
          width={56}
          height={56}
          className="object-contain z-10"
        />
      </motion.div>
      <span className="text-taupe text-xs font-semibold uppercase tracking-wider opacity-80">
        {name}
      </span>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-12 mt-14">
        {technologies.map((technology: any, index: number) => (
          <TechCard
            key={technology.name}
            icon={technology.icon}
            name={technology.name}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
