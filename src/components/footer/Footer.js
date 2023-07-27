import { Link } from "react-scroll";

import "./footer.scss";

import bigLogo from "../../images/footer/bigLogo.svg";
import verticalVector from "../../images/footer/verticalVector.svg";

import facebookIcon from "../../images/footer/facebook.svg";
import twitterIcon from "../../images/footer/twitter.svg";
import linkedinIcon from "../../images/footer/linkedin.svg";
import youtubeIcon from "../../images/footer/youtube.svg";
import instagramIcon from "../../images/footer/instagram.svg";
import pinterestIcon from "../../images/footer/pinterest.svg";

function Footer() {
  return (
    <footer>
      <div className="footerMenu">
        <div id="bigLogo">
          <img src={bigLogo} alt="big-logo"></img>
        </div>
        <div className="verticalVectors hide_1000_px">
          <img src={verticalVector} alt="vertical-vector"></img>
        </div>
        <div className="navFooter hide_1000_px">
          <div>
            <Link to="aboutSection" smooth={true} duration={500}>
              ABOUT
            </Link>
            <Link to="servicesSection" smooth={true} duration={500}>
              SERVICES
            </Link>
            <Link to="technologiesSection" smooth={true} duration={500}>
              TECHNOLOGIES
            </Link>
            <Link to="processSection" smooth={true} duration={500}>
              HOW TO
            </Link>
            <Link to="regForm" smooth={true} duration={500}>
              JOIN HYDRA
            </Link>
          </div>
        </div>
        <div className="verticalVectors">
          <img src={verticalVector} alt="vertical-vector"></img>
        </div>
        <div className="navFooter">
          <div>
            <a href="#">F.A.Q.</a>
            <a href="#">SITEMAP</a>
            <a href="#">CONDITIONS</a>
            <a href="#">LICENSES</a>
          </div>
        </div>
        <div className="verticalVectors">
          <img src={verticalVector} alt="vertical-vector"></img>
        </div>
        <div className="socialMedia">
          <h3>SOCIALIZE WITH HYDRA</h3>
          <div className="social-icons">
            <img src={facebookIcon} alt="facebookIcon"></img>
            <img src={twitterIcon} alt="twitterIcon"></img>
            <img src={linkedinIcon} alt="linkedinIcon"></img>
            <img src={youtubeIcon} alt="youtubeIcon"></img>
            <img src={instagramIcon} alt="instagramIcon"></img>
            <img src={pinterestIcon} alt="pinterestIcon"></img>
          </div>
          <button className="buildButton">BUILD YOUR WORLD</button>
        </div>
      </div>
      <p>
        2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED
      </p>
    </footer>
  );
}

export default Footer;
