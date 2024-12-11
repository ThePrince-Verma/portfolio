import React, { useRef, useState } from 'react';
import './contacts.css';
import LinkdinIcon from '../../assets/linkdin.png';
import GithubIcon from '../../assets/github.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';
import { motion} from 'framer-motion'

const iconVariants = (duration) =>({
  initial:{y:-10} ,
  animate: {
    y:[10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:'reverse',
    }
  }
});



const Contacts = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gp43xee', 'template_0hrwni8', form.current, 'ZytkW0ZK1qjVydQm3')
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setIsSubmitted(true); // Set the button color to green
          setTimeout(() => setIsSubmitted(false), 3000); // Reset after 3 seconds
          // alert('Email sent!');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name="from_name" required />
          <input type="email" className="email" placeholder="Your Email" name="from_email" required />
          <textarea className="msg" name="message" rows="5" placeholder="Your Message" required></textarea>
          <button
            type="submit"
            value="send"
            className={`submitBtn ${isSubmitted ? 'success' : ''}`}
          >
            Submit
          </button>
          <div className="links">
            <motion.a 
            variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
             href="https://www.linkedin.com/in/prince-kumar-verma-354a82300/" target="_blank" rel="noopener noreferrer">
              <img src={LinkdinIcon} alt="LinkedIn" className="link" />
            </motion.a>
            <motion.a 
            variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
             href="https://github.com/ThePrince-Verma?tab=repositories" target="_blank" rel="noopener noreferrer">
              <img src={GithubIcon} alt="GitHub" className="link" />
            </motion.a>
            <motion.a 
            variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
             href="https://www.youtube.com/channel/UCGe3_oiHsO22NLxGbZSr71A" target="_blank" rel="noopener noreferrer">
              <img src={YoutubeIcon} alt="YouTube" className="link" />
            </motion.a>
            <motion.a 
            variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
             href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
              <img src={InstagramIcon} alt="Instagram" className="link" />
            </motion.a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
