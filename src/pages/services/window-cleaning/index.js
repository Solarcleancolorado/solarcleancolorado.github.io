import * as React from "react"
import Layout from "../../../components/Layout/Layout"
import Jumbotron from "../../../components/Jumbotron/Jumbotron";

const IndexPage = () => {
  return (
    <Layout>
      <Jumbotron img="services" title="Window Cleaning" />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Solar Clean Colorado</title>
