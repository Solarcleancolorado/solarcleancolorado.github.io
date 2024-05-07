import * as React from "react"
import "./Jumbotron.scss"
import { withPrefix } from 'gatsby';

const Jumbotron = ({img, title, subtitle}) => {
  return (
    <section className="jumbotron" style={{backgroundImage: `url(${withPrefix(img)})`}}>
    <h1 className="title jumbo mt-5">{ title }</h1>
    { subtitle ? <h2 className="title sub mt-5">{ subtitle }</h2> : "" }
  </section>
  )
}

export default Jumbotron
