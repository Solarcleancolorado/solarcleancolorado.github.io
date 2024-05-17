

import * as React from "react"
import "./WhyCleanWindows.scss"
import { StaticImage } from "gatsby-plugin-image"

const WhyCleanWindows = ({className}) => {
  return (
    <article className={`why-clean-windows ${className}`}>
      <span>
        <h2>Why Clean Your Windows?</h2>
        <hr />
      </span>
      <div className="img-container">
        <StaticImage src="../../images/windows2.webp" alt="Clean windows in home" placeholder="blurred" className="img-fluid" />
      </div>
      <span>
          <h3>Improve Indoor Comfort and Efficiency</h3>
          <p>Clean windows do more than just look good – they also contribute to a more comfortable and efficient indoor environment. Dirty windows can obstruct natural light, diminishing the amount of sunlight that enters your home. With professional window cleaning, you can maximize the natural light penetration, brightening up your living spaces and reducing the need for artificial lighting during the day. Additionally, clean windows ensure unobstructed views of the outdoors, allowing you to enjoy the beauty of your surroundings from the comfort of your home. By enhancing natural light and views, clean windows contribute to a healthier and more inviting living environment for you and your family.</p>
      </span>
      {/* <span>
          <h3>Extend the Lifespan of Your Solar Investment</h3>
          <p>Beyond maximizing efficiency, keeping your solar panels clean can extend their lifespan. Accumulated grime not only hinders performance but can also lead to corrosion and damage over time. Regular cleaning removes these contaminants, preventing potential long-term issues and ensuring your panels remain in optimal condition for years to come. With professional cleaning, you not only maintain peak efficiency but also safeguard your solar investment, allowing you to enjoy clean, renewable energy for decades with confidence.</p>
      </span> */}
    </article>
  )
}

export default WhyCleanWindows


