import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';
import { Link } from 'react-scroll';

const Works = () => {
  return (
    <section id='works'>
      <h2 className="worksTitle">My Projects</h2>
      <span className="worksDesc">
        I take pride in paying attention to the smallest details and making sure that my work is pixel perfect.I am excited to bring my skills and experience to help companies/businesses achieve their goals and create a strong online presence.
      </span>
      <div className="worksImgs">
        <a href="https://quiz-on-react.netlify.app/">
          <img src={Portfolio1} alt="" className="worksImg" />
        </a>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <img src={Portfolio2} alt="Portfolio 2" className="worksImg" />
        </Link>
        <a href="https://theprince-verma.github.io/notes-keeper-app-2/">
          <img src={Portfolio3} alt="" className="worksImg" />
        </a>
        <a href="https://theprince-verma.github.io/drum-kit-challenge/">
          <img src={Portfolio4} alt="" className="worksImg" />
        </a>
        <a href="https://vermastore.netlify.app/">
          <img src={Portfolio5} alt="" className="worksImg" />
        </a>
        <a href="https://drive.google.com/link-to-portfolio6">
          <img src={Portfolio6} alt="" className="worksImg" />
        </a>
      </div>
      <button className="workBtn">See More</button>
    </section>
  );
};

export default Works;
