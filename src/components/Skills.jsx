import { motion } from 'framer-motion';
import './skill.css';

const Skills = () => {
  return (
    <section className="skills-container" id='skills'>
      <motion.h2 
        className="skills-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Skills & Expertise
      </motion.h2>
      
      <div className="bento-grid">
        <motion.div 
          className="bento-item languages"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3>Programming Languages</h3>
          <ul>
            <li>Python - AI models, automation</li>
            <li>C - Low-level programming</li>
            <li>Java - OOP applications</li>
            <li>JavaScript - Web development</li>
          </ul>
        </motion.div>

        <motion.div 
          className="bento-item web"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3>Web Development</h3>
          <ul>
            <li>React & Vite</li>
            <li>Tailwind CSS</li>
            <li>HTML5/CSS3</li>
            <li>Framer Motion</li>
          </ul>
        </motion.div>

        <motion.div 
          className="bento-item ai-ml"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3>AI & Machine Learning</h3>
          <ul>
            <li>Machine Learning Algorithms</li>
            <li>Neural Networks</li>
            <li>Data Analysis</li>
          </ul>
        </motion.div>

        <motion.div 
          className="bento-item data-viz"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3>Data & Tools</h3>
          <ul>
            <li>Power BI & Tableau</li>
            <li>MySQL</li>
            <li>Git & GitHub</li>
            <li>PyQt</li>
          </ul>
        </motion.div>
        <motion.div 
          className="bento-item tools"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3>Tools & Technologies</h3>
          <ul>
            <li>Git & GitHub - Version control and collaboration</li>
            <li>PyQt - Cross-platform desktop applications</li>
            <li>Framer Motion - Web animations</li>
          </ul>
        </motion.div>

        <motion.div 
          className="bento-item other"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h3>Other Skills</h3>
          <ul>
            <li>UI/UX Design - User-friendly interfaces</li>
            <li>Project Management - Structured approach</li>
            <li>Problem Solving - Innovative solutions</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};


export default Skills;