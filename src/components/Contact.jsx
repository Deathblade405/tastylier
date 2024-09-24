// src/components/Contact.js
import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Contact Tastylier</h2>
      <motion.form
        className="contact-form"
        initial={{ scale: 0.9 }} // Start smaller
        whileHover={{ scale: 1.02 }} // Slight scale on hover
        transition={{ duration: 0.2 }}
      >
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </motion.form>
    </motion.section>
  );
};

export default Contact;
