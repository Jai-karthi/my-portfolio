// pages/about.js
'use client'
import React from 'react';
import { motion } from "framer-motion";
const About = () => {
  return (
    <div
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
       className="h-screen w-screen bg-cover bg-center  flex"
    >
        <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      {/* <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
      About */}
      {/* </h3> */}
      <h1 className="font-semibold text-white text-[50px] absolute top-20 md:top-24 uppercase tracking-[20px] text-xl md:text-2xl">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              us{" "}
            </span>
        </h1>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        className=" -mb-24 md:mb-0 flex-shrink-0 w-52 h-52 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        src='https://img.freepik.com/premium-vector/jk-logo_773552-192.jpg'
      />
      <div className="space-y-5 md:space-y-10 px-0 md:px-10">
        <h4 className="text-xl md:text-4xl font-semibold  text-gray-200">
          Here is a{" "}
          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-500  to-red-500 ">little background</span>{" "}
          
        </h4>
        <p className="text-sm md:text-lg lg:text-lg line-clamp-4 text-gray-200 font-semibold">
            i am jai prashanth and i am software engineer who  loves to learn new technology and
             i started  with python and then i started to learn web development and mobile app development.
        </p>
      </div>
    </motion.div>      
    </div>
  );
};

export default About;
