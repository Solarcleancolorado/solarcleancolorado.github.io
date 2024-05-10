import * as React from "react"
import Layout from "../../../components/Layout/Layout"
import Jumbotron from "../../../components/Jumbotron/Jumbotron";
import { headData } from "../../../head"

const IndexPage = () => {
  return (
    <Layout>
      <Jumbotron img="services" title="Window Cleaning" />
    </Layout>
  )
}

export default IndexPage

export const Head = () => 
  <html lang="en" >
    <title>Window Cleaning Service - Solar Clean Colorado</title>
    <meta name="description" content="Transform your windows and see the world more clearly with our professional window cleaning services in the Douglas County area. Schedule now!" />
    { headData }
  </html>
