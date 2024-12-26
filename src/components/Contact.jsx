import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await emailjs.sendForm(
        'service_w1nq3jr',
        'template_gw68zxf',
        form.current,
        'SWoBnBKrU3cW3zIOo'
      );
      setStatus('success');
      form.current.reset();
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Email error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className="contact-container" id="contact">
      <motion.h2 
        className="contact-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Let's Connect
      </motion.h2>
      
      <div className="contact-content">
        <motion.div 
          className="social-links"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3>Find me on</h3>
          <div className="social-grid">
            <a href="https://linkedin.com/in/shykh-furkan-1193b4249" target="_blank" rel="noopener noreferrer" className="social-item">
              <i className="fab fa-linkedin"></i>
              LinkedIn
            </a>
            <a href="https://twitter.com/shykh_furkan" target="_blank" rel="noopener noreferrer" className="social-item">
              <i className="fab fa-twitter"></i>
              Twitter
            </a>
            <a href="https://github.com/shykhfurkan" target="_blank" rel="noopener noreferrer" className="social-item">
              <i className="fab fa-github"></i>
              GitHub
            </a>
            <a href="mailto:www.shykhfurkan@gmail.com" className="social-item">
              <i className="fas fa-envelope"></i>
              Email
            </a>
          </div>
        </motion.div>

        <motion.form 
          ref={form}
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3>Send me a message</h3>
          <div className="form-group">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className={`submit-btn ${status}`}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 
             status === 'success' ? 'Message Sent!' : 
             status === 'error' ? 'Error! Try Again' : 
             'Send Message'}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;