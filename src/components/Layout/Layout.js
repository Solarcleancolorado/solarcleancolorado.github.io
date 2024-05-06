import * as React from "react"
import Header from "../Header/Header"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
