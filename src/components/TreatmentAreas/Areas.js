import React from "react"
import Img from "gatsby-image"

import styles from "./Areas.module.scss"

const Areas = ({ areas }) => {
  return (
    <>
      {areas.map((area, index) => (
        <div key={index} className={styles.Area}>
          <Img
            className={styles.AreaImage}
            fluid={area.image.imageFile.childImageSharp.fluid}
          ></Img>
          <h5>{area.title}</h5>
        </div>
      ))}
    </>
  )
}

export default Areas
