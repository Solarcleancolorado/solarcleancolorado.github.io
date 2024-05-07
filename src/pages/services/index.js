import * as React from "react"
import Layout from "../../components/Layout/Layout"
import Jumbotron from "../../components/Jumbotron/Jumbotron";

const IndexPage = () => {
  return (
    <Layout>
      <Jumbotron img="/solarpanels5.jpg" title="Our Services" />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Solar Clean Colorado</title>
