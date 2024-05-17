import BorderBreak from "../../BorderBreak/BorderBreak"
import "./CallToActionLight.scss"
import * as React from "react"



const CallToActionLight = ({text, button, top}) => {
  return (
    <>
      {top === true ? <BorderBreak backgroundColor="info"/> : ""}
        <section className="cta-light">
            <h2 className="h3 mb-0">{ text }</h2>
            <a role="button" className="btn btn-primary btn-lg" href="/contact-us">{ button }</a>
        </section>
      {top === false ? <BorderBreak backgroundColor="info"/> : ""}
    </>
  )
}

export default CallToActionLight
