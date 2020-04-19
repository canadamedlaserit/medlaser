import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import styles from "./InnerHeroImageFullWidth.module.scss"

export const fragment = graphql`
  fragment InnerHeroImageFullWidthSection on WPGraphQL_Page_Sectionfields_Sections_Innerheroimagefullwidth {
    title
    image {
      sourceUrl
      imageFile {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`

const InnerHeroImageFullWidth = ({ title, image }) => {
  return (
    <section className={styles.Section}>
      <div className={`container-fluid ${styles.Container}`}>
        <div className={`row ${styles.RowTop}`}>
          {image ? (
            <BackgroundImage
              className={`col-md-12 ${styles.ImgCol}`}
              fluid={image.imageFile.childImageSharp.fluid}
              critical
            >
              <div className={styles.innerWrapper}>
                <h1>{title}</h1>
              </div>
              <div className={styles.Overlay}></div>
              <div className={styles.Hatch}></div>
            </BackgroundImage>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  )
}

export default InnerHeroImageFullWidth
