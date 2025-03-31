// src/components/sections/Hero.tsx
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../lib/animations";
import Image from 'next/image'

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-12 bg-primary flex items-center justify-center">
      <div className="container mx-auto text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
        >
          Breathing Life into Software.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* Dynamic Ankh symbol animation transitioning to circuitry */}
          <img src="/ankh-animation.svg" alt="Ankh transitioning into circuitry" className="mx-auto" /> 
        </motion.div>
        <motion.a
          href="#discover"
          className="inline-block bg-accent text-background font-bold py-3 px-8 rounded-full shadow-lg hover:bg-opacity-90 transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Discover Your Solution
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;