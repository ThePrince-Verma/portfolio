import React, { useState } from "react";
import "./works.css";
import Portfolio1 from "../../assets/portfolio-1.png";
import Portfolio2 from "../../assets/portfolio-2.png";
import Portfolio3 from "../../assets/portfolio-3.png";
import Portfolio4 from "../../assets/portfolio-4.png";
import Portfolio5 from "../../assets/portfolio-5.png";
import Portfolio6 from "../../assets/portfolio-6.png";
import Portfolio7 from "../../assets/portfolio-7.png"; // Add more project assets as needed
import Portfolio8 from "../../assets/portfolio-8.png";
import { Link } from "react-scroll";

const Works = () => {
  const [showMore, setShowMore] = useState(false); // Manage "See More" state

  return (
    <section id="works">
      <h2 className="worksTitle">My Projects</h2>
      <span className="worksDesc">
        I take pride in paying attention to the smallest details and making sure
        that my work is pixel perfect. I am excited to bring my skills and
        experience to help companies/businesses achieve their goals and create
        a strong online presence.
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
  <a href="https://github.com/ThePrince-Verma/food-order-app">
    <img src={Portfolio6} alt="" className="worksImg" />
  </a>
        {/* Additional projects shown on "See More" */}
        {showMore && (
          <>
            
            <a href="https://example.com">
              <img src={Portfolio7} alt="Portfolio 7" className="worksImg" />
            </a>
            <a href="https://example.com">
              <img src={Portfolio8} alt="Portfolio 8" className="worksImg" />
            </a>
          </>
        )}
      </div>
      <button
        className="workBtn"
        onClick={() => setShowMore((prev) => !prev)}
      >
        {showMore ? "Show Less" : "See More"}
      </button>
    </section>
  );
};

export default Works;
