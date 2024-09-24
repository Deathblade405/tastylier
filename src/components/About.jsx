// src/components/About.js
import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import profilePic from '../assets/tastylier.jpg'; // Import your profile picture

const About = () => {
  return (
    <motion.section
      id="about"
      className="section"
      initial={{ opacity: 0, scale: 0.9 }} // Start smaller
      whileInView={{ opacity: 1, scale: 1 }} // Grow to normal size
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="about-content">
        <motion.img
          src={profilePic} // Use your profile picture here
          alt="Profile"
          className="profile-pic"
          initial={{ opacity: 0, y: -20 }} // Start slightly above
          whileInView={{ opacity: 1, y: 0 }} // Move to normal position
          transition={{ duration: 0.5 }}
        />
        <div className="typewriter-container">
          <Typewriter
            options={{
              strings: [
                "I'm Tastylier",
                "I'm an Indian Full-Time YouTuber and Twitch Streamer",
                "I stream on Twitch every day at 8 PM IST"
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 75,
            }}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default About;
