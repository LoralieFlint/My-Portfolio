import React from "react";
import "../App.css";
import { Link } from "react-scroll";


function NavSection () {

    return (
<div className="headerHolder">
        <div className="header">
          <h1 className="name">Loralie Flint</h1>
          <nav>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={700}>About</Link>
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-70} duration={700}>Skills</Link>
            <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={700}>Projects</Link>
            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={700}>Contact</Link>
          </nav>
        </div>
      </div>
    )
}
export default NavSection