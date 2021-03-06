import React, { Component } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "./InnerHeroLocation.module.scss"

export const fragment = graphql`
  fragment InnerHeroLocationSection on WPGraphQL_Page_Sectionfields_Sections_Innerherolocation {
    title
    titlePosition
    subtitle
    text
    backgroundimage {
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

class InnerHeroLocation extends Component {
  render() {
    const { title, subtitle, text, backgroundimage, titlePosition } = this.props
    return (
      <section className={styles.Section}>
        <div className={`container-fluid ${styles.Container}`}>
          <div className={`row ${styles.RowTop}`}>
            <div className={`col-md-12 ${styles.ImgCol}`}>
              {backgroundimage ? (
                <Img
                  alt={backgroundimage.altText}
                  className={`gatsby-image-background ${styles.halfImage}`}
                  fluid={backgroundimage.imageFile.childImageSharp.fluid}
                />
              ) : (
                ""
              )}

              {titlePosition === "right" ? (
                <div className={styles.innerWrapper2}>
                  <div
                    className={styles.Title}
                    dangerouslySetInnerHTML={{ __html: title }}
                  ></div>
                </div>
              ) : (
                <div className={styles.innerWrapper}>
                  <div
                    className={styles.Title}
                    dangerouslySetInnerHTML={{ __html: title }}
                  ></div>
                </div>
              )}

              <div className={styles.Overlay}></div>
              <div className={styles.Hatch}></div>
            </div>
          </div>

          <div className={`row ${styles.RowBot}`}>
            <div className={`col-md-12 ${styles.TextCol}`}>
              <div
                className={styles.Subtitle}
                dangerouslySetInnerHTML={{ __html: subtitle }}
              ></div>

              <div
                className={styles.Text}
                dangerouslySetInnerHTML={{ __html: text }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default InnerHeroLocation
