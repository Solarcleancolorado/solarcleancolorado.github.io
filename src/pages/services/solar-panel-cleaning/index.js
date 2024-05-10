import * as React from "react"
import Layout from "../../../components/Layout/Layout"
import Jumbotron from "../../../components/Jumbotron/Jumbotron";
import { headData } from "../../../head"

const IndexPage = () => {
  return (
    <Layout>
      <Jumbotron img="services" title="Solar Panel Cleaning" />
    </Layout>
  )
}

export default IndexPage

export const Head = () => 
  <>
    <html lang="en" />
    <title>Solar Panel Cleaning Service - Solar Clean Colorado</title>
    <meta name="description" content="Boost solar efficiency with our expert cleaning services in the Douglas County area. Schedule now!" />
    { headData }
  </>

