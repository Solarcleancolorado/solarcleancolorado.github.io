import * as React from "react"
import Layout from "../../components/Layout/Layout"
import Jumbotron from "../../components/Jumbotron/Jumbotron";

const IndexPage = () => {
  return (
    <Layout>
      <Jumbotron img="contactUs" title="Contact Us" />
    </Layout>
  )
}

export default IndexPage

export const Head = () => {
  return (<html lang="en" >
    <title>Contact - Solar Clean Colorado</title>
  </html>)
}

