import React from 'react'
import './intro.css'
import bg from '../../assets/image.png'
import {Link} from 'react-scroll';
import btnImg from '../../assets/hireme.png'
import {motion} from 'framer-motion'

const Intro = () => {
  const slilderVariants = {
    initial:{
      x:0,
    },
    animate: {
      x:"-220%",
      transition:{
        repeat:Infinity,
        repeatType:"mirror",
        duration:20,
      },
    },
  };
  return (
    <div>
      <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Prince Verma</span><br/>Website Designer</span>
            <p className='introPara'>I am a skilled front-end developer with experience in creating <br /> visual appealing and user friendly websites.</p>
            <Link to="contact" smooth={true} duration={500}> <button className= "btn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }} ><img src={btnImg} alt='Hire-me' className='btnImg' />Hire Me </button></Link>
        </div>
        <img src={bg} alt='profile' className='bg' />

        
      </section>
      <motion.div className="slidingText" variants={slilderVariants} initial="initial" animate="animate">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Transforming Ideas Visually
        </motion.div>
    </div>
  )
}

export default Intro;
