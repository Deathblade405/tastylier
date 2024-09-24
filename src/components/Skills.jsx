// src/components/Skills.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaGamepad, FaCameraRetro, FaDiscord, FaGuitar, FaFistRaised } from 'react-icons/fa'; // Import relevant icons

const skillsData = {
  Gaming: [
    { name: "Play games like Valorant, Fortnite, etc.", icon: <FaGamepad /> },
  ],
  PhotoEditing: [
    { name: "Editing stunning and fascinating photos", icon: <FaCameraRetro /> },
  ],
  DiscordServer: [
    { name: "Create Discord servers at a professional level", icon: <FaDiscord /> },
  ],
  OtherSkills: [
    { name: "Playing Guitar", icon: <FaGuitar /> },
    { name: "Boxing", icon: <FaFistRaised /> }, // Boxing gloves icon
  ],
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Skills</h2>
      <div className="skills-section">
        {Object.entries(skillsData).map(([category, skills], index) => (
          <motion.div
            className="skills-box"
            key={index}
            initial={{ scale: 0.9, opacity: 0 }} // Start smaller and transparent
            whileInView={{ scale: 1, opacity: 1 }} // Grow and fade in
            transition={{ duration: 0.3, delay: index * 0.1 }} // Delay for staggered effect
          >
            <h3 className="skills-heading">{category}</h3>
            <ul className="skills-list">
              {skills.map((skill, idx) => (
                <li key={idx} className="skills-list-item">
                  {skill.icon} <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
