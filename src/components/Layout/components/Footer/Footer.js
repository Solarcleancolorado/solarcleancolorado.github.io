import * as React from "react"
import "./Footer.scss"
import { FaRegCopyright  } from "@react-icons/all-files/fa/FaRegCopyright";
import { FaPhoneAlt  } from "@react-icons/all-files/fa/FaPhoneAlt";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  return (
    <>
      <footer className="footer navbar navbar-dark summary">
        <StaticImage src="../../../../images/icon.webp" alt="Solar Clean Colorado icon" className="m-auto d-none d-lg-block" height={125} width={125}/>
        <div>
          <h3>Contact Us</h3>
          <div className="d-flex flex-column">
            <span className="d-flex align-items-center"><FaPhoneAlt />&nbsp;<a href="tel:720-541-3606">(720) 541-3606</a></span>
            <span className="d-flex align-items-center"><FaEnvelope />&nbsp;<a href="mailto:info@solarcleancolorado.com">info@solarcleancolorado.com</a></span>
          </div>
        </div>
        <div>
          <h3>Links</h3>
          <ul className="footer-navigation">
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
            <li><a href="/services/window-cleaning">Window Cleaning</a></li>
            <li><a href="/services/solar-panel-cleaning">Solar Panel Cleaning</a></li>
          </ul>
        </div>
        <div>        
          <h3>About Us</h3>
          <p>We're a family-owned business dedicated to eco-friendly cleaning solutions for both residential and commercial spaces. With a focus on excellence and sustainability, we specialize in solar panel and window cleaning.</p>
        </div>
      </footer>
      <footer className="footer navbar navbar-dark bg-dark trademark">
          <div className="container-fluid">
              <span className="navbar-brand mb-0">
                  <FaRegCopyright />&nbsp;<em>Copyright 2024 Solar Clean Colorado</em>
              </span>
          </div>
      </footer>
    </>
  )
}

export default Footer



