// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitch, FaTwitter, FaYoutube, FaInstagram, FaDiscord } from 'react-icons/fa'; // Importing icons

const socialMediaData = [
  {
    title: "Twitch",
    description: "Follow me on Twitch for live gaming streams.",
    link: "https://www.twitch.tv/tastylier", // Replace with your Twitch link
    icon: <FaTwitch />
  },
  {
    title: "Twitter",
    description: "Stay updated with my latest tweets.",
    link: "https://x.com/TastyLier?t=hbMKbdfMCnZM2Z1lDCWLUA&s=09", // Replace with your Twitter link
    icon: <FaTwitter />
  },
  {
    title: "YouTube",
    description: "Check out my YouTube channel for videos.",
    link: "https://www.youtube.com/c/TastyLier", // Replace with your YouTube link
    icon: <FaYoutube />
  },
  {
    title: "Instagram",
    description: "Follow my journey on Instagram.",
    link: "https://www.instagram.com/tastylier/", // Replace with your Instagram link
    icon: <FaInstagram />
  },
  {
    title: "Discord",
    description: "Join my Discord server for community discussions.",
    link: "https://discord.com/invite/f7zDshYtAT", // Replace with your Discord invite link
    icon: <FaDiscord />
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Social Media</h2>
      <div className="projects-container">
        {socialMediaData.map((socialMedia, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ scale: 0.9, opacity: 0 }} // Start smaller and transparent
            whileInView={{ scale: 1, opacity: 1 }} // Grow and fade in
            whileHover={{ scale: 1.05 }} // Slightly scale on hover
            transition={{ duration: 0.3 }}
          >
            <a href={socialMedia.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h3>{socialMedia.icon} {socialMedia.title}</h3>
              <p>{socialMedia.description}</p>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
