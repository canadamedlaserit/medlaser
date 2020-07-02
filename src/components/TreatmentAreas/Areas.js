import React from "react"
import Img from "gatsby-image"

import styles from "./Areas.module.scss"

const Areas = ({ areas }) => {
  return (
    <>
      {areas.map((area, index) => (
        <li key={index} className={styles.Area}>
          {area.image ? (
            <Img
              alt={area.image.altText}
              className={styles.AreaImage}
              fluid={area.image.imageFile.childImageSharp.fluid}
            ></Img>
          ) : (
            ""
          )}

         {area.title}
        </li>
      ))}
    </>
  )
}

export default Areas
