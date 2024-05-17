import * as React from "react"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import "./Layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <Navbar />
        <main className="body">
          { children }
        </main>
      <Footer />
    </>
  )
}

export default Layout
