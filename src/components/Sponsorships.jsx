// src/components/Sponsorships.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptop, FaGamepad, FaBolt, FaUserShield } from 'react-icons/fa'; // Import relevant icons for each sponsorship

const sponsorshipsData = {
  "Logitech": [
    { name: "Worked with Logitech for exclusive gaming gear promotions", icon: <FaLaptop /> },
  ],
  "Raid: Shadow Legends": [
    { name: "Collaborated with Raid: Shadow Legends to promote in-game events", icon: <FaUserShield /> },
  ],
  "Zest Sponsorship": [
    { name: "Sponsored by Zest for health & wellness product endorsements", icon: <FaBolt /> },
  ],
  "Rogue Affiliated": [
    { name: "Affiliated with Rogue for energy supplements promotion", icon: <FaGamepad /> },
  ],
};

const Sponsorships = () => {
  return (
    <motion.section
      id="sponsorships"
      className="section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Sponsorships</h2>
      <div className="sponsorships-section">
        {Object.entries(sponsorshipsData).map(([company, details], index) => (
          <motion.div
            className="sponsorship-box"
            key={index}
            initial={{ scale: 0.9, opacity: 0 }} // Start smaller and transparent
            whileInView={{ scale: 1, opacity: 1 }} // Grow and fade in
            transition={{ duration: 0.3, delay: index * 0.1 }} // Delay for staggered effect
          >
            <h3 className="sponsorship-heading">{company}</h3>
            <ul className="sponsorship-list">
              {details.map((detail, idx) => (
                <li key={idx} className="sponsorship-list-item">
                  {detail.icon} <span>{detail.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Sponsorships;
