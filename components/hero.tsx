"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { styles } from "../styles";
import { shaq, bwmap, worldmap } from "../assets";

const Hero = () => {
  return (
    <>
      {/* Background */}
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-full overflow-hidden">
        <Image
          src={bwmap}
          alt="world map"
          fill
          className="w-full h-full hidden sm:block object-cover opacity-20"
          priority
        />
        <Image
          src={worldmap}
          alt="world map mobile"
          fill
          className="w-full h-full sm:hidden block object-cover opacity-20"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-night via-night/95 to-night/90 z-0" />
      </div>

      <section className="relative flex flex-col w-full h-screen mx-auto overflow-hidden">
        <div className="relative z-10 flex flex-col items-start justify-center h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Text Content */}
          <div className="flex flex-col justify-start items-start max-w-2xl">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-3"
            >
              <span className="text-timberWolf/80 text-lg sm:text-xl font-light tracking-[0.2em]">
                HELLO, I'M
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white font-secondary font-black uppercase mb-4"
            >
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter">
                EGBA
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter text-timberWolf">
                ALLISON
              </span>
            </motion.h1>

            {/* Title with decorative line */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative mb-6"
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-gradient-to-r from-taupe to-transparent" />
                <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                  Frontend Developer
                </h2>
              </div>
            </motion.div>

            {/* Detailed Description */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              <p className="text-timberWolf/90 font-medium text-lg sm:text-xl max-w-xl !leading-relaxed">
                I craft exceptional digital experiences that blend cutting-edge technology
                with elegant design. Specializing in modern web applications that are
                performant, accessible, and visually striking.
              </p>

              <div className="pt-2">
                <p className="text-timberWolf/80 font-normal text-base sm:text-lg max-w-xl !leading-relaxed">
                  With expertise in <span className="text-white font-semibold">React</span>,{" "}
                  <span className="text-white font-semibold">Next.js</span>, and{" "}
                  <span className="text-white font-semibold">TypeScript</span>,
                  I build scalable solutions that drive business success and deliver
                  outstanding user experiences.
                </p>
              </div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"].map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-night/40 backdrop-blur-sm rounded-full 
                           text-timberWolf border border-timberWolf/10 text-sm 
                           font-medium hover:border-timberWolf/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Hero Image - Half Revealed/Bisected Effect - Tilted Right */}
        <div className="absolute inset-0 flex items-center justify-end pointer-events-none overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative h-full w-[45%] min-w-[400px] max-w-[800px]"
          >
            {/* Container with clean cut effect - Tilted Right */}
            <div
              className="absolute right-0 top-0 bottom-0 w-full overflow-hidden"
              style={{
                transform: 'perspective(800px) rotateY(-15deg)',
                transformOrigin: 'right center'
              }}
            >
              <div className="relative w-[200%] h-full -left-[100%]">
                <Image
                  src={shaq}
                  alt="Egba Allison"
                  fill
                  className="object-cover object-center opacity-95 grayscale"
                  sizes="(max-width: 768px) 45vw, 40vw"
                  priority
                  quality={100}
                />
              </div>

              {/* Vertical gradient for clean cut edge - Right side */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-night to-transparent" />

              {/* Subtle horizontal gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-night via-transparent to-transparent opacity-40" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <a href="#about" className="cursor-pointer group">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-timberWolf/60 text-xs tracking-[0.3em] uppercase group-hover:text-timberWolf transition-colors">
                Explore
              </span>
              <div className="w-5 h-9 rounded-full border border-timberWolf/30 flex justify-center items-start pt-2 group-hover:border-timberWolf transition-colors">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                  }}
                  className="w-1 h-2 rounded-full bg-timberWolf"
                />
              </div>
            </div>
          </a>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;