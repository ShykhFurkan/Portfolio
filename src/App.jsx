import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Add this import
import './index.css';

import Hero from './components/Hero';
import AboutMe from './components/Aboutme';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Nav from './components/Nav';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const cursor = document.createElement('div');
    const follower = document.createElement('div');
    cursor.className = 'cursor-effect';
    follower.className = 'cursor-follower';
    document.body.appendChild(cursor);
    document.body.appendChild(follower);

    const handleMouseMove = (e) => {
      requestAnimationFrame(() => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        follower.style.left = `${e.clientX}px`;
        follower.style.top = `${e.clientY}px`;
      });
    };

    const handleMouseOver = (e) => {
      const targetElement = e.target;
      if (targetElement.tagName.toLowerCase() === 'a' || 
          targetElement.tagName.toLowerCase() === 'button') {
        setIsPointer(true);
        cursor.classList.add('cursor-hover');
        follower.classList.add('follower-hover');
      }
    };

    const handleMouseOut = () => {
      setIsPointer(false);
      cursor.classList.remove('cursor-hover');
      follower.classList.remove('follower-hover');
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.body.removeChild(cursor);
      document.body.removeChild(follower);
    };
  }, []);

  return (
    <div className={`App ${isPointer ? 'cursor-pointer' : ''}`}>
      <Nav />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;