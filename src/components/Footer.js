import React from "react";
import Image from "./Image";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "gatsby";

const Footer = ({ frontmatter }) => {

  const copyright = 'Copyright © VA Software Solutions'
  const imageFileName = 'logo/logo-white.png'

  return (
    <footer className="footer-area footer-bg" id="footer">
      <div className="footer-top section-pt-70 section-pb">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-logo">
                <Image fileName={imageFileName} alt="logo" />
              </div>
              <div className="footer-text">
                {/* <p>
                  long established fact that a reader will be distracted by the readable content by
                  the readable content established fact that
                </p> */}
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-list">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="about">About us</Link>
                  </li>
                  <li>
                    <Link to="services">Our services</Link>
                  </li>
                  <li>
                    <Link to="careers">Careers</Link>
                  </li>
                  <li>
                    <ScrollLink to="Contact" spy={true} smooth="easeInOutQuart">Contact us</ScrollLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-address">
                <div className="footer-info">
                  {/* <p>Some patience for the modern market in the software world</p>
                  <p>21 Aug 2017 By Admin</p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-address">
                <div className="footer-info">
                  <p>
                    <a href="#">+44 118 228 0486</a>
                  </p>
                </div>
                <div className="footer-info">
                  <p>
                    <a href="mailto:hi@vasoftware.co.uk?subject=Hello">hi@vasoftware.co.uk</a>
                  </p>
                </div>

                <p>Reading, United Kingdom</p>
                <p>Sofia, Bulgaria</p>
                <p>Varna, Bulgaria</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="social-link">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/vasoftwaresolutions" target="_blank">Facebook</a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/va-software-solutions/" target="_blank">LinkedIn</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="copy-right"> { copyright } {new Date().getFullYear()}</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
