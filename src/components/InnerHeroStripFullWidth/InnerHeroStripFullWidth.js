import React, { Component } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "./InnerHeroStripFullWidth.module.scss"

export const fragment = graphql`
  fragment InnerHeroStripFullWidthSection on WPGraphQL_Page_Sectionfields_Sections_Innerherostripfullwidth {
    title
    image {
      sourceUrl
      altText
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
            <div className={`col-md-12 ${styles.ImgCol}`}>
              {image ? (
                <Img
                  alt={image.altText}
                  className={`gatsby-image-background ${styles.halfImage}`}
                  fluid={image.imageFile.childImageSharp.fluid}
                />
              ) : (
                ""
              )}
              <div className={styles.innerWrapper}>
                <div
                  className={styles.Title}
                  dangerouslySetInnerHTML={{ __html: title }}
                ></div>
              </div>
              <div className={styles.Overlay}></div>
              <div className={styles.Hatch}></div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default InnerHeroStripFullWidth
