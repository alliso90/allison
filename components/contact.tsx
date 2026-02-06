"use client";

import { useState, useRef, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser"; // keep this if you want EmailJS
import Image from "next/image";

import { styles } from "../styles/index";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { send, sendHover } from "../assets";

// Type for form state
interface FormState {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Handle input changes with proper typing
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  // Form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "serviceID", // replace with your service ID
        "templateID", // replace with your template ID
        {
          from_name: form.name,
          to_name: "YourName",
          from_email: form.email,
          to_email: "youremail@gmail.com",
          message: form.message,
        },
        "yourpublickey" // replace with your public key
      );

      alert("Thank you! I will get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="-mt-32 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6 font-primary"
        >
          {/** Name Input */}
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-3">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-jetLight py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border border-white/5 font-medium focus:border-white/20 transition-all font-sans"
              required
            />
          </label>

          {/** Email Input */}
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-3">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-jetLight py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border border-white/5 font-medium focus:border-white/20 transition-all font-sans"
              required
            />
          </label>

          {/** Message Input */}
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-3">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="bg-jetLight py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border border-white/5 font-medium focus:border-white/20 transition-all resize-none font-sans"
              required
            />
          </label>

          {/** Submit Button */}
          <button
            type="submit"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="flex justify-center items-center py-4 px-8 rounded-lg bg-white text-night font-bold font-secondary uppercase tracking-[2px] hover:bg-timberWolf transition-all duration-300 shadow-lg disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
            <Image
              src={hovered ? sendHover : send}
              alt="send"
              width={22}
              height={22}
              className="object-contain ml-2"
            />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
