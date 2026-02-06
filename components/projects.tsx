"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles/index";
import { github, pineapple, pineappleHover } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

interface ProjectCardProps {
  id: string;
  name: string;
  description: string;
  image: any;
  repo: string;
  demo: string;
  index: number;
  active: string;
  handleClick: (id: string) => void;
}

const ProjectCard = ({
  id,
  name,
  description,
  image,
  repo,
  demo,
  index,
  active,
  handleClick,
}: ProjectCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
        } flex items-center justify-center min-w-[170px] 
      h-[420px] cursor-pointer card-shadow`}
      onClick={() => handleClick(id)}
    >
      <div
        className="absolute top-0 left-0 z-10 bg-jetLight 
        h-full w-full opacity-[0.5] rounded-[24px]"
      />

      <Image
        src={image}
        alt={name}
        fill
        className="object-cover rounded-[24px]"
      />

      {active !== id ? (
        <div className="flex items-center justify-start pr-[4.5rem]">
          <h3
            className="font-extrabold font-secondary uppercase w-[200px] h-[30px] 
            whitespace-nowrap sm:text-[27px] text-[18px] text-timberWolf tracking-[2px]
            absolute z-20 lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
            leading-none"
          >
            {name}
          </h3>
        </div>
      ) : (
        <div
          className="absolute bottom-0 p-8 justify-start w-full 
          flex-col bg-[rgba(122,122,122,0.5)] rounded-b-[24px] z-20"
        >
          <div className="absolute inset-0 flex justify-end m-3">
            <div
              onClick={() => window.open(repo, "_blank")}
              className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full 
              flex justify-center items-center cursor-pointer
              sm:opacity-[0.9] opacity-[0.8]"
            >
              <Image
                src={github}
                alt="source code"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
          </div>

          <h2
            className="font-extrabold sm:text-[32px] text-[24px] 
            text-timberWolf uppercase font-secondary tracking-tight"
          >
            {name}
          </h2>

          <p
            className="text-white/80 sm:text-[14px] text-[12px] 
            max-w-3xl sm:leading-[24px] leading-[18px]
            font-sans tracking-wide"
          >
            {description}
          </p>

          <button
            onClick={() => window.open(demo, "_blank")}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="live-demo flex justify-between 
            sm:text-[16px] text-[14px] text-timberWolf 
            font-bold font-secondary items-center py-5 pl-2 pr-3 
            whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] 
            w-[125px] h-[46px] rounded-[10px] glassmorphism 
            sm:mt-[22px] mt-[16px] hover:bg-white hover:text-night transition duration-300"
          >
            <Image
              src={hovered ? pineappleHover : pineapple}
              alt="pineapple"
              width={34}
              height={34}
              className="object-contain"
            />

            LIVE DEMO
          </button>
        </div>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const [active, setActive] = useState("project-2");

  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>Case Studies</p>
        <h2 className={styles.sectionHeadTextLight}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn(undefined, "tween", 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
        >
          These projects demonstrate my expertise with practical examples of
          some of my work, including brief descriptions and links to code
          repositories and live demos.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
