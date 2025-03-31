// src/components/sections/Contact.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideUp } from "../../lib/animations";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement form submission via API or email service
    console.log("Form submitted", formData);
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          transition={{ duration: 0.6 }}
        >
          Unveil Your Project's Potential
        </motion.h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            className="w-full p-3 rounded bg-gray-800 text-white" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            className="w-full p-3 rounded bg-gray-800 text-white" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="subject" 
            placeholder="Subject" 
            className="w-full p-3 rounded bg-gray-800 text-white" 
            value={formData.subject} 
            onChange={handleChange} 
            required 
          />
          <textarea 
            name="message" 
            placeholder="Message" 
            className="w-full p-3 rounded bg-gray-800 text-white" 
            rows={5} 
            value={formData.message} 
            onChange={handleChange} 
            required 
          />
          <motion.button
            type="submit"
            className="w-full py-3 px-6 bg-accent text-background font-bold rounded-full shadow hover:bg-opacity-90 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Contact;