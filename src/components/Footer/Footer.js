import * as React from "react"
import "./Footer.scss"
import { FaRegCopyright  } from "@react-icons/all-files/fa/FaRegCopyright";

const Footer = () => {
  return (
    <footer class="footer navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <span class="navbar-brand mb-0">
                <FaRegCopyright />&nbsp;<em>Copyright 2024 Solar Clean Colorado</em>
            </span>
        </div>
    </footer>
  )
}

export default Footer



