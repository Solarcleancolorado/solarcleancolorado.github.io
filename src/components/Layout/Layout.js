import * as React from "react"
import { graphql, useStaticQuery } from "gatsby";
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import "./Layout.scss"

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {parent: {internal: {description: {regex: "/popup/"}}}}) {
        nodes {
          frontmatter {
            title
            message
            enabled
          }
        }
      }
    }
  `);

  const popup = data.allMarkdownRemark.nodes[0]?.frontmatter;

  return (
    <>
    {popup.enabled && 
    (<div className="popup">
      <h2>{popup.title}</h2>
      <p>{popup.message}</p>
    </div>)}
      <Header></Header>
      <Navbar />
        <main className="body">
          { children }
        </main>
      <Footer />
    </>
  )
}

export default Layout;
