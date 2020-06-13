import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "./InnerHeroImageFullWidth.module.scss"

export const fragment = graphql`
  fragment InnerHeroImageFullWidthSection on WPGraphQL_Page_Sectionfields_Sections_Innerheroimagefullwidth {
    title
    hidestripondevice
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

const InnerHeroImageFullWidth = ({ title, image, hidestripondevice }) => {
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
              <h1>{title}</h1>
            </div>
            <div className={styles.Overlay}></div>
            <div
              className={`${
                hidestripondevice & (hidestripondevice === "desktop")
                  ? styles.HideDesktop
                  : hidestripondevice === "mobile"
                  ? styles.HideMobile
                  : ""
              } ${styles.Hatch}`}
            ></div>
          </div>
          {/* {image ? (
            <BackgroundImage
              className={`col-md-12 ${styles.ImgCol}`}
              fluid={image.imageFile.childImageSharp.fluid}
              critical
            >
              <div className={styles.innerWrapper}>
                <h1>{title}</h1>
              </div>
              <div className={styles.Overlay}></div>
              <div
                className={`${
                  hidestripondevice & (hidestripondevice === "desktop")
                    ? styles.HideDesktop
                    : hidestripondevice === "mobile"
                    ? styles.HideMobile
                    : ""
                } ${styles.Hatch}`}
              ></div>
            </BackgroundImage>
          ) : (
            ""
          )} */}
        </div>
      </div>
    </section>
  )
}

export default InnerHeroImageFullWidth
