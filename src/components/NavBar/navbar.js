import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import contactImg from "../../assets/contact.png";
import menu from '../../assets/menu.png'


const Navbar = () => {
  const [showMenu,setShowMenu] = useState(false);
  return (
    <nav className="navbar">
    <Link
          to="intro"
       
          offset={-100}
         
          duration={500}
        >
      <img src={logo} alt="logo" className="logo" /> </Link>
      <div className="desktopMenu">
        {/* spy true is mandatory because it checks the id, offset- shift page slightly up, and smooth scrolling  */}
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>

        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>

        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Projects
        </Link>

        {/* Resume link */}
        <a
          href="https://drive.google.com/file/d/1xff8hltRDP2FHptH3Wcys1B-XUO2fjTN/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="desktopMenuListItem"
        >
          Resume
        </a>

      </div>
      <button
        className="desktopMenuBtn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img className="desktopMenuImg" src={contactImg} alt=" "></img>Contact
        Me
      </button>




      <img src={menu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)} />
      <div className="navMenu" style={{display: showMenu? 'flex' : 'none'}}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem" onClick={()=>setShowMenu(false)}
        >
          Home
        </Link>

        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem" onClick={()=>setShowMenu(false)}
        >
          About
        </Link>

        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem" onClick={()=>setShowMenu(false)}
        >
          Projects
        </Link>

        {/* Resume link */}
        <a
          href="https://drive.google.com/file/d/1xff8hltRDP2FHptH3Wcys1B-XUO2fjTN/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="listItem" onClick={()=>setShowMenu(false)}
        >
          Resume
        </a>

        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem" onClick={()=>setShowMenu(false)}
        >
         Contact
        </Link>

      </div>

    </nav>
  );
};

export default Navbar;
