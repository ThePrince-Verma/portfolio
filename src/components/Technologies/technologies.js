import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import "./technologies.css";
import { FaHtml5 } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import {animate, motion} from 'framer-motion'

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

const Technologies = () => {
  return (
    <div className="technologies-container">
      <h1 className="technologies-title">Technologies</h1>
      <div className="technologies-grid">
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
         className="technology-card">
          <RiReactjsLine className="react-icon1" />
        </motion.div>
        <motion.div
         variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
         className="technology-card">
          <FaNodeJs className="react-icon2" />
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="technology-card" >
          <FaCss3 className="react-icon3" />
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="technology-card">
          <FaHtml5 className="react-icon4" />
          </motion.div>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
         className="technology-card">
          <SiRedux className="react-icon5" />
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="technology-card">
          <FaJava className="react-icon6" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
