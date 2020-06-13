import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "./FullWidthImageGeneral.module.scss"

export const fragment = graphql`
  fragment FullWidthImageGeneralSection on WPGraphQL_Page_Sectionfields_Sections_Fullwidthimagegeneral {
    title
    content
    image {
      sourceUrl
      altText
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

const FullWidthImageGeneral = ({ title, content, image }) => {
  return (
    <section className={styles.Section}>
      <div className={`container-fluid`}>
        <div className={`row`}>
          <div className={`col-md-12 ${styles.Col}`}>
            {image ? (
              <Img
                alt={image.altText}
                className="gatsby-image-background"
                fluid={image.imageFile.childImageSharp.fluid}
              />
            ) : (
              ""
            )}
            <div className={styles.Inner}>
              {title ? <h3>{title}</h3> : ""}

              {content ? (
                <div
                  className={styles.Content}
                  dangerouslySetInnerHTML={{ __html: content }}
                ></div>
              ) : (
                ""
              )}
            </div>

            <div className={` ${styles.Overlay}`}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FullWidthImageGeneral
