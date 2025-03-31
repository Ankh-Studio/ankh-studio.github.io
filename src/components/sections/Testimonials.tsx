// src/components/sections/Testimonials.tsx
import React from "react";
import { motion } from "framer-motion";
import { slideUp } from "../../lib/animations";

const testimonials = [
  { quote: "Ankh Studio transformed our digital presence.", author: "Client A" },
  { quote: "Their innovation is unparalleled.", author: "Client B" },
  { quote: "A truly visionary team with impeccable service.", author: "Client C" },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-background">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          transition={{ duration: 0.6 }}
        >
          Testimonials
        </motion.h2>
        <div className="space-y-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="bg-primary p-6 rounded-lg shadow"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <p className="text-lg italic mb-4">"{t.quote}"</p>
              <p className="text-right font-bold">- {t.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;