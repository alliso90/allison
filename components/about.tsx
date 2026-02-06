"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

interface ServiceCardProps {
  index: number;
  title: string;
  icon: any;
}

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.3 * index, 0.75)}
      className="w-full max-w-[320px] p-[1px] rounded-[16px] transition-all duration-300 hover:shadow-xl"
    >
      <div
        className="bg-jetLight rounded-[16px] py-8 px-6 min-h-[220px]
        flex flex-col items-center justify-center border border-white/5 glassmorphism"
      >
        <Image
          src={icon}
          alt={title}
          width={42}
          height={42}
          className="object-contain mb-4 grayscale hover:grayscale-0 transition-all duration-300"
        />

        <h3 className="text-timberWolf text-[16px] font-bold text-center tracking-wide uppercase font-secondary">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="px-6 sm:px-16">
      <motion.div variants={textVariant(0)} className="pt-20">
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn(undefined, "tween", 0.2, 1)}
        className="mt-6 text-taupe text-[18px] max-w-3xl leading-[30px] font-medium"
      >
        I am a skilled Frontend Developer with experience in building responsive
        and intuitive user interfaces. I specialize in React, Next.js, and
        modern CSS frameworks like Tailwind. My goal is to create seamless web
        experiences that combine aesthetic beauty with functional excellence.
      </motion.p>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");