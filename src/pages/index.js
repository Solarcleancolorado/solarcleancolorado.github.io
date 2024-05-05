import * as React from "react"
import Layout from "../components/Layout"

const IndexPage = () => {
  return (
    <Layout>
      <main>
        Hello World!
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
