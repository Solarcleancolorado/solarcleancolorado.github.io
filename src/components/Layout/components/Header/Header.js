import * as React from "react"
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import "./Header.scss"

const Header = () => {
  return (
    <header className="header pe-3 pe-sm-5">
        <span className="d-flex align-items-center"><FaPhoneAlt className="icon"/><a href="tel:720-541-3606">(720) 541-3606</a></span>
        <span className="d-flex align-items-center"><FaEnvelope className="icon"/><a href="mailto:info@solarcleancolorado.com">info@solarcleancolorado.com</a></span>
    </header>
  )
}

export default Header



