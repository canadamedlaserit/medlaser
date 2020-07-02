import React, { Component } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "./EqualTextLeftImageRight.module.scss"

export const fragment = graphql`
  fragment EqualTextLeftImageRightSection on WPGraphQL_Page_Sectionfields_Sections_Equaltextleftimageright {
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

class EqualTextLeftImageRight extends Component {
  render() {
    const { title, content, backgroundcolor, textcolor, image } = this.props

    const fluidImage = image ? image.imageFile.childImageSharp.fluid : null

    return (
      <section
        style={{ backgroundColor: backgroundcolor }}
        className={styles.Section}
      >
        <div className={`container-fluid `}>
          <div className={`row ${styles.Row}`}>
            <div className={`col-md-6 ${styles.TextSide} ${styles.Col}`}>
              <div className={styles.TextSideWrapper}>
                <div
                  className={styles.Title}
                  dangerouslySetInnerHTML={{ __html: title }}
                  style={{ color: textcolor }}
                ></div>

                <div
                  style={{ color: textcolor }}
                  className="content"
                  dangerouslySetInnerHTML={{ __html: content }}
                ></div>
              </div>
            </div>

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
          </div>
        </div>
      </section>
    )
  }
}
export default EqualTextLeftImageRight
