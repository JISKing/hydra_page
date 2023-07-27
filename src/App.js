import React, { useEffect, useState } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { Element } from "react-scroll";

import "./App.scss";

import MenuFixed from "./components/menu/MenuFixed";
import Background from "./components/background/Background";
import Header from "./components/header/Header";
import HeaderINFO from "./components/headerINFO/HeaderINFO";
import About from "./components/section-about/About";
import Services from "./components/section-services/Services";
import Technologies from "./components/section-tech/Technologies";
import Process from "./components/section-process/Process";
import RegForm from "./components/section-OptIn/RegForm";
import Footer from "./components/footer/Footer";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const headerHeight = document.querySelector("header").offsetHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setShowMenu(scrollTop > headerHeight);
  };
  return (
    <>
      <div className="wrapper">
        <Background />
        <MenuFixed showMenu={showMenu} />
        <div className="contentWrapper">
          <Router basename="/hydra_page">
            <Header />
            <HeaderINFO />

            <Element name="aboutSection">
              <About />
            </Element>
            <Element name="servicesSection">
              <Services />
            </Element>
            <Element name="technologiesSection">
              <Technologies />
            </Element>
            <Element name="howToSection">
              <Process />
            </Element>
            <Element name="regForm">
              <RegForm />
            </Element>
            <Element name="footer">
              <Footer />
            </Element>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
