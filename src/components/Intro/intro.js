import React from 'react'
import './intro.css'
import bg from '../../assets/image.png'
import {Link} from 'react-scroll';
import btnImg from '../../assets/hireme.png'


const Intro = () => {
  return (
    <div>
      <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Prince Verma</span><br/>Website Designer</span>
            <p className='introPara'>I am a skilled front-end developer with experience in creating <br /> visual appealing and user friendly websites.</p>
            <Link > <button className= "btn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }} ><img src={btnImg} alt='Hire-me' className='btnImg' />Hire Me </button></Link>
        </div>
        <img src={bg} alt='profile' className='bg' />
      </section>
    </div>
  )
}

export default Intro;
