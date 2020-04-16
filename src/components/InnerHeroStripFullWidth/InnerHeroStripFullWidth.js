import React, { Component } from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import styles from "./InnerHeroStripFullWidth.module.scss"

export const fragment = graphql`
  fragment InnerHeroStripFullWidthSection on WPGraphQL_Page_Sectionfields_Sections_Innerherostripfullwidth {
    title
    image {
      sourceUrl
      imageFile {
        childImageSharp {
          fluid(quality: 100, maxWidth: 960) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`

class InnerHeroStripFullWidth extends Component {
  render() {
    const { title, image } = this.props

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
                  <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
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
}
export default InnerHeroStripFullWidth
