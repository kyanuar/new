import { assets, workData } from "@/assets/assets";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="gallery"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Gallery
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        This is documentation during an activity! Each experience has photos that show the specific activity.{" "}
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid md:grid-cols-3 max-md:grid-cols-auto my-10 gap-5 font-Outfit"
      >
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg
          relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div
              className="bg-white w-10/12 rounded-lg absolute bottom-4 left-1/2 -translate-x-1/2
            py-1 px-4 flex items-center justify-between duration-500 group-hover:bottom-7"
            >
              <div>
                <h2 className="font-semibold text-black">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div
                className="border rounded-full border-black w-9 aspect-square flex 
                items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-orange-400 transition"
              >
                <Image src={assets.send_icon} alt="send icon" className="w-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        href=""
        className="w-max flex items-center justify-center gap-2
       text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Show more{" "}
        <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt="" className="w-4" />
      </motion.a>
    </motion.div>
  );
};

export default Work;