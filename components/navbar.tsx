"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { close, menu, logo, logotext } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-3 fixed 
      top-0 z-30 bg-transparent transition-all duration-300`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image
            src={logo}
            alt="logo"
            width={35}
            height={35}
            className="object-contain invert brightness-200"
          />

          <Image
            src={logotext}
            alt="logo text"
            width={60}
            height={60}
            className="-ml-2 object-contain invert brightness-200"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-white" : "text-timberWolf/60"
                } hover:text-white text-[12px] font-bold font-secondary 
              uppercase tracking-[3px] cursor-pointer transition-all duration-300`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {toggle ? (
            <div
              className={`p-6 bg-night absolute 
              top-0 left-0 w-screen h-screen z-10 flex flex-col items-start justify-center transition-all duration-500`}
            >
              <div className="absolute top-8 right-6">
                <Image
                  src={close}
                  alt="close"
                  width={24}
                  height={24}
                  className="cursor-pointer invert"
                  onClick={() => setToggle(!toggle)}
                />
              </div>

              <ul className="list-none flex flex-col items-start ml-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${active === nav.title ? "text-white" : "text-timberWolf/60"
                      } text-[40px] font-black font-secondary 
                    uppercase tracking-[4px] cursor-pointer mb-6 transition-all`}
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <Image
              src={menu}
              alt="menu"
              width={24}
              height={24}
              className="cursor-pointer invert"
              onClick={() => setToggle(true)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
