"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { github } from "../assets";
import { navLinks } from "../constants";

const Footer = () => {
    return (
        <footer className="bg-night/95 backdrop-blur-md border-t border-white/5 py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-8">

                {/* Navigation Links */}
                <div className="flex flex-wrap justify-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className="text-timberWolf/60 hover:text-white text-sm font-medium tracking-widest uppercase transition-colors duration-300"
                        >
                            {link.title}
                        </a>
                    ))}
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-6">
                    <motion.a
                        whileHover={{ y: -3, scale: 1.1 }}
                        href="https://github.com/shaqdeff" // Assuming GitHub link, update if known
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors duration-300"
                    >
                        <Image
                            src={github}
                            alt="github"
                            width={24}
                            height={24}
                            className="invert"
                        />
                    </motion.a>
                </div>

                {/* Branding & Copyright */}
                <div className="text-center space-y-2">
                    <p className="text-white font-secondary font-black text-xl tracking-tighter uppercase">
                        EGBA <span className="text-timberWolf">ALLISON</span>
                    </p>
                    <div className="h-px w-12 bg-timberWolf/20 mx-auto" />
                    <p className="text-timberWolf/40 text-[10px] tracking-[0.3em] uppercase">
                        © {new Date().getFullYear()} • Crafting Digital Excellence
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
