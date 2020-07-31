import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "./ThankYouHero.module.scss"

export const fragment = graphql`
  fragment ThankYouHeroSection on WPGraphQL_Page_Sectionfields_Sections_ThankYouHero {
    title
    subtitle
    image {
      sourceUrl
      altText
      imageFile {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const ThankYouHero = ({ title, image, subtitle }) => {
  return (
    <section className={styles.Section}>
      <div className={`container-fluid ${styles.Container}`}>
        <div className={`row ${styles.RowTop}`}>
          <div className={`col-md-12 ${styles.ImgCol}`}>
            {image ? (
              <Img
                alt={image.altText}
                className="gatsby-image-background"
                fluid={image.imageFile.childImageSharp.fluid}
              />
            ) : (
              ""
            )}
            <div className={styles.innerWrapper}>
              {title ? <h2>{title}</h2> : ""}
              {subtitle ? <p>{subtitle}</p> : ""}
            </div>
            <div className={styles.Overlay}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ThankYouHero
