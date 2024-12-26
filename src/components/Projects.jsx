import { motion } from 'framer-motion';
import './projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Paper Checking Software",
      duration: "Ongoing",
      description: "AI-powered academic paper evaluation system using NLP and machine learning for automated grading and feedback generation.",
      technologies: ["Python", "TensorFlow", "NLP", "Flask"],
      link: "https://github.com/yourusername/paper-checker"
    },
    {
      title: "TaskVerse",
      duration: "Ongoing",
      description: "Full-stack productivity application combining AI assistance, task management, and team collaboration. Features real-time updates.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      link: "https://taskverse.com"
    },
    {
      title: "Gender Detection from Audio",
      duration: "August 2024 - October 2024",
      description: "ML model analyzing audio samples to detect speaker gender using voice characteristics and audio processing.",
      technologies: ["Python", "TensorFlow", "Librosa", "Scikit-learn"],
      link: "https://github.com/yourusername/gender-detection"
    },
    {
      title: "Health Tracker",
      duration: "February 2024 - March 2024",
      description: "Personal wellness application for tracking nutrition, exercise, and sleep patterns with detailed analytics.",
      technologies: ["React Native", "Firebase", "Chart.js"],
      link: "https://github.com/yourusername/health-tracker"
    },
    {
      title: "Weather Dashboard",
      duration: "November 2024",
      description: "Real-time weather application with location-based updates and interactive visualizations.",
      technologies: ["Vite", "React", "TailwindCSS", "OpenWeather API"],
      link: "https://github.com/yourusername/weather-dashboard"
    }
  ];

  return (
    <section className="projects-container" id="projects">
      <motion.h2 
        className="projects-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Featured Projects
      </motion.h2>
      
      <div className="bento-grid">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <h3>{project.title}</h3>
            <p className="project-duration">{project.duration}</p>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;