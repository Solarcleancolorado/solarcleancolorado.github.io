import * as React from "react"
import { Link } from "gatsby"
import "./Navbar.scss"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <Link className="navbar-brand logo" to="/"></Link>
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
                <Link className="nav-link" to="/about-us">
                    About Us
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contact-us">
                    Contact Us
                </Link>
            </li>
            <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Services
                </span>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                        <Link className="dropdown-item" to="/services/solar-panel-cleaning">Solar Cleaning</Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" to="/services/window-cleaning">Window Cleaning</Link>
                    </li>
                </ul>
            </li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar



