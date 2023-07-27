import React from 'react';
import './menuFixed.scss';
import { Link } from 'react-scroll';

function MenuFixed({ showMenu }) {
  return (
    <>
      {showMenu && (
        <div className="menuFixed">
          <nav className="menu">
            {/* <a href="#aboutCon">ABOUT</a>
            <a href="#servicesCon">SERVICES</a>
            <a href="#technologies">TECHNOLOGIES</a>
            <a href="#processCon">HOW TO</a> */}

            <Link
          to="aboutSection"
          className="a"
          smooth={true}
          duration={500}
        >
          ABOUT
        </Link>

        <Link
          to="servicesSection"
          className="a"
          smooth={true}
          duration={500}
        >
          SERVICES
        </Link>

        <Link
          to="technologiesSection"
          className="a"
          smooth={true}
          duration={500}
        >
          TECHNOLOGIES
        </Link>

        <Link
          to="howToSection"
          className="a"
          smooth={true}
          duration={500}
        >
          HOW TO
        </Link>
          </nav>
        </div>
      )}
    </>
  );
}

export default MenuFixed;
