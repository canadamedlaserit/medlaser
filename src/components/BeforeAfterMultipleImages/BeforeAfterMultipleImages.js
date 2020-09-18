import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "./BeforeAfterMultipleImages.module.scss"

export const fragment = graphql`
  fragment BeforeAfterMultipleImagesSection on WPGraphQL_Page_Sectionfields_Sections_BeforeAfterMultipleImages {
    title
    images {
      ... on WPGraphQL_Page_Sectionfields_Sections_BeforeAfterMultipleImages_images {
        image {
          sourceUrl
          altText
          imageFile {
            childImageSharp {
              fluid(quality: 100, maxWidth: 840) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  }
`

const BeforeAfterMultipleImages = ({ title, images }) => {
  return (
    <section className={styles.Section}>
      <div className={`container ${styles.Container}`}>
        <div className={`row`}>
          <div className={`col-md-12 `}>
            {title ? (
              <div
                className={styles.Title}
                dangerouslySetInnerHTML={{ __html: title }}
              ></div>
            ) : null}
          </div>

          {images && images.length >= 2 ? (
            images.map((item, index) => (
              <div className={`col-md-6 ${styles.ImgWrapper}`} key={index}>
                <Img
                  alt={item.image.altText}
                  fluid={item.image.imageFile.childImageSharp.fluid}
                />
              </div>
            ))
          ) : images ? (
            <div className={`col-md-12 ${styles.ImgWrapper}`}>
              <Img
                alt={images[0].image.altText}
                fluid={images[0].image.imageFile.childImageSharp.fluid}
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default BeforeAfterMultipleImages
