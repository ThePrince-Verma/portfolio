import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'


const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do </span>
        <span className='skillDesc'>I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML,CSS, and JavaScrip and  its framework.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='' className='skillBarImg' />
                    <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>I design user interfaces and experiences that are visually appealing, intuitive, and enhance user engagement, ensuring ease of use across various devices.</p>
            </div>
            </div>
            
            <div className='skillBar'>
                <img src={WebDesign} alt='' className='skillBarImg' />
                    <div className='skillBarText'>
                    <h2>Website Development</h2>
                    <p>I specialize in creating responsive, user-friendly websites, combining creative design with functional development to deliver seamless web experiences.</p>
            </div>
            </div>
            
            <div className='skillBar'>
                <img src={AppDesign} alt='' className='skillBarImg' />
                    <div className='skillBarText'>
                    <h2>Java Programming</h2>
                    <p>I work on solving problems using Java, focusing on data structures, algorithms, and writing clean code for various projects.</p>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
