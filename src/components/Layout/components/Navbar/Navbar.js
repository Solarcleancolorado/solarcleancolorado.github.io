import * as React from "react"
import "./Navbar.scss"

const Navbar = ({ children }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <a className="navbar-brand logo" href="/">
        {/* <img src={"/SolarCleanColorado.svg"} /> */}
        </a>
        <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        >
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav-link" href="/about-us">
                About Us
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/services">
                Services
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/contact-us">
                Contact Us
            </a>
            </li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar



