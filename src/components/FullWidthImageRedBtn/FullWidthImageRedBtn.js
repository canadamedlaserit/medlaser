import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import styles from "./FullWidthImageRedBtn.module.scss"

export const fragment = graphql`
  fragment FullWidthImageRedBtnSection on WPGraphQL_Page_Sectionfields_Sections_Fullwidthimageredbtn {
    title
    content
    btnlink
    btntext
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

const FullWidthImageRedBtn = ({
  title,
  content,
  btntext,
  btnlink,
  image,
  altText,
}) => {
  return (
    <section className={styles.Section}>
      <div className={`container-fluid`}>
        <div className={`row`}>
          {image ? (
            <BackgroundImage
              className={`col-md-12 ${styles.Col}`}
              fluid={image.imageFile.childImageSharp.fluid}
              // altText={altText}
            >
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

                {btntext ? (
                  <div className={styles.buttonsWrapper}>
                    <a href={btnlink} className="btn btn-red">
                      {btntext}
                    </a>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div className={` ${styles.Overlay}`}></div>
            </BackgroundImage>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  )
}

export default FullWidthImageRedBtn
