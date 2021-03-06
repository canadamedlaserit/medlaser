import React, { Component } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "./EqualTextRightImageLeft.module.scss"

export const fragment = graphql`
  fragment EqualTextRightImageLeftSection on WPGraphQL_Page_Sectionfields_Sections_Equaltextrightimageleft {
    title
    content
    backgroundcolor
    textcolor
    image {
      sourceUrl
      altText
      imageFile {
        childImageSharp {
          fluid(quality: 100, maxWidth: 950) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`

class EqualTextRightImageLeft extends Component {
  render() {
    const { title, content, backgroundcolor, textcolor, image } = this.props

    const fluidImage = image ? image.imageFile.childImageSharp.fluid : false

    return (
      <section
        style={{ backgroundColor: backgroundcolor }}
        className={styles.Section}
      >
        <div className={`container-fluid `}>
          <div className={`row ${styles.Row}`}>
            <div className={`col-md-6 ${styles.ImageSide} ${styles.Col}`}>
              {fluidImage ? (
                <Img
                  alt={image.altText}
                  className="gatsby-image-background"
                  fluid={fluidImage}
                />
              ) : (
                ""
              )}
            </div>

            <div className={`col-md-6 ${styles.TextSide} ${styles.Col}`}>
              <div className={styles.TextSideWrapper}>
                <div
                  style={{ color: textcolor }}
                  className={styles.Title}
                  dangerouslySetInnerHTML={{ __html: title }}
                ></div>

                <div
                  style={{ color: textcolor }}
                  className="content"
                  dangerouslySetInnerHTML={{ __html: content }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default EqualTextRightImageLeft
