import * as React from "react"
import Layout from "../../components/Layout/Layout"
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import { headData } from "../../head"

const IndexPage = () => {
  return (
    <Layout>
      <Jumbotron img="contactUs" title="Contact Us" />
    </Layout>
  )
}

export default IndexPage

export const Head = () => 
  <html lang="en" >
    <title>Contact - Solar Clean Colorado</title>
    <meta name="description" content="Get in touch with Solar Clean Colorado today. Reach out for expert window and solar panel cleaning services in the Douglas County area." />
    { headData }
  </html>

