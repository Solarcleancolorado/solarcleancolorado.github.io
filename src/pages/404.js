import * as React from "react"
import Layout from "../components/Layout/Layout"
import "./home.scss"
import Jumbotron from "../components/Jumbotron/Jumbotron"

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="grid-container">
        <Jumbotron img="home" title="404" subtitle="Page not found" />
      </div>
    </Layout>
  )
}

export default NotFoundPage
export const Head = () => 
  <html lang="en" >
    <title>Page not found</title>
    <meta name="robots" content="noindex" />
  </html>

