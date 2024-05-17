

import * as React from "react"
import "./WhyCleanSolar.scss"
import { StaticImage } from "gatsby-plugin-image"

const WhyCleanSolar = ({className}) => {
  return (
    <article className={`why-clean-solar ${className}`}>
      <span>        
        <h2>Why Clean Your Solar Panels?</h2>
        <hr />
      </span>
      <span>
          <h3>Maximize Efficiency with Clean Solar Panels</h3>
          <p>Solar panels are a smart investment in renewable energy, offering eco-friendly power and long-term savings. However, to ensure they operate at peak efficiency, regular cleaning is essential. Dust, dirt, and debris accumulate over time, creating a barrier that reduces sunlight absorption. Even a thin layer can significantly decrease energy production, impacting your bottom line. By investing in professional solar panel cleaning services, you not only protect your investment but also maximize energy output, ultimately saving you money in the long run.</p>
      </span>
      <StaticImage src="../../images/solarpanelshome2.webp" alt="Solar panel on home" placeholder="blurred" className="img-fluid m-2" height={900.23} width={600} />
      <span>
          <h3>Extend the Lifespan of Your Solar Investment</h3>
          <p>Beyond maximizing efficiency, keeping your solar panels clean can extend their lifespan. Accumulated grime not only hinders performance but can also lead to corrosion and damage over time. Regular cleaning removes these contaminants, preventing potential long-term issues and ensuring your panels remain in optimal condition for years to come. With professional cleaning, you not only maintain peak efficiency but also safeguard your solar investment, allowing you to enjoy clean, renewable energy for decades with confidence.</p>
      </span>
    </article>
  )
}

export default WhyCleanSolar


