// src/components/sections/Projects.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideUp } from "../../lib/animations";

const projects = [
  { title: "Project One", image: "/projects/project1.jpg", description: "Project One description" },
  { title: "Project Two", image: "/projects/project2.jpg", description: "Project Two description" },
  { title: "Project Three", image: "/projects/project3.jpg", description: "Project Three description" },
];

const Projects: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const prevProject = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          transition={{ duration: 0.6 }}
        >
          Project Showcase
        </motion.h2>
        <div className="relative">
          <motion.div
            key={current}
            className="flex flex-col items-center text-center"
            initial="hidden"
            animate="visible"
            variants={slideUp}
            transition={{ duration: 0.6 }}
          >
            <img src={projects[current].image} alt={projects[current].title} className="w-full h-auto mb-4 rounded-lg" />
            <h3 className="text-2xl font-semibold mb-2">{projects[current].title}</h3>
            <p className="mb-4">{projects[current].description}</p>
            <a href={`/projects/${current}`} className="text-accent hover:underline">
              Read More
            </a>
          </motion.div>
          <button onClick={prevProject} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-accent p-2 rounded-full hover:bg-opacity-90">
            &#8592;
          </button>
          <button onClick={nextProject} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-accent p-2 rounded-full hover:bg-opacity-90">
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;