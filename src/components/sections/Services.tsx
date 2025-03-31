// src/components/sections/Services.tsx
import React from "react";
import { motion } from "framer-motion";
import { iconHover, slideUp } from "../../lib/animations";

const services = [
  { title: "Backend Development", icon: "/services/backend.svg" },
  { title: "AI/ML", icon: "/services/aiml.svg" },
  { title: "Cloud Infrastructure", icon: "/services/cloud.svg" },
  { title: "Distributed Systems", icon: "/services/distributed.svg" },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="flex flex-col items-center text-center"
              whileHover="hover"
              variants={iconHover}
            >
              <img src={service.icon} alt={service.title} className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;