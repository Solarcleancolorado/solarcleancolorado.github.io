import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import "./Jumbotron.scss"



const imageProps = {
  alt: "Solar Panels",
  placeholder: "blurred"
}
// To bypass Gatsby's StaticImage props limitation
const images = {
  home: <StaticImage src="../../images/solarpanels2.webp" {...imageProps} />,
  aboutUs: <StaticImage src="../../images/solarpanels5.webp" {...imageProps} />,
  contactUs: <StaticImage src="../../images/SolarCleanColorado6.webp" {...imageProps} />,
  solarCleaning: <StaticImage src="../../images/solarpanelscleaning1.webp" {...imageProps} />,
  windowCleaning: <StaticImage src="../../images/windows1.webp" placeholder="blurred" alt="Clean Windows" />
}

const Jumbotron = ({img, title, subtitle}) => {
  return (
  <section className="jumbotron">
    {images[img]}
    <h1 className="title jumbo mt-5">{ title }</h1>
    { subtitle ? <h2 className="title sub mt-5">{ subtitle }</h2> : "" }
  </section>
  )
}

export default Jumbotron
