import { motion } from 'framer-motion';
import './aboutme.css';

const AboutMe = () => {
  return (
    <section className="about-container" id="about">
      <motion.h2 
        className="about-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      
      <div className="bento-grid">
        <motion.div 
          className="bento-item intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3>Hello World!</h3>
          <p>I'm Furkan, a 3rd-year Computer Science Engineering student at the University of Kashmir with a passion for building innovative and efficient software solutions.</p>
        </motion.div>

        <motion.div 
          className="bento-item skills"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3>Skills & Expertise</h3>
          <ul>
            <li>Frontend Development: React, Tailwind CSS</li>
            <li>AI/ML: Python, Neural Networks</li>
            <li>Project Management</li>
          </ul>
        </motion.div>

        <motion.div 
          className="bento-item projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3>Notable Projects</h3>
          <p>TaskVerse - Productivity Management App</p>
          <p>Weather Dashboard</p>
          <p>Finance Tracker</p>
        </motion.div>

        <motion.div 
          className="bento-item interests"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3>Beyond Coding</h3>
          <p>Exploring tech trends, continuous learning, and working on personal projects to enhance my skills.</p>
        </motion.div>
        <motion.div 
          className="bento-item interests"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3>Tech Innovator</h3>
          <p>I am driven to revolutionize the world of technology with my AI-powered startup, UNIO. My mission is to create innovative solutions that empower businesses and individuals, shaping the future through artificial intelligence.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;