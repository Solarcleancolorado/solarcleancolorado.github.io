import * as React from "react"
import "./Footer.scss"
import { FaCopyright } from "@react-icons/all-files/fa/FaCopyright";

const Footer = () => {
  return (
    <footer class="footer navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <span class="navbar-brand mb-0">
                <FaCopyright />&nbsp;<em>Copyright 2024 Solar Clean Colorado, LLC.</em>
            </span>
        </div>
    </footer>
  )
}

export default Footer



