import React, { useEffect, useState } from "react";

import { Link, animateScroll as scroll } from "react-scroll";

import "./header.scss";

import spinner from "../../images/logo/logoSPINNER.svg";
import hydra from "../../images/logo/logoHYDRA.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuToggle() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeBurgerMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header>
      <div className="logo">
        <img className="logoSPINNER" src={spinner} alt="logoSPINNER" />
        <img className="logoHYDRA" src={hydra} alt="logoHYDRA" />
      </div>

      <nav className={`navMenu ${isMenuOpen ? "_active" : ""}`}>
        <Link
          to="aboutSection"
          className="a"
          smooth={true}
          duration={500}
          onClick={closeBurgerMenu}
        >
          ABOUT
        </Link>

        <Link
          to="servicesSection"
          className="a"
          smooth={true}
          duration={500}
          onClick={closeBurgerMenu}
        >
          SERVICES
        </Link>

        <Link
          to="technologiesSection"
          className="a"
          smooth={true}
          duration={500}
          onClick={closeBurgerMenu}
        >
          TECHNOLOGIES
        </Link>

        <Link
          to="howToSection"
          className="a"
          smooth={true}
          duration={500}
          onClick={closeBurgerMenu}
        >
          HOW TO
        </Link>

        <Link
          className="burgerLinks"
          to="footer"
          smooth={true}
          duration={500}
          onClick={closeBurgerMenu}
        >
          CONTACT US
        </Link>
        <Link
          className="burgerLinks"
          to="regForm"
          smooth={true}
          duration={500}
          onClick={closeBurgerMenu}
        >
          JOIN HYDRA
        </Link>
      </nav>

      <div className="headButtons">
        <Link
          to="footer"
          smooth={true}
          duration={500}
          className="contactUsButton buttons"
        >
          CONTACT US
        </Link>
        <Link
          to="regForm"
          smooth={true}
          duration={500}
          className="joinHydraButton buttons"
        >
          JOIN HYDRA
        </Link>
      </div>

      <div
        className={`burger ${isMenuOpen ? "_active" : ""}`}
        onClick={handleMenuToggle}
      >
        <span></span>
      </div>
    </header>
  );
}

export default Header;
