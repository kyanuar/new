import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";

const Contect = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2bcd2d7d-1aff-4a06-8d7e-fb5fd3c1a76a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className='w-full px-[12%] py-10 scroll-mt-20
    bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[lenght:90%_auto] dark:bg-none'
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Connect with me
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Get in touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto  mt-5 mb-12 font-Ovo"
      >
        I'm eagerly awaiting your response! If you have any questions, comments, or feedback. Please use this form to
        send a message.
      </motion.p>
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto font-Outfit"
      >
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            type="text"
            placeholder="Enter your name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-lg bg-white dark:bg-darkHover/30 dark:border-white/90"
            name="name"
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-lg bg-white dark:bg-darkHover/30 dark:border-white/90"
            name="email"
          />
        </div>
        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          rows="6"
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-lg bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
          name="message"
        ></motion.textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type="sumbit"
          className="py-3.5 px-8 w-max flex item-center justify-between gap-2 bg-red-600 text-white rounded-full mx-auto hover:bg-red-900 duration-500 dark:border-[0.5px] dark:bg-transparent dark:hover:bg-darkHover/70"
        >
          Sumbit now <Image src={assets.right_arrow_white} alt="" className="py-3 w-4" />
        </motion.button>
        <p className="mt-4">{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contect;