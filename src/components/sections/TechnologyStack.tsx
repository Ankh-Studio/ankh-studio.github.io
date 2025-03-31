// src/components/sections/TechnologyStack.tsx
import React from "react";
import { motion } from "framer-motion";
import { slideUp } from "../../lib/animations";

const techStack = [
  { name: "Go", logo: "/tech/go.svg" },
  { name: "Python", logo: "/tech/python.svg" },
  { name: "Rust", logo: "/tech/rust.svg" },
  { name: ".NET", logo: "/tech/dotnet.svg" },
  { name: "AWS", logo: "/tech/aws.svg" },
  { name: "GCP", logo: "/tech/gcp.svg" },
];

const TechnologyStack: React.FC = () => {
  return (
    <section id="tech-stack" className="py-16 bg-background">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          transition={{ duration: 0.6 }}
        >
          Technology Stack
        </motion.h2>
        <motion.div
          className="flex space-x-8 overflow-x-auto pb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {techStack.map((tech) => (
            <div key={tech.name} className="flex-shrink-0">
              <img src={tech.logo} alt={tech.name} className="w-24 h-24" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyStack;