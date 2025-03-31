// src/components/sections/About.tsx
import React from "react";
import { motion } from "framer-motion";
import { slideUp } from "../../lib/animations";

const avatars = [
  { name: "Anubis", person: "Brandon Coburn", img: "/anubis.png" },
  { name: "Khonsu", person: "Jonathan Reeves", img: "/khonsu.png" },
  { name: "Osiris", person: "Tyler Aldrich", img: "/osiris.png" },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            At Ankh Studio, we breathe life into software with ingenuity, reliability, and innovation.
          </motion.p>
        </div>
        <div className="flex space-x-4 justify-center">
          {avatars.map((avatar) => (
            <motion.div
              key={avatar.name}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={avatar.img} alt={avatar.name} className="w-24 h-24 rounded-full mb-2" />
              <span className="text-sm font-bold">{avatar.name}</span>
              <span className="text-xs text-gray-400">{avatar.person}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;